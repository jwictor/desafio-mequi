// eslint-disable-next-line no-unused-vars
import React from 'react'
import * as S from "./footer_style"
import play from "../../assets/pla.png"

import logo from "../../assets/logo.svg"
import apple from "../../assets/apple.png"


export default function Footer() {
  return (
    <S.Footer>
        <div>
        <img src={logo} alt="" />
        <p>© McDonald’s 2024</p>
        </div>
        <section>
        <img src={play} alt="" />
        <img src={apple} alt="" />
        </section>

    </S.Footer>
  )
}
