import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error: string | undefined;
    id: string;
}

export default function Input({
    label, error, id, ...rest
}: InputProps) {
    return (
        <div className="relative w-full mb-6 md:mb-0">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor={id}
            >
                {
                    label
                }
            </label>
            <input
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light ${error ? 'border-red-500 dark:border-red-500 focus:ring-red-500' : 'focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500'}`}
                id={id}
                {
                ...rest
                }
            />
            {!!error && <p className="text-red-500 text-xs italic absolute -bottom-5">
                {
                    error
                }
            </p>}
        </div>
    )
}