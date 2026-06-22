const projects = [
  {
    title: 'Sistema de Conteúdo para Moda Local',
    type: 'Estudo autoral / Moda',
    text: 'Projeto conceitual para transformar uma loja de roupa comum em uma presença mais desejável, clara e possível de produzir com celular. O foco é vender estilo sem inventar luxo.',
    bullets: ['Looks prontos', 'Provador real', 'Peça da semana', 'WhatsApp'],
    note: 'Entrega proposta: 9 posts, 4 Reels, sequência de stories e guia de linguagem para loja de moda feminina.',
    visual: 'antesDepois',
    labels: ['Look', 'Reels', 'WhatsApp'],
  },
  {
    title: 'Beleza Sem Complicar',
    type: 'Campanha conceitual / Beauty',
    text: 'Estudo de conteúdo para maquiagem e skincare com linguagem acessível, visual limpo e foco em demonstração. A ideia é fazer o produto parecer útil antes de parecer bonito.',
    bullets: ['Textura', 'Rotina', 'Antes e depois', 'Dúvidas'],
    note: 'Entrega proposta: post de campanha, roteiro de demonstração, stories de produto e legenda comercial leve.',
    visual: 'stories',
    labels: ['Teste', 'Rotina', 'Compra'],
  },
  {
    title: 'Café de Bairro, Conteúdo de Desejo',
    type: 'Campanha conceitual / Gastronomia',
    text: 'Projeto para cafeteria brasileira local, usando café, pão de queijo, bastidor e rotina como matéria-prima de conteúdo. O objetivo é transformar visita em vontade.',
    bullets: ['Produto', 'Ambiente', 'Cardápio', 'Bastidor'],
    note: 'Entrega proposta: campanha de fim de semana, Reels de preparo, stories de horário e post de produto.',
    visual: 'carrossel',
    labels: ['Café', 'Story', 'Visita'],
  },
  {
    title: 'Reels Sem Cara de Propaganda',
    type: 'Planejamento audiovisual',
    text: 'Método de roteiro para negócios que precisam gravar vídeo curto, mas não sabem sair do produto parado. Cada cena mostra detalhe, uso, bastidor, dúvida e chamada final.',
    bullets: ['Detalhe', 'Uso real', 'Bastidor', 'Chamada final'],
    note: 'Entrega proposta: storyboard com 5 cenas, texto de tela, ritmo de edição e legenda pronta para Reels.',
    visual: 'reels',
    labels: ['Cena', 'Corte', 'Ação'],
  },
  {
    title: 'Carrossel que Explica e Vende',
    type: 'Conteúdo educativo',
    text: 'Estudo de carrossel para pequenos negócios que precisam explicar melhor o que fazem. A estrutura guia o público da dúvida até uma decisão simples.',
    bullets: ['Gancho', 'Contexto', 'Prova', 'Solução'],
    note: 'Entrega proposta: 5 cards com copy curta, hierarquia visual, CTA final e legenda de apoio.',
    visual: 'diagnostico',
    labels: ['Slide', 'Copy', 'CTA'],
  },
  {
    title: 'Instagram Pronto para WhatsApp',
    type: 'Estratégia de conversão',
    text: 'Projeto focado em transformar o perfil em caminho de conversa. Bio, destaques, stories e posts passam a responder rapidamente o que a pessoa precisa saber antes de chamar.',
    bullets: ['Bio objetiva', 'Como comprar', 'Prova social', 'Link claro'],
    note: 'Entrega proposta: diagnóstico de primeira impressão, nova bio, destaques e chamadas para direct ou WhatsApp.',
    visual: 'prospeccao',
    labels: ['Bio', 'Link', 'Venda'],
  },
  {
    title: 'Guia Visual Mobile-First',
    type: 'Direção criativa',
    text: 'Sistema visual simples para marcas locais manterem consistência mesmo produzindo conteúdo pelo celular. Menos template solto, mais reconhecimento de marca.',
    bullets: ['Paleta', 'Tipografia', 'Foto real', 'Tom de voz'],
    note: 'Entrega proposta: guia visual para feed, stories e Reels com exemplos de aplicação e regras simples.',
    visual: 'antesDepois',
    labels: ['Cor', 'Fonte', 'Feed'],
  },
  {
    title: 'Mapa de Prospecção Local',
    type: 'Projeto autoral / Vila Velha',
    text: 'Estudo de abordagem para lojas físicas com Instagram fraco. O projeto organiza diagnóstico rápido, argumento comercial e mensagem pós-visita para marcar reunião.',
    bullets: ['Checklist', 'Abordagem', 'Reunião', 'Proposta'],
    note: 'Entrega proposta: roteiro presencial, mensagem de WhatsApp, critérios de avaliação e modelo de apresentação.',
    visual: 'prospeccao',
    labels: ['Loja', 'Mapa', 'Meet'],
  },
  {
    title: 'Plano de 30 Dias para Perfil Parado',
    type: 'Estratégia editorial',
    text: 'Plano de retomada para negócios que abandonaram o Instagram. A proposta cria ritmo, categorias de conteúdo e primeiras publicações sem depender de produção complexa.',
    bullets: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    note: 'Entrega proposta: calendário de 30 dias, ideias de posts, stories recorrentes e Reels simples para reativação.',
    visual: 'carrossel',
    labels: ['30d', 'Posts', 'Ritmo'],
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

function ProjectVisual({ type, labels = ['Bio', 'Reels', 'WhatsApp'] }) {
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
        {labels.map((label) => <span key={label}>{label}</span>)}
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
              <ProjectVisual type={project.visual} labels={project.labels} />
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
