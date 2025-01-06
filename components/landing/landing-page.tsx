import Hero from "./landing-hero";
import Navbar from "./landing-navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col">
      <div className="relative flex-1 w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4">
        <div className="mt-4">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
