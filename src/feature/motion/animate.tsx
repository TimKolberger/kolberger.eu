'use client'
import { motion, MotionProps } from 'framer-motion'

export const Presence = (props: MotionProps) => (
  <motion.div
    initial={{
      scale: 1.392,
    }}
    whileInView={{
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    }}
    viewport={{ amount: 0.8 }}
    {...props}
  />
)
