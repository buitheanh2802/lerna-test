import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {

    const [showAnimate,setShowAnimate] = useState(false);

    const onClick = () => {
        setShowAnimate(!showAnimate)
    }

  return (
    <div>
        <button onClick={onClick}>Click show animates</button>
      <AnimatePresence>
        {showAnimate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            hello animate
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
      animate={{x: [0,70,0]}}
      transition={{ease: 'backInOut',duration: 1}}
      >
        Test first animate
      </motion.div>
    </div>
  );
};

export default App;
