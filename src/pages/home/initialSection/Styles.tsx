import styled from "styled-components";
import { theme } from "../../../theme/Index";
import BackGround from "../../../assets/backgroundImage.jpg";

export const InitialHomePage = styled.section`
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: ${theme.colors.blueBackgroudImage};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: no-repeat url(${BackGround});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    opacity: 0.7;
  }

  img {
    width: 100%;
    max-width: 434px;
  }

  a {
    font-family: "Roboto";
    text-transform: uppercase;

    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};

    display: block;
    padding: 1rem 2rem;
    margin: 2rem 0 0 0;

    transition: all 0.3s;

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.blue};
      border-color: ${theme.colors.blue};
    }
  }
`;
