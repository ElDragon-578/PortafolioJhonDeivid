import './header.css'

export function Header(){
    return(
        <>
            <header className="w-100 h-screen flex flex-col place-items-center justify-center mb-[50px] shadow-xl header">
                <div className='w-[80%] h-auto backdrop-blur-xl rounded-[20px] p-[20px] flex flex-col place-items-center justify-center shadow-2xl border divide-[#332B2B]'>
                    <h1 className="text-[4rem] text-white">Jhon Deivid Ramirez Nuñez</h1>
                    <span className="text-white">Desarrollador de software</span>
                </div>
            </header>
        </>
    )
}