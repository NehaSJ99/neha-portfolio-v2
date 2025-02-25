'use client';
import { motion } from 'framer-motion';
import { 
  FaPython, FaReact, FaNodeJs, FaDocker 
} from 'react-icons/fa';
import { 
  SiFlask, SiPostgresql, SiMongodb, SiSnowflake, 
  SiMicrosoftazure, SiAmazonaws, SiApachespark, 
  SiKubernetes, SiTensorflow, SiScikitlearn, 
  SiApacheairflow 
} from 'react-icons/si';

// Skill Data with Proficiency Levels
const skills = [
  { name: 'Python', icon: <FaPython size={42} />, level: 'Advanced' },
  { name: 'React.js', icon: <FaReact size={42} />, level: 'Intermediate' },
  { name: 'Node.js', icon: <FaNodeJs size={42} />, level: 'Intermediate' },
  { name: 'Flask', icon: <SiFlask size={42} />, level: 'Advanced' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={42} />, level: 'Intermediate' },
  { name: 'MongoDB', icon: <SiMongodb size={42} />, level: 'Advanced' },
  { name: 'Snowflake', icon: <SiSnowflake size={42} />, level: 'Beginner' }, // Beginner Skill
  { name: 'Azure', icon: <SiMicrosoftazure size={42} />, level: 'Advanced' },
  { name: 'AWS', icon: <SiAmazonaws size={42} />, level: 'Intermediate' },
  { name: 'Spark', icon: <SiApachespark size={42} />, level: 'Intermediate' },
  { name: 'Docker', icon: <FaDocker size={42} />, level: 'Intermediate' },
  { name: 'Kubernetes', icon: <SiKubernetes size={42} />, level: 'Intermediate' },
  { name: 'TensorFlow', icon: <SiTensorflow size={42} />, level: 'Intermediate' },
  { name: 'Scikit-learn', icon: <SiScikitlearn size={42} />, level: 'Intermediate' },
  { name: 'Airflow', icon: <SiApacheairflow size={42} />, level: 'Intermediate' },
];

const SkillsSection = () => {
  return (
    <section className="mt-10">
      <h2 className="text-left text-3xl font-bold mb-6 ml-8 text-gray-900 dark:text-gray-200">
        Skills
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group relative"
            whileHover={{ scale: 1.1 }}
          >
            {/* Animated Glowing Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-animated z-0"></div>

            {/* Flip Card */}
            <div className="relative h-28 w-28 transition-all duration-500 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
              
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg font-semibold text-sm">
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </div>

              {/* Back Side (Flipped) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-500">
                <span className="text-lg font-bold">{skill.name}</span>
                <span className="text-sm mt-1 px-3 py-1 rounded-md bg-gray-800">
                  {skill.level}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Border Effect */}
      <style jsx>{`
        @keyframes glowingBorder {
          0% { border-color: #facc15; }
          50% { border-color: #f97316; }
          100% { border-color: #facc15; }
        }
        .border-animated {
          animation: glowingBorder 1.5s infinite alternate ease-in-out;
        }
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
