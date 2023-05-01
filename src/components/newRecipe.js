export default function NewRecipe() {
  return (
    <>
      <div className="bg-white h-screen mt-20">
        <div className="border-l-8 border-yellow-500 ms-10 h-14">
          <h2 className="text-3xl font-semibold m-2 py-2">New Recipe</h2>
        </div>
        <div className=" mt-10">
          <div className="flex flex-row">
            <div className="basis-6/12">
              <div className="relative">
                <div className=" h-[500px] w-[350px] bg-yellow-400 rounded-r-lg"></div>
                <img
                  src="/burger.png"
                  className="absolute left-10 top-10 h-[500px] w-[500px]"
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
    </>
  );
}
