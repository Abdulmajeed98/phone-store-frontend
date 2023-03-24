import IconButton from "../buttons/IconButton"

const Card = ({ className, image, title, name, description, buttonIcon, id, onClick }) => {
    return (
        <div className={`${className} flex flex-col items-center justify-between rounded-lg bg-tuna py-12 px-6`}>
            <div className="aspect-square w-1/2">
                <img src={image} className="h-full w-full object-cover" />
            </div>
            <div className="flex w-full justify-between gap-2">
                <div className="overflow-hidden font-light">
                    <h3 className="text-xs text-gray">{title}</h3>
                    <h1 title={name} className="truncate">
                        {name}
                    </h1>
                    <p className="text-2xl">{description}</p>
                </div>
                <IconButton icon={buttonIcon} id={id} onClick={onClick} />
            </div>
        </div>
    )
}

export default Card
