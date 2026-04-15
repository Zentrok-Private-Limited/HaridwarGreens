"use client";
import About from "@/app/components/About"
import Home from "@/app/components/Home"
import Products from "@/app/components/Products"
import WhyUs from "@/app/components/WhyUs"
import Testimonals from "@/app/components/Testimonals"
import Contact from "@/app/components/Contact"


export default function Page() {

  return (
    <div>
      
      <Home/>
      <About/>
      <Products/>
      <WhyUs/>
      <Testimonals/>
      <Contact/>
    </div>
  );
}
