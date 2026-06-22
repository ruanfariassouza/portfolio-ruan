const projects = [
  {
    title: 'Diagnóstico de Instagram',
    type: 'Estratégia de presença',
    text: 'Leitura visual e comercial de perfis que parecem ativos, mas não orientam o cliente. O foco é encontrar ruído, ausência de direção e pontos de perda antes do WhatsApp.',
    bullets: ['Bio clara', 'Destaques úteis', 'Feed com direção', 'Caminho para compra'],
    note: 'Entrega visual: mapa de problemas, prioridades e ajustes imediatos.',
    visual: 'diagnostico',
  },
  {
    title: 'Antes e Depois de Perfil',
    type: 'Redesign conceitual',
    text: 'Transformação de um Instagram local genérico em uma vitrine mais objetiva, com hierarquia, consistência e chamadas simples para venda.',
    bullets: ['Antes confuso', 'Depois organizado', 'Destaques padronizados', 'WhatsApp evidente'],
    note: 'Entrega visual: comparação direta entre presença improvisada e presença clara.',
    visual: 'antesDepois',
  },
  {
    title: 'Carrossel Estratégico',
    type: 'Conteúdo educativo',
    text: 'Sequência pensada para ensinar sem parecer aula e vender sem parecer panfleto. Cada slide conduz a pessoa de uma dor simples até uma ação.',
    bullets: ['Gancho', 'Contexto', 'Exemplo', 'Solução', 'Chamada final'],
    note: 'Entrega visual: cinco cards para Instagram com texto curto e ritmo de leitura.',
    visual: 'carrossel',
  },
  {
    title: 'Stories que Vendem',
    type: 'Roteiro de conversão',
    text: 'Modelo de sequência para stories com novidade, enquete, detalhe, prova e chamada. A venda acontece como conversa, não como pressão.',
    bullets: ['Novidade', 'Escolha', 'Detalhe', 'Prova', 'WhatsApp'],
    note: 'Entrega visual: quatro telas de story com linguagem leve e comercial.',
    visual: 'stories',
  },
  {
    title: 'Storyboard para Reels',
    type: 'Vídeo curto',
    text: 'Planejamento de Reels para pequenos negócios mostrarem produto em uso, bastidor e dúvida real do cliente com edição simples e intenção clara.',
    bullets: ['Cena 1: detalhe', 'Cena 2: uso', 'Cena 3: bastidor', 'Cena 4: dúvida', 'Cena 5: ação'],
    note: 'Entrega visual: quadro a quadro para captação mobile.',
    visual: 'reels',
  },
  {
    title: 'Prospecção Local',
    type: 'Vila Velha — ES',
    text: 'Projeto autoral para mapear lojas com presença digital fraca e transformar diagnóstico em abordagem profissional, reunião e proposta simples.',
    bullets: ['Mapa de lojas', 'Checklist rápido', 'Mensagem pós-visita', 'Reunião objetiva'],
    note: 'Entrega visual: método de prospecção para moda, beleza, acessórios e serviços.',
    visual: 'prospeccao',
  },
];

const services = [
  'Diagnóstico de Instagram',
  'Planejamento de conteúdo',
  'Roteiros para Reels',
  'Stories com intenção de venda',
  'Direção visual para feed',
  'Prospecção para negócios locais',
];

const process = [
  {
    label: '01',
    title: 'Ler o perfil',
    text: 'Entender o que a marca comunica nos primeiros segundos: bio, destaques, feed, vídeos e caminho de compra.',
  },
  {
    label: '02',
    title: 'Organizar a mensagem',
    text: 'Definir o que precisa ficar claro: o que vende, para quem, onde está, como comprar e por que confiar.',
  },
  {
    label: '03',
    title: 'Criar conteúdo aplicável',
    text: 'Transformar estratégia em posts, stories e Reels possíveis de produzir com celular e rotina real.',
  },
];

function ProjectVisual({ type }) {
  return (
    <div className={`projectVisual ${type}`}>
      <div className="phone">
        <div className="phoneTop" />
        <div className="profileLine" />
        <div className="highlightRow">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="gridPreview">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="floatingNotes">
        <span>Bio</span>
        <span>Reels</span>
        <span>WhatsApp</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <section className="hero section" id="inicio">
        <nav className="nav">
          <span>Ruan Farias</span>
          <div>
            <a href="#projetos">Projetos</a>
            <a href="mailto:ruan@email.com">Contato</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">Social Media / Direção Criativa / Conteúdo Mobile</p>
            <h1>Presença digital com clareza, estética e intenção de venda.</h1>
          </div>
          <p className="lead">
            Portfólio autoral com estudos de social media para pequenos negócios brasileiros. Estratégia, conteúdo e design aplicados a perfis que precisam sair do improviso e se apresentar melhor.
          </p>
        </div>
      </section>

      <section className="section about" id="sobre">
        <p className="eyebrow">Sobre</p>
        <h2>Não é sobre postar mais. É sobre fazer o perfil trabalhar melhor.</h2>
        <p>
          Meu trabalho parte de uma leitura simples: muitos negócios têm produto, mas não têm presença. Eu organizo a comunicação para que o cliente entenda a marca, confie no que vê e saiba qual é o próximo passo.
        </p>
      </section>

      <section className="section" id="projetos">
        <div className="sectionTitle">
          <p className="eyebrow">Projetos conceituais</p>
          <h2>Estudos criados para mostrar método, repertório visual e execução.</h2>
        </div>

        <div className="cards">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <ProjectVisual type={project.visual} />
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <ul>
                {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <small>{project.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section process">
        <div>
          <p className="eyebrow">Método</p>
          <h2>Um processo simples para transformar perfis comuns em comunicação mais clara.</h2>
        </div>
        <div className="processGrid">
          {process.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services">
        <div>
          <p className="eyebrow">Serviços</p>
          <h2>Para marcas locais que precisam parecer mais prontas para vender.</h2>
        </div>
        <div className="serviceList">
          {services.map((service) => <span key={service}>{service}</span>)}
        </div>
      </section>

      <section className="section contact">
        <p className="eyebrow">Contato</p>
        <h2>Vamos transformar uma presença comum em uma comunicação mais memorável.</h2>
        <a className="button" href="mailto:ruan@email.com?subject=Contato pelo portfólio&body=Oi, Ruan. Vi seu portfólio e queria conversar sobre social media.">Enviar e-mail</a>
      </section>
    </main>
  );
}
