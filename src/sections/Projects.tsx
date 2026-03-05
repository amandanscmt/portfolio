import SectionWrapper from "../components/layout/SectionWrapper";

const Projects = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <h2 className="font-display-1 text-text-primary text-4xl md:text-5xl whitespace-nowrap uppercase">
          Meus projetos
        </h2>

        <div
          className="
      h-0.5
      w-full
      md:flex-1
      bg-linear-to-r
      from-text-primary
      via-accent
      to-transparent
    "
        />
      </div>
    </SectionWrapper>
  );
};

export default Projects;
