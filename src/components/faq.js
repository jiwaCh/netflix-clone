import styled from "styled-components";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { useState, useRef } from "react";

const faqData = [
  {
    question: "What is Cloneflix?",
    answer:
      "Cloneflix is a personal project created purely for educational purpose",
  },
  {
    question: "How much does Cloneflix cost?",
    answer:
      "Cloneflix is purely for educational purpose, hence it is not and never will be monetised ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum Nunc consequat at orci at viverra. Aliquam erat volutpat. Duis nec cursus erat. Nulla facilisi. Praesent ultrices ante dolor, a interdum justo convallis eget. Etiam est sapien, sodales in tincidunt nec, dignissim vitae arcu. Donec eu erat in mi aliquet gravida vitae ut mi. Aliquam neque sem, ultrices ac condimentum eget, dictum eu nisi. Suspendisse varius est quis vulputate consectetur.  ",
  },
];

export const FAQ = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleOnCardClick = (index) => {
    if (index !== selectedCardIndex) {
      setSelectedCardIndex(index);
    } else {
      setSelectedCardIndex(null);
    }
  };
  return (
    <FaqContainer>
      <H2>Frequently Asked Questions</H2>
      <div style={{ marginTop: "20px" }}>
        {faqData.map(({ question, answer }, index) => {
          return (
            <CardContainer key={index}>
              <QuestionContainer onClick={() => handleOnCardClick(index)}>
                {question}
                {selectedCardIndex === index ? (
                  <AiOutlineClose />
                ) : (
                  <AiOutlinePlus />
                )}
              </QuestionContainer>

              <AnswerContainer
                selectedCardIndex={selectedCardIndex}
                index={index}
              >
                {answer}
              </AnswerContainer>
            </CardContainer>
          );
        })}
      </div>
    </FaqContainer>
  );
};

const QuestionContainer = styled.div`
  font-size: var(--h3-size);
  color: var(--light-text);
  padding: 20px;
  background-color: var(--light-gray);

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const AnswerContainer = styled.div`
  font-size: var(--h3-size);
  color: var(--light-text);
  margin-top: 1px;
  background-color: var(--light-gray);
  padding: 20px;
  height: max-content;

  overflow: hidden;

  display: ${(props) =>
    props.selectedCardIndex === props.index ? "block" : "none"};

  transition: all 0.25s linear;
`;

/*
// below is the code the animation of faq opening and closing -- delete if certain the functionality is not needed
const AnswerContainer = styled.div`
  font-size: var(--h3-size);
  color: var(--light-text);
  margin-top: 1px;
  background-color: var(--light-gray);

  overflow: hidden;

  max-height: ${(props) =>
    props.selectedCardIndex === props.index ? "100%" : "0"};

  padding: ${(props) =>
    props.selectedCardIndex === props.index ? "20px " : "0 20px"};
  transition: all 0.2s linear;
`;
*/
const CardContainer = styled.div`
  margin-top: 10px;
  width: 800px;
`;

const FaqContainer = styled.div`
  /* height: max-content; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.div`
  font-size: var(--h2-size);
  font-weight: var(--font-weight-bold);
  color: var(--light-text);
`;
