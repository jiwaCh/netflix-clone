import styled from "styled-components";

export const Logo = () => {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/mqw6ikt.css" />
      <LogoContainer>Cloneflix</LogoContainer>
    </>
  );
};

const LogoContainer = styled.div`
  text-transform: uppercase;
  color: var(--primary-red);
  font-weight: var(--font-weight-bold);
  font-size: var(--h2-size);
`;
