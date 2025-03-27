import { useRef, useEffect} from "react";

export const Particules = ({content}) => {
    const canvasRef = useRef(null)
    const mousePosition = {
        x: null,
        y: null
    }

    useEffect(()=>{
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight



        let particulesInScreen = []
        const numberParticules = 100
        const mouseRadius = 65;

        class Particle  {
            constructor(x, y, size){
                this.x = x,
                this.y = y,
                this.initialX = x,
                this.initialY = y,
                this.opacity = 0.25,
                this.size = size
            }
            update(){
                const dx = this.x - mousePosition.x
                const dy = this.y - mousePosition.y
                const distance = Math.sqrt(dx*dx + dy*dy)

                if(distance < 70){
                    const pushX = (dx/distance) * 1.5
                    const pushY = (dy/distance) * 1.5

                    this.x += pushX
                    this.y += pushY
                    this.opacity = 1
                }else if(distance > 75){
                    this.x += (this.initialX - this.x )*0.05
                    this.y += (this.initialY - this.y )*0.05
                    this.opacity = Math.max(0.25, this.opacity *= 0.98)
                }
            }
            draw(){
                ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
                ctx.closePath();
                ctx.fill();
            }
        }

        function init(){
            particulesInScreen = []
            for(let i = 0; i < numberParticules; i++){
                let size = Math.random() *6 +1
                let x = Math.random() * canvas.width
                let y = Math.random() * canvas.height
                particulesInScreen.push(new Particle(x, y, size))
            }
        }

        function connectParticules(){
            for(let i=0; i< particulesInScreen.length; i++){
                for(let j = i+1; j < particulesInScreen.length; j++){
                    let dx = particulesInScreen[i].x -particulesInScreen[j].x
                    let dy = particulesInScreen[i].y - particulesInScreen[j].y

                    let distance = Math.sqrt(dx**2 + dy**2)
                    if(distance<100){
                        ctx.strokeStyle = "rgba(0, 0, 0, 0.3)"
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(particulesInScreen[i].x, particulesInScreen[i].y)
                        ctx.lineTo(particulesInScreen[j].x, particulesInScreen[j].y)
                        ctx.stroke()
                        ctx.closePath()
                    }

                 }
            }

        }

        function drawMouseCircle() {
            ctx.beginPath();
            ctx.arc(mousePosition.x, mousePosition.y, mouseRadius, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
        }

        function animate(){
            ctx.clearRect(0,0, canvas.width, canvas.height)
            particulesInScreen.forEach(p=>{
                p.update()
                p.draw()
            })
            connectParticules()
            // drawMouseCircle()
            requestAnimationFrame(animate)
        }

        function handleMouseMove (event){
            const rect = canvasRef.current.getBoundingClientRect()
            mousePosition.x = event.clientX - rect.left
            mousePosition.y = event.clientY - rect.top
        }

        function handleMouseLeave() {
            mousePosition.x = null
            mousePosition.y = null
        }

        function handleRezise() {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            init()
        }

        init()
        animate()

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("resize", handleRezise)
        window.addEventListener("mouseleave", handleMouseLeave)

        return () =>{
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("resize", handleRezise)
            window.removeEventListener("mouseleave", handleMouseLeave)
        }

    }, [])

    return(
        <>
            <div className="relative w-full h-screen" >
                <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full bg-white"></canvas>
                
                <div className="relative z-10 flex flex-col place-items-center justify-center items-center h-full text-center" style={{ 
                    backgroundImage: "linear-gradient(0deg, rgb(255, 255, 255) 8%, rgba(123, 8, 0, 0.7) 90%)"
                }}>
                    {content}
                </div>
            </div>

        </>
    )

}