import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Emon'}></Cousin>
                <Cousin name={'Emo'}></Cousin>

            </section>
        </div>
    );
};

export default Uncle;