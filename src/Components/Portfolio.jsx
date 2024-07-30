import React, { useRef } from 'react';
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight,  } from "react-icons/fa";



import './Components.css';

import greenMic from '../images/greenmic.png';
import bot from '../images/bot.png';
import seshat from '../images/seshat.png';
import we from '../images/we.png';
import fizkultura from '../images/fizkultura.png';
import gto from '../images/gto.png';



const images = [
  greenMic,
  bot,
  seshat,
  we,
  fizkultura,
  gto,
];

const skills = [
'HTML CSS JS',
'HTML CSS JS',
'REACT',
'REACT',
'REACT',
'REACT',
];

const titles = [
  'Зеленый микрофон',
  'БОТ',
  'СЕШАТ',
  'МЫ',
  'Физкультура',
  'ГТО',
];

const descriptions = [
'Проект, который предполагает создание информационного центра экологического активизма. Я разработала страницу регистрации, личный кабинет и страницу с образовательным контентом.',
'Тест, направленный на оценку личностных компетенций (soft skills). Я сделала рефакторинг кода и редизайн.',
'Квалиметрическая платформа наукометрического оценивания. Моя работа заключалась в доработке основных функций сайта (поиск по сайту, регистрация и т.д.)',
'Платформа социального скоринга. Разработка концепции сайта, разработка функционала.',
'Информационная система для вовлечения населения в систематические занятия физической культурой и спортом. Внесение небольших изменений в функционал сайта.',
'Программа индивидуальной подготовки к выполнению испытаний ГТО для лиц основной медицинской группы. Рефакторинг кода, доработка основного функционала сайта (календарь тренировок, страница тренировок).',
];

const links = [
'https://greenmic.ru/',
'https://b.rgsu.net/',
'https://rgsu.net/about/activities/press_centre/life/platform/rgsu-life_18.html',
'https://we.rgsu.net',
'https://xn--80ancjf4angcd7g.xn--c1avg/dialer/newf/',
'https://xn--80ancjf4angcd7g.xn--c1avg/dialer/gto/',
]


const Portfolio = React.forwardRef((props, ref) => {

  

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          left: "-30px",
          top: "35%",
          zIndex: 1,
          transform: "translateY(-50%)",
          fontSize: "1.5rem",
          color: "#000",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: "-30px",
          top: "35%",
          zIndex: 1,
          transform: "translateY(-50%)",
          fontSize: "1.5rem",
          color: "#000",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <FaArrowRight/> 
      </div>
    );
  };

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
        autoplaySpeed: 2500,
     // Обработчики событий мыши
     beforeChange: () => {
      if (sliderRef.current) {
          sliderRef.current.slickPause();
      }
  },
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  

  return (
    <>
    <div ref={ref} id="projects" className='normal-text title-text'>My <span className='bold-title-text'>Portfolio</span></div>
    <div className='slider'>
    <div className="slider-container">
      <Slider {...settings}>
       
        {images.map((image, index) => (
          <div key={index}>
            <a href={links[index]} target="_blank" rel="noopener noreferrer"><img className='slider-img' src={image} alt={''} /></a>
            <div className='slider-skills'> {skills[index]}</div>
            <div className='slider-title'> {titles[index]}</div>
            <div className='slider-text'> {descriptions[index]}</div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
});

export default Portfolio;



