import React, { useState } from 'react';
import { Oooh_Baby } from "next/font/google";
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  title: string;
  text: string;
  author: string;
}

const ooohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  subsets: ["latin"],
  weight: "400",
});

const testimonialsData: Testimonial[] = [
  { id: 1, title: "Tastes just like fresh!", text: "I was honestly surprised how fresh these strawberries tasted. Perfect for my morning smoothies!", author: "Priya S." },
  { id: 2, title: "Super convenient & healthy", text: "No more washing and cutting fruits every day. These frozen fruits save me so much time.", author: "Rohit M." },
  { id: 3, title: "Perfect for smoothies 🥤", text: "The mango chunks are naturally sweet and blend so well. My go-to for post-workout shakes.", author: "Anjali K." },
  { id: 4, title: "Quality is top-notch", text: "You can tell these are premium quality fruits. No added sugar, just pure goodness.", author: "Neha T." },
  { id: 5, title: "Great for desserts 🍰", text: "Used the frozen blueberries for baking and they turned out amazing. Highly recommend!", author: "Amit R." },
  { id: 6, title: "Always fresh, always ready", text: "Love how I can use them anytime without worrying about spoilage. Total game changer!", author: "Simran P." }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextStep = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevStep = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    // Removed the excessive padding (py-20) to ensure it fits on laptop screens
    <div className="relative flex flex-col min-h-screen pt-16 pb-8 bg-[url('/testimonalFinal.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      
      {/* 1. TOP SECTION: Header */}
      <h2 className="relative z-10 text-white text-5xl md:text-7xl font-black text-center leading-[0.85] px-4">
        Don't take our<br /><span className={ooohBaby.className}> word </span> for it
      </h2>

      {/* 2. BOTTOM SECTION: The magic here is `mt-auto`. It pushes this entire block to the very bottom of the screen */}
      <div className="relative z-10 mt-auto w-full flex flex-col">
        
        {/* Navigation Arrows */}
        <div className="flex gap-4 px-8 md:px-16 mt-25 justify-center md:justify-center">
          <button 
            onClick={prevStep}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg z-20"
          >
            <svg className="w-6 h-6 text-[#1b3d2f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextStep}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg z-20"
          >
            <svg className="w-6 h-6 text-[#1b3d2f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Animated Container - Height slightly reduced to ensure it fits inside min-h-screen */}
        <div className="relative w-full flex justify-center items-center h-[450px]">
          <div className="flex items-center">
            {testimonialsData.map((t, index) => {
              const isActive = index === currentIndex;
              
              return (
                <motion.div
                  key={t.id}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.9,
                    opacity: 1,
                    x: (index - currentIndex) * 380,
                    zIndex: isActive ? 10 : 0
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-2xl w-85 md:w-95 h-75 flex flex-col shadow-2xl transition-colors duration-500
                    ${isActive ? 'bg-white' : 'bg-white/10 backdrop-blur-md border border-white/30'}
                  `}
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 ${isActive ? 'text-[#1b3d2f]' : 'text-white'}`}>
                    {t.title}
                  </h3>
                  
                  <p className={`text-lg leading-relaxed flex-grow ${isActive ? 'text-[#1b3d2f]/80' : 'text-white/90'}`}>
                    {t.text}
                  </p>

                  <div className={`pt-6 border-t flex justify-between items-center ${isActive ? 'border-gray-100' : 'border-white/10'}`}>
                    <span className={`font-bold ${isActive ? 'text-[#1b3d2f]' : 'text-white'}`}>
                      {t.author}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-5 h-5 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-[#4ADE80]' : 'text-white/60'}`}>
                        Verified
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;