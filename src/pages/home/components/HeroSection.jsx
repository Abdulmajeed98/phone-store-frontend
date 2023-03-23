import { ReactComponent as HeroIllustration } from "../../../assets/illustrations/hero-illustration.svg"
import FilledButton from "../../../components/buttons/FilledButton"
import LinkButton from "../../../components/buttons/LinkButton"

const HeroSection = () => {
    return (
        <section className="flex  justify-between px-sides">
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
                    <LinkButton text="Learn More" to="" />
                </div>
            </div>
            <div>
                <HeroIllustration />
            </div>
        </section>
    )
}

export default HeroSection
