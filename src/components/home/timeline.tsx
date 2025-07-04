"use client";

import { MdBusinessCenter } from "react-icons/md";

interface experience {
  _id?: string;
  date: string;
  description: string;
  subtitle: string;
  title: string;
  tech: string;
}

// Custom Timeline Component matching the screenshot design
function CustomTimeline({ experienceData }: { experienceData: experience[] }) {
  return (
    <div className="relative max-w-5xl mx-auto py-12">
      {/* Central vertical line */}
      <div className="absolute left-1/2 transform -translate-x-px w-0.5 bg-black top-0 bottom-0"></div>

      {experienceData.map((experience, i) => {
        const isLeft = i % 2 === 0;

        return (
          <div key={experience._id || `${experience.title}-${i}`} className="relative mb-20 last:mb-0">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white z-0 border-4 border-white shadow-lg">
              <MdBusinessCenter size={16} />
            </div>

            {/* Date positioned to the side of the dot */}
            <div className={`absolute top-12 transform -translate-y-1/2 z-0 bg-white px-2 py-1 text-sm font-medium text-gray-700 whitespace-nowrap ${isLeft ? 'left-1/2 ml-8' : 'right-1/2 mr-8'
              }`}>
              {experience.date}
            </div>

            {/* Content box */}
            <div className={`relative ${isLeft ? 'pr-16' : 'pl-16 ml-auto'} w-1/2`}>
              <div className={`bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg relative ${isLeft ? 'mr-4' : 'ml-4'
                }`}>
                {/* Arrow pointing to center */}
                <div className={`absolute top-10 w-0 h-0 ${isLeft
                  ? 'right-0 translate-x-full border-l-[12px] border-l-gray-300 border-t-[8px] border-b-[8px] border-t-transparent border-b-transparent'
                  : 'left-0 -translate-x-full border-r-[12px] border-r-gray-300 border-t-[8px] border-b-[8px] border-t-transparent border-b-transparent'
                  }`}></div>

                {/* Content */}
                <h1 className="font-bold text-xl mb-1 text-black">{experience.title}</h1>
                <h2 className="font-medium text-base text-gray-600 mb-3">{experience.subtitle}</h2>
                <p className="text-sm text-gray-800 mb-4 leading-relaxed">{experience.description}</p>
                <div className="text-sm">
                  <span className="font-semibold text-black">Skills - </span>
                  <span className="text-gray-700">{experience.tech}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TimeLine({ exp }: { exp: any[] }) {
  // Fallback experiences if Sanity data is not available
  const fallbackExperiences = [
    {
      _id: "fallback-1",
      title: "Trainee Engineer",
      subtitle: "Mecgale Pneumatics",
      date: "June 2023 - August 2023",
      description: "Understanding the basic working principles of a thermal power plant, including power generation, control systems, and the role of electronics in various plant operations. Assisting in the maintenance and troubleshooting of electronic control systems, sensors, and instrumentation used for monitoring plant operations such as temperature, pressure, and flow control.",
      tech: "PLC, Micro-electronics, Thermal Power Plant Operations, Electronic Control Systems"
    }
  ];

  const experienceData = exp && exp.length > 0 ? exp : fallbackExperiences;

  return (
    <div className="w-full mb-28">
      <CustomTimeline experienceData={experienceData} />
    </div>
  );
}
