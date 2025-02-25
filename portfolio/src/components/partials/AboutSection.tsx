import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { HiOutlineChartBar, HiOutlineFire } from 'react-icons/hi';
import { GiTrophyCup } from 'react-icons/gi';
import { FaFileAlt} from 'react-icons/fa';
import ProgressBar from '@/components/shared/ProgressBar';
import { FiLink } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Hi, I am Neha Jagtap, a Masters student in Computer Science at NCSU, passionate about AI, Machine Learning, and scalable software solutions. With expertise in Python, SQL, Javascript, and cloud technologies like Azure, I specialize in data engineering, full-stack development, and AI-driven automation to optimize workflows and enhance efficiency.
          </p>
          <a href="/Neha Jagtap Resume.pdf" download="Neha_Jagtap_CV.pdf">
            <Button className="mt-5">Download CV</Button>
          </a>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Backend</h6>
              <p>95%</p>
            </div>
            <ProgressBar color="blue" progress={95} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Frontend</h6>
              <p>75%</p>
            </div>
            <ProgressBar color="amber" progress={75} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold"> Azure Cloud</h6>
              <p>90%</p>
            </div>
            <ProgressBar color="rose" progress={90} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">AI/ML</h6>
              <p>80%</p>
            </div>
            <ProgressBar color="green" progress={80} />
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">3+</h2>
            <p className="mt-1">Years of experience</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <GiTrophyCup size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">2x</h2>
            <p className="mt-1">Hackethon Winner</p>
          </div>
        </div>

        <div className="relative">
          <div className="flex">
            {/* Icon */}
            <div className="mr-5 text-gray-300">
              <FaFileAlt size={50} />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl font-bold">1</h2>
              <p className="mt-1">IEEE Publication</p>
            </div>

            {/* Link Icon in Corner */}
            <a
              href="https://ieeexplore.ieee.org/document/9299606"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-1 text-gray-400 hover:text-gray-200 transition-all duration-300"
            >
              <FiLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
