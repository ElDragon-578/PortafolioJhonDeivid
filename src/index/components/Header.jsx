import { Particules } from '../../components/Particules'


export function Header(){
    return(
        <>
            <header className="w-100 h-screen flex flex-col place-items-center justify-center mb-[50px]  header">
                <Particules 
                content={ 
                    <div className='w-[80%] h-auto backdrop-blur-xl rounded-[20px] p-[20px] flex flex-col place-items-center justify-center shadow-2xl border-1 divide-[#332B2B] z-100'>
                        <h1 className="text-[3rem] text-white">JHON DEIVID RAMIREZ NUÑEZ</h1>
                        <span className="text-white text-[1rem] tracking-widest">DESAROLLADOR DE SOFTWARE</span>
                    </div>}/>

            </header>
        </>
    )
}