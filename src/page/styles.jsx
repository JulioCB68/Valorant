import styled from "styled-components";

import ImgSrc from '../assets/images/BackgroundImage.svg';

export const Container = styled.div`
  width: 100%;
  padding: 0 9.375rem;
`;

export const ImageBackground = styled.div`
  width: 100%;
  height: 100%;
  background: url(${ImgSrc}) no-repeat center;
  background-size: cover;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 5%;
`;

export const Text = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #FFFFFF;
  padding: 1.875rem 0;
`;

export const Share = styled.img`
  width: 5%;
`;

export const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 8rem 0 0;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const ContainerAgent = styled.div`
  width: 100%;
  display: flex;
`;

export const Title = styled.h1`
  font-family: 'Druk Wide Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 73px;
  text-transform: uppercase;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #FFFFFF;
  color: transparent;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 5rem;
`;

export const Image = styled.img`
  width: 66%;
`;

export const Footer = styled.div`
  display: flex;
`;

export const Icons = styled.img`
  width: 25%;
  margin: 0 2.25rem 7rem;
`;

