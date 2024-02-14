import styles from "./styles.module.css";
import { technologies } from "../../../data/technologies";
import { Stack } from "../Stack";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaReact } from "react-icons/fa";
import {
    SiNestjs,
    SiStyledcomponents,
    SiJavascript,
    SiTypescript,
    SiDjango,
    SiExpress,
    SiNextdotjs,
} from "react-icons/si";
import { FaNodeJs, FaJava, FaBootstrap } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiDocker } from "react-icons/si";

export const TechnologiesComponent = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <section id="stack" className={styles.technologiesSection}>

                <h2 className={styles.title1}>Tecnologias</h2>
                <div className={styles.divContainer}>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={8}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <div>
                            <SiJavascript
                                size={40}
                                style={{ fill: "#F7E018" }}
                            />
                            <h6>JavaScript</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <SiTypescript
                                size={40}
                                style={{ fill: "#3075C1" }}
                            />
                            <h6>TypeScript</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                style={{ width: "50px", height: "50px" }}
                                src="https://www.svgrepo.com/show/452091/python.svg"
                                alt=""
                            />
                            <h6>Python</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <FaJava size={45} style={{ fill: "#007396" }} />
                            <h6>Java</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            <BiLogoSpringBoot
                                size={40}
                                style={{ fill: "#6DB33F" }}
                            />
                            <h6>SpringBoot</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            <SiDjango size={40} style={{ fill: "#0D4B31" }} />
                            <h6>Django</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            <FaReact size={40} style={{ fill: "#43C3EC" }} />
                            <h6>React js</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <FaNodeJs size={40} style={{ fill: "#83BA0B" }} />
                            <h6>Node js</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <SiNestjs size={40} style={{ fill: "#E0234E" }} />
                            <h6>Nest js</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <SiNextdotjs size={40} />
                            <h6>Next js</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <SiExpress size={40} />
                            <h6>Express js</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <FaBootstrap
                                size={40}
                                style={{ fill: "#8812FB" }}
                            />
                            <h6>Bootstrap</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <SiStyledcomponents
                                size={60}
                                style={{ fill: "#FCC638" }}
                            />
                            <h6>Styled Components</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <SiDocker size={60} style={{ fill: "#0A98E6" }} />
                            <h6>Docker</h6>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </section>
        </>
    );
};
