import classNames from "classnames"
import React from "react"

const FilledButton = ({ text, onClick, withIcon = false, icon, size = "" }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(
                "flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-shakespeare to-dull-lavender py-4 px-10 text-white transition-transform duration-300 hover:scale-[1.05]",
                {
                    "w-full": size === "block",
                },
            )}>
            {withIcon && icon}
            <span>{text}</span>
        </button>
    )
}

export default FilledButton
