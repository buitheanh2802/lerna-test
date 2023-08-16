import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {

    const [showAnimate, setShowAnimate] = useState(false);

    const list = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    }
    
    const item = {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -100 },
    }
    
    return (
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <motion.li variants={item}>Item 1</motion.li>
        <motion.li variants={item}>Item 2</motion.li>
        <motion.li variants={item}>Item 3</motion.li>
      </motion.ul>
    )
};

export default App;
