// Interesting, need to import like this
import React from "react";
import heart from "../assets/heart.png";
import negative from "../assets/negative.png";
import neutral from "../assets/neutral.png";

interface Props {
  direction: string;
}

const FoxDisplayCard: React.FunctionComponent<Props> = (props) => {
  const { direction } = props;

  switch (direction) {
    case "positive":
      return <img src={heart} />;

    case "negative":
      return <img src={negative} />;

    case "neutral":
      return <img src={neutral} />;
  }
};

export default FoxDisplayCard;
