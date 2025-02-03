// src/Carrossel.js
import React, { useState } from 'react';
import './Carrossel.css';

const Carrossel = ({ imagens }) => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    setIndiceAtual((indiceAtual + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    setIndiceAtual((indiceAtual - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="carrossel">
      <button onClick={imagemAnterior}>Anterior</button>
      <img src={imagens[indiceAtual]} alt="Carrossel" />
      <button onClick={proximaImagem}>Próxima</button>
    </div>
  );
};

export default Carrossel;
