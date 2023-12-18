import * as S from "./Styles";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <S.ContactCotaniner id="contact">
      <h2>Contate-me</h2>
      <ul>
        <li>
          <FaMapMarkerAlt />
          Av. Cândido José Xavier, 419 - Parque Santo Antônio | São Paulo - SP,
          05822-020
        </li>
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
