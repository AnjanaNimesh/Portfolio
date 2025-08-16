import React, { type ReactNode } from 'react'
import { motion } from 'framer-motion'
interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
}
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}) => {
  const getDirectionValues = () => {
    switch (direction) {
      case 'up':
        return {
          initial: {
            y: 100,
          },
          animate: {
            y: 0,
          },
        }
      case 'down':
        return {
          initial: {
            y: -100,
          },
          animate: {
            y: 0,
          },
        }
      case 'left':
        return {
          initial: {
            x: 100,
          },
          animate: {
            x: 0,
          },
        }
      case 'right':
        return {
          initial: {
            x: -100,
          },
          animate: {
            x: 0,
          },
        }
      default:
        return {
          initial: {
            y: 100,
          },
          animate: {
            y: 0,
          },
        }
    }
  }
  const { initial, animate } = getDirectionValues()
  return (
    <motion.div
      initial={{
        ...initial,
        opacity: 0,
      }}
      whileInView={{
        ...animate,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{
        once,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
export default AnimatedSection
