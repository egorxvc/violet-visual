import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <h2 className="font-display flex flex-col  leading-[90px]">
        <span className="text-[80px]">This Shit is</span>
        <span className="text-[120px] uppercase">Premium</span>
      </h2>
      <div className="flex self-end justify-end w-full relative">
        <p className="max-w-2xl pt-32 mr-32">
          Привет, мы Agency Agency - премиальное рекламное агентство.
          <br/>
          Мы специализируемся на создании и реализации комплексных маркетинговых
          стратегий - от социальных медиа до создания уникального контента и
          построения взаимодействия с целевой аудиторией.
        </p>
        <svg
            className="absolute right-0 -top-44 max-w-4xl"
            width="1039"
            height="629"
            viewBox="0 0 1039 629"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M988.8 196.944C995.539 223.952 988.901 252.986 971.035 282.395C953.168 311.806 924.092 341.557 886.034 369.957C809.919 426.756 697.961 478.091 568.199 510.474C438.438 542.857 315.487 550.145 221.611 535.769C174.671 528.581 135.025 515.98 105.435 498.412C75.8459 480.845 56.3437 458.335 49.6037 431.327C42.8638 404.32 49.5027 375.286 67.3682 345.876C85.2351 316.465 114.311 286.714 152.37 258.314C228.484 201.515 340.443 150.181 470.204 117.798C599.966 85.4148 722.916 78.1262 816.793 92.5025C863.732 99.6908 903.378 112.292 932.969 129.86C962.557 147.426 982.06 169.937 988.8 196.944Z"
              stroke="#AFAFAF"
          />
          <path
              d="M916.417 96L908.394 117.394L887 125.417L908.394 133.44L916.417 154.834L924.44 133.44L945.834 125.417L924.44 117.394L916.417 96Z"
              fill="black"
          />
        </svg>
      </div>
    </div>
  );
};
