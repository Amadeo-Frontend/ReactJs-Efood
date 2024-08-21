import styled from "styled-components";
import { colors } from "../../styles";
import { ClipLoader } from "react-spinners";

export const Banner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Infos = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
  }

  p {
    font-weight: 100;
    color: ${colors.white};
    font-size: 32px;
    margin-top: 25px;
    margin-bottom: 156px;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white_bg};
`;
