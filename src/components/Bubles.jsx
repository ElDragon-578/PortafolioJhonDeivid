import { useRef, useEffect } from "react";

//logica para llamar a buble en un componente

/* {size.width > 0 && size.height > 0 && (
    <Bubles 
        width={size.width} 
        height={size.height} 
        img={img} 
        itemGradient={itemGradient}
        hover= {isMouseInside.current}
    />
)} */

export function Bubles({img, itemGradient, width, height, hover}){
    const canvasRef = useRef(null)
    const isMouseInside = useRef(null)

    // isMouseInside.current = hover;
    
    useEffect(()=>{
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        
        if(!width || !height) return
        
        canvas.width = width;
        canvas.height = height;
        
        let bubleScreen = []
        const numberBuble = 25

        class Bubbles {
            constructor(x, y, size, speedX, speedY){
                this.x = x,
                this.y = y,
                this.size = size,
                this.speedX = speedX,
                this.speedY = speedY
            }
            update(){
                if(isMouseInside.current){
                    this.y -= this.speedY
                    
                    if(this.y < 0){
                        this.y = canvas.height
                    }
                }
            }
            draw(){
                const gradient =ctx.createRadialGradient(this.x, this.y, this.size, this.x, this.y, this.size - 2)
                gradient.addColorStop(0, `white`)
                gradient.addColorStop(0.5, `rgba(0, 0, 0, 0)`)
                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size + 1, 0, Math.PI * 2)
                ctx.closePath()
                ctx.fill()
            }
        }

        function init(){
            for(let i = 0; i< numberBuble; i++){
                let size = Math.random() *5 + 4
                let x = Math.random() * canvas.width
                let y = Math.random() * canvas.height
                let speedX = Math.random() *3 +1
                let speedY = Math.random() * 1
                bubleScreen.push(new Bubbles(x, y, size, speedX, speedY))
            }
        }

        function animate(){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            bubleScreen.forEach(p=>{
                p.update()
                p.draw()
            })
            requestAnimationFrame(animate)
        }

        if(bubleScreen.length === 0 ){
            init()
        }

        animate()

        function handleMouseMove (){
            isMouseInside.current = true
        }

        function handleMouseLeave (){
            isMouseInside.current = false
        }

        function handleRize(){
            canvas.width = width;
            canvas.height = height;
        }

        window.addEventListener("resize", handleRize)
        canvas.addEventListener("mousemove", handleMouseMove)
        canvas.addEventListener("mouseleave", handleMouseLeave)
        

        return () => {
            window.removeEventListener("resize", handleRize);
            canvas.removeEventListener("mousemove", handleMouseMove)
            canvas.removeEventListener("mouseleave", handleMouseLeave)
        };
    }
    ,[width, height])


    return(
        <>
            <canvas 
                ref={canvasRef} 
                className={`w-auto h-auto rounded-xl`} 
                style={{ 
                    backgroundImage: `linear-gradient(${itemGradient}), url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
            </canvas>
                
        </>
    )

}