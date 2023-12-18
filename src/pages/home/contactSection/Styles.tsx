import styled from "styled-components";
import { theme } from "../../../theme/Index";

export const ContactCotaniner = styled.section`
  margin: 0 auto;
  padding: 6rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${theme.colors.textColor};
    font-size: 2.5rem;

    border-bottom: 2px solid ${theme.colors.blue};
  }

  ul {
    color: #5a5a5a;
    margin-top: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      margin-bottom: 0.7rem;

      font-size: 1.1rem;
    }
  }

  a {
    text-transform: uppercase;
    font-family: "Roboto";
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    display: block;
    padding: 1rem 2rem;
    margin: 2rem 0 0 0;
    transition: all 0.3s;
    background: ${theme.colors.blue};

    font-size: 1rem;

    &:hover {
      background: ${theme.colors.blue};
    }
  }
`;
