import style from './TitleSubtitleBlock.module.scss'
import { useChangeDates } from '@/processes/context-dates/useChangeDates';


// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as ISwiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';
import 'swiper/modules';
import { useRef, useState } from 'react';
import { BackSvg } from '@/assets/BackSvg';
import { NextSvg } from '@/assets/NextSvg';


export function TitleSubtitleBlock() {
    // ref для кнопок
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // стейты для отслеживания начала и конца слайда
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    // f для смены слайдов
    const handleSlideChange = (swiper: ISwiper): void => {
        setShowPrev(!swiper.isBeginning);
        setShowNext(!swiper.isEnd);
    };

    // текущая страница с датами
    const { currentYears } = useChangeDates();
    // информация для слайдера
    const subTitle = currentYears.info



    return (
        <div className={style.wrapper}>


            <button ref={prevRef} className={`${style.customPrev} ${showPrev === false ? style.dNone : ''}`}>
                <BackSvg stroke='#3877EE' />
            </button>


            <button ref={nextRef} className={`${style.customNext}  ${showNext === false ? style.dNone : ''}`}>
                <NextSvg stroke='#3877EE' />
            </button>



            <Swiper
                modules={[Pagination, Navigation]}
                grabCursor={true}
                onBeforeInit={(swiper) => {
                    // Установка элементов навигации
                    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                        // eslint-disable 
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        //eslint-enable 

                        // Инициализация навигации
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
                onSlideChange={handleSlideChange}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                // на разных экранах по разному
                breakpoints={{
                    100: {
                        slidesPerView: "auto",  //сколько слайдов на экране (можно 1.5)
                        spaceBetween: 20, //расстояние между слайдами

                    },
                    320: {
                        slidesPerView: 1.4,
                        spaceBetween: 20,

                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20,

                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 60,

                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1500: {
                        slidesPerView: 3,
                        spaceBetween: 100,
                    },
                }}
            >

                {subTitle.map((info, ind) => (
                    <SwiperSlide key={ind}>
                        <div className={`${style.container} `}>
                            <p className={style.title}>{info.title}</p>
                            <p className={style.description}>{info.description}</p>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper >
        </div>
    );
}
