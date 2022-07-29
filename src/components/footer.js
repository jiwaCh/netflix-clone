import styled from "styled-components";

const listData = [
  {
    title: "FAQHelp",
    link: "#",
  },
  {
    title: "Help Centre",
    link: "#",
  },
  {
    title: "Account",
    link: "#",
  },
  {
    title: "Media Centre",
    link: "#",
  },

  {
    title: "Investor Relations",
    link: "#",
  },
  {
    title: "Jobs",
    link: "#",
  },
  {
    title: "Redeem gift cards",
    link: "#",
  },
  {
    title: "Buy gift cards",
    link: "#",
  },

  //   ///

  {
    title: "Ways to Watch",
    link: "#",
  },
  {
    title: "Terms of Use",
    link: "#",
  },
  {
    title: "Privacy",
    link: "#",
  },
  {
    title: "Cookie Preferences",
    link: "#",
  },

  {
    title: "Corporate Information",
    link: "#",
  },
  {
    title: "Contact Us",
    link: "#",
  },
  {
    title: "Speed Test",
    link: "#",
  },
  {
    title: "Legal Guarantee",
    link: "#",
  },
  {
    title: "Legal Notices",
    link: "#",
  },
  {
    title: "Only on Netflix",
    link: "#",
  },
];

export const Footer = () => {
  return (
    <Container>
      <List>
        {listData.map(({ title, link }, key) => {
          return (
            <a href={link} key={key}>
              {title}
            </a>
          );
        })}
      </List>
    </Container>
  );
};

const List = styled.div`
  color: var(--light-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  padding: 10px 100px;

  a {
    width: 25vw;
  }
`;
const Container = styled.div`
  background-color: black;
`;
