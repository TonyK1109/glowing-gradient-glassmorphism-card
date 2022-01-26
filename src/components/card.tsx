interface ICardProps {
    className?: string;
    id?: string;
    title: string;
    content: string;
    hrefLink: string;
}

const CustomCard = (props: ICardProps) => {

    return (
        <div
            className={props.className}
            id={props.id}
        >
            <span></span>
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <a href={props.hrefLink}>Read More</a>
            </div>
        </div>
    );
};

export default CustomCard;