import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import AnimatedText from './AnimatedText'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['Full Stack Developer', 'IT Undergraduate']
  
  useEffect(() => {
    const currentFullText = texts[textIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentFullText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)
    
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/AnjanaNimesh', // Replace with your GitHub URL
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anjana-nimesh-8801a8271/', // Replace with your LinkedIn URL
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@anjana.n.sathsara.j.k.d', // Replace with your Medium URL
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:anjananimesh22.com', // Replace with your email
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.98L12 10.854l9.382-7.033h.981c.904 0 1.636.732 1.636 1.636z"/>
        </svg>
      )
    }
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 relative overflow-hidden"
    >
      {/* Dark Background with Yellow Accents for Perfect Readability */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-800/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gray-700/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        {/* Subtle yellow accent blob */}
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-amber-700/12 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1000"></div>
        {/* Additional depth blob */}
        <div className="absolute bottom-1/3 right-1/2 w-72 h-72 bg-slate-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000"></div>
      </div>

      {/* Social Media Icons - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
      >
        <div className="flex flex-col space-y-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.2, 
                x: 8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-yellow-500/50 transition-all duration-300"
              title={social.name}
            >
              <div className="text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">
                {social.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.name}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Connecting line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-yellow-500/50 to-transparent"
        ></motion.div>
      </motion.div>
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-6"
        >
          <span className="text-xl md:text-2xl font-light text-gray-400">
            Hello, I'm
          </span>
        </motion.div>
        
        <AnimatedText
          text="Anjana Nimesh"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          once={true}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-xl md:text-3xl text-yellow-500 font-medium mb-8 h-12 flex items-center justify-center"
        >
          <span className="relative">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="ml-1 text-yellow-400"
            >
              |
            </motion.span>
          </span>
        </motion.div>
        
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg"
        >
          Undergraduate at University of Moratuwa, passionate about creating
          innovative solutions and pushing the boundaries of technology.
        </motion.p>
        
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.5,
          }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="/Anjana_Nimesh_CV.pdf"
            download="Anjana_Nimesh_CV.pdf"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-medium rounded-full transition-colors"
          >
            Download CV
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="px-8 py-3 border border-yellow-500 text-yellow-500 font-medium rounded-full transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Mobile Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="flex justify-center space-x-4 mt-8 lg:hidden"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-yellow-500/50 text-gray-400 hover:text-yellow-500 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: 0.5,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            <a
              href="#about"
              className="flex flex-col items-center text-gray-400 hover:text-white"
            >
              <span className="mb-2 text-sm">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero


