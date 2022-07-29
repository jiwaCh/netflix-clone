import styled from "styled-components";
import { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

export const SignUpEmailAddress = () => {
  const [emailValidState, setEmailValidState] = useState("INITIAL");
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    console.log(emailValidState);
    setInputValue(e.target.value);

    if (
      (e.target.value.includes("@") && e.target.value.includes(".co.uk")) ||
      e.target.value.includes(".com")
    ) {
      setEmailValidState("VALID");
    } else {
      setEmailValidState("INVALID");
    }
  };

  return (
    <Container>
      <P2>
        Ready to watch? Enter your email to create or restart your membership.{" "}
      </P2>
      <FormContainer>
        <Input
          emailValidState={emailValidState}
          placeholder="Email address"
          type="email"
          value={inputValue}
          onChange={handleInput}
        ></Input>
        <FormButton>
          Get Started&nbsp; <BsChevronRight />
        </FormButton>
      </FormContainer>
      <Hint emailValidState={emailValidState}>
        Please enter a valid email address.
      </Hint>
    </Container>
  );
};

const P2 = styled.p`
  font-size: var(--p2-size);
  color: var(--light-text);
  font-weight: var(--font-weight-medium);
`;

const Container = styled.div`
  width: 700px;
`;

const Hint = styled.div`
  margin: 5px;
  font-size: var(--p3-size);
  color: var(--primary-red-dark);
  text-align: start;
  background-color: rgba(0, 0, 0, 0.2);
  width: fit-content;

  display: ${({ emailValidState }) =>
    emailValidState === "INVALID" ? "block" : "none"};
`;

const FormContainer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding-left: 10px;
  font-size: var(--p2-size);
  ::placeholder {
  }

  border: ${({ emailValidState }) =>
    emailValidState === "INITIAL"
      ? null
      : emailValidState === "VALID"
      ? "1px solid green"
      : "3px solid orange"};

  &:focus {
    /* border: none; */

    border: ${({ emailValidState }) =>
      emailValidState === "INITIAL" ? "1px solid blue" : null};

    outline: none;
  }
`;

const FormButton = styled.div`
  font-size: var(--p2-size);
  background-color: var(--primary-red); // primary color
  padding: 7px 17px;
  color: var(--light-text);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;
