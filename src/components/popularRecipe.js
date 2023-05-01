export default function PopularRecipe() {
  return (
    <>
      <div className="bg-white h-screen mt-20">
        <div className="border-l-8 border-yellow-500 ms-10 mt-20 h-14">
          <h2 className="text-3xl font-semibold m-2 py-2">Popular Recipe</h2>
        </div>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-3 gap-4">
            <a href="#" className="relative rounded-lg">
              <div className="absolute transition ease-in-out delay-150 hover:bg-black/30 rounded-lg h-full w-full"></div>
              <img src="/burger.png" className="" alt="tes" />
              <h5 className="absolute left-0 top-80 ps-5 text-2xl font-semibold tracking-tight text-white">
                Burger
              </h5>
            </a>
            <a href="#" className="relative rounded-lg">
              <div className="absolute transition ease-in-out delay-150 hover:bg-black/30 rounded-lg h-full w-full"></div>
              <img src="/burger.png" className="" alt="tes" />
              <h5 className="absolute left-0 top-80 ps-5 text-2xl font-semibold tracking-tight text-white">
                Burger
              </h5>
            </a>
            <a href="#" className="relative rounded-lg">
              <div className="absolute transition ease-in-out delay-150 hover:bg-black/30 rounded-lg h-full w-full"></div>
              <img src="/burger.png" className="" alt="tes" />
              <h5 className="absolute left-0 top-80 ps-5 text-2xl font-semibold tracking-tight text-white">
                Burger
              </h5>
            </a>
            <a href="#" className="relative rounded-lg">
              <div className="absolute transition ease-in-out delay-150 hover:bg-black/30 rounded-lg h-full w-full"></div>
              <img src="/burger.png" className="" alt="tes" />
              <h5 className="absolute left-0 top-80 ps-5 text-2xl font-semibold tracking-tight text-white">
                Burger
              </h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
