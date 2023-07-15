import Link from "next/link";
import React from "react";

export default function NewRecipe(props) {
  const { isLoading } = props;
  return (
    <>
      <div className="h-screen mt-20 bg-white">
        <div className="border-l-8 border-yellow-500 ms-10 h-14">
          <h2 className="py-2 m-2 text-3xl font-semibold">New Recipe</h2>
        </div>
        <div className="mt-10 ">
          <div className="flex flex-row">
            <div className="basis-6/12">
              <div className="relative">
                <div className=" h-[500px] w-[350px] bg-yellow-400 rounded-r-lg"></div>
                <div className="absolute left-10 top-10 h-[500px] w-[500px] bg-slate-500">
                  {isLoading ? (
                    <div className="animate-pulse h-[500px] w-[500px] bg-slate-400"></div>
                  ) : null}
                  <img
                    src={props?.item?.[0]?.picture}
                    className="h-[500px] w-[500px]"
                    alt="New Recipe"
                  />
                </div>
              </div>
            </div>
            <div className="basis-6/12">
              <div className="mt-32 w-80 ms-20">
                {isLoading ? (
                  <div className="h-10 col-span-2 rounded-lg bg-slate-400"></div>
                ) : null}
                <h1 className="mb-5 text-3xl font-semibold ">
                  {props?.item?.[0]?.name}
                </h1>
                {isLoading
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <React.Fragment key={index}>
                        <div className="h-2 col-span-2 mt-2 rounded bg-slate-400"></div>
                        <div className="h-2 col-span-2 mt-2 rounded w-60 bg-slate-400"></div>
                      </React.Fragment>
                    ))
                  : null}
                <p className="text-lg">{props?.item?.[0]?.description}</p>
                <Link href={`/recipe/${props?.item?.[0]?.slug}`}>
                  <button className="w-32 h-10 mt-5 text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 active:bg-yellow-400 hover:text-slate-50">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
