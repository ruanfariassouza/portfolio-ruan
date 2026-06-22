const projects = [
  {
    title: 'Portfolio Ruan Farias',
    type: 'Identidade digital',
    text: 'Uma presença visual limpa, editorial e direta, construída para apresentar projetos, linguagem e intenção profissional com clareza.',
  },
  {
    title: 'Viva Junto',
    type: 'Produto e experiência',
    text: 'Conceito de app para organização de casa compartilhada, com sistema de tarefas, convivência, humor e responsabilidade visual.',
  },
  {
    title: 'iFlow Self‑Repair',
    type: 'Estratégia e tecnologia',
    text: 'Estudo de serviço para direito de reparo, peças, logística e comunicação para um público que ama tecnologia sem aceitar fricção.',
  },
];

const services = [
  'Estratégia digital mobile',
  'Social media para marcas locais',
  'Direção criativa de conteúdo',
  'Captação, edição e narrativa visual',
];

export default function App() {
  return (
    <main>
      <section className="hero section">
        <nav className="nav">
          <span>Ruan Farias</span>
          <a href="mailto:ruan@email.com">Contato</a>
        </nav>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">Portfolio / Estratégia / Visual Design</p>
            <h1>Experiências digitais com presença, intenção e acabamento.</h1>
          </div>
          <p className="lead">
            Construo ideias visuais para marcas, projetos e serviços que precisam parecer simples, mas carregar uma estrutura clara por trás. Menos ruído. Mais direção.
          </p>
        </div>
      </section>

      <section className="section about">
        <p className="eyebrow">Sobre</p>
        <h2>Um portfólio para mostrar pensamento, estética e execução.</h2>
        <p>
          Este espaço reúne projetos de identidade digital, estratégia mobile, social media e experimentos de produto. A proposta é mostrar um trabalho com linguagem contemporânea, visual limpo e foco em conversão real para pequenos negócios e iniciativas autorais.
        </p>
      </section>

      <section className="section">
        <div className="sectionTitle">
          <p className="eyebrow">Projetos</p>
          <h2>Três direções, uma mesma lógica: clareza.</h2>
        </div>
        <div className="cards">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <div className="visual" />
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services">
        <p className="eyebrow">Serviços</p>
        <h2>Para lojas e marcas que precisam sair do improviso.</h2>
        <div className="serviceList">
          {services.map((service) => <span key={service}>{service}</span>)}
        </div>
      </section>

      <section className="section contact">
        <p className="eyebrow">Contato</p>
        <h2>Vamos transformar uma presença comum em algo memorável.</h2>
        <a className="button" href="mailto:ruan@email.com?subject=Contato pelo portfólio&body=Oi, Ruan. Vi seu portfólio e queria conversar sobre um projeto.">Enviar e-mail</a>
      </section>
    </main>
  );
}
