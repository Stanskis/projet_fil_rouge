import { cpus } from '../Data/Cpus';
import React, { Component } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';


export default function CarouselSection() {
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 6,
      speed: 500,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };

    return (
      <div className="slider-container bg-dark py-1">
        <Slider {...settings}>
          {cpus.map((cpu) => (
            <div className="card rounded-0 bg-secondary" key={cpu.title}>
                <img className='rounded mx-auto p-2' src={cpu.img} alt="" />
              <div className="card-body text-white pb-1">
                <h5 className='m-0'>{cpu.title}</h5>
                <h6 className='m-0'>Cores: {cpu.cores}</h6>
                <h6 className='m-0'>Core Clock: {cpu.coreClock}</h6>
                <h6 className=''>Boost Clock: {cpu.boostClock}</h6>
                {/* <h6>TDP: {cpu.tdp}</h6>
                <h6>{cpu.igpu}</h6>
                <h6>{cpu.price}</h6> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  
}