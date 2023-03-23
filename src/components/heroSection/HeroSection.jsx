import { ReactComponent as HeroIllustration } from "../../assets/illustrations/hero-illustration.svg"
import FilledButton from "../buttons/FilledButton"
import LinkButton from "../buttons/LinkButton"

const HeroSection = () => {
    return (
        <section className="flex h-screen justify-between px-sides pt-40">
            <div className="flex -translate-y-full flex-col gap-14 self-center">
                <div className="flex flex-col">
                    <h1 className="bg-gradient-to-r from-royal-blue to-wisteria bg-clip-text text-6xl text-transparent">Powered By</h1>
                    <p className="text-5xl">
                        Apple & Samsung
                        <br /> Company
                    </p>
                </div>
                <div className="flex items-center gap-7">
                    <FilledButton text="Buy Now" />
                    <LinkButton text="Learn More" />
                </div>
            </div>
            <div>
                <HeroIllustration />
            </div>
        </section>
    )
}

export default HeroSection
