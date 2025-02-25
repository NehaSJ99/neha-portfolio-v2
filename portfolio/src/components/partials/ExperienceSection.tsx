import { educations } from '@/data/educations';
import { experiences } from '@/data/experiences';
import styles from '@/styles/modules/ExperienceSection.module.scss';
import classNames from 'classnames';
import { FiBriefcase } from 'react-icons/fi';
import AcademicCap from '@/components/icons/AcademicCap';
import SectionTitle from '@/components/shared/SectionTitle';
import SkillsSection from './SkillsSection';

const ExperienceSection = () => {
  return (
    <>
      <SectionTitle>Experience & Education</SectionTitle>
      <div className="py-15 mt-10 grid gap-8 md:grid-cols-2 items-stretch">
        {/* Experience */}
        <div className="flex flex-col h-full">
          <div className="flex-grow rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700">
            <ol className={classNames(styles['experience'], 'border-l border-gray-200 dark:border-gray-500')}>
              {experiences.map((experience, index) => (
                <li key={index} className={styles['experience-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-700">
                    <FiBriefcase className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {experience.startDate} - {experience.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                    {experience.jobTitle}
                  </h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {experience.company}
                  </p>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                    {experience.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Education */}
        <div className="flex flex-col h-full">
          <div className="flex-grow rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700">
            <ol className={classNames(styles['education'], 'border-l border-gray-200 dark:border-gray-500')}>
              {educations.map((education, index) => (
                <li key={index} className={styles['education-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-700">
                    <AcademicCap className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {education.startDate} - {education.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                    {education.degree}
                  </h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {education.school}
                  </p>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">{education.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <SkillsSection />
    </>
  );
};

export default ExperienceSection;
