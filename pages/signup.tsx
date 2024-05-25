import Signup from "@/components/signup/Signup";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const signup = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-[100vh] max-h-[100vh]"
      >
        <Signup />
      </motion.div>
    </AnimatePresence>
  );
};

export default signup;
