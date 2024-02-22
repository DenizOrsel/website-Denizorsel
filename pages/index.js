import Contact from "@/components/Contact";
import House3d from "@/components/House3d";
import Navigation from "@/components/Navigation";
import { Prompt } from "next/font/google";
import { Canvas } from "@react-three/fiber";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${prompt.className}`}
    >
      <Navigation />
      <Canvas className="canvas">
        <House3d />
      </Canvas>
      <Contact />
    </main>
  );
}
