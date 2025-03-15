import { useState, useEffect, useRef } from "react"
import { ProgressBar } from "../../components/progressBar"

export function Skills(){
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
            <section className="w-[100%] h-[55vw] flex place-items-center justify-center">
                <article className="w-[87%] h-[95%] m-[30px] border divide-[#332B2B] shadow-xl rounded-2xl flex flex-col place-items-center p-[25px]">
                    <h1 className="text-[2.5rem]">Habilidades</h1>
                    <div ref ={ref}>
                        {
                            visible ? (
                            <>
                            <ProgressBar img={"../../public/header-img.jpg"} value={value} total={75}/>
                            <ProgressBar img={"../../public/header-img.jpg"} value={value} total={80}/>
                            </>

                            ) : (<div className="h-40 w-full">Cargando...</div>)
                        }
                    </div>
                    
                </article>
            </section>
        </>
    )

}