import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(0);


const Grandpa = () => {
    const asset = 'diamond';
    const [money, setMoney] = useState(1000);
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <section className="flex">

                <MoneyContext.Provider value={[money, setMoney]}>
                    <AssetContext.Provider value="gold">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </AssetContext.Provider>
                </MoneyContext.Provider>
            </section>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a context and export
 * 2. Add provider for the context with a value. value could be anything.
 * 3. useContext to access value in the context API
 * */ 