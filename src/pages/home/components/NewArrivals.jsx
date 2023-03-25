import { Fragment, useMemo, useState } from "react"
import Tab from "../../../components/tab/Tab"
import Tabs from "../../../components/tabs/Tabs"
import { newArrivalTabs } from "../../../shared/constants/constants"
import { ReactComponent as ShoppingCart } from "../../../assets/icons/shopping-cart.svg"
import { ReactComponent as CheveronLeft } from "../../../assets/icons/cheveron-left.svg"
import { ReactComponent as CheveronRight } from "../../../assets/icons/cheveron-right.svg"
import { ReactComponent as Cross } from "../../../assets/icons/cross.svg"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import Card from "../../../components/card/Card"
import { newArrivalData } from "../../../mocks/mocks"
import useMediaQuery from "../../../shared/hooks/useMediaQuery"
import { Dialog, Transition } from "@headlessui/react"
import FilledButton from "../../../components/buttons/FilledButton"

const NewArrivals = () => {
    const [selectedTab, setSelectedTab] = useState(newArrivalTabs[0].id)
    const [selectedProduct, setSelectedProduct] = useState("")
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 1440px)")
    const isIpad = useMediaQuery("(min-width: 764px)")

    const filteredProduct = useMemo(() => newArrivalData.find(({ id }) => id === selectedProduct) || {}, [newArrivalData, selectedProduct])

    const splideOptions = useMemo(() => {
        if (isDesktop)
            return {
                perPage: 3,
                gap: "10rem",
                padding: "10rem",
                autoplay: true,
                interval: "4000",
                pagination: false,
            }
        if (isIpad)
            return {
                perPage: 2,
                gap: "3rem",
                padding: "3rem",
                autoplay: true,
                interval: "4000",
                pagination: false,
            }

        return {
            perPage: 1,
            gap: "20%",
            padding: "10%",
            autoplay: true,
            interval: "4000",
            pagination: false,
        }
    }, [isDesktop, isIpad])

    const onTabClick = (event) => setSelectedTab(event.target.dataset.id)
    const onDialogClose = () => setIsDialogOpen(false)
    const onShopClickHandler = (event) => {
        setSelectedProduct(event.currentTarget.dataset.id)
        setIsDialogOpen(true)
    }

    return (
        <section className="bg-cod-gray py-7 text-gallery">
            <h1 className="text-center text-4xl">New Arrival</h1>
            <div className="mb-7 flex justify-center py-8 lg:mb-14">
                <Tabs>
                    {newArrivalTabs.map(({ id, name }) => (
                        <Tab key={id} id={id} text={name} onClick={onTabClick} isActive={selectedTab === id} />
                    ))}
                </Tabs>
            </div>
            <Splide options={splideOptions} hasTrack={false}>
                <SplideTrack>
                    {newArrivalData.map(({ id, title, name, image, price }) => (
                        <SplideSlide key={id}>
                            <Card
                                className="h-full"
                                image={image}
                                title={title}
                                name={name}
                                description={`${price}$`}
                                buttonIcon={<ShoppingCart />}
                                id={id}
                                onButtonClick={onShopClickHandler}
                            />
                        </SplideSlide>
                    ))}
                </SplideTrack>
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev text-gallery">
                        <CheveronLeft />
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                        <CheveronRight />
                    </button>
                </div>
            </Splide>

            <Transition appear show={isDialogOpen} as={Fragment}>
                <Dialog as="div" onClose={onDialogClose} className="relative z-[1000]">
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
                            <Dialog.Panel className="w-4/5 rounded bg-porcelain px-16 text-mine-shaft">
                                <Dialog.Title className="mb-5 flex items-center justify-end pt-9">
                                    <button type="button" onClick={onDialogClose}>
                                        <Cross />
                                    </button>
                                </Dialog.Title>
                                <div className="flex justify-between gap-12 pb-16">
                                    <div className="aspect-square w-full flex-1 bg-mine-shaft">
                                        <img src={filteredProduct.image} alt={filteredProduct.name} className="h-full w-full object-contain" />
                                    </div>
                                    <div className="flex-1">
                                        <div>
                                            <h1 className="text-4xl">{filteredProduct.name}</h1>
                                            <h3 className="mt-6 mb-4">${filteredProduct.price}</h3>
                                            <p>text</p>
                                        </div>
                                        <div>
                                            // TODO: implement dropdowns size
                                            <br />
                                            <br />
                                            quantity // TODO: implement add to cart
                                            <FilledButton size="block" text="Add to Cart" onClick={() => console.log("added to cart")} />
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </section>
    )
}

export default NewArrivals
