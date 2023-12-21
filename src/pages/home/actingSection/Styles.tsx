import styled from "styled-components";
import { theme } from "../../../theme/Index";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
  max-width: 1300px;
  margin: 0 auto;
  padding: 6rem 1.5rem 6rem 1.5rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
  position: relative;

  @media (max-width: 1030px) {
    flex-direction: column;
  }
`;

export const About = styled.div`
  h1 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    font-weight: 600;

    color: ${theme.colors.textColor};

    border-bottom: 2px solid ${theme.colors.blue};

    display: inline-block;
  }

  p {
    max-width: 600px;
    text-align: justify;
    line-height: 1.5;
    letter-spacing: 0.3px;
    color: #5a5a5a;
  }

  a {
    color: ${theme.colors.textColor};
    transition: all 0.3s;

    &:hover {
      color: ${theme.colors.blue};
    }

    svg {
      margin-top: 2rem;
      margin-right: 1.5rem;

      font-size: 2rem;
    }
  }

  @media (max-width: 1030px) {
    p {
      max-width: initial;
    }
  }
`;

export const AboutParagraph = styled.p`
  margin: 1.5rem 0;
`;

export const ImageAboutContainer = styled.div`
  background: linear-gradient(
    to right,
    ${theme.colors.white} 30%,
    ${theme.colors.blue} 0%
  );
  display: flex;
  align-items: center;

  width: 40%;

  img {
    width: 100%;
    height: 90%;
    max-width: 400px;
    position: relative;
  }

  @media (max-width: 1030px) {
    width: 100%;
    height: 70%;
    justify-content: center;
    height: 600px;
    img {
      max-width: 500px;
    }
  }

  @media (max-width: 578px) {
    display: none;
  }
`;
