import React from 'react'
import {useGlobalContext} from "../context/context" // costum Hook umuzu import ediyoruz.
import picture1 from "../helper/picture1.png"


const Hero = () => {
    const {closeModal} = useGlobalContext()

  return (
    <section className="hero" onMouseOver={closeModal}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Ödemeleriniz kontrol altında</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            consequatur, repellendus ab alias, fugiat quod quos est rem delectus
            voluptatibus ea sapiente soluta repudiandae reiciendis?
          </p>
          <button className="btn">Başlayalım</button>
        </article>
        <article className="hero-images">
          <img src={picture1} alt="picture1" />
        </article>
      </div>
    </section>
  );
}

export default Hero