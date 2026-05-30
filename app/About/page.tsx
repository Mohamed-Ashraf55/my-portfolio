"use client"

import { FaBahai, FaJava,FaCss3,FaHtml5,FaReact } from "react-icons/fa";
import { SiNextdotjs,SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion"
import Image from "next/image"


export default function About(){
    return(
      
        <div  className="min-h-screen bg-gray-700  pt-100 flex flex-col  items-center  justify-center  ">
        {/* صورة شخصية */}
        <motion.div  initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
          <div>
                <Image src="/1.png"  alt="Mohamed" width={250} 
      height={250}  className=" shadow-lg   -mt-80  rounded-4xl"   ></Image>
      <h1  className=" items-center  justify-center  flex  text-3xl mt-4 font-bold">Hey, I'm Mohamed</h1>
      <p  className="text-gray-400 items-center  justify-center  flex text-2xl">Frontend Developer</p>
            </div>

        </motion.div>
            

            {/*نبذه عني */}
            <motion.div  initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}>
              <div className="  max-w-2xl  text-center  items-center justify-center  flex flex-col  mt-10">
                <h1 className="text-4xl    mt-10   font-extrabold  tracking-wide">About me</h1>
                <p  className="text-lg   text-white  mb-6 mx-auto  max-w-5xl mt-5">I'm Mohammed, 
                    a front-end developer interested in   building web
                     applications using Next.js and React.
                 I love learning new technologies  and developing my
                skills in designing modern and user-friendly interfaces.</p>
            </div>
            </motion.div>
            

            {/*مهاراتي */}
            <motion.div   initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}>
              <section className="max-w-2xl  mt-10">
        <h2 className="text-4xl font-semibold items-center justify-center flex flex-col   mb-4">My skills</h2>
        <div className="grid grid-cols-3 gap-4 text-lg items-center justify-center ">
          <motion.a   whileHover={{scale:0.8}}  className="bg-gray-600 items-center justify-center  flex p-1 rounded-2xl  gap-2"    href="#"><FaHtml5 className="text-red-400 size-7"/> HTML</motion.a>
          <motion.a   whileHover={{scale:0.8}} className="bg-gray-600 items-center justify-center  flex p-1 rounded-2xl  gap-2 " href="#"><FaCss3   className="text-blue-400  size-7"/> CSS</motion.a>
          <motion.a   whileHover={{scale:0.8}} className="bg-gray-600 items-center justify-center  flex p-1 rounded-2xl gap-2 " href="#"><FaJava   className="text-amber-200  size-7"/>  JavaScript</motion.a>
          <motion.a   whileHover={{scale:0.8}} className="bg-gray-600 items-center justify-center  flex p-1 rounded-2xl  gap-2"  href="#"><FaReact  className="text-blue-400  size-7"/>React</motion.a>
          <motion.a   whileHover={{scale:0.8}} className="bg-gray-600 items-center justify-center  flex p-1 rounded-2xl  gap-2"  href="#"><SiNextdotjs className="text-black  size-7" />Next.js</motion.a>
          <motion.a     whileHover={{scale:0.8}} className="bg-gray-600 items-center justify-center  flex p-1 rounded-2xl  gap-2" href="#"><SiTailwindcss  className="text-blue-400  size-7"/> Tailwind CSS</motion.a>
        </div>
      </section>
            </motion.div>

{/* التعليم والشهادات */}
            <motion.div  initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}>

               <section className="max-w-2xl  mt-18 text-center">
        <h2 className="text-4xl  mb-4  font-extrabold">Education and certificates</h2>
        <div className="list-disc list-inside text-lg    text-center">
          <p>Bachelor of Educational Technology - Ain Shams University </p>
          <p>XYZ Platform Frontend Development Certificate</p>
          <p>Advanced Next.js course from Online Academy</p>
        </div>
      </section>
            </motion.div>
            


      
    

        </div>
    )
}