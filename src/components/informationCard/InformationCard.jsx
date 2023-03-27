import classNames from "classnames"
import FilledButton from "../buttons/FilledButton"
import LinkButton from "../buttons/LinkButton"

const InformationCard = ({ isImageOnRight = false, image, badgeText = "", title, subtitle, description }) => {
    return (
        <div
            className={classNames("flex gap-7 text-mine-shaft", {
                "flex-row-reverse pl-sides": isImageOnRight,
                "pr-sides": !isImageOnRight,
            })}>
            <div className="flex-1">
                <img src={image} alt="info illustration" width={450} height={350} className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-1 flex-col gap-6">
                <div>
                    {badgeText && (
                        <p className="bg-information-card-badge relative w-fit rounded-2xl bg-gradient-to-r  from-royal-blue/60 to-wisteria/60 p-2 text-gallery">{badgeText}</p>
                    )}
                    <h1 className="bg-gradient-to-r from-royal-blue to-wisteria bg-clip-text text-6xl text-transparent">{title}</h1>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-4xl">{subtitle}</h3>
                    <p>{description}</p>
                </div>

                <div className="flex items-center gap-7">
                    <FilledButton text="Buy Now" />
                    <LinkButton text="Learn More" to="" />
                </div>
            </div>
        </div>
    )
}

export default InformationCard
