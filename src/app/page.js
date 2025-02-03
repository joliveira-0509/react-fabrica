import React from 'react';
import style from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {


  return (
    <div>
      <div className={style.body}>

        <div style={{ display: 'block', width: 700, padding: 30 }}>
          <h4>React-Bootstrap Carousel Component</h4>
          <Carousel fade>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                alt="Image One"
              />
              <Carousel.Caption>
                <h3>Label for first slide</h3>
                <p>Sample Text for Image One</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                alt="Image Two"
              />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.div_box}>
          <a className={style.cartao} href="eventos.html">
            <img src="{img}" alt />
            <h1>Eventos</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et
              dolore magna aliqua</h2>
          </a>
          <a className={style.cartao} href="atendimento.html">
            <img src="img/img.jpg" alt />
            <h1>Atendimentos</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua</h2>
          </a>
          <a className={style.cartao} href="sobre.html">
            <img src="img/img.jpg" alt />
            <h1>Nos Conheça</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua</h2>
          </a>
          <a className={style.cartao} href="outro.html">
            <img src="img/img.jpg" alt />
            <h1>Outros meios</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua</h2>
          </a>
        </div>
      </div>
    </div>

  );
}
