import { useRouteMatch } from "react-router-dom"
import HeroSection from "./components/HeroSection"
import NewArrivals from "./components/NewArrivals"

const Home = () => {
    const routeMatch = useRouteMatch()
    console.log(routeMatch)
    return (
        <main className="pt-40">
            <HeroSection />
            <NewArrivals />
        </main>
    )
}

export default Home
