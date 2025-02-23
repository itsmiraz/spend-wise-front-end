/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'


const AnimatedPage = ({ children }: { children: ReactNode }) => {
    return (<AnimatePresence>

        <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
        >
            {
                children
            }
        </motion.div>
    </AnimatePresence>
    )
}

export default AnimatedPage