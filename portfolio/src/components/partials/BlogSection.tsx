import { SiNvidia, SiGooglecloud, SiMicrosoftazure } from 'react-icons/si';
import SectionTitle from '@/components/shared/SectionTitle';
import { FaFileAlt, FaPython, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiFlask, SiPostgresql, SiMongodb, SiSnowflake, SiAmazonaws, SiApachespark, SiKubernetes, SiTensorflow, SiScikitlearn } from 'react-icons/si';

interface Certification {
  id: number;
  title: string;
  issuedAt: string;
  icon: JSX.Element;
  link: string;
  download?: boolean; // 🔽 Optional: Enables direct download
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Getting Started with Deep Learning',
    issuedAt: 'Jan 2024',
    icon: <SiNvidia className="text-5xl text-green-500 dark:text-green-400" />,
    link: 'https://learn.microsoft.com/en-us/users/nehajagtap-9769/credentials/3f5460c37c713c6d?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    id: 2,
    title: 'Microsoft Certified: Azure Data Fundamentals',
    issuedAt: 'October 2024',
    icon: <SiMicrosoftazure className="text-5xl text-blue-600 dark:text-blue-400" />,
    link: 'https://learn.microsoft.com/en-us/users/nehajagtap-9769/credentials/3f5460c37c713c6d?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    id: 3,
    title: 'Introduction to Generative AI',
    issuedAt: 'Nov 2024',
    icon: <SiGooglecloud className="text-5xl text-blue-500 dark:text-blue-300" />,
    link: 'https://www.cloudskillsboost.google/public_profiles/2760773b-dc78-437e-90e5-59a6fc773c26/badges/12731562',
  },
];

const CertificationCard: React.FC<Certification> = ({ title, issuedAt, icon, link, download }) => (
  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition duration-300">
    {icon}
    <h3 className="text-xl font-semibold mt-4 dark:text-white">{title}</h3>
    <p className="text-gray-500 dark:text-gray-300 text-sm">Issued: {issuedAt}</p>
    
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer" // ✅ Security best practice
      className="mt-4 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 transition"
    >
      View Certification
    </a>
  </div>
);

const BlogSection: React.FC = () => {
  return (
    <>
      <SectionTitle>Certifications</SectionTitle>
      <div className="mt-10 grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} {...cert} />
        ))}
      </div>
      {/* Skill Icons */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-500">
        {/* Languages & Frameworks */}
        <FaPython size={40} title="Python" />
        <FaReact size={40} title="React.js" />
        <FaNodeJs size={40} title="Node.js" />
        <SiFlask size={40} title="Flask" />

        {/* Databases & Cloud */}
        <SiPostgresql size={40} title="PostgreSQL" />
        <SiMongodb size={40} title="MongoDB" />
        <SiSnowflake size={40} title="Snowflake" />
        <SiMicrosoftazure size={40} title="Azure" />
        <SiAmazonaws size={40} title="AWS" />

        {/* Big Data & DevOps */}
        <SiApachespark size={40} title="Spark" />
        <FaDocker size={40} title="Docker" />
        <SiKubernetes size={40} title="Kubernetes" />

        {/* AI/ML */}
        <SiTensorflow size={40} title="TensorFlow" />
        <SiScikitlearn size={40} title="Scikit-learn" />
      </div>
    </>
  );
};

export default BlogSection;
