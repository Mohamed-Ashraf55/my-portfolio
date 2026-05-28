import { title } from "process";
import Image from "next/image";
import Link from "next/link";



export default function project(){  
    const project =[
        {
       title: "Courses website",
       image: "/3.jpg",
       description: "The website was designed using WordPress.",
       Link: "https://mohameddesign3.42web.io/?i=1"
        },      

         {
       title: "Medical consultation website",
       image: "/4.jpg",
       description: "The website was designed using WordPress.",
       Link: "https://dev-elite-advisory.pantheonsite.io"
        },      


         {
       title: "Repairs site",
       image: "/5.jpg",
       description: "The website was designed using WordPress.",
       Link: "https://dev-mohamed-design.pantheonsite.io"
        },      


         {
       title: "Business website",
       image: "/6.jpg",
       description: "The website was designed using WordPress.",
       Link: "https://dev-beginners5.pantheonsite.io"
        },      

    ];
    return(
        <div  className="min-h-screen  bg-gray-600">
            <h1  className="font-extrabold  text-3xl text-center mb-7">My projects</h1>
            <div  className=" grid  md:grid-cols-2  gap-6">
                {project.map((project, index) =>(
                    <div key={index}  className="bg-gray-700 mb-5  text-center shadow-md  rounded-4xl p-10 hover:shadow-lg transition">
                       {/* عنوان المشروع*/}
                       <h2  className="font-extralight text-white  text-center">{project.title}</h2>


                       {/* صورة المشروع*/}
                       <Image   src={project.image}    width={1000}  height={100}  alt="{project.title}" className=" object-cover   rounded-4xl" />


                       
                       {/* وصف المشروع*/}
                       <p  className="mt-3   ">{project.description}</p>

                       {/* لينك المشروع*/}
                       <Link   className="px-2 py-2 bg-gray-900 mt-3 text-white rounded-3xl hover:bg-gray-800" href="{project.Link}   " target="_blank"  rel="noopener noreferrer">View Project</Link>


                       




                    </div>
                ))}
            </div>
        </div>
        
    )
}