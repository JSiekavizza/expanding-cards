import React, { useState } from "react";
import "./home.css";
import Foto1 from "/foto-1.png";
import Foto2 from "/foto-2.png";
import Foto3 from "/foto-3.png";
import Foto4 from "/foto-4.png";

export const Home = () => {
  const [expandedCard, setExpandedCard] = useState(4);

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? expandedCard : cardId);
  };

  return (
    <div
      class="container-fluid d-flex flex-wrap flex-lg-nowrap  align-items-center 
       text-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="d-flex flex-column p-5 mb-5">
        <h2 className="text-start">
          Lleva tu portafolio web al siguiente nivel con un Componente de
          Tarjetas Expandibles.
        </h2>
        <p className="text-start fs-3 fw-light">
          Ademas de aportar elegancia y funcionalidad a tu sitio, también mejora
          el rendimiento de forma significativa.
        </p>
        <h4 className="text-start">Componente desarrollado con Bootstrap.</h4>
        <p className="text-start mt-3">
          <p>
            <b>¿Por qué elegir componentes?</b>
          </p>
          <b>- Rendimiento ultrarrápido:</b> Gracias a la velocidad de Vite, tu
          página cargará de manera instantánea. <br></br>{" "}
          <b>- Interactividad moderna:</b> React asegura una experiencia fluida
          y atractiva para tus usuarios. <br></br> <b>- Diseño adaptable:</b>{" "}
          Bootstrap garantiza que tu diseño se vea impecable en cualquier
          dispositivo.
        </p>
      </div>
      <div className="card-container px-5 mt-5">
        <div
          className={`card  ${expandedCard === 1 ? "expanded" : ""}`}
          onClick={() => handleCardClick(1)}
          style={{
            backgroundImage: `url(${Foto1})`,
          }}
        >
          <div className="card-footer">
            <div className="card-title">Foto 1</div>
          </div>
        </div>
        <div
          className={`card ${expandedCard === 2 ? "expanded" : ""}`}
          onClick={() => handleCardClick(2)}
          style={{
            backgroundImage: `url(${Foto2})`,
          }}
        >
          <div className="card-footer">
            <div className="card-title ">Foto 2</div>
          </div>
        </div>
        <div
          className={`card ${expandedCard === 3 ? "expanded" : ""}`}
          onClick={() => handleCardClick(3)}
          style={{
            backgroundImage: `url(${Foto3})`,
          }}
        >
          <div className="card-footer">
            <div className="card-title">Foto 3</div>
          </div>
        </div>
        <div
          className={`card ${expandedCard === 4 ? "expanded" : ""}`}
          onClick={() => handleCardClick(4)}
          style={{
            backgroundImage: `url(${Foto4})`,
          }}
        >
          <div className="card-footer">
            <div className="card-title">Foto 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};
