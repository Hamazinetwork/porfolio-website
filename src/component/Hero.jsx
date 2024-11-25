import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
        <div className="flex flex-col items-center justify-center gap-10 text-white">
            <motion.div
            initial={{y: -50, opacity:0}}
            animate={{y: 0, opacity:1}}
            transition={{duration:0.8, delay:0.2}}
            >
                <img src="/Pp.JPG" className="W-[300px] cursor-pointer rounded-full shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px] "/>
            </motion.div>
            <motion.div 
            initial={{y: -50, opacity:0}}
            animate={{y: 0, opacity:1}}
            transition={{duration:0.8, delay:0.2}}
            
            className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
                <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-700 transition-all duration-300 hover:opacity-100 ">Rahman Ademola</h1>
                <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl md:text-700" >Mechanical Engineer| Front-end Developer| Data Analyst</h3>
                <p className="md:text-base text-pretty text-sm text-gray-400">Ademola Rahman Adeboye is a driven Mechanical Engineering graduate transitioning into technology, with expertise spanning power plant operations, web development, cybersecurity, and data analysis. Passionate about fintech and finance, he leverages analytical skills to tackle financial challenges in Nigeria, including payment accessibility and currency stability. Ademola is dedicated to lifelong learning and aims to bridge technology and finance through impactful contributions in cybersecurity awareness, fintech, and business analytics</p>

            </motion.div>
        </div>
      
    </div>
  )
}

export default Hero
