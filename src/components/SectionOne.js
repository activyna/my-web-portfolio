import React from 'react'
import { motion } from "framer-motion"
import { ProfilePhoto } from './ProfilePhoto';



export const SectionOne = () => {
  return (
    <motion.div className="SectionOne">
        <motion.div className='Occupation-sectionOne'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: .5 }}
        >
            <motion.p style={{color: "#141c3a", textAlign: "center",fontWeight:"bold", fontSize:"clamp(25px, 3vw, 40px)"}}>
                <motion.span>Frontend Developer </motion.span><motion.span>& </motion.span><br/>
                <motion.span>Software Engineer in Training</motion.span>
            </motion.p>
        </motion.div>
        <ProfilePhoto/>
    </motion.div>
  )
}
