import React from "react"

const FilledButton = ({ text, onClick, withIcon = false, icon }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-shakespeare to-dull-lavender py-4 px-10 text-white transition-transform duration-300 hover:scale-[1.05]">
            {withIcon && icon}
            <span>{text}</span>
        </button>
    )
}

export default FilledButton
