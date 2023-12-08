"use client";

import Image from "next/image";
import { Button, Typography, Input } from "@material-tailwind/react";


function Hero() {
  return (
    <header className="mt-5 bg-white p-8">
    <div className="w-full lg:container lg:mx-auto">
      <Image
        width={1024}
        height={400}
        src="/image/food-back.jpg"
        alt="credit cards"
        className="h-96 w-full rounded-lg object-cover lg:h-[21rem]"
      />
    </div>
    <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
      <Typography
        color="blue-gray"
        className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
      >
        About
      </Typography>
      <Typography
        variant="lead"
        className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
      >
        -insert about us and healthy recipe quote here-
      </Typography>
      <div className="grid place-items-start justify-center gap-2">
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="w-80">
            {/* @ts-ignore */}
            <Input label="name@email.com" />
          </div>
          <Button size="md" className="lg:w-max shrink-0" fullWidth color="gray">
            Sign up for our newsletter
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Typography variant="small" className="font-normal text-gray-700">
            See our{" "}
            <a
              href="#"
              className="hover:text-gray-900 transition-colors underline"
            >
              Terms and Conditions
            </a>
          </Typography>
        </div>
      </div>
    </div>
  </header>
  );
}
export default Hero;
