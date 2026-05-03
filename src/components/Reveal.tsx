import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../lib/cn'

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number
}

export function Reveal({ delay = 0, className, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

