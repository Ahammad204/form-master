/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Special = ({asset}) => {

    const gift = useContext(AssetContext)

    return (
        <div>
            <h2>Special Person</h2>
            <p>Has: {asset}</p>
            <p>Also Has: {gift}</p>
        </div>
    );
};

export default Special;