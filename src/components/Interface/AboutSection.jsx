import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const paragraphContainerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const svgVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
};
export const AboutSection = () => {
  const paragraphContainer = useRef();
  const paragraphContainerControls = useAnimation();
  const isInView = useInView(paragraphContainer, {
    once: true,
    margin: "-200px",
  });

  useEffect(() => {
    if (isInView) {
      paragraphContainerControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="h-full w-full flex flex-col justify-center">
      <motion.h2
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        animate={paragraphContainerControls}
        initial="hidden"
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="font-display flex flex-col  leading-[90px] text-[108px]"
      >
        <span>Projects</span>
        <span>of any level</span>
      </motion.h2>
      <div className="flex self-end justify-end w-full relative">
        <motion.div
          ref={paragraphContainer}
          className="max-w-2xl pt-32 mr-32 font-bold"
          variants={paragraphContainerVariants}
          initial="hidden"
          animate={paragraphContainerControls}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.p
            variants={paragraphVariants}
            className="mb-[1rem]"
            transition={{
              delay: 1,
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            Привет, мы Agency Agency – инфлюенс-маркетинговое агентство.
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            transition={{
              delay: 1.5,
              duration: 0.5,
              ease: "easeIn",
            }}
          >
            Мы специализируемся на работе с лидерами мнений, креаторами,
            тематическми и авторскими каналами. Готовим и реализовываем инфлюенс
            маркетинговые стратегии, которые помогают брендам достичь свою
            аудиторию.
          </motion.p>
        </motion.div>
        <motion.svg
          className="absolute right-0 -top-32 max-w-[100%]"
          width="1039"
          height="629"
          viewBox="0 0 1039 629"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate={paragraphContainerControls}
            transition={{
              default: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
            d="M988.8 196.944C995.539 223.952 988.901 252.986 971.035 282.395C953.168 311.806 924.092 341.557 886.034 369.957C809.919 426.756 697.961 478.091 568.199 510.474C438.438 542.857 315.487 550.145 221.611 535.769C174.671 528.581 135.025 515.98 105.435 498.412C75.8459 480.845 56.3437 458.335 49.6037 431.327C42.8638 404.32 49.5027 375.286 67.3682 345.876C85.2351 316.465 114.311 286.714 152.37 258.314C228.484 201.515 340.443 150.181 470.204 117.798C599.966 85.4148 722.916 78.1262 816.793 92.5025C863.732 99.6908 903.378 112.292 932.969 129.86C962.557 147.426 982.06 169.937 988.8 196.944Z"
            stroke="#AFAFAF"
          />
        </motion.svg>
      </div>
    </div>
  );
};
