import { useRouter } from "next/router";
import { useState } from "react";

export default function Logout() {
  const router = useRouter();
  useState(() => {
    setTimeout(() => {
      localStorage.clear();
      router.replace("/");

      // localStorage.removeItem("token")
      // localStorage.removeItem("isLogin")
      // localStorage.removeItem("profile")
    });
  });

  return <>Logout</>;
}
