import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import * as S from "./Styles";

export const ContactSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <S.ContactCotaniner
      id="contact"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h2>Contate-me</h2>
      <ul>
        <li>
          <FaPhoneAlt /> (11) 94977-6197
        </li>
        <li>
          {" "}
          <FaEnvelope /> marciocalisto.junior@gmail.com
        </li>
      </ul>
      <a href="https://wa.me/5511949776197" target="_blank">
        falar com advogado
      </a>
    </S.ContactCotaniner>
  );
};
