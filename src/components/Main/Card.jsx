// import React from 'react'
import * as S from "./main_style"
// eslint-disable-next-line react/prop-types
export default function Card( {imagem, texto}) {
  return (
    <S.Card>
      <img src={imagem} alt="" />
      <section>
      <p>{texto}</p>
      <button>Clique aqui</button>
      </section>
    </S.Card>
  )
}
