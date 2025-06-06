import React from "react";
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaAddressCard,
  FaUsers,
} from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/mldnrknn", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await res.json();

    if (res.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus(result?.message || "Something went wrong.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="bg-sectionBg-contact dark:bg-sectionBg-dark-contact transition-colors duration-500 ease-in-out overflow-x-hidden px-6 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative z-[2]">
      <motion.h2
        className="text-4xl font-bold text-fg dark:text-fg-dark text-center mb-12"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 lg:max-w-[85%] 2xl:max-w-[70%] mx-auto">
        <motion.div
          className="bg-white dark:bg-[#142438] shadow-md rounded-xl p-6 w-full lg:w-2/3"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-fg dark:text-fg-dark mb-6 flex items-center gap-2">
            <FaPaperPlane /> Send a Message
          </h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-bg dark:bg-[#152238] text-fg dark:text-fg-dark border border-border dark:border-border-dark"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-bg dark:bg-[#152238] text-fg dark:text-fg-dark border border-border dark:border-border-dark"
            />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-bg dark:bg-[#152238] text-fg dark:text-fg-dark border border-border dark:border-border-dark resize-none"
            ></textarea>
            <motion.button
              type="submit"
              className="bg-primary dark:bg-primary-dark text-white px-6 py-2 rounded-md hover:brightness-90 hover:scale-105 transition flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <FaPaperPlane />
            </motion.button>
            {status && (
  <motion.div
    className={`mt-4 px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${
      status.includes("success")
        ? "bg-green-100 text-green-800 dark:bg-green-200/10 dark:text-green-400"
        : "bg-red-100 text-red-800 dark:bg-red-200/10 dark:text-red-400"
    }`}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    {status.includes("success") ? (
      <FaPaperPlane className="text-green-500 dark:text-green-400" />
    ) : (
      <FaEnvelope className="text-red-500 dark:text-red-400" />
    )}
    {status}
  </motion.div>
)}

          </form>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/3 flex flex-col justify-between gap-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="flex-1 bg-white dark:bg-[#142438] shadow-md rounded-xl p-4 xl:p-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-fg dark:text-fg-dark mb-5 flex items-center gap-2">
              <FaAddressCard /> Contact Info
            </h3>
            <p className="text-muted dark:text-muted-dark mb-4 flex items-center gap-2">
              <FaEnvelope className="text-2xl text-primary dark:text-primary-dark" />
              <span className="text-fg dark:text-fg-dark">
                negirawatdeepi@gmail.com
              </span>
            </p>
            <p className="text-muted dark:text-muted-dark mb-4 flex items-center gap-2">
              <a
                href="https://portfolio-website-ten-black-33.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg dark:text-fg-dark hover:underline flex gap-2 hover:scale-105"
              >
                <BiLinkExternal className="text-2xl text-primary dark:text-primary-dark" />
                My portfolio
              </a>
            </p>

            <p className="text-muted dark:text-muted-dark mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-2xl text-primary dark:text-primary-dark" />
              <span className="text-fg dark:text-fg-dark">
                New Delhi, India
              </span>
            </p>
          </motion.div>

          <motion.div
            className="flex-1 bg-white dark:bg-[#142438] shadow-md rounded-xl p-4 xl:p-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-fg dark:text-fg-dark mb-5 flex items-center gap-2">
              <FaUsers /> Socials
            </h3>
            <motion.ul
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <a
                  href="https://github.com/Turbash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-primary-dark hover:underline text-lg flex gap-2 hover:scale-105 transition-transform"
                >
                  <FaGithub className="text-2xl text-primary dark:text-primary-dark" />
                  GitHub
                </a>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <a
                  href="https://linkedin.com/in/turbash-negi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-primary-dark hover:underline text-lg flex gap-2 hover:scale-105 transition-transform"
                >
                  <FaLinkedin className="text-2xl text-primary dark:text-primary-dark" />
                  LinkedIn
                </a>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <a
                  href="https://twitter.com/Rawatdeepi27862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-primary-dark hover:underline text-lg flex gap-2 hover:scale-105 transition-transform"
                >
                  <FaTwitter className="text-2xl text-primary dark:text-primary-dark" />
                  Twitter
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </motion.section>
  );
};

export default Contact;
