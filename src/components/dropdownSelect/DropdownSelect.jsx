import { Listbox, Transition } from "@headlessui/react"
import classNames from "classnames"
import { Fragment, useMemo } from "react"
import { ReactComponent as CheveronDown } from "../../assets/icons/cheveron-down.svg"

const DropdownSelect = ({ label, options = [], selectedOption = {}, onSelect = () => {} }) => {
    const filteredOption = useMemo(() => {
        if (!selectedOption) return
        return options.find(({ id }) => selectedOption.id === id)
    }, [selectedOption])

    return (
        <Listbox as="div" className="relative text-mine-shaft" value={selectedOption} onChange={onSelect}>
            <div className="flex flex-col gap-1">
                <span>{label}</span>
                <Listbox.Button className="flex items-center justify-between rounded-md border border-mine-shaft p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75">
                    {filteredOption ? filteredOption.text : label} <CheveronDown />
                </Listbox.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Listbox.Options className="absolute top-full left-0 right-0 flex flex-col gap-1 rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {options.map((option) => (
                        <Listbox.Option key={option.id} value={option} as={Fragment} disabled={selectedOption.id === option.id}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames("cursor-pointer rounded-md p-1 text-left", {
                                        "bg-mine-shaft text-white": active,
                                        "bg-gradient-to-r from-shakespeare to-dull-lavender text-white": selected,
                                    })}>
                                    {option.text}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    )
}

export default DropdownSelect
