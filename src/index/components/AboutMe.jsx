export function AboutMe(){
    return(
        <>
            <section className="w-full max-w-[90%] mx-auto h-full min-h-[20vh] grid gap-4 grid-cols-1 lg:grid-cols-2 lg:grid-cols-[65%_minmax(35%,_1fr)] place-items-center justify-items-center mb-5">
                <div className="max-w-[95%] w-full h-auto min-h-[400px] m-6 p-6 border divide-[#342C2C] rounded-2xl shadow-xl">
                    <h1 className="ml-2 text-[2.5rem] text-[#332B2B]"> Acerca de mi</h1>
                    <div className="w-[55%] h-[3px] bg-[#332B2B] my-2"></div>
                    <p className="text-[1.25rem] text-[#332B2B] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus deserunt officia unde voluptatum laboriosam dolor explicabo ea quisquam, ratione enim similique fugit magnam eius, non facere placeat quam nesciunt? lor</p>
                </div>
                <div className="w-full max-w-[250px] min-w-[200px] h-[250px] min-h-[200px] bg-[#332B2B] m-[30px] border-1 divide-[#342C2C] rounded-2xl shadow-xl hover:bg-[#6D5C5C] hover:scale-[110%] transition-transform duration-300"></div>
            </section>
        </>
    )
}