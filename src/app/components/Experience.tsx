import React from 'react';

interface ExperienceProps {
  title?: string;
  companyName?: string;
  duration?: string;
  content?: string[];
  tools?: string // Array of bullet points
  toolsDesc?: string
  comp?: string
  compDesc?: string
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  companyName,
  duration,
  content,
  tools,
  toolsDesc,
  comp,
  compDesc
}) => {
  return (
    <div className="p-2 w-full">
      <div
        className="
          p-1
          rounded-lg
          border-transparent
          bg-clip-border
          bg-gradient-to-b
          from-white
          via-fuchsia-950
          to-black
          shadow-xl w-full
          
          mx-auto">
        <span className="block bg-white rounded-lg p-8">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-700 font-semibold my-2">{companyName}</p>
          <p className="text-gray-500">{duration}</p>
          <ul className="text-gray-600 mt-2 list-disc list-inside space-y-2">
            {content && content.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          {tools ? (
            <li className=" mt-2 list-disc list-inside space-y-2">
            {tools && (<text className="font-bold ">{tools}: <text className='text-gray-600 font-normal'>{toolsDesc}</text></text>)}
          </li>
          ) : (
            <></>
          )}
           {comp ? (
            <li className="mt-2 list-disc list-inside space-y-2">
            {comp && (<text className="font-bold ">{comp}: <text className='text-gray-600 font-normal'>{compDesc}</text></text>)}
          </li>
          ) : (
            <></>
          )}
           
        </span>
      </div>
    </div>
  );
}

export default Experience;
