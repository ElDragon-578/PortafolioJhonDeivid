import { motion } from "framer-motion";
import { useState} from "react";

export function TiltCard({classContainer, divisor, title, content}) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });


    const handleMouse = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        divisor = window.innerWidth <1024 ? 11 : divisor ;

        const x = (clientX - left - width / 2)/divisor;
        const y = (clientY - top - height / 2)/divisor;

        setRotate({ x, y });
    };

    const handleExitMouse = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <>
            <motion.div
                className={`${classContainer}`}
                style={{ transformStyle: "preserve-3d"}}
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
                    className={`absolute inset-3 grid place-content-center rounded-xl shadow-2xl`}
                >
                    <h1 className="absolute bottom-10 left-3 text-[25px]">{title}</h1>

                </div>
            </motion.div>
        </>
    );
}

