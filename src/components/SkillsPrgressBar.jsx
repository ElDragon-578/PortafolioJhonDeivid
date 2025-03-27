import { useState, useEffect, useRef } from "react"
import { ProgressBar } from "./progressBar"

//Asi se llama este componente
{/* <SkillsProgressBar img={"../../public/logosSkills/javascript.svg"} total={90} /> */}

export function SkillsProgressBar({img, total}){
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.01 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);
    
    useEffect(() =>{
        if (!visible) return

        const interval = setInterval(() =>{
            setValue((val)=>(val < 100  ? val + 5 :100))
        },100)

        return () => clearInterval(interval)
    },[visible])

    return(
        <>
            <div className="w-[90%]" ref ={ref}>
                {
                    visible ? (
                    <>
                    <ProgressBar img={img} value={value} total={total}/>
                    </>

                    ) : (<div className="h-40 w-full">Cargando...</div>)
                }
            </div>
        </>
    )

}