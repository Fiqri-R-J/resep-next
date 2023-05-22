import Link from "next/link";
export default function login() {
  return (
    <>
      <main>
        <div className="flex flex-row">
          <div class="basis-6/12">
            <div className="bg-bgLoginRegister bg-cover bg-no-repeat h-screen ">
              <div className="bg-primary/80 h-screen">
                <div className="grid place-content-center pt-72">
                  <img
                    src="/logo.png"
                    className="w-[100px] h-[100px]"
                    alt="logo"
                  />
                  <h3 className="text-base font-semibold text-white">
                    Mama Recipe.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-6/12">
            <div className="h-screen flex justify-center items-center">
              <div className="bg-white">
                <h1 className="text-2xl font-semibold mb-8 text-center text-primary">
                  Let’s Get Started !
                </h1>
                <p className="text-sm text-gray-400 mb-8 text-center">
                  Create new account to access all features
                </p>
                <form>
                  <div class="mb-4">
                    <label class="block mb-2 text-slate-500" for="name">
                      Name
                    </label>
                    <input
                      class="w-80 px-3 py-2 border rounded-md focus:border-primary focus:outline-none"
                      type="text"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block mb-2 text-slate-500" for="email">
                      Email address*
                    </label>
                    <input
                      class="w-80 px-3 py-2 border rounded-md focus:border-primary focus:outline-none"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block mb-2 text-slate-500" for="phone">
                      Phone Number
                    </label>
                    <input
                      class="w-80 px-3 py-2 border rounded-md focus:border-primary focus:outline-none"
                      type="number"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block mb-2 text-slate-500" for="password">
                      Password:
                    </label>
                    <input
                      class="w-full px-3 py-2 border rounded-md focus:border-primary focus:outline-none"
                      type="password"
                      id="password"
                      name="password"
                    />
                  </div>
                  <button
                    class="w-full py-2 px-4 bg-primary hover:bg-yellow-500 active:bg-primary text-white  rounded-md"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <p className="text-center text-sm mt-5 text-gray-400 ">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-primary">
                      Log In Here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
