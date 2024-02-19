import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${prompt.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Creative Developer&nbsp;
          <code className="font-mono font-bold">& Designer</code>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-9xl font-bold">Deniz Orsel</h1>
        <p className="md:text-4xl font-light">
          <a href='mailto:denizonerorsel@gmail.com'>denizonerorsel@gmail.com</a>
        </p>
      </div>
    </main>
  );
}
