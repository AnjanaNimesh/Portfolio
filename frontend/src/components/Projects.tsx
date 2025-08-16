import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import AnimatedSection from './AnimatedSection'
import { ExternalLinkIcon, GithubIcon, ChevronDown, ChevronUp } from 'lucide-react'

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'In Progress' | 'Completed' | 'On Hold';
  category: string;
  imageUrl?: string;
  contribution: 'Group' | 'Individual';
}

const ExpandableDescription = ({ description, maxLength = 120 }: { description: string; maxLength?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  if (description.length <= maxLength) {
    return <p className="text-gray-400 text-sm mb-4">{description}</p>
  }
  
  const truncatedText = description.slice(0, maxLength).trim()
  
  return (
    <div className="mb-4">
      <p className="text-gray-400 text-sm">
        {isExpanded ? description : `${truncatedText}...`}
      </p>
      <button
        onClick={(e) => {
          e.preventDefault()
          setIsExpanded(!isExpanded)
        }}
        className="text-yellow-500 hover:text-yellow-400 text-xs font-medium mt-1 flex items-center gap-1 transition-colors"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp size={12} />
          </>
        ) : (
          <>
            View More <ChevronDown size={12} />
          </>
        )}
      </button>
    </div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = [
    'All',
    'Web App',
    'IoT'
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: 'CeyAgro - IoT Dashboard',
      description: 'CeyAgro is a cloud-based IoT platform designed for real-time monitoring and analysis of sensor data from remote devices. The system supports multiple users, allowing them to visualize, manage, and analyze IoT device data through interactive dashboards.',
      technologies: ['Nextjs', 'Nestjs', 'MongoDB', 'AWS IoT Core', 'AWS S3', 'Ardunio'],
      githubUrl: 'https://github.com/MohamedASHRIF/CeyAgro-IOT',
      status: 'Completed',
      category: 'Web App',
      imageUrl: 'ceyagro.png',
      contribution: 'Group'
    },
    {
      id: 2,
      title: 'Sign Bridge - Gesture to Speech Glove',
      description: 'Sign Bridge is a wearable microcontroller-based glove designed to assist individuals who use sign language by converting hand gestures into spoken words',
      technologies: ['Ardunio', 'C++'],
      status: 'Completed',
      category: 'IoT',
      imageUrl: 'Sign.png',
      contribution: 'Group'
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'This portfolio showcases my education, projects, and technical skills, along with detailed descriptions and visuals, presenting my work and achievements in a clear and engaging manner.',
      technologies: ['ReactJs', 'Tailwind CSS', 'NodeJs'],
      liveUrl: 'https://anjana-nimesh.vercel.app/',
      githubUrl: 'https://github.com/AnjanaNimesh/Portfolio',
      status: 'Completed',
      category: 'Web App',
      imageUrl: 'portfolio.png',
      contribution: 'Individual'
    },
    {
      id: 4,
      title: 'Stray Care - Community Platform',
      description: 'Stray Care is a web application that supports stray animal welfare by allowing users to report, register, and help stray dogs and cats, while connecting volunteers for care and donations.',
      technologies: ['ReactJS', 'Tailwind CSS', 'Ballerina', 'MongoDB'],
      githubUrl: 'https://github.com/AnjanaNimesh/Stray-Care-Ballerina',
      status: 'Completed',
      category: 'Web App',
      imageUrl: 'stray.png',
      contribution: 'Group'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="My Projects"
            className="text-3xl md:text-4xl font-bold mb-2"
          />
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: '80px',
            }}
            transition={{
              duration: 0.5,
            }}
            className="h-1 bg-yellow-500 mx-auto"
          ></motion.div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore the projects I've worked on during my software engineering
            journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400">
                {activeFilter === 'All' 
                  ? 'No projects found.' 
                  : `No projects found in "${activeFilter}" category.`
                }
              </p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                delay={index * 0.1}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium shadow-md ${
                      project.status === 'Completed' ? 'bg-green-500 text-white' :
                      project.status === 'In Progress' ? 'bg-blue-500 text-white' :
                      'bg-yellow-500 text-black'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <img
                    src={project.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <ExpandableDescription description={project.description} maxLength={120} />
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies && project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-100 text-sm flex items-center gap-1 transition-colors border border-gray-400 rounded-full px-3 py-1"
                      >
                        <ExternalLinkIcon size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-100 text-sm flex items-center gap-1 transition-colors border border-gray-400 rounded-full px-3 py-1"
                      >
                        <GithubIcon size={16} />
                        Source Code
                      </a>
                    )}
                                   
       <div className="absolute bottom-4 right-4">
  <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-300 text-xs">
    {project.contribution}
  </span>
</div>
                  </div>
   
                </div>
              </AnimatedSection>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects