'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const WhatsappButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[99]"
    >
      <Link 
        href="https://wa.me/6281338382845" 
        target="_blank"
        className="flex flex-row justify-center gap-2"
      >
        <motion.button
          aria-label="Contact via WhatsApp"
          className="flex justify-center items-center cursor-pointer"
        >
          <Image
            src="/images/icon-wa-btn.png"
            alt="Whatsapp GOASAYA"
            width={50}
            height={50}
          />
          {/* <span className="hidden md:flex leading-[0.6] text-sm text-black">Book a Table</span> */}
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default WhatsappButton
