import "@/src/css/landing.css";
import Navbar from "@/src/components/navbar";
import Social from "@/src/components/social";
import SocialTwo from "@/src/components/socialTwo";
import Hero from "@/src/components/hero";
import Aboutme from "@/src/components/Aboutme";
import ProjectCards from "@/src/components/ProjectCards";
import SayHello from "@/src/components/SayHello";
import SocialFoot from "@/src/components/SocialFoot";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Social />
      <SocialTwo />
      <main className="app2">
        <Hero />
        <Aboutme />
        <ProjectCards />
        <SayHello />
      </main>
      <SocialFoot />
    </div>
  );
}
