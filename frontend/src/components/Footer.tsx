import { motion } from 'framer-motion'
import { ArrowUpIcon } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-black/80 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-4 md:mb-0"
          >
            <h2 className="text-2xl font-bold">
              <span className="text-yellow-500">Anjana</span> Nimesh
            </h2>
          </motion.div>
         
        </div>
        <motion.hr
          initial={{
            opacity: 0,
            width: '0%',
          }}
          whileInView={{
            opacity: 1,
            width: '100%',
          }}
          transition={{
            duration: 0.7,
          }}
          className="my-6 border-gray-800"
        />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} Anjana Nimesh. All rights reserved.
          </motion.p>
          <motion.button
            onClick={scrollToTop}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.3,
              delay: 0.4,
            }}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer