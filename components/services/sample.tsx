// import { Code, Cloud, Database } from "lucide-react"

// const services = [
//   {
//     title: "Full-Stack Web Development",
//     icon: <Code className="h-12 w-12 text-indigo-500" />,
//     description: "Build custom web applications from start to finish, handling both the frontend (user interface) and backend (server and database).",
//     technologies: ["MERN stack", "Next.js", "Laravel", "SQL Server", "MySQL"],
//     details: "I create responsive, reliable apps tailored to your needs, including setup, design, and deployment."
//   },
//   {
//     title: "Application Deployment and Maintenance",
//     icon: <Cloud className="h-12 w-12 text-sky-500" />,
//     description: "Set up and maintain applications on cloud platforms for smooth performance.",
//     technologies: ["AWS EC2", "S3", "Docker", "Nginx", "PM2"],
//     details: "I deploy apps, configure servers, and offer ongoing support to keep everything running efficiently."
//   },
//   {
//     title: "Database Management and Optimization",
//     icon: <Database className="h-12 w-12 text-emerald-500" />,
//     description: "Design and manage databases to ensure fast and secure data handling.",
//     technologies: ["SQL Server", "MySQL", "Prisma"],
//     details: "I handle database setup, data corrections, and optimization to keep applications performing well and data secure."
//   }
// ]

// export default function CoolServices() {
//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Our Services</h2>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
//               <div className="p-8">
//                 <div className="flex justify-center mb-4">{service.icon}</div>
//                 <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">{service.title}</h3>
//                 <p className="text-gray-600 mb-6">{service.description}</p>
//                 <div className="mb-6">
//                   <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {service.technologies.map((tech, techIndex) => (
//                       <span key={techIndex} className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-gray-600 italic">{service.details}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
