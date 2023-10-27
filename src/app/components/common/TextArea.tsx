import React from 'react'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error: string | undefined;
    label: string;
    id: string;
}

export default function TextArea({ error, label, id, ...rest }: TextAreaProps) {
    return (
        <div className='relative w-full mb-6 md:mb-0'>
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
                {
                    label
                }
            </label>
            <textarea
                id={id}
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light ${error ? 'border-red-500 dark:border-red-500 focus:ring-red-500' : 'focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500'}`}
                {...rest}
            >
            </textarea>
            {!!error && <p className="text-red-500 text-xs italic absolute -bottom-5">
                {
                    error
                }
            </p>}
        </div>
    )
}