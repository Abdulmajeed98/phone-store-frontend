import { useRouteMatch } from "react-router-dom"
import HeroSection from "../../components/heroSection/HeroSection"

const Home = () => {
    const routeMatch = useRouteMatch()
    console.log(routeMatch)
    return (
        <main>
            <HeroSection />
        </main>
    )
}

export default Home
