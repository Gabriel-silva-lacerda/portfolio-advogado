import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
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
          <FaMapMarkerAlt />
          Av. Cândido José Xavier, 409 - Parque Santo Antônio | São Paulo - SP,
          05751-000
        </li>
        <li>
          <FaPhoneAlt /> (11) 98209-9540
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
