import React from 'react'
import { motion } from "framer-motion"
import profile_photo from "../images/profile_photo.png";

export const ProfilePhoto = () => {
  return (
    <motion.div className='ProfilePhoto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: .7 }}
      >
        <motion.div className='Container-profilePhoto'>
                <motion.div className='Circle-profilePhoto'>
                </motion.div>
                <motion.img className='Image-profilePhoto' src={profile_photo}/>
            </motion.div>
    </motion.div>
  )
}
