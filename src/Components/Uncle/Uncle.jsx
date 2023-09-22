/* eslint-disable react/prop-types */
import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin asset={asset} name={'Emon'}></Cousin>
                <Cousin name={'Emo'}></Cousin>

            </section>
        </div>
    );
};

export default Uncle;