export default function Hero() {
  return (
    <>
      <div className="bg-white drop-shadow-lg">
        <div className="flex flex-row">
          <div className="basis-6/12 bg-white ms-10 shadow-right">
            <h1 className="text-6xl font-semibold text-secondary mt-40">
              Discover Recipe & Delicious Food
            </h1>
            <input
              className="bg-slate-200 w-4/5 h-12 mt-7 border px-5 rounded-md focus:border-primary focus:outline-none"
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
    </>
  );
}
