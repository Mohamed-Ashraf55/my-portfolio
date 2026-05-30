"use client"

import Link from "next/link";
import { FaBahai, FaGithub,FaLinkedin,FaEarlybirds,FaSave } from "react-icons/fa";
import { SiNextdotjs,SiMealie } from "react-icons/si";
import { motion } from "framer-motion"

export default function Contact(){
    return(
        <motion.div   className="min-h-screen flex  bg-gray-500 flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-6">Contact me</h1>

            {/* نص تعريفي */}
            <motion.p    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}  className="text-lg text-white mb-8 text-center max-w-xl">If you would like to contact me regarding projects or job
                 opportunities, you can send me a message
                  or contact me through these links.</motion.p>

                  {/* روابط التواصل */}
                  <motion.div    className="flex gap-6">
                    <motion.a   whileHover={{scale:0.8}}  href="mohamedashraff200@gmail.com"  className="px-4 py-2 bg-gray-800 text-white flex  gap-1    items-center rounded-2xl hover:bg-gray-700"> <SiMealie/> Email<SiMealie/></motion.a>
                     <motion.a   whileHover={{scale:0.8}}  href="https://www.linkedin.com/in/mohamed-ashraf-7270b223b"  className="px-4 py-2 bg-gray-800 flex  gap-1    items-center text-white rounded-2xl hover:bg-gray-700"> <FaLinkedin/>LinkedIn <FaLinkedin/></motion.a>
                     <motion.a   whileHover={{scale:0.8}}  href="https://github.com/Mohamed-Ashraf55"  className="px-4 py-2 bg-gray-800 text-white rounded-2xl flex  gap-1    items-center hover:bg-gray-700"><FaGithub/> GitHub  <FaGithub/></motion.a>


                  </motion.div>

                  {/* فورم للتواصل */}
                  <motion.form     initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }} className="mt-10 w-full max-w-md bg-gray-700 shadow-md rounded-3xl p-6 space-y-4">
        <input
          type="text"
          placeholder="اسمك"
          className="w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <input
          type="email"
          placeholder="بريدك الإلكتروني"
          className="w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <textarea
          placeholder="رسالتك"
          className="w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gray-900 items-center justify-center  flex p-1 gap-2 text-white py-2 rounded-2xl hover:bg-gray-600"
        >
           submit <FaSave  />
        </button>
      </motion.form>

        </motion.div>
    )
}