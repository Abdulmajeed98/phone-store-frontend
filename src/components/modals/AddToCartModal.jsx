import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import DropdownSelect from "../dropdownSelect/DropdownSelect"
import NumberInput from "../inputs/NumberInput"
import { ReactComponent as Cross } from "../../assets/icons/cross.svg"
import FilledButton from "../buttons/FilledButton"

const AddToCartModal = ({ open, onClose, image, name, price, colors, onAddToCart }) => {
    const [selectedColor, setSelectedColor] = useState("")
    const [quantity, setQuantity] = useState(1)

    const onQuantityChange = (event) => setQuantity(event.target.value)

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" onClose={onClose} className="relative z-[1000]">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-mine-shaft/50" aria-hidden="true" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <Dialog.Panel className="w-4/5 rounded bg-porcelain px-16 text-mine-shaft xl:w-1/2">
                            <Dialog.Title className="mb-5 flex items-center justify-end pt-9">
                                <button type="button" onClick={onClose}>
                                    <Cross />
                                </button>
                            </Dialog.Title>
                            <div className="flex justify-between gap-12 pb-16">
                                <div className="aspect-square w-full flex-1 bg-mine-shaft">
                                    <img src={image} alt={name} className="h-full w-full object-contain" />
                                </div>
                                <div className="flex flex-1 flex-col justify-between gap-8">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-4xl">{name}</h1>
                                        <h3 className="mb-1">${price}</h3>
                                        <NumberInput id="quantity" label="Quantity" min={1} onChange={onQuantityChange} value={quantity} />
                                        <DropdownSelect label="Colors" options={colors} selectedOption={selectedColor} onSelect={setSelectedColor} />
                                    </div>

                                    <FilledButton size="block" text="Add to Cart" onClick={onAddToCart} />
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default AddToCartModal
