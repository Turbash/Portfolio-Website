import React from "react";
import { motion } from "framer-motion";

const AboutCard = ({ title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="card bg-cardAlt-about dark:bg-cardAlt-dark-about transition-colors duration-500 ease-in-out p-6 lg:p-8 rounded-2xl shadow-md shadow-black/70 dark:shadow-none border border-border dark:border-border-dark max-w-[400px] min-h-[228px] w-full flex flex-col"
    >
      <h3 className="card-title text-xl font-bold text-primary dark:text-primary-dark mb-3">
        {title}
      </h3>
      <p className="card-content text-left text-gray-700 dark:text-gray-300 leading-relaxed mt-2 ">
        {content}
      </p>
    </motion.div>
  );
};

export default AboutCard;
