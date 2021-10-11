import React from "react";
import Image from "next/image";

interface imageProps {
  imageURL: string;
  imageALT?: string;
}

export const image: React.FC<imageProps> = (prop) => {
  return (
    <Image src={prop.imageURL} alt={prop.imageALT} width="auto" height="auto" />
  );
};

export default image;
