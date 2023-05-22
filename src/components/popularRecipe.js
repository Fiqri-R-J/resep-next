import Link from "next/link";
export default function PopularRecipe(props) {
  console.log(props);
  return (
    <>
      <div className="mt-20 bg-white ">
        <div className="mt-20 border-l-8 border-yellow-500 ms-10 h-14">
          <h2 className="py-2 m-2 text-3xl font-semibold">Popular Recipe</h2>
        </div>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-3 gap-y-7">
            {props.item.map((item) => (
              <Link href={`/${item?.slug}`}>
                <div className="relative rounded-lg bg-slate-400 h-96 w-96">
                  <div className="absolute transition ease-in-out delay-150 rounded-lg hover:bg-black/70 h-96 w-96"></div>
                  <img
                    src={item?.picture}
                    className="rounded-lg h-96 w-96"
                    alt=""
                  />
                  <h1 className="absolute text-2xl font-semibold text-white bottom-4 left-4">
                    {item?.name}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
