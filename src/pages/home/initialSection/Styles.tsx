import styled from "styled-components";
import { theme } from "../../../theme/Index";
import BackGround from "../../../assets/group.png";
import { motion } from "framer-motion";

export const InitialHomePage = styled(motion.section)`
  background-size: cover;
  background-position: center center;
  height: 100dvh;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #5e2a3bd5;
  background: no-repeat url(${BackGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
      /* max-width: 434px; */ 
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
  }
`;
