import { motion } from "framer-motion";

/**
 * Reveal — fades + slides content into view as the user scrolls to it.
 * Wrap any section/element with this to get a consistent, calm entrance
 * animation instead of everything appearing at once.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}) {
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </Comp>
  );
}
