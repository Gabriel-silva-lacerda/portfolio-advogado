import About from "../../../assets/photo-about.jpg";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import * as S from "./Styles";

export const ActingSection = () => {
  return (
    <S.ActingSectionContainer id="about">
      <S.AboutContainer>
        <S.About>
          <h1>Sobre mim</h1>
          <p>
            Me chamo Marcio Calisto de Sousa Junior, advogado com 24 anos,
            atuando na area de Direito Civil, Direito de Família e Direito do
            Consumidor. Graduado na Universidade Nove de Julho, e atualmente me
            especializando em direito civil e código de processo civil pela
            universidade Legale (pós graduação).
          </p>
          <S.AboutParagraph>
            Dedico-me à solução de casos que abrangem contratos,
            responsabilidade civil, divórcios, questões de guarda de crianças e
            assuntos relacionados aos direitos do consumidor. Comprometo-me a
            aplicar meus conhecimentos de maneira ética e responsável, visando
            assegurar a justiça.
          </S.AboutParagraph>{" "}
          <p>
            Além do trabalho, gosto de contribuir para a sociedade, participando
            de iniciativas sociais e promovendo a educação legal. Estou sempre
            aberto a novos desafios e oportunidades para aprender e crescer. Se
            precisar de ajuda em questões jurídicas ou tiver dúvidas, estou aqui
            para ajudar!
          </p>
          <a
            href="https://www.linkedin.com/in/marcio-junior-51921015b/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://wa.me/5511949776197" target="_blank">
            <FaWhatsapp />
          </a>
        </S.About>
        <S.ImageAboutContainer>
          <img src={About} alt="Imagem sobre mim" />
        </S.ImageAboutContainer>
      </S.AboutContainer>
    </S.ActingSectionContainer>
  );
};
