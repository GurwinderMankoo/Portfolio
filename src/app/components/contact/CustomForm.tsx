'use client'
import React, { useRef, useState } from 'react'
import Input from '../common/CustomInput'
import TextArea from '../common/TextArea'
import Image from 'next/image'
import { errorHandler } from '../common/global'
import { contactUs } from './action'
import Button from '../common/Button'
import Notifier from '../common/Notifier'

type Props = {}


type name = 'email' | 'subject' | 'message'

export type ContactErrors = {
    [k: string]: string;
}

type FormType = {
    [k: string]: string
}

const URL = process.env.URL

export default function CustomForm({ }: Props) {

    const [form, setForm] = useState<FormType>({
        email: '',
        subject: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false);
    const notifierRef = useRef<HTMLDialogElement>(null)

    const [errors, setErrors] = useState<Partial<ContactErrors>>({})

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
        const clonedErrors = { ...errors }
        const err = errorHandler(value, name)
        if (err) {
            clonedErrors[name] = err
        } else if (name in clonedErrors) {
            delete clonedErrors[name]
        }
        setErrors(clonedErrors)
    }



    const sendMessage = async () => {
        try {
            if (isLoading) return;

            const clonedErrors: Partial<ContactErrors> = { ...errors }

            for (const name in form) {
                const err = errorHandler(form[name], name)
                if (err) {
                    clonedErrors[name] = err
                }
            }
            const hasError = Object.keys(clonedErrors).length > 0;

            if (hasError) {
                setIsLoading(false)
                setErrors(clonedErrors)
                return
            } else {
                setIsLoading(true)
                const res = await contactUs(form);
                if (res.ok) {
                    setForm({
                        email: '',
                        subject: '',
                        message: ''
                    })
                    setIsLoading(false)
                    notifierRef.current?.showModal()
                    setTimeout(() => {
                        notifierRef.current?.close()
                    }, 3000)
                } else {
                    setIsLoading(false)
                    console.log(res.status)
                    if (res.status === 422) {
                        setErrors(res.response)
                    }
                }
            }

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <form className="space-y-8">
            <Input
                id="email"
                label='Your Email'
                type="email"
                placeholder='example@email.com'
                value={form.email}
                onChange={onChangeHandler}
                error={errors.email}
                name='email'
            />
            <Input
                id="subject"
                name="subject"
                label='Subject'
                type="text"
                placeholder='Your subject here'
                value={form.subject}
                onChange={onChangeHandler}
                error={errors.subject}
            />
            <TextArea
                id='message'
                name='message'
                label="Message"
                placeholder='Hi!! Hope your are doing good'
                rows={5}
                value={form.message}
                onChange={onChangeHandler}
                error={errors.message}
            />
            <div>
                <Button
                    type='button'
                    className="py-3 px-5 bg-blue-700 text-white rounded-md flex items-center disabled:bg-slate-500 disabled:cursor-not-allowed"
                    disabled={Object.keys(errors).length > 0}
                    onClick={sendMessage}
                    loading={isLoading}
                >
                    <span className="mr-1">
                        <Image
                            src='/icons/send-icon.svg'
                            alt='Send Message'
                            width={16}
                            height={16}
                        />
                    </span>
                    Send message
                </Button>
            </div>
            <Notifier ref={notifierRef}>
                Email sent successfully.
            </Notifier>

        </form>
    )
}