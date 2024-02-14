import React from 'react';
// Importe os componentes do Swiper e o CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const RotatingBanner = () => {
    return (
        <Swiper
            slidesPerView={3} // Define quantos slides devem ser visíveis por vez
            spaceBetween={30} // Espaço entre os slides
            loop={true} // Habilita o loop dos slides
        >
            <SwiperSlide>
                <img src="url_da_sua_imagem_1.jpg" alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="url_da_sua_imagem_2.jpg" alt="Imagem 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="url_da_sua_imagem_3.jpg" alt="Imagem 3" />
            </SwiperSlide>
            {/* Adicione mais SwiperSlide conforme necessário */}
        </Swiper>
    );
};

export default RotatingBanner;
