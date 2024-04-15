import styled from "styled-components";
import { theme } from "../../../theme/Index";
import { motion } from "framer-motion";

export const OccupancyAreaContainer = styled.section`
  background: ${theme.colors.blue};
`;

export const OccupancyArea = styled(motion.div)`
  max-width: 1300px;
  margin: 0 auto;
  padding: 6rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    text-align: center;
    color: ${theme.colors.lightYeloow};
    font-size: 2.5rem;

    margin-bottom: 2rem;

    border-bottom: 2px solid ${theme.colors.lightYeloow};
  }
`;

export const OccupancyAreaList = styled.ul`
  /* display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr); */
  display: flex;
  flex-wrap: wrap;

  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const AreaContainer = styled.li`
  border: 1px solid ${theme.colors.lightYeloow};

  padding: 1.2rem;

  background: #fff;
  flex-grow: 1;
  width: 400px;
  svg {
    font-size: 2.5rem;
    color: ${theme.colors.lightYeloow};
  }

  span {
    color: ${theme.colors.textColor};
    font-size: 1.438rem;
    display: block;
    margin: 1rem 0%;

    border-bottom: 2px solid ${theme.colors.lightYeloow};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ResponsibilityList = styled.ul`
  li {
    color: ${theme.colors.textColor};
    margin-bottom: 0.6rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
