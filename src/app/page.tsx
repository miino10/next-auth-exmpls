"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { data, status } = useSession();

  console.log("status: " + status);
  return (
    <div className="bg-red-300 h-screen">
      {status === "authenticated" ? (
        <button onClick={() => signOut()}>logout</button>
      ) : (
        //
        <Link href={"/Login"}>logIn</Link>
      )}

      <p>main page</p>
      {status === "authenticated" && <p>your name is : {data?.user?.name}</p>}
      {status === "authenticated" && <p>your email is: {data?.user?.email}</p>}
      {status === "authenticated" && <p>{data.user?.image}</p>}
      {status === "authenticated" && <p>{data.expires}</p>}
    </div>
  );
}
