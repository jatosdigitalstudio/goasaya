'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';

const WhatsappButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > -10)
    }

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    // const jumpAnimation = {
    //     y: [0, -10, 0, -10, 0],
    //     transition: {
    //         y: {
    //         duration: 0.7,
    //         ease: 'easeOut',
    //         repeat: 1,
    //         },
    //     },
    // }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-8 right-8 z-99"
            >
            {isVisible && (
                <Link 
                    href="https://wa.me/6281338382845" 
                    target='_blank'
                    className='flex flex-row justify-center gap-2'
                    >
                    <motion.button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className='flex flex-row gap-4 justify-center items-center bg-cream border border-maroon p-2 cursor-pointer rounded-md'
                    >
                        <Image
                            src="/images/icon-wa.png"
                            alt="Whatsapp GOASAYA"
                            width={30}
                            height={30}
                        />
                        {/* <span className='hidden md:flex leading-[0.6] text-sm text-black'>Book a Table</span> */}
                    </motion.button>
                </Link>
            )}
        </motion.div>
    ) 
} 

export default WhatsappButton