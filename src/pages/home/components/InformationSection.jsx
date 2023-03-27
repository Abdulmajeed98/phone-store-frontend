import InformationCard from "../../../components/informationCard/InformationCard"
import { informationSectionData } from "../../../mocks/mocks"

const InformationSection = () => {
    return (
        <div className="flex flex-col gap-14 py-14">
            {informationSectionData.map(({ id, image, badgeText, title, subtitle, description }, index) => (
                <InformationCard key={id} image={image} badgeText={badgeText} title={title} subtitle={subtitle} description={description} isImageOnRight={(index + 1) % 2 === 0} />
            ))}
        </div>
    )
}

export default InformationSection
