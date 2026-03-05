import SectionWrapper from "../components/layout/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper className="bg-background ">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <h2 className="font-display-1 text-text-primary text-4xl md:text-5xl whitespace-nowrap uppercase">
          Sobre mim
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
      <p className="font-sans text-white">
        Desenvolvedora front-end focada em criar interfaces modernas,
        responsivas e acessíveis. <br /> Trabalho principalmente com React,
        TypeScript e Next.js, aplicando princípios mobile-first e boas práticas
        de performance e usabilidade. Tenho experiência no desenvolvimento de
        aplicações front-end completas, integração com APIs REST, fluxos de
        autenticação com AWS Cognito e deploys com AWS Amplify. Já participei da
        construção de um MVP corporativo, atuando no desenvolvimento do
        front-end e integração com o backend. <br /> Sou formada em Letras pela UFRPE e
        em Análise e Desenvolvimento de Sistemas pelo Senac, combinando visão
        analítica, comunicação clara e atenção a detalhes na construção de
        interfaces.
      </p>
    </SectionWrapper>
  );
};

export default About;
