// Banner.jsx
import { motion } from "framer-motion";
import "./Banner.css";

export default function Banner() {
    return (
        <section className="custom-banner">
            <motion.div
                className="banner-overlay"
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.5, 0.71, 1, 1.01] }}
            >
                <motion.h1
                    className="banner-title"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    Make the place you live,<br />
                    the place you love
                </motion.h1>
                <motion.button
                    className="banner-btn"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                    whileHover={{ scale: 1.08 }}
                >
                    GET A QUOTE TODAY
                </motion.button>
            </motion.div>
            <motion.div
                className="banner-image"
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            />
        </section>
    );
}
