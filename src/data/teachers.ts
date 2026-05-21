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
}export const teachers: TeacherData[] = [
  {
    id: "solange",
    name: "Solange",
    subject: "Gramática, Redação e Literatura",
    subjectFull: "Gramática, Redação e Literatura para o ENEM",
    photo: "/professores/solange.jpg",
    accentColor: "#7c3aed",
    shortBio: "Referência no ENEM com metodologia exclusiva em produção textual, domínio gramatical e análise literária.",
    quote: "A escrita e a literatura revelam sua capacidade crítica. Vou te guiar rumo à nota máxima no ENEM.",
    fullBio: [
      "Professora Solange é referência nacional em Redação, Gramática e Literatura para o ENEM, com mais de 12 anos de experiência formando alunos nota 1000.",
      "Seu método exclusivo de construção argumentativa combina a precisão da norma culta da gramática com a análise interpretativa dos clássicos da literatura brasileira, garantindo que cada aluno desenvolva uma redação de altíssimo nível.",
      "Apaixonada pela língua portuguesa e pela transformação que uma boa leitura e escrita promovem, a professora Solange já orientou mais de 3.000 redações rumo à aprovação nos cursos mais concorridos do país.",
    ],
    education: [
      { degree: "Licenciatura em Letras – Português e Literatura", institution: "Universidade Federal", year: "2010" },
      { degree: "Especialização em Linguística Aplicada ao Ensino", institution: "PUC-Rio", year: "2013" },
      { degree: "Mestrado em Teoria Literária", institution: "Universidade Estadual", year: "2016" },
    ],
    experience: [
      {
        role: "Professora de Gramática, Redação e Literatura",
        institution: "Pré Enem Elo",
        period: "2021 – Presente",
        description: "Coordena a Clínica de Redação e as oficinas de análise literária e estilística voltadas para o ENEM.",
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
        description: "Ensino médio com foco em produção textual, gramática normativa e análise literária.",
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
    subjectFull: "História Geral para o ENEM",
    photo: "/professores/matheus.jpg",
    accentColor: "#b45309",
    shortBio: "Professor de História Geral com abordagem narrativa que contextualiza os eventos históricos de forma envolvente e estratégica para o ENEM.",
    quote: "A história não é memorização de datas — é entender o mundo que você vai transformar.",
    fullBio: [
      "Professor Matheus Glaydson é um dos educadores mais dinâmicos da área de Ciências Humanas, conhecido por transformar a História em uma narrativa cinematográfica que prende a atenção dos alunos do início ao fim.",
      "Sua metodologia une linha do tempo visual, mapas mentais temáticos e conexão entre os eventos históricos e as questões contemporâneas do ENEM. Com isso, o aluno não precisa decorar — precisa entender e relacionar.",
      "Com passagens por importantes pré-vestibulares do país e vasta experiência em preparação para concursos públicos, o professor Matheus Glaydson acumulou um repertório de estratégias que maximizam o desempenho dos estudantes em Ciências Humanas.",
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
    name: "Dr. Fábio Alves",
    subject: "Física e Matemática",
    subjectFull: "Física e Matemática para o ENEM",
    photo: "/professores/fabio.jpg",
    accentColor: "#065f46",
    shortBio: "Doutor e Mestre com didática de alta performance para a resolução de exatas (Física e Matemática) no ENEM.",
    quote: "Exatas não é bicho de sete cabeças. Unindo Física e Matemática com o método certo, você garante sua vaga na universidade.",
    fullBio: [
      "Dr. Fábio Alves é doutor e mestre em exatas e um apaixonado por transformar equações abstratas em conceitos palpáveis e intuitivos. Sua abordagem didática integra a Física e a Matemática como ferramentas fundamentais e conectadas no cotidiano e na prova do ENEM.",
      "Com sólida carreira em preparatórios de elite e no ensino superior, desenvolveu uma metodologia prática que foca na lógica matemática e na mecânica dos fenômenos físicos, preparando o aluno para responder a qualquer questão com segurança.",
      "Seu conhecimento unificado de exatas permite aos estudantes vencerem barreiras em conteúdos tradicionalmente difíceis como óptica, eletromagnetismo, geometria espacial e funções algébricas.",
    ],
    education: [
      { degree: "Doutorado em Ciências Exatas", institution: "Universidade Federal – UFPE", year: "2016" },
      { degree: "Bacharelado em Física", institution: "Universidade Estadual de Campinas – UNICAMP", year: "2007" },
      { degree: "Mestrado em Física Aplicada", institution: "Instituto de Física – USP", year: "2010" },
    ],
    experience: [
      {
        role: "Professor de Física e Matemática",
        institution: "Pré Enem Elo",
        period: "2021 – Presente",
        description: "Ministra as disciplinas de Física e Matemática com foco em alto rendimento, modelagem matemática do ENEM e simulados dinâmicos.",
      },
      {
        role: "Professor de Física",
        institution: "Cursinho Universitário UERJ",
        period: "2012 – 2021",
        description: "Lecionou por quase uma década com altas taxas de aprovação em cursos de Engenharia, Medicina e Tecnologia.",
      },
      {
        role: "Pesquisador em Física Computacional",
        institution: "Instituto de Física – USP",
        period: "2007 – 2012",
        description: "Realizou pesquisas na área de física experimental e computacional de alta performance.",
      },
    ],
    highlights: [
      { label: "Anos de Experiência", value: "17+" },
      { label: "Alunos Aprovados", value: "800+" },
      { label: "Nota Média em Exatas", value: "760" },
      { label: "Taxa de Aprovação", value: "89%" }
    ]
  }
];
