import Contact from "@/components/Contact";
import Title from "@/components/Title";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${prompt.className}`}
    >
      <Title />
      <Contact />
    </main>
  );
}
