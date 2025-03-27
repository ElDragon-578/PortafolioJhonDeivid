import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function AnimateComponent ({content}) {
    const [isVisible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) =>{
                if(entry.isIntersecting){
                    setVisible(entry.isIntersecting)
                }
            },
            {threshold: 0.3}
        )

        if(ref.current){
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    },[])

    return(
        <motion.div
            ref={ref}
            initial={{opacity: 0, x:-100}}
            animate={isVisible ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.7, ease: "easeInOut"}}
            className="w-full"
        >
            {content}
        </motion.div>
    )
}