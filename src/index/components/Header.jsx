import './header.css'

export function Header(){
    return(
        <>
            <header className="w-100 h-screen flex flex-col place-items-center justify-center header">
                <h1 className="text-[50px] text-white">Jhon Deivid Ramirez Nuñez</h1>
                <span className="text-white">Desarrollador de software</span>
            </header>
        </>
    )
}