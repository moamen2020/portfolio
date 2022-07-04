import React from "react";
import Lottie from "react-lottie";
// import data from "./70811-modern-background-animation.json";
import data from "./78255-background-looping-animation.json";

const BackgroundAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="animation">
      <Lottie
        options={defaultOptions}
        height="100vh"
        width="100%"
        animationPosition={"center"}
        autoplay={true}
      />
    </div>
  );
};

export default BackgroundAnimation;
