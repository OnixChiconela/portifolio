import Link from 'next/link';
import React from 'react';

interface ExperienceProps {
  title?: string;
  companyName?: string;
  duration?: string;
  content?: string[];
  tools?: string
  toolsDesc?: string
  comp?: string
  compDesc?: string
  projectLink?: string
}

// const Experience: React.FC<ExperienceProps> = ({
//   title,
//   companyName,
//   duration,
//   content,
//   tools,
//   toolsDesc,
//   comp,
//   compDesc
// }) => {
//   return (
//     <div className="p-2 w-full">
//       <div
//         className="
//           p-1
//           rounded-lg
//           border-transparent
//           bg-clip-border
//           bg-gradient-to-b
//           from-white
//           via-fuchsia-950
//           to-black
//           shadow-xl w-full

//           mx-auto">
//         <span className="block bg-white rounded-lg p-8">
//           <h3 className="text-lg font-bold">{title}</h3>
//           <p className="text-gray-700 font-semibold my-2">{companyName}</p>
//           <p className="text-gray-500">{duration}</p>
//           <ul className="text-gray-600 mt-2 list-disc list-inside space-y-2">
//             {content && content.map((point, index) => (
//               <li key={index}>{point}</li>
//             ))}
//           </ul>
//           {tools ? (
//             <li className=" mt-2 list-disc list-inside space-y-2">
//             {tools && (<text className="font-bold ">{tools}: <text className='text-gray-600 font-normal'>{toolsDesc}</text></text>)}
//           </li>
//           ) : (
//             <></>
//           )}
//            {comp ? (
//             <li className="mt-2 list-disc list-inside space-y-2">
//             {comp && (<text className="font-bold ">{comp}: <text className='text-gray-600 font-normal'>{compDesc}</text></text>)}
//           </li>
//           ) : (
//             <></>
//           )}

//         </span>
//       </div>
//     </div>
//   );
// }

const Experience: React.FC<ExperienceProps> = ({
  title,
  companyName,
  duration,
  content,
  tools,
  toolsDesc,
  comp,
  compDesc,
  projectLink
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
         shadow-xl
         w-full
         mx-auto
         h-full
       "
      >
        <span className=" bg-white rounded-lg p-8 h-full flex flex-col justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-700 font-semibold my-2">{companyName}</p>
          <p className="text-gray-500">{duration}</p>
          <ul className="text-gray-600 mt-2 list-disc list-inside space-y-2">
            {content && content.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          {tools ? (
            <div className="mt-2">
              <strong>{tools}:</strong> <span className="text-gray-600 font-normal">{toolsDesc}</span>
            </div>
          ) : null}
          {comp ? (
            <div className="mt-2">
              <strong>{comp}:</strong> <span className="text-gray-600 font-normal">{compDesc}</span>
            </div>
          ) : null}
          {projectLink ? (
            <div className='mt-2'>
              <Link href={projectLink} className="">
                <text className="font-semibold text-blue-500 hover:underline hover:text-blue-600">{projectLink}</text>
              </Link>
            </div>
          ) : null}
        </span>
      </div>
    </div>
  );
};


export default Experience;
