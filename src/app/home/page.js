import Hero from "@/components/home/Hero";
import Header from "@/components/home/Header";
import MobileMenu from "@/components/common/mobile-menu";

const Home = () => {
  return (
    <>
     <Header />
     <MobileMenu />
      <div className="relative w-full h-full">
        <Hero />
      </div>
    </>
  );
};

export default Home;
