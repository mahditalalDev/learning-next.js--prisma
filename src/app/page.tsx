import Hero from "@/components/home/Hero";
import WebHostingPlan from "@/components/home/WebHostingPlan";

const HomePage = () => {
 
  return (
    <section>
      <Hero />
      <h2 className="text-3xl capitalize text-black text-center my-3 font-bold" >Choose your web hosting plan</h2>
      <div className="container  m-auto flex  justify-center my-7 flex-wrap  items-center md:gap-7">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>



    </section>
  );
};

export default HomePage;
