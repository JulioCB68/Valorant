import React from 'react';

import {
  Container,
  ImageBackground,
  Header,
  Logo,
  Text,
  Share,
  SubContainer,
  Content,
  ContainerAgent,
  Title,
  ImageContainer,
  Image,
  Footer,
  Icons
} from "./styles";

import IconLogo from '../assets/icons/Valorant.svg';
import ShareIcon from '../assets/icons/ShareLogo.svg';
import Facebook from '../assets/icons/Facebook.svg';
import Instagram from '../assets/icons/Instagram.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Art from '../assets/images/Art.svg';
import Omem from '../assets/images/Omem.svg';
import Sage from '../assets/images/Sage.svg';
import Sova from '../assets/images/Sova.svg';


import { Agent } from '../components/Agent';

export function Home() {
  return (
    <ImageBackground>
      <Container>
        <Header>
          <Logo src={IconLogo} alt="" />
          <Text> Riot Games </Text>
          <Share src={ShareIcon} alt="" />
        </Header>
        <SubContainer>
          <Content>
            <div className="">
              <Title> Valorant </Title>
              <ContainerAgent>
                <Agent agent={Omem} name="Omem"/>
                <Agent agent={Sage} name="Sage"/>
                <Agent agent={Sova} name="Sova"/>
              </ContainerAgent>
            </div>
            <Footer>
              <Icons src={Instagram} alt="" />
              <Icons src={Twitter} alt="" />
              <Icons src={Facebook} alt="" />
            </Footer>
          </Content>
          <ImageContainer>
            <Image src={Art} alt="" />
          </ImageContainer>
        </SubContainer>
      </Container>
    </ImageBackground>
  );
}
