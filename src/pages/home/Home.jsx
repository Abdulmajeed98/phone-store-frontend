import { useRouteMatch } from "react-router-dom"
import HeroSection from "./components/HeroSection"
import InformationSection from "./components/InformationSection"
import NewArrivals from "./components/NewArrivals"

const Home = () => {
    const routeMatch = useRouteMatch()

    return (
        <main className="pt-40">
            <HeroSection />
            <NewArrivals />
            <InformationSection />
        </main>
    )
}

export default Home
