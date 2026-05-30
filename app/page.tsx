"use client"
import Image from "next/image";
import Link from "next/link";
import { FaBahai, FaGithub,FaLinkedin,FaBehance } from "react-icons/fa";
import { motion } from "framer-motion"

export default function Home(){
  return(
    
    <div  className="min-h-screen bg-gray-800  flex flex-col items-center justify-center  text-center  p-6">
<h1  className="text-4xl  font-bold">Welcome to the profile</h1>
{/* صورة شخصية */}
<motion.div  initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
<Image 
      src="/2.jpg" 
      alt="Mohamed" 
      width={148} 
      height={148} 
      className=" rounded-4xl mb-4 shadow-lg mt-15 " 
      />
</motion.div>
      
      <motion.div  initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
        {/* الاسم */}
     <h1  className="text-5xl  font-extrabold mb-4">Mohamed Ashraf</h1>
      </motion.div>



{/* وصف قصير */}
<motion.div  initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
<p  className="text-lg  text-white  mb-6 mx-auto  max-w-3xl mt-5 ">Passionate Front-End Developer specializing 
      in building fast, interactive web applications 
      using React.js and Next.js. Focused on creating responsive UIs
       and smooth user experiences with Tailwind CSS.</p>
</motion.div>
     


{/* روابط التواصل */}
<motion.div   initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
  <div  className="flex gap-4 mt-5">
 
  <motion.a  whileHover={{scale:1.1}}  className="  bg-white  p-2  hover:bg-gray-400 rounded-3xl flex  gap-1    items-center  text-black" href="https://github.com/Mohamed-Ashraf55"><FaGithub size={28}/>GitHub  </motion.a>
  <motion.a  whileHover={{scale:1.1}}  className="bg-white p-2  hover:bg-gray-400 rounded-3xl  flex  gap-1  items-center  text-black" href="https://www.linkedin.com/in/mohamed-ashraf-7270b223b/"> <FaLinkedin size={28}/>LinkedIn</motion.a>
  <motion.a  whileHover={{scale:1.1}}   className="bg-white p-2  hover:bg-gray-400 rounded-3xl  flex  gap-1 items-center text-black" href="https://www.behance.net/mohamedashraf233"> <FaBehance size={28}/> Behance</motion.a>

</div>
</motion.div>


    </div>
  )
}