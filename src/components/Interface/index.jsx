import { HeaderSection } from "./HeaderSection";
import { AboutSection } from "./AboutSection";
import { ServiceSection } from "./ServiceSection";
import { AdvertiseSection } from "./AdvertiseSection";
import { motion } from "framer-motion";
import { CropsSection } from "./CropsSection";
import { ClientsSection } from "./ClientsSection";
import { BloggersSection } from "./BloggersSection";
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

export const Section = (props) => {
  const { children, className = "" } = props;

  return (
    <section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start relative ${className}`}
    >
      {children}
    </section>
  );
};

export const Interface = () => {
    const scroll = useScroll();

    useFrame(() => {
        if (scroll.range(3/7, 4/7) > 0) {
            document.body.className = "bg-black text-white";
            // document.body.className = "";
        } else {
            document.body.className = "bg-white text-black";
        }

        if (scroll.range(5/7, 1) > 0) {
            document.body.className = "bg-white text-black";
        }
    })

  return (
    <motion.div className="flex flex-col items-center w-screen">
      <Section>
        <HeaderSection />
      </Section>
      <Section>
        <AboutSection />
      </Section>
      <Section>
        <ServiceSection />
      </Section>
      <Section>
        <AdvertiseSection />
      </Section>
      <Section>
        <CropsSection />
      </Section>
      <Section>
        <ClientsSection />
      </Section>
      <Section>
        <BloggersSection />
      </Section>
    </motion.div>
  );
};
