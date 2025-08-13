import { useStyleMap } from "../hooks/useStyleMap";

const PixabayCredit = ({ authorName, authorUrl, imageUrl }) => {
    const style = useStyleMap();

    return (
        <div className={style.credit}>
            Image by <a src={authorUrl}>{authorName}</a> from <a src={imageUrl}>Pixabay</a>.
        </div>
    );
};

export default PixabayCredit;