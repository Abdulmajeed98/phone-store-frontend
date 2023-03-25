import classNames from "classnames"

const NumberInput = ({ id = "", label = "", value, onChange = () => {}, min, max, size = "" }) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id}>{label}</label>
            <input
                type="number"
                name={id}
                id={id}
                value={value}
                min={min}
                max={max}
                onChange={onChange}
                className={classNames("w-24 rounded border border-mine-shaft bg-transparent p-2", { "w-full": size === "block" })}
            />
        </div>
    )
}

export default NumberInput
