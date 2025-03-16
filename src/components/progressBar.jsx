import { useEffect, useState } from 'react'
import './progressBar.css'

export const ProgressBar = ({img, value = 0, total}) => {
    const [percent, setPercent] = useState(value)

    useEffect(()=>{
        setPercent(Math.min(total, Math.max(value, 0)))
    },[value])

    return(
        <section className="w-[100%] flex flex-row gap-7 m-[20px] mb-[40px] justify-center place-items-center">
            <div className='w-[40px] h-[40px]'>
                <img src={img} alt="" />
            </div>
            <div className='progress'>
                <div style={{width: `${percent}%`}}>

                </div>
            </div>
            <div className='text-center justify-center'>
                <span className='text-center justify-center'>{percent.toFixed()}%</span> 
            </div>
        </section>
    )
}