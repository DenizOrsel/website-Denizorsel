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
      className={`flex flex-col items-center justify-between ${prompt.className} 
        bg-gradient-to-br from-yellow-400 to-green-500 h-screen`}
    >
      <Navigation />
      <div className="canvas-container">
        <Canvas camera={{ position: [10, 2, 3], zoom: 1 }}>
          <House3d />
        </Canvas>
      </div>
      <Contact />
    </main>
  );
}
