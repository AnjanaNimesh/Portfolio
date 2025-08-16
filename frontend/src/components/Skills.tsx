import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import AnimatedSection from './AnimatedSection'
import { CodeIcon, DatabaseIcon, GlobeIcon, ServerIcon, LayoutIcon, BrainIcon, WrenchIcon } from 'lucide-react'
import { type JSX } from 'react'

interface Skills {
  id: number;
  title: string;
  technologies: string[];
}

const Skills = () => {
  // Icon mapping for skill categories
  const iconMap: { [key: string]: JSX.Element } = {
    'Frontend Development': <LayoutIcon size={24} />,
    'Backend Development': <ServerIcon size={24} />,
    'Database': <DatabaseIcon size={24} />,
    'Web Technologies': <GlobeIcon size={24} />,
    'Programming Languages': <CodeIcon size={24} />,
    'Machine Learning': <BrainIcon size={24} />,
    'DevOps': <WrenchIcon size={24} />
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const skills: Skills[] = [
    {
      id: 1,
      title: 'Programming Languages',
      technologies: ['C', 'Java', 'JavaScript', 'TypeScript']
    },
    {
      id: 2,
      title: 'Frontend Development',
      technologies: ['ReactJs', 'NextJs', 'Tailwind CSS', 'React Native(Mobile)', 'HTML', 'CSS']
    },
    {
      id: 3,
      title: 'Backend Development',
      technologies: ['NodeJs', 'NestJs', 'ExpressJs']
    },
    {
      id: 4,
      title: 'Database',
      technologies: ['MongoDB', 'MySQL']
    },
    {
      id: 5,
      title: 'Others',
      technologies: ['Git', 'Figma', 'Click Up']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="My Skills"
            className="text-3xl md:text-4xl font-bold mb-2"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-yellow-500 mx-auto"
          ></motion.div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I've worked with throughout my software engineering journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.length === 0 ? (
            <div className="col-span-full bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 text-center text-gray-500">
              No skills found.
            </div>
          ) : (
            skills.map((skill, index) => (
              <AnimatedSection
                key={skill.id}
                delay={index * 0.1}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 mr-3">
                      {iconMap[skill.title] || <GlobeIcon size={24} />}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {skill.technologies.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      custom={itemIndex}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </AnimatedSection>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills