import { motion } from "framer-motion";
import { useRef, useState, useEffect} from "react";
// import { Bubles } from "./Bubles";

export function TiltCard({classContainer, divisor, title, content, itemGradient, img}) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState({width: 100, height: 100})
    const divRef = useRef(null)
    const isMouseInside = useRef(false)

    useEffect(() => {
        if (!divRef.current) return;

        const { width, height } = divRef.current.getBoundingClientRect();
        setSize({ width, height });

        const resizeObserver = new ResizeObserver(([entry]) => {
            if (entry) {
                const { width, height } = entry.contentRect;
                setSize({ width, height });
            }
        });

        resizeObserver.observe(divRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    const handleMouse = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        divisor = window.innerWidth <1024 ? 11 : divisor ;

        const x = (clientX - left - width / 2)/divisor;
        const y = (clientY - top - height / 2)/divisor;

        setRotate({ x, y });

        isMouseInside.current = true
        
    };

    const handleExitMouse = () => {
        setRotate({ x: 0, y: 0 });
        isMouseInside.current = false
    };
    return (
        <>
            <motion.div
                ref={divRef}
                className={`${classContainer}`}
                style={{ 
                    transformStyle: "preserve-3d",
                    backgroundImage: `linear-gradient(${itemGradient}), url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                onMouseMove={handleMouse}
                onMouseLeave={handleExitMouse}
                animate={{
                    rotateX: -rotate.y,
                    rotateY: rotate.x
                }}
                transition={{
                    type: "tween",
                    ease: "linear",
                    duration: 0.3
                }}
            >
                
                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className={`absolute inset-3 flex flex-col place-items-end justify-end rounded-xl shadow-2xl p-2`}
                >
                    <h1 className="flex flex-col text-[1.3rem]">{title}</h1>
                </div>
            </motion.div>
        </>
    );
}

