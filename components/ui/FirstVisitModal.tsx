// "use client";

// import { useEffect, useState } from "react";
// import { trackEvent } from "@/lib/analytics";
// import { X } from "lucide-react";

// export default function FirstVisitModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasTracked, setHasTracked] = useState(false);

//   useEffect(() => {
//     // Prevent double-trigger in React Strict Mode
//     let locked = false;

//     const hasVisited = localStorage.getItem("goasaya_first_visit");

//     if (!hasVisited && !locked) {
//       locked = true;
//       setIsOpen(true);

//       if (!hasTracked && typeof window !== "undefined") {
//         setHasTracked(true);

//         // Fire only ONCE
//         trackEvent("first_visit_modal_open", {
//           category: "modal",
//           label: "First Visit Modal",
//         });

//         localStorage.setItem("goasaya_first_visit", "true");
//       }
//     }
//   }, [hasTracked]);

//   if (!isOpen) return null;

//   const closeModal = () => {
//     setIsOpen(false);

//     trackEvent("first_visit_modal_close", {
//       category: "modal",
//       label: "Close Button Clicked",
//     });
//   };

//   return (
//     <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex justify-center items-center">
//       <div className="relative bg-white rounded-xl p-8 max-w-md w-full text-black">

//         {/* CLOSE BUTTON */}
//         <button
//           onClick={closeModal}
//           className="absolute top-3 right-3 text-black hover:text-red-500 transition"
//           aria-label="Close modal"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-xl font-semibold mb-4">Welcome to Goasaya</h2>
//         <p className="text-sm opacity-80 mb-6">
//           Enjoy an immersive dining experience inspired by Asian heritage.
//         </p>

//         <button
//           onClick={closeModal}
//           className="w-full bg-maroon text-white py-2 rounded-lg hover:bg-black transition"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function FirstVisitModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-2xl"
      >
        <div className="relative h-[460px] w-full">
          <Image
            src="/images/goa1.jpg"
            alt="GoaSaya Popup Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/90" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center py-4 px-8 md:px-14">
            {/* <h2 className="text-white font-style text-2xl md:text-3xl font-style mb-4">
              Dear Valued Guests
            </h2>

            <p className="text-white/90 font-text text-sm md:text-base leading-relaxed mb-6">
              We will be temporarily closed from <strong>15th - 16th November</strong> {" "}
              as we take a moment to refresh and refine our space. <br /><br /> This short pause 
              allows us to return with the warmth, comfort and experience you’ve come to love.
              <br /><br />
              Thank you for your understanding, we can’t wait to welcome you back on 
              <strong> 17th November</strong>.
            </p>

            <p className="text-white text-sm md:text-base italic mb-8">
              With Love, <br /> GoaSaya Family.
            </p> */}

            <h2 className="text-white font-style text-3xl md:text-2xl font-style mb-4 uppercase">
              We are under maintenance
            </h2>

            <p className="text-white/90 font-text text-sm md:text-base leading-relaxed mb-6">
              Temporarily closed on <strong>15th - 16th November</strong> {" "}
              as we refresh and refine our space. <br /><br/> 

              We look forward to welcoming you back <br /> on  <strong className="text-orangecream"> 17th November</strong>.
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-6  px-6 py-2 bg-white text-black rounded-xl text-sm md:text-base font-medium hover:bg-cream transition"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
