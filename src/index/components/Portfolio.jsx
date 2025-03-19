import { TiltCard } from "../../components/tiltCard";

import './portfolio.css'

export function Portfolio() {

    return (
        <>
            <h1 className="text-center text-[2.5rem] text-[#332B2B]">Portafolio</h1>
            <div className="w-[25%] h-[3px] bg-[#332B2B] my-2 mx-auto"></div>
            <section className="w-full max-w-[87%] mx-auto m-2 h-full min-h-[300vw] lg:min-h-[44vw] grid grid-cols-2 grid-rows-20 lg:grid-cols-5 lg:grid-rows-4 gap-4 place-items-center justify-items-center perspective-1000">
                <TiltCard classContainer={"w-full h-full col-span-2 row-span-4 lg:col-span-1 lg:row-span-4 rounded-xl relative p-2 text-left container1 text-white"} divisor={8} content={"JavaScript, React, Tailwind, Express..."} title={"Bolsa de Empleo"}/>
                <TiltCard classContainer={"w-full h-full col-span-2 row-span-4 rows-start-4 lg:col-span-3 lg:row-span-2 rounded-xl relative p-2 text-left container2 text-white"} divisor={11} content={"Probando2"} title={"Trello"}/>
                <TiltCard classContainer={"w-full h-full col-span-2 row-span-4 row-start-9 lg:col-span-1 lg:row-span-2 lg:col-start-5 rounded-xl relative p-2 text-left container3 text-white"} divisor={4} content={"Probando"} title={"Acortador de Links"}/>
                <TiltCard classContainer={"w-full h-full col-span-2 row-span-4 row-start-13 lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-3 rounded-xl relative p-2 text-left container3 text-white"} divisor={4} content={"Probando"} title={""}/>
                <TiltCard classContainer={"w-full h-full col-span-2 row-span-4 rows-start-17 lg:col-span-3 lg:row-span-2 lg:col-start-3 lg:row-start-3 rounded-xl relative p-2 text-left container2 text-white"} divisor={11} content={"Probando"} title={"Busqueda indexada"}/>
            </section>


        </>
    );
}