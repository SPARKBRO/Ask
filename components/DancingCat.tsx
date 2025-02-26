import { motion } from "framer-motion"

const DancingCat = () => {
  return (
    <motion.div
      className="fixed bottom-0 left-0"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <img src="/assets/dancing-cat.gif" alt="Dancing Cat" className="w-32 h-32" />
    </motion.div>
  )
}

export default DancingCat

