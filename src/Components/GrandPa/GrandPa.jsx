import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

const AssetContext = createContext('Gold')

const GrandPa = () => {

    const asset = 'diamond';


    return (
        <div className="grandpa ">
            <h2>GrandPa</h2>

            <AssetContext.Provider value="Gold">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>


            {/*             <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
            </section> */}
        </div>
    );
};

export default GrandPa;