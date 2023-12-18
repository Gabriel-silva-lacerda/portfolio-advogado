import * as S from "./Styles";
import { areasDoDireito } from "./metaData/OccupancyAreaData";

export const OccupancyAreaSection = () => {
  return (
    <S.OccupancyAreaContainer id="occupancyArea">
      <S.OccupancyArea>
        <h2>Áreas de atuação</h2>
        <S.OccupancyAreaList>
          {areasDoDireito.map((area, index) => (
            <S.AreaContainer key={index}>
              <S.IconContainer>
                {area.icon}
                <span>{area.title}</span>
              </S.IconContainer>
              <S.ResponsibilityList>
                {area.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </S.ResponsibilityList>
            </S.AreaContainer>
          ))}
        </S.OccupancyAreaList>
      </S.OccupancyArea>
    </S.OccupancyAreaContainer>
  );
};
