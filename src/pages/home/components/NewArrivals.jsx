import { useMemo, useState } from "react"
import Tab from "../../../components/tab/Tab"
import Tabs from "../../../components/tabs/Tabs"
import { newArrivalTabs } from "../../../shared/constants/constants"
import { ReactComponent as ShoppingCart } from "../../../assets/icons/shopping-cart.svg"
import { ReactComponent as CheveronLeft } from "../../../assets/icons/cheveron-left.svg"
import { ReactComponent as CheveronRight } from "../../../assets/icons/cheveron-right.svg"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import Card from "../../../components/card/Card"
import { newArrivalData } from "../../../mocks/mocks"
import useMediaQuery from "../../../shared/hooks/useMediaQuery"

const NewArrivals = () => {
    const [selectedTab, setSelectedTab] = useState(newArrivalTabs[0].id)
    const isDesktop = useMediaQuery("(min-width: 1440px)")
    const isIpad = useMediaQuery("(min-width: 764px)")
    console.log(selectedTab)
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
                            <Card className="h-full" image={image} title={title} name={name} description={`${price}$`} buttonIcon={<ShoppingCart />} id={id} />
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
        </section>
    )
}

export default NewArrivals
