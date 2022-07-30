import styled from "styled-components";
import { Button } from "../components/buttons/button";
import { Logo } from "../components/logo";
import headerBackgroundImage from "./../assets/images/header/hbg-1.jpg";
import TvImage from "./../assets/images/tv.png";
import PhoneImage from "./../assets/images/phone.jpg";
import PhoneInsideImage from "./../assets/images/phone-inside-image.png";
import DevicePileImage from "./../assets/images/device-pile.png";
import ChildrenImage from "./../assets/images/children.png";
import { device } from "../styles/device";

import { useEffect, useState } from "react";
import TvVideo from "./../assets/videos/tv-video.m4v";
import DevicesPileVideo from "./../assets/videos/video-devices.m4v";
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
    video: TvVideo,
  },
  {
    title: "Download your programmes to watch offline.",
    subtitle: "Save your favourites easily and always have something to watch.",
    image: PhoneImage,
    video: null,
  },
  {
    title: "Watch everywhere.",
    subtitle:
      "Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.",
    image: DevicePileImage,
    video: null,
  },
  {
    title: "Create profiles for children.",
    subtitle:
      "Send children on adventures with their favourite characters in a space made just for them – free with your membership.",
    image: ChildrenImage,
    video: null,
  },
];

export const SignUp = () => {
  useEffect(() => {
    console.log();
  }, []);
  return (
    <Body>
      {/* <Header>
        <HeaderTopRow>
          <Logo />
          <Button text={"Sign In"} />
        </HeaderTopRow>
        <HeaderCenterContent>
          <H2>Unlimited films, TV programmes and more. </H2>
          <H3>Watch anywhere. Cancel at any time. </H3>
          <SignUpEmailAddress />
        </HeaderCenterContent>
      </Header> */}
      {data.map(({ title, subtitle, image, video }, key) => (
        <Card key={key} index={key}>
          <CardTextContainer>
            <H2>{title}</H2>
            <H3>{subtitle}</H3>
          </CardTextContainer>

          <ImageContainer style={{ position: "relative" }}>
            <img src={image} alt="" style={{ position: "absolute" }} />
            <video autoPlay loop muted src={video}></video>
          </ImageContainer>
        </Card>
      ))}

      {/* <div style={{ position: "relative" }}>
        <img
          src={TvImage}
          alt=""
          style={{ width: "500px", position: "absolute" }}
        />
        <video
          width="500px"
          autoPlay
          loop
          muted
          src={TvVideo}
          style={{ width: "500px" }}
        ></video>
      </div> */}

      {/* <SemiFooter>
        <FAQ />

        <SemiFooterSignUpEmailAddressContainer>
          <SignUpEmailAddress />
        </SemiFooterSignUpEmailAddressContainer>
      </SemiFooter>
      <Footer /> */}
    </Body>
  );
};

const ImageContainer = styled.div`
  img {
    margin: 0 2%;
    width: 530px;
    height: 397px;
    @media ${device.laptop} {
      width: 353px;
      height: 264px;
    }

    @media ${device.mobileL} {
      width: 279px;
      height: 208px;
    }
  }

  video {
    margin: 3% 6%;
    width: 442px;
    height: 330px;
    @media ${device.laptop} {
      width: 294px;
      height: 303px;
    }

    @media ${device.mobileL} {
      width: 260px;
      height: 190px;
    }
  }
`;

const Body = styled.div`
  background-color: var(--light-gray);
`;

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
  /* margin: 0 100px; */
  position: relative;
  max-width: 550px;
  margin: 0 2%;
`;
const Card = styled.div`
  background-color: black;
  height: max-content;
  padding: 100px 50px;
  display: flex;
  justify-content: center;

  margin-bottom: 10px;

  flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};

  @media ${device.laptop} {
    padding: 50px 25px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    padding: 50px 25px;
  }

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
  margin: 0 auto;
  padding: 20px 60px;
  width: 90vw;
  max-width: 1800px;

  @media ${device.tablet} {
    background-color: yellow;
  }
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
