import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

export const AssetContext = createContext('Gold')
export const MoneyContext = createContext(1000)

const GrandPa = () => {

    const asset = 'diamond';
    const [money,setMoney]  = useState(1000)


    return (
        <div className="grandpa ">
            <h2>GrandPa</h2>
            <p>Net Money: {money}</p>

{/*             <AssetContext.Provider value="Gold">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider> */}

            <MoneyContext.Provider value={[money,setMoney]}>
            <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty></section>
            </MoneyContext.Provider>



            {/*<section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
            </section> */}
        </div>
    );
};

export default GrandPa;