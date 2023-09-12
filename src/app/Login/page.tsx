"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const { data, status } = useSession();
  console.log("data: " + data);
  console.log("status: " + status);
  const router = useRouter();
  if (status === "loading") {
    <p>Loading broooo.....</p>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="bg-green-200 h-screen flex flex-col justify-center items-center">
      <Link href={"/"} className="text-3xl pb-7">Home</Link>
      <div className=" bg-yellow-200 w-[40vh] h-[40vh] flex justify-center items-center flex-col gap-4">
        <p>Login with</p>
        <div className="flex justify-center items-center text-center ">
          <button
            className="bg-red-400 gap-2 p-2 text-white rounded-lg flex flex-col justify-center items-center text-center "
            onClick={() => signIn("google")}
          >
            GOOGLE <FcGoogle className="text-xl" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
