import { SkillsProgressBar } from "../../components/SkillsPrgressBar"

export function Skills(){
    return(
        <>
            <section className="w-full max-w-[100%] mx-auto h-full min-h-[55vw] flex place-items-center justify-center">
                <article className="w-[87%] h-auto m-[30px] border divide-[#332B2B] shadow-xl rounded-2xl flex flex-col place-items-center p-[25px]">
                    <h1 className="text-[2.5rem]">Habilidades</h1>
                    <div className="w-[90%]">
                        <SkillsProgressBar img={"../../public/logosSkills/javascript.svg"} total={90} />
                        <SkillsProgressBar img={"../../public/logosSkills/nodejs.svg"} total={70} />
                        <SkillsProgressBar img={"../../public/logosSkills/React_light.svg"} total={70} />
                        <SkillsProgressBar img={"../../public/logosSkills/Express.js_light.svg"} total={60} />
                        <SkillsProgressBar img={"../../public/logosSkills/Prisma_light.svg"} total={75} />
                        <SkillsProgressBar img={"../../public/logosSkills/tailwindcss.svg"} total={75} />
                        <SkillsProgressBar img={"../../public/logosSkills/figma.svg"} total={55} />
                        <SkillsProgressBar img={"../../public/logosSkills/html5.svg"} total={95} />
                        <SkillsProgressBar img={"../../public/logosSkills/css_old.svg"} total={90} />
                        <SkillsProgressBar img={"../../public/logosSkills/python.svg"} total={65} />
                        <SkillsProgressBar img={"../../public/logosSkills/mysql.svg"} total={85} />
                        <SkillsProgressBar img={"../../public/logosSkills/git.svg"} total={70} />
                        <SkillsProgressBar img={"../../public/logosSkills/java.svg"} total={25} />
                        <SkillsProgressBar img={"../../public/logosSkills/csharp.svg"} total={20} />
                    </div>
                    
                </article>
            </section>
        </>
    )

}