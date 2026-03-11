import AnimatedSection from "./AnimatedSection";

interface Props {
  badge: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ badge, title, subtitle }: Props) => (
  <AnimatedSection className="text-center mb-12 md:mb-16">
    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase gradient-accent text-primary mb-4">
      {badge}
    </span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>
    )}
  </AnimatedSection>
);

export default SectionHeading;
