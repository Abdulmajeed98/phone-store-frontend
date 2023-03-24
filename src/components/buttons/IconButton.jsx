import React from "react"

const IconButton = ({ id = "", icon, onClick = () => {} }) => {
    return (
        <button
            data-id={id}
            type="button"
            onClick={onClick}
            className="flex h-16 w-16 shrink-0 grow-0 items-center justify-center rounded-[50%] bg-gradient-to-br from-shakespeare to-dull-lavender p-2 text-white transition-transform duration-300 hover:scale-[1.05]">
            {icon}
        </button>
    )
}

export default IconButton
