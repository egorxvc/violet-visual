import { HeaderSection } from "./HeaderSection";
import { AboutSection } from "./AboutSection";
import { ServiceSection } from "./ServiceSection";
import { AdvertiseSection } from "./AdvertiseSection";
import { motion } from "framer-motion";
import { CropsSection } from "./CropsSection";
import { ClientsSection } from "./ClientsSection";
import { BloggersSection } from "./BloggersSection";

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
