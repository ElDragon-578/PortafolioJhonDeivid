import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { Labels } from "../../components/Labels";

const items = [
    {id: 0, img: "/logosSkills/javascript.svg", title: "JavaScript"},
    {id: 1, img: "/logosSkills/nodejs.svg", title: "Node Js"},
    {id: 2, img: "/logosSkills/React_light.svg", title: "React"},
    {id: 3, img: "/logosSkills/Express.js_light.svg", title: "Express"},
    {id: 4, img: "/logosSkills/Prisma_light.svg", title: "Prisma"},
    {id: 5, img: "/logosSkills/tailwindcss.svg", title: "TailWind"},
    {id: 6, img: "/logosSkills/figma.svg", title: "Figma"},
    {id: 7, img: "/logosSkills/html5.svg", title: "HTML5"},
    {id: 8, img: "/logosSkills/css_old.svg", title: "CSS"},
    {id: 9, img: "/logosSkills/python.svg", title: "Python"},
    {id: 10, img: "/logosSkills/mysql.svg", title: "MySql"},
    {id: 11, img: "/logosSkills/git.svg", title: "Git"},
    {id: 12, img: "/logosSkills/java.svg", title: "Java"},
    {id: 13, img: "/logosSkills/csharp.svg", title: "C#"},
];

export function Skills() {
    return (
        <section className="w-full mx-auto flex items-center justify-center">
            <article className="w-[100%] h-auto mt-8 flex flex-col items-center ">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    loop={items.length > 7}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    centeredSlides={true}
                    speed={750}
                    freeMode={true}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        768: { slidesPerView: 5 }, 
                        1024: { slidesPerView: 7 }
                    }}
                    className="w-full"
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id} className="flex">
                            <Labels 
                                img={item.img} 
                                title={item.title} 
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </article>
        </section>
    );
}
