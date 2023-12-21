import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { areasDoDireito } from "./metaData/OccupancyAreaData";
import * as S from "./Styles";

export const OccupancyAreaSection = () => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <S.OccupancyAreaContainer>
      <S.OccupancyArea
        id="occupancyArea"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
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
