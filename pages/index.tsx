import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Loading: React.FC = () => {
  return (
    <>
      <div className="min-h-screen items-center justify-center bg-gray-900">
        <h1 className="h-30 bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent text-3xl font-bold underline" />
        <div className="grid grid-cols-3">
          {[...Array<number>(9)].map((i) => (
            <div key={i} className="p-3 m-2">
              <div className="relative space-y-5 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent">
                <div className="h-24 rounded-lg bg-rose-100/10"></div>
                <div className="space-y-3">
                  <div className="h-3 w-3/5 rounded-lg bg-rose-100/10"></div>
                  <div className="h-3 w-4/5 rounded-lg bg-rose-100/20"></div>
                  <div className="h-3 w-2/5 rounded-lg bg-rose-100/20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="min-h-screen items-center justify-center bg-gray-900">
        <h1 className="text-white text-3xl font-bold underline">
          Hello world!
        </h1>

        <div className="grid grid-cols-3">
          {[...Array<number>(9)].map((i) => (
            <div key={i} className="p-3 m-2">
              <div className="relative space-y-5 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full">
                <div className="h-24 rounded-lg">
                  <Image
                    src="https://placehold.jp/3d4070/ffffff/150x150.png"
                    width={400}
                    height={140}
                  />
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-3/5 rounded-lg text-white">hoge</div>
                  <div className="h-3 w-4/5 rounded-lg text-white">
                    hogehoge
                  </div>
                  <div className="h-3 w-2/5 rounded-lg text-white">
                    hogehogehoge
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
