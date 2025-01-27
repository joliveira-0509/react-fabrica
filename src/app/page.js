import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="body">
      <div id="menuBar">
        <img id="menuIcon" src="img/img.jpg" alt="Menu Icon" />
      </div>
      <section className="slider">
        <div className="slider-content">
          <input type="radio" name="btn-radio" id="radio1" />
          <input type="radio" name="btn-radio" id="radio2" />
          <input type="radio" name="btn-radio" id="radio3" />
          <div className="slide-box primeiro">
            <img className="img-desktop" src="img/mk.jpg" alt="slide1" />
          </div>
          <div className="slide-box">
            <img className="img-desktop" src="img/mk2.jpg" alt="slide1" />
          </div>
          <div className="slide-box">
            <img className="img-desktop" src="img/mk3.jpg" alt="slide1" />
          </div>
          <div className="nav-auto">
            <div className="auto-btn1" />
            <div className="auto-btn2" />
            <div className="auto-btn3" />
          </div>
          <div className="nav-manual">
            <label htmlFor="radio1" className="manual-btn" />
            <label htmlFor="radio2" className="manual-btn" />
            <label htmlFor="radio3" className="manual-btn" />
          </div>
        </div>
      </section>
      <div className="div-box">
        <a className="cartao , a" href="eventos.html">
          <img src="img/img.jpg" alt />
          <h1>Eventos</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et
            dolore magna aliqua</h2>
        </a>
        <a className="cartao , a" href="atendimento.html">
          <img src="img/img.jpg" alt />
          <h1>Atendimentos</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</h2>
        </a>
        <a className="cartao , a" href="sobre.html">
          <img src="img/img.jpg" alt />
          <h1>Nos Conheça</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</h2>
        </a>
        <a className="cartao , a" href="outro.html">
          <img src="img/img.jpg" alt />
          <h1>Outros meios</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</h2>
        </a>
      </div>
    </div>

  );
}
