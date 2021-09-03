import React from 'react';

import {
  Container,
  Image,
  ImageChar,
  Name
} from "./styles";

import Sova from '../assets/images/Sova.svg';
import BackgroundAgente from '../assets/images/BackgroundChar.svg';

export function Agent(props) {
  return (
    <Container>
      <Image src={BackgroundAgente} alt="" />
      <ImageChar src={props.agent} alt="" />
      <Name>{props.name}</Name>
    </Container>
  );
}
