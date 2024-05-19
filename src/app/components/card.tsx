import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="birthdayCard m-20">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Junaid!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
        <Image
          src="/j.jpg"
          alt="Front Image"
          className="frontImage"
          width={200}
          height={200}
        />
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY Jani!</h3>
        <p>Dear Junaid,</p>
        <p className=" text-wrap">
          Happy birthday!! I hope your day is filled with lots of love and
          laughter! May all of your JAAIZ birthday wishes come true.
        </p>
        <p className="">Raffey</p>
      </div>
    </div>
  );
};

export default Card;
