"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    smoking: "No",
    pax: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation Submitted:", form);

    const message = 
        `
        *New Reservation Request - GOASAYA*
        -----------------------------------
        Name: ${form.name}
        Phone: ${form.phone}
        Date: ${form.date}
        Time: ${form.time}
        Smoking Area: ${form.smoking}
        Pax: ${form.pax}
        -----------------------------------
        Please confirm my reservation.
        `;

        const phoneNumber = "6281338382845"; 

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-black/75 rounded-md text-white py-20 px-6 md:px-12">
      <div className="max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-style uppercase mb-16 text-center"
        >
          Reservation
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-6 font-text"
        >
          <div>
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm mb-2 text-gray-300">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all text-white"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-2 text-gray-300">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Area</label>
            <select
              name="smoking"
              value={form.smoking}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all"
            >
              <option value="No Smoking" className="text-black">No Smoking</option>
              <option value="Smoking" className="text-black">Smoking</option>
              <option value="E-Cigarette" className="text-black">E-Cigarette</option>
              <option value="The Cave" className="text-black">VIP The Cave <br /> <br />(up to 8 pax)</option>
              <option value="The Hole" className="text-black">VIP The Hole <br /><br />(up to 12 pax)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Pax</label>
            <input
              type="number"
              name="pax"
              min="1"
              value={form.pax}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all"
            />
          </div>

          <div className="pt-6 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-[#FFE3AF] rounded-md text-black px-10 py-3 uppercase text-sm tracking-wider hover:bg-gray-200 transition-all"
            >
              Reserve Now
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
