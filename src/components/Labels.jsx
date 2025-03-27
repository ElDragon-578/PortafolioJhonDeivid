export function Labels({img, title}){

    return(
        <>
            <div className="w-40 h-10 flex place-items-center justify-start bg-[#452F2D] rounded-xl p-1 border-2 border-[#332B2B] shadow-2xl gap-4">
                <img src={img} className="w-[35%] h-6 object-contain"/>
                <p className="text-white text-center">{title}</p>
            </div>

        </>
    )
}