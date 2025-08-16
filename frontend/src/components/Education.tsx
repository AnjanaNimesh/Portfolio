import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Award,
  CheckCircle,
  GraduationCap,
} from 'lucide-react'
import React from 'react'

// Type definitions for component props
interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface AnimatedSectionProps {
  children: React.ReactNode;
}

// Mock AnimatedText component
const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {text}
  </motion.h2>
)

// Mock AnimatedSection component
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)

interface Education {
  id: string
  degree: string
  institution: string
  startDate: string
  endDate: string | null
  description: string
  logo: string
  achievements: string[]
}

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const educations: Education[] = [
    {
      id: '1',
      degree: 'B.Sc. (Hons) in Information Technology',
      institution: 'University of Moratuwa',
      startDate: '2023',
      endDate: null,
      description:
        'Currently a third-year undergraduate at the University of Moratuwa, pursuing a BSc in Information Technology, while actively gaining hands-on experience through academic work and practical projects.',
      logo: 'uom.png',
      achievements: [
        'CGPA - 3.64',
      ],
    },
    {
      id: '2',
      degree: 'G.C.E Advanced Level Examination',
      institution: 'Saranath National College',
      startDate: '2018',
      endDate: '2021',
      description:
        'I completed my Advanced Level studies in the Bio Science stream, which helped me build a strong foundation in analytical thinking and problem-solving, paving the way for my interest and growth in technological work.',
      logo: 'school.png',
      achievements: [
        'Z-score - 1.7426',
        'AAC Passes',
      ],
    }
  ]

  const cardsPerView = window.innerWidth >= 768 ? 2 : 1
  const maxIndex = Math.ceil(educations.length / cardsPerView) - 1

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 > maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? maxIndex : prevIndex - 1))
  }

  const [slideDirection, setSlideDirection] = useState(0)

  const handleNext = () => {
    setSlideDirection(1)
    nextSlide()
  }

  const handlePrev = () => {
    setSlideDirection(-1)
    prevSlide()
  }

  const progressVariants = {
    inactive: {
      width: '20px',
      backgroundColor: 'rgba(234, 179, 8, 0.3)',
    },
    active: {
      width: '40px',
      backgroundColor: 'rgba(234, 179, 8, 1)',
    },
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  }

  return (
    <section id="education" className="py-20  text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="Education Journey"
            className="text-3xl md:text-4xl font-bold mb-2"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-yellow-500 mx-auto"
          ></motion.div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My academic milestones and educational achievements that have shaped
            my journey.
          </p>
        </div>
        <AnimatedSection>
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center justify-center mb-16">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            
            {/* Navigation and Cards Container */}
            <div className="flex items-center gap-4">
              {/* Left Navigation Button */}
              {educations.length > cardsPerView && (
                <motion.button
                  onClick={handlePrev}
                  className="hidden md:flex w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/30 items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:border-yellow-500 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={currentIndex === 0}
                  style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
              )}

              {/* Card Slider */}
              <div className="relative overflow-hidden flex-1 min-h-[500px] md:min-h-[420px]">
                <AnimatePresence custom={slideDirection} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-col md:flex-row gap-6 w-full"
                  >
                    {educations
                      .slice(currentIndex * cardsPerView, (currentIndex + 1) * cardsPerView)
                      .map((education, index) => (
                        <motion.div
                          key={education.id}
                          className="w-full md:w-1/2 bg-gray-900/60 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 md:p-8 shadow-2xl hover:border-yellow-500/40 transition-all duration-300 hover:shadow-yellow-500/10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                          <div className="flex flex-col md:flex-row gap-6 items-start h-full">
                            {/* Logo Section */}
                            <div className="w-full md:w-1/3 flex flex-col items-center">
                              <div className="w-24 h-24 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-800/50">
                                <motion.img
                                  src={education.logo}
                                  alt={`${education.institution} logo`}
                                  className="w-full h-full object-contain"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.2, duration: 0.4 }}
                                />
                              </div>
                              <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                  <Award className="w-5 h-5 text-yellow-500 mr-2" />
                                  <span className="text-yellow-500 font-medium text-sm">
                                    {education.startDate} - {education.endDate || 'Present'}
                                  </span>
                                </div>
                                <h5 className="text-gray-300 font-medium text-base text-center">
                                  {education.institution}
                                </h5>
                              </div>
                            </div>
                            
                            {/* Content Section */}
                            <div className="w-full md:w-2/3 flex flex-col justify-between">
                              <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white leading-tight">
                                  {education.degree}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                                  {education.description}
                                </p>
                              </div>
                              
                              <div className="mt-4">
                                <div className="grid grid-cols-1 gap-3">
                                  {education.achievements.map((achievement, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                                      className="flex items-start"
                                    >
                                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-300 text-sm">
                                        {achievement}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Navigation Button */}
              {educations.length > cardsPerView && (
                <motion.button
                  onClick={handleNext}
                  className="hidden md:flex w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/30 items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:border-yellow-500 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={currentIndex === maxIndex}
                  style={{ opacity: currentIndex === maxIndex ? 0.5 : 1 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              )}
            </div>

            {/* Mobile Navigation Buttons */}
            {educations.length > cardsPerView && (
              <div className="flex md:hidden justify-center gap-4 mt-8">
                <motion.button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={currentIndex === 0}
                  style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={currentIndex === maxIndex}
                  style={{ opacity: currentIndex === maxIndex ? 0.5 : 1 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            )}
            
            {/* Pagination Indicators */}
            {educations.length > cardsPerView && (
              <div className="flex justify-center space-x-2 mt-8">
                {Array.from({ length: Math.ceil(educations.length / cardsPerView) }).map(
                  (_, index) => (
                    <motion.div
                      key={index}
                      className="h-2 rounded-full cursor-pointer"
                      variants={progressVariants}
                      animate={currentIndex === index ? 'active' : 'inactive'}
                      transition={{ duration: 0.3 }}
                      onClick={() => {
                        setSlideDirection(index > currentIndex ? 1 : -1)
                        setCurrentIndex(index)
                      }}
                    ></motion.div>
                  ),
                )}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Education