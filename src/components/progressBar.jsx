import { useEffect, useState } from 'react'
import './progressBar.css'

export const ProgressBar = ({img, value = 0, total}) => {
    const [percent, setPercent] = useState(value)

    useEffect(()=>{
        setPercent(Math.min(total, Math.max(value, 0)))
    },[value])

    return(
        <section className="w-[100%] flex flex-row gap-7 m-[20px]">
            <div className='w-[40px] h-[40px]'>
                <img src={img} alt="" />
            </div>
            <div className='progress'>
                <div style={{width: `${percent}%`}}>

                </div>

            </div>
            <div>
                <span>{percent.toFixed()}%</span> 
            </div>
        </section>
    )
}