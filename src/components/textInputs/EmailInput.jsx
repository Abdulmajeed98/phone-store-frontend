import React from "react"

const EmailInput = ({ label, register, registerOptions = {} }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="capitalize">{label}</label>
            <input
                {...register(label, registerOptions)}
                type="email"
                className="rounded-lg border border-mine-shaft px-1 py-2 outline-none outline-offset-0 transition-[outline] duration-200 focus:outline focus:outline-royal-blue"
            />
        </div>
    )
}

export default EmailInput
