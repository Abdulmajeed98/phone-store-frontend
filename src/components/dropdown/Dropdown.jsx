import { Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import { Fragment } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as AccountRoundedIcon } from "../../assets/icons/account-rounded.svg"

const Dropdown = ({ options, icon, label, buttonClassName }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={classNames(buttonClassName)}>
                {icon && icon} {label && <span>{label}</span>}
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute top-full right-0 flex w-48 origin-top-right flex-col gap-1 rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {options.map(({ id, type, to, text, href, onClick }) => {
                        if (type === "link")
                            return (
                                <Menu.Item key={to} className="cursor-pointer rounded-md p-1 text-left capitalize transition-colors hover:bg-mine-shaft hover:text-white">
                                    <Link to={to}>{text}</Link>
                                </Menu.Item>
                            )
                        if (type === "anchor")
                            return (
                                <Menu.Item key={href} className="cursor-pointer rounded-md p-1 text-left capitalize transition-colors hover:bg-mine-shaft hover:text-white">
                                    <a href={href}>{text}</a>
                                </Menu.Item>
                            )
                        return (
                            <Menu.Item key={id} className="cursor-pointer rounded-md p-1 text-left capitalize transition-colors hover:bg-mine-shaft hover:text-white">
                                <button type="button" onClick={onClick}>
                                    {text}
                                </button>
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default Dropdown
