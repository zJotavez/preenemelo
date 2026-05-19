// Dados centralizados dos professores
export interface TeacherData {
  id: string;
  name: string;
  subject: string;
  subjectFull: string;
  photo: string; // caminho público ou URL
  shortBio: string;
  accentColor: string;
  // Dados da página individual
  fullBio: string[];
  education: { degree: string; institution: string; year: string }[];
  experience: { role: string; institution: string; period: string; description: string }[];
  highlights: { label: string; value: string }[];
  quote: string;
}

export const teachers: TeacherData[] = [
  {
    id: "solange",
    name: "Solange",
    subject: "Redação",
    subjectFull: "Redação ENEM",
    photo: "/professores/solange.jpg",
    accentColor: "#7c3aed",
    shortBio: "Especialista em redação nota 1000 com metodologia exclusiva de argumentação e domínio da dissertação.",
    quote: "A redação é a sua voz no ENEM. Vou te ensinar a usá-la com maestria e confiança.",
    fullBio: [
      "Professora Solange é referência nacional em redação para o ENEM, com mais de 12 anos de experiência formando alunos que conquistam a nota máxima na prova de redação.",
      "Seu método exclusivo de construção argumentativa combina análise crítica dos textos motivadores com técnicas avançadas de coesão e coerência, garantindo que cada aluno desenvolva uma voz autêntica e precisa no texto dissertativo-argumentativo.",
      "Apaixonada pela língua portuguesa e pela transformação que uma boa escrita pode promover, a professora Solange já orientou mais de 3.000 redações, ajudando centenas de estudantes a alcançarem a aprovação nos cursos mais concorridos do país.",
    ],
    education: [
      { degree: "Licenciatura em Letras – Português e Literatura", institution: "Universidade Federal", year: "2010" },
      { degree: "Especialização em Linguística Aplicada ao Ensino", institution: "PUC-Rio", year: "2013" },
      { degree: "Mestrado em Teoria Literária", institution: "Universidade Estadual", year: "2016" },
    ],
    experience: [
      {
        role: "Professora de Redação",
        institution: "Pré Enem Elo",
        period: "2021 – Presente",
        description: "Coordena a Clínica de Redação, com correções individualizadas e aulas estratégicas sobre os temas mais recorrentes do ENEM.",
      },
      {
        role: "Corretora de Redações",
        institution: "Cursinho Objetivo SP",
        period: "2015 – 2021",
        description: "Corrigiu mais de 15.000 redações e desenvolveu material didático próprio para ensino de dissertação argumentativa.",
      },
      {
        role: "Professora de Língua Portuguesa",
        institution: "Colégio Estadual",
        period: "2010 – 2015",
        description: "Ensino médio com foco em produção textual e análise literária.",
      },
    ],
    highlights: [
      { label: "Anos de Experiência", value: "12+" },
      { label: "Redações Corrigidas", value: "15.000+" },
      { label: "Alunos com Nota 900+", value: "400+" },
      { label: "Taxa de Aprovação", value: "94%" },
    ],
  },
  {
    id: "matheus-glaydson",
    name: "Matheus Glaydson",
    subject: "História",
    subjectFull: "História Geral",
    photo: "/professores/matheus.jpg",
    accentColor: "#b45309",
    shortBio: "Professor de História Geral com abordagem narrativa que contextualiza os eventos históricos de forma envolvente e estratégica para o ENEM.",
    quote: "A história não é memorização de datas — é entender o mundo que você vai transformar.",
    fullBio: [
      "Professor Matheus Glaydson é um dos educadores mais dinâmicos da área de Ciências Humanas, conhecido por transformar a História em uma narrativa cinematográfica que prende a atenção dos alunos do início ao fim.",
      "Sua metodologia une linha do tempo visual, mapas mentais temáticos e conexão entre os eventos históricos e as questões contemporâneas do ENEM. Com isso, o aluno não precisa decorar — precisa entender e relacionar.",
      "Com passagens por importantes pré-vestibulares do país e vasta experiência em preparação para concursos públicos, o professor Matheus acumulou um repertório de estratégias que maximizam o desempenho dos estudantes em Ciências Humanas.",
    ],
    education: [
      { degree: "Licenciatura em História", institution: "Universidade Federal Fluminense – UFF", year: "2011" },
      { degree: "Especialização em História do Brasil", institution: "Fundação Getúlio Vargas – FGV", year: "2014" },
      { degree: "Pós-Graduação em Educação e Docência", institution: "Universidade Estácio", year: "2017" },
    ],
    experience: [
      {
        role: "Professor de História Geral",
        institution: "Pré Enem Elo",
        period: "2021 – Presente",
        description: "Ministra aulas de História Geral e Brasileira com foco na matriz de referência do ENEM, produzindo materiais exclusivos e simulados temáticos.",
      },
      {
        role: "Professor de Ciências Humanas",
        institution: "Pré-Vestibular Comunitário",
        period: "2014 – 2021",
        description: "Lecionou para turmas de alta vulnerabilidade social com aprovação de mais de 70% dos alunos em universidades federais.",
      },
      {
        role: "Pesquisador de História",
        institution: "Arquivo Público do Estado",
        period: "2011 – 2014",
        description: "Desenvolveu pesquisas sobre história regional e produziu materiais educativos para o ensino médio.",
      },
    ],
    highlights: [
      { label: "Anos de Experiência", value: "14+" },
      { label: "Alunos Formados", value: "2.500+" },
      { label: "Aprovados em Federais", value: "1.200+" },
      { label: "Nota Média em HUM", value: "720" },
    ],
  },
  {
    id: "fabio-alves",
    name: "Fábio Alves",
    subject: "Física",
    subjectFull: "Física para o ENEM",
    photo: "/professores/fabio.jpg",
    accentColor: "#065f46",
    shortBio: "Mestre em Física com didática voltada para a aplicação prática dos conceitos no contexto das questões do ENEM.",
    quote: "Física não é bicho de sete cabeças. Com o método certo, você domina até os problemas mais complexos da prova.",
    fullBio: [
      "Professor Fábio Alves é mestre em Física e um apaixonado pela ciência que transforma o abstrato em compreensível. Sua abordagem didática parte sempre do concreto — dos fenômenos do cotidiano — para construir o entendimento sólido dos conceitos físicos exigidos no ENEM.",
      "Com anos de experiência em preparatórios e ensino superior, o professor Fábio desenvolveu uma metodologia que prioriza o raciocínio sobre a memorização, ensinando os alunos a identificar os padrões de questões e a aplicar as fórmulas no momento certo.",
      "Seu vasto conhecimento em Mecânica, Termodinâmica, Eletromagnetismo e Física Moderna permite cobrir todas as frentes da prova com profundidade e precisão, preparando os alunos para os problemas mais exigentes.",
    ],
    education: [
      { degree: "Bacharelado em Física", institution: "Universidade Estadual de Campinas – UNICAMP", year: "2007" },
      { degree: "Mestrado em Física Aplicada", institution: "Instituto de Física – USP", year: "2010" },
      { degree: "Especialização em Ensino de Ciências", institution: "CEFET-RJ", year: "2013" },
    ],
    experience: [
      {
        role: "Professor de Física",
        institution: "Pré Enem Elo",
        period: "2021 – Presente",
        description: "Responsável pela disciplina de Física nas Ciências da Natureza, com ênfase em resolução de problemas contextualizados e simulados específicos.",
      },
      {
        role: "Professor de Física",
        institution: "Cursinho Universitário UERJ",
        period: "2012 – 2021",
        description: "Lecionou por quase uma década com altas taxas de aprovação em cursos de Engenharia e áreas correlatas.",
      },
      {
        role: "Pesquisador em Física Aplicada",
        institution: "Instituto de Física – USP",
        period: "2007 – 2012",
        description: "Realizou pesquisas na área de física computacional e desenvolveu material didático para ensino de física experimental.",
      },
    ],
    highlights: [
      { label: "Anos de Experiência", value: "17+" },
      { label: "Alunos em Engenharia", value: "800+" },
      { label: "Nota Média em Física", value: "650+" },
      { label: "Aprovação em Exatas", value: "89%" },
    ],
  },
];
