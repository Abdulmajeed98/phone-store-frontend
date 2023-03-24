import classNames from "classnames"

const Tab = ({ id, text, onClick, isActive }) => {
    return (
        <button
            type="button"
            data-id={id}
            onClick={onClick}
            className={classNames("translate-y-px border-b px-9 py-3 transition-all duration-300", {
                "bg-tuna": isActive,
                "border-b-transparent": !isActive,
                "border-b-dull-lavender": isActive,
                "rounded-tl-lg": isActive,
                "rounded-tr-lg": isActive,
            })}>
            {text}
        </button>
    )
}

export default Tab
