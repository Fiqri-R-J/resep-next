import Head from "next/head";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="bg-white drop-shadow-lg">
          <div className="flex flex-row">
            <div className="basis-6/12 bg-white ms-10 shadow-right">
              <h1 className="text-6xl font-semibold text-secondary mt-40">
                Discover Recipe & Delicious Food
              </h1>
              <input
                className="bg-slate-200 w-4/5 h-12 mt-7 px-5 rounded-md"
                type="text"
                name="search"
                placeholder="Search....."
              />
            </div>
            <div className="basis-6/12 bg-bgImage h-screen">
              <img
                src="/main.png"
                className="w-10/12 h-10/12 mx-auto mt-10"
                alt="main"
              />
            </div>
          </div>
        </div>
        <div className="bg-white h-screen mt-20">
          <div className="border-l-8 border-yellow-500 ms-10 h-14">
            <h2 className="text-3xl font-semibold m-2 py-2">New Recipe</h2>
          </div>
          <div className=" mt-10">
            <div className="flex flex-row">
              <div className="basis-6/12">
                <div className="relative">
                  <div className=" h-96 w-72 bg-yellow-400 rounded-r-lg"></div>
                  <img
                    src="/burger.png"
                    className="absolute left-10 top-10 h-96 w-96"
                    alt="New Recipe"
                  />
                </div>
              </div>
              <div className="basis-6/12">
                <div className="w-80 mt-32">
                  <h1 className=" text-3xl font-semibold mb-5">
                    Healthy Bone Broth Ramen (Quick & Easy)
                  </h1>
                  <p className="text-lg">
                    Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen
                    in a hurry? That’s right!
                  </p>
                  <button className="h-10 w-32 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-400 hover:text-slate-50 text-white mt-5 rounded-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
