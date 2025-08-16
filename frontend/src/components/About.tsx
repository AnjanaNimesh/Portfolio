import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import AnimatedText from './AnimatedText'

const About = () => {
  return (
    <section
      id="about"
      className="py-20 min-h-screen flex items-center bg-gradient-to-b from-black/40 to-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="About Me"
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right" className="flex justify-center">
            <div className="relative max-w-xs">
              <div className="relative z-10 rounded-lg overflow-hidden border-4 border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
                <img
                  src="image.jpg"
                  alt="Anjana Nimesh"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-yellow-500 rounded-lg -z-10"></div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-500/10 rounded-full z-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              ></motion.div>
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-500/10 rounded-full z-20"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
              ></motion.div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/10 shadow-xl">
              <p className="text-gray-300 mb-4">
                I am a third-year undergraduate at the Faculty of Information Technology, University of Moratuwa, with a strong passion for Software Engineering and technology driven problem solving. I enjoy designing and building efficient, scalable solutions that make a real impact.
              </p>
              <p className="text-gray-300 mb-6">
              With expertise in modern web technologies and software development practices, I specialize in creating innovative applications that bridge the gap between complex technical requirements and user-friendly experiences. My journey combines academic excellence with practical project experience, leadership skills, and a commitment to continuous learning in the ever evolving tech landscape.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-black/20 p-4 rounded-lg border border-yellow-500/10">
                  <p className="mb-2">
                    <strong className="text-yellow-500">Name:</strong> Anjana Nimesh Sathsara
                  </p>
                  <p className="mb-2">
                    <strong className="text-yellow-500">Location:</strong> Moratuwa, Sri Lanka
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-lg border border-yellow-500/10">
                  <p className="mb-2">
                    <strong className="text-yellow-500">Email:</strong> anjananimesh22@gmail.com
                  </p>
                  <p className="mb-2">
                    <strong className="text-yellow-500">Phone:</strong> +94 71 328 8667
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default About