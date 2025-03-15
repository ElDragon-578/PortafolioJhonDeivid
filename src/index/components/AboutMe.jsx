export function AboutMe(){
    return(
        <>
            <section className="w-100% h-[80vh] grid grid-cols-[65%_minmax(30%,_1fr)_100px] place-items-center gap-4">
                <div className="w-[80%] h-[80%] m-[30px] p-[25px] border divide-[#342C2C] rounded-2xl shadow-xl">
                    <h1 className="ml-[10px] text-[2.5rem] text-[#332B2B]"> Acerca de mi</h1>
                    <div className="w-[55%] h-[3px] bg-[#332B2B]"></div>
                    <p className="text-[1.25rem] text-[#332B2B] p-[5px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus deserunt officia unde voluptatum laboriosam dolor explicabo ea quisquam, ratione enim similique fugit magnam eius, non facere placeat quam nesciunt?</p>
                </div>
                <div className="w-[75%] h-[50%] bg-[#332B2B] m-[30px] border-1 divide-[#342C2C] rounded-2xl shadow-xl hover:bg-[#6D5C5C] hover:scale-[120%] transition-transform duration-300"></div>
            </section>
        </>
    )
}