"use client"

import React from 'react';
import style from "./page.module.css";
import slide from './slider.module.css';
import Image from 'next/image';
import styles from "./globals.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Home() {

  const data = [
    { id: '1', image: 'https://th.bing.com/th/id/OIP.cFTee28NHL9kXSS5cibiBgHaEK?rs=1&pid=ImgDetMain' },
    { id: '2', image: 'https://th.bing.com/th/id/OIP.WWoDVPbAL50XgR80bHBazgHaEK?w=271&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: '3', image: 'https://th.bing.com/th/id/OIP.xsUos6WbSoWvYz2XyOnbQAHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: '4', image: 'https://th.bing.com/th/id/OIP.988L7Yi6Ov3zXyUZoAyzdwHaEK?w=331&h=186&c=7&r=0&o=5&pid=1.7' }
  ];

  return (
    <div className={styles.body}>
      <div className={style.conteiner}>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt='Slider'
                className={slide.slide_item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={style.div_box}>
        <a className={style.cartao} href="eventos.html">
          <Image image='./img/img.jpg' alt='imagem figurativa' />
          <h1>Eventos</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et
            dolore magna aliqua</h2>
        </a>
        <a className={style.cartao} href="atendimento.html">
          <img image="./img/img.jpg" alt='imagem' />
          <h1>Atendimentos</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</h2>
        </a>
        <a className={style.cartao} href="sobre.html">
          <img image="./img/img.jpg" alt='imagem' />
          <h1>Nos Conheça</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</h2>
        </a>
        <a className={style.cartao} href="outro.html">
          <img image="./img/img.jpg" alt='imagem' />
          <h1>Outros meios</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</h2>
        </a>
      </div>
    </div>

  );
}
