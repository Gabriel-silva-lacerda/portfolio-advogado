import * as S from "./Styles";
import Logo from "../../../assets/logo.png";

export const Home = () => {
  return (
    <S.InitialHomePage id="home">
      <img src={Logo} alt="" />
      <a href="#occupancyArea">meus serviços</a>
    </S.InitialHomePage>
  );
};
