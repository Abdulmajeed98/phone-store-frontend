import { useState } from "react"
import Tab from "../../../components/tab/Tab"
import Tabs from "../../../components/tabs/Tabs"
import { newArrivalTabs } from "../../../shared/constants/constants"

const NewArrivals = () => {
    const [selectedTab, setSelectedTab] = useState(newArrivalTabs[0].id)

    const onTabClick = (event) => setSelectedTab(event.target.dataset.id)

    return (
        <section className="bg-cod-gray py-7 text-gallery">
            <h1 className="text-center text-4xl">New Arrival</h1>
            {/* tabs */}
            <div className="flex justify-center py-8">
                <Tabs>
                    {newArrivalTabs.map(({ id, name }) => (
                        <Tab key={id} id={id} text={name} onClick={onTabClick} isActive={selectedTab === id} />
                    ))}
                </Tabs>
            </div>
        </section>
    )
}

export default NewArrivals
