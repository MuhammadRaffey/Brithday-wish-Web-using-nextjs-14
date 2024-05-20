import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";

export default function ImageCard() {
  return (
    <Card className="mt-1 ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className=" font-bold">Happy </small>
        <h4 className="font-bold text-large">Brithday Nana G ❤️😍</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/JR.jpg"
          width={270}
          height={150}
        />
      </CardBody>
    </Card>
  );
}
