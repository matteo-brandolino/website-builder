"use client";
import { getMain } from "@/sanity/sanity-utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function MainPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["main"],
    queryFn: () => getMain(),
  });
  if (isLoading) {
    return <h1>is loading</h1>;
  }

  if (error || data === undefined) {
    return <h1>Something wrong...</h1>;
  }

  const { title, subtitle, mainImage } = data;

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 xl:flex xl:justify-center xl:items-center xl:mx-auto xl:max-w-7xl">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      ></div>
      <div className="mx-auto xl:mx-0 max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center xl:text-start">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
      {mainImage && (
        <Image
          priority={true}
          className="mx-auto"
          src={mainImage}
          alt=""
          width={512}
          height={512}
        />
      )}
    </div>
  );
}
