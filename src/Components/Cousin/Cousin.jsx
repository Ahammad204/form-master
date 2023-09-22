import Friends from "../Friends/Friends";
import Special from "../Special/Special";

// eslint-disable-next-line react/prop-types
const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                { asset && <Special asset={asset}></Special>}
                {name === 'Robaya' && <Friends></Friends>}
            </section>
        </div>
    );
};

export default Cousin;