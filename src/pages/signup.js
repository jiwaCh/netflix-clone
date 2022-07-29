import styled from "styled-components";
import { Button } from "../components/buttons/button";
import { Logo } from "../components/logo";
import headerBackgroundImage from "./../assets/images/header/hbg-1.jpg";
import TvImage from "./../assets/images/tv.png";

import { useEffect, useState } from "react";
import TvVideo from "./../assets/videos/tv-video.m4v";
import { FAQ } from "../components/faq";
import { SignUpEmailAddress } from "./../components/form/signup-email-address";
import { Footer } from "../components/footer";

const data = [
  {
    title: "Enjoy on your TV.",
    subtitle:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    // image: "./../assets/images/tv.png",
    image: TvImage,
  },
  {
    title: "Download your programmes to watch offline.",
    subtitle: "Save your favourites easily and always have something to watch.",
    image: TvImage,
  },
  {
    title: "Watch everywhere.",
    subtitle:
      "Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.",
    image: TvImage,
  },
  {
    title: "Create profiles for children.",
    subtitle:
      "Send children on adventures with their favourite characters in a space made just for them – free with your membership.",
    image: TvImage,
  },
];

export const SignUp = () => {
  useEffect(() => {
    console.log();
  }, []);
  return (
    <>
      <Header>
        <HeaderTopRow>
          <Logo />
          <Button text={"Sign In"} />
        </HeaderTopRow>
        <HeaderCenterContent>
          <H2>Unlimited films, TV programmes and more. </H2>
          <H3>Watch anywhere. Cancel at any time. </H3>
          <SignUpEmailAddress />
        </HeaderCenterContent>
      </Header>
      {data.map(({ title, subtitle, image }, key) => (
        <Card key={key} index={key}>
          <CardTextContainer>
            <H2>{title}</H2>
            <H3>{subtitle}</H3>
          </CardTextContainer>
          <CardImageContainer>
            <img src={image} alt="" style={{ width: "500px" }} />
          </CardImageContainer>
        </Card>
      ))}

      <SemiFooter>
        <FAQ />

        <SemiFooterSignUpEmailAddressContainer>
          <SignUpEmailAddress />
        </SemiFooterSignUpEmailAddressContainer>
      </SemiFooter>
      <Footer />
    </>
  );
};

export const Test = () => {
  return (
    <>
      {data.map(({ title, subtitle, image, key }) => (
        <div key={key}>
          <div>
            {title} {subtitle}
          </div>
          <img src={require(image)} alt="" style={{ width: "500px" }} />
        </div>
      ))}
    </>
  );
};

const SemiFooter = styled.div`
  background-color: black;
  padding: 100px 0;
  margin-bottom: 10px;
`;
const SemiFooterSignUpEmailAddressContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CardImageContainer = styled.div`
  /* position: relative;
  width: 1000px; */
`;

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 100px;
  position: relative;
`;
const Card = styled.div`
  background-color: black;
  height: 500px;
  display: flex;
  margin-bottom: 10px;

  flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};

  position: relative;
`;

const HeaderCenterContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
`;

const H3 = styled.div`
  font-size: var(--h3-size);
  font-weight: var(--font-weight-medium);
  color: var(--light-text);
  margin-top: 10px;
`;

const H2 = styled.div`
  font-size: var(--h2-size);
  font-weight: var(--font-weight-bold);
  color: var(--light-text);
`;

const HeaderTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
`;

const Header = styled.div`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8)
    ),
    url(${headerBackgroundImage});
  background-size: cover;
  height: 100vh;
  margin-bottom: 10px;
`;

// const CardImageContainer = styled.div`
//   /* position: relative;
//   width: 1000px; */
// `;

{
  /* <img
            src={TvImage}
            alt=""
            style={{ width: "500px", position: "absolute" }}
          /> */
}
{
  /* <video
            width="350px"
            autoPlay
            loop
            muted
            src={TvVideo}
            style={{ position: "absolute", top: 80, right: 100 }}
          ></video> */
}
