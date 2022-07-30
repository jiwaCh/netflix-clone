import styled from "styled-components";
import { device } from "../../styles/device";

export const Button = ({ text }) => {
  return (
    <>
      <ButtonContainer>{text}</ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  font-size: var(--p2-size);
  background-color: var(--primary-red); // primary color
  padding: 7px 17px;
  border-radius: 5px;
  color: var(--light-text);

  &:hover {
    cursor: pointer;
  }

  @media ${device.mobileXL} {
    font-size: var(--p3-size);
  }
`;
