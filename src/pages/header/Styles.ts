import styled from "styled-components";
import { theme } from "../../theme/Index";

export const Header = styled.header<{ scrolled: boolean; active: boolean }>`
  z-index: 100;
  width: 100%;
  position: fixed;
  top: 0;

  background: ${({ scrolled, active }) =>
    scrolled || active ? "#0f2167" : "transparent"};
`;

export const HeaderContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  padding: 0.6rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.button`
  border: none;
  background: transparent;

  img {
    width: 100%;
    max-width: 110px;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    &.active .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      height: 100vh;
      visibility: visible;
      transition: all 0.6s;

      transform: translate(0px);
      animation: animeLeft 0.3s forwards;
      @keyframes animeLeft {
        to {
          opacity: initial;
        }
      }
    }

    &.active {
      span {
        border-top-color: transparent;

        &::before {
          transform: rotate(135deg);
        }
        &::after {
          transform: rotate(-135deg);
          top: -7px;
        }
      }
    }
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  height: 0;
  transition: all 0.6s;

  li {
    position: relative;
    padding-top: 0.1rem;

    &::after {
      content: "";
      width: 0px;
      display: block;
      height: 2px;
      background-color: ${theme.colors.yellow};
      bottom: -3px;
      left: 0px;
      position: absolute;
      transition: 0.4s;
    }

    &:hover::after {
      width: 100%;
    }

    &:last-child:hover::after {
      border-bottom: none;
      width: initial;
    }

    a {
      padding: 0.2rem;
      color: ${theme.colors.white};
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
    width: 100%;
    position: absolute;
    right: 0;
    background: ${theme.colors.blue};
    height: 0;
    transition: all 0.6s;
    z-index: 1000;
    visibility: hidden;

    transform: translate(-20px);
    opacity: 0;
  }
`;

export const ButtonContact = styled.li`
  text-transform: uppercase;
  font-family: "Roboto";
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  display: block;
  padding: 0.8rem 2rem;
  transition: all 0.3s;
  background: #0f2167c5;
  padding: 0;

  transition: all 0.3s;

  &:hover {
    background: ${theme.colors.white};

    border-color: ${theme.colors.blue};
  }

  a {
    padding: 0.6rem 2rem !important;
    display: block;

    &:hover {
      color: ${theme.colors.blue};
    }
  }
`;

export const MobileMenu = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;

    background: none;
    border: none;
    cursor: pointer;

    span {
      border-top: 2px solid ${theme.colors.yellow};
      width: 20px;
      display: block;

      &::after,
      &::before {
        content: "";
        display: block;
        margin-top: 5px;
        width: 20px;
        height: 2px;
        background: ${theme.colors.yellow};
        position: relative;
        transition: all 0.5s;
      }
    }
  }
`;
