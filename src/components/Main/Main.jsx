// import React from 'react'

import bigmec from "../../assets/bigmac.svg"
import Card from "./Card";
import sofa from "../../assets/sofa.png"
import mec from "../../assets/mecloja.png"
import funcio from "../../assets/funcio.png"
import bigmec2 from "../../assets/bigmac.png"
import batata from "../../assets/batata.png"
import sorvete from "../../assets/sorvete.png"
import * as S from "./main_style"
import { useState } from "react";


export default function Main() {

  const [imagem, setImagem] = useState(bigmec2)

  return (
    <main>
      <S.Section>
        <div>
            <img src={imagem} alt="" />
            <h1>BATEU AQUELA FOME <span>#FOME</span> DE <span>MÉQUI?</span></h1>
        </div>

        <figure>
          <img src={bigmec} onClick={() => setImagem(bigmec2)} alt="" />
          <img src={batata} onClick={() => setImagem(batata)} alt="" />
          <img src={sorvete} onClick={() => setImagem(sorvete)} alt="" />
        </figure>

      </S.Section>
      <S.Promo>
        <h2>Promoção</h2>
      </S.Promo>
        <S.Cards>
            <Card imagem={sofa} texto={'Que tal um #MéquiNoSofá?'}/>
            <Card imagem={mec} texto={'venha conhecer nossa nova loja'}/>
            <Card imagem={funcio} texto={'Confira as medidas que o Méqui adotou!'}/>     
        </S.Cards>
       

    </main>
  );
}
