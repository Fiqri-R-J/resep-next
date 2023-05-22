import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLogin =
      localStorage.getItem("token") &&
      localStorage.getItem("profile") &&
      localStorage.getItem("isLogin");
    if (getLogin) {
      router.replace("/");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const connect = await axios.post("/api/login", {
        email,
        password,
      });
      setIsLoading(false);
      setError(null);

      localStorage.setItem("isLogin", "true");
      localStorage.setItem("token", JSON.stringify(connect.data.data.token));
      localStorage.setItem(
        "profile",
        JSON.stringify(connect.data.data.profile)
      );
      router.reload();
    } catch (error) {
      setIsLoading(false);
      setError(
        error?.response?.data?.message ?? "something wrong in our server"
      );
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  Welcome
                </h1>
                <p className="text-sm text-gray-400 mb-8 text-center">
                  Log in into your exiting accounts
                </p>
                <form>
                  {error && <p>{error}</p>}
                  <div class="mb-4">
                    <label class="block mb-2 text-slate-500" for="username">
                      E-mail
                    </label>
                    <input
                      class="w-80 px-3 py-2 border rounded-md focus:border-primary focus:outline-none"
                      type="email"
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    class="w-full py-2 px-4 bg-primary hover:bg-yellow-500 active:bg-primary text-white  rounded-md"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                  <p className="text-center text-sm mt-5 text-gray-400 ">
                    Don’t have an account?{" "}
                    <Link href="/auth/signup" className="text-primary">
                      Sign Up
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
