export interface NewsData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  photo: string;
  content: string[];
  author: {
    name: string;
    role: string;
    photo: string;
    teacherId: string;
  };
}

export const news: NewsData[] = [
  {
    id: "redacao-nota-1000",
    title: "MÉTODO DE EXCELÊNCIA: Como alcançar a nota 1000 na Redação do ENEM 2026",
    subtitle: "A professora Solange revela os segredos por trás da nota máxima e como estruturar uma redação imbatível seguindo os critérios do INEP.",
    category: "EXCLUSIVO",
    readTime: "5 min de leitura",
    date: "21 de Maio de 2026",
    photo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Solange",
      role: "Gramática, Redação e Literatura",
      photo: "/professores/solange.jpg",
      teacherId: "solange"
    },
    content: [
      "A redação do ENEM é, sabidamente, uma das etapas mais decisivas do exame. Obter uma nota alta – ou o tão sonhado 1000 – pode ser o diferencial definitivo para garantir a vaga na universidade pública. No entanto, muitos candidatos encaram a folha em branco como um obstáculo intransponível. De acordo com a professora Solange, coordenadora da Clínica de Redação do Pré ENEM Elo, o segredo não reside em um talento inato para a escrita, mas sim no domínio rigoroso de um método de excelência.",
      "Para desmistificar o processo, Solange destaca que o primeiro passo fundamental é compreender profundamente as 5 competências avaliadas pelo INEP. 'Cada competência é um roteiro do que o corretor espera encontrar na sua redação. Quando você entende que a Competência 3 avalia o seu projeto de texto e a seleção de argumentos, por exemplo, você deixa de escrever por impulso e passa a planejar estrategicamente cada linha', explica a educadora.",
      "O método recomendado pela professora divide a redação em três blocos estruturais infalíveis:",
      "1. Introdução de Alto Impacto: Apresente o tema a partir de um repertório sociocultural legítimo (filosofia, sociologia, literatura ou história), defina claramente a sua tese e antecipe seus dois argumentos (argumentos A e B). Isso demonstra planejamento de texto imediato.",
      "2. Desenvolvimento Consistente (D1 e D2): Dedique um parágrafo para cada argumento. Use a estrutura de tópico frasal, amplie com um repertório produtivo e faça a análise crítica (o 'fechamento' reflexivo do parágrafo). Nunca deixe repertórios soltos sem conectá-los diretamente com o tema do ano.",
      "3. Proposta de Intervenção Completa: Na conclusão, responda rigorosamente às cinco perguntas obrigatórias da Competência 5: Quem vai fazer? (Agente), O que vai fazer? (Ação), Como vai fazer? (Meio/Modo), Para que vai fazer? (Efeito) e um detalhamento de um desses elementos. 'Um único detalhamento do Agente ou do Meio/Modo garante os 200 pontos finais de forma matemática', pontua Solange.",
      "Com a prática semanal presencial e a lapidação das correções individualizadas oferecidas pelo Elo, a confiança dos alunos aumenta progressivamente. 'A escrita é um hábito que se refina com o erro corrigido. Escrever uma redação por semana, com feedback preciso, é o caminho mais seguro e curto rumo ao mil', conclui a especialista."
    ]
  },
  {
    id: "exatas-sem-misterio",
    title: "EXATAS SEM MISTÉRIO: Doutor ensina lógica integrativa para vencer as questões temidas",
    subtitle: "O professor Fábio Alves desconstrói o medo de Física e Matemática e apresenta técnicas cognitivas para resolver questões complexas rapidamente.",
    category: "FÍSICA & EXATAS",
    readTime: "3 min de leitura",
    date: "20 de Maio de 2026",
    photo: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Fábio Alves",
      role: "Física",
      photo: "/professores/fabio.jpg",
      teacherId: "fabio-alves"
    },
    content: [
      "As Ciências da Natureza e suas Tecnologias costumam registrar as menores médias de acertos gerais no ENEM, com a disciplina de Física frequentemente liderando o ranking de rejeição dos estudantes. No entanto, para o professor Fábio Alves, doutor em física e entusiasta do ensino participativo, esse temor histórico é fruto de uma abordagem pedagógica equivocada, baseada apenas na memorização de fórmulas e truques matemáticos.",
      "Fábio propõe a chamada 'lógica integrativa', um método de raciocínio que reconecta a teoria científica aos fenômenos do cotidiano. 'O ENEM não cobra apenas contas. Ele cobra a capacidade de ler um texto sobre consumo energético, compreender o funcionamento de um eletrodoméstico e associá-lo às leis da termodinâmica ou do eletromagnetismo', ressalta o professor.",
      "Segundo é ensinado, para superar o bloqueio em exatas, o candidato deve adotar três pilares práticos durante a preparação:",
      "1. Interpretação Conceitual Ativa: Antes de tentar aplicar qualquer fórmula matemática, o aluno deve sublinhar os comandos do enunciado e identificar a grandeza física em jogo. Frequentemente, a alternativa correta pode ser deduzida apenas através de análise dimensional ou lógica qualitativa.",
      "2. Resolução Estruturada de Problemas: Criar o hábito de organizar os dados fornecidos e a incógnita procurada no canto da folha. Esse procedimento reduz a ansiedade cognitiva e evita erros banais de cálculo em momentos de pressa.",
      "3. Domínio de Padrões Recorrentes: O ENEM repete habilidades e competências ano a ano. Temas como Ondulatória (fenômenos ondulatórios, acústica), Eletrodinâmica (circuitos, potência elétrica) e Mecânica (leis de Newton, trabalho e energia) correspondem a mais de 70% da prova de Física. Focar em exercícios dessas áreas garante um retorno de pontos extraordinário pelo modelo TRI (Teoria de Resposta ao Item).",
      "No cursinho do Elo, as aulas práticas presenciais utilizam demonstrações simples que conectam a física do quadro com a realidade. 'A física é fascinante porque explica como o nosso universo funciona. Quando o aluno enxerga isso, o medo desaparece e as fórmulas viram meras ferramentas de tradução', defende Fábio."
    ]
  },
  {
    id: "narrativas-da-historia",
    title: "NARRATIVAS DA HISTÓRIA: Entender o passado para interpretar o presente e a prova do ENEM",
    subtitle: "O historiador Matheus Glaydson explica como conectar conexões temporais e analisar criticamente textos de apoio na prova de Ciências Humanas.",
    category: "HISTÓRIA",
    readTime: "4 min de leitura",
    date: "19 de Maio de 2026",
    photo: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Matheus Glaydson",
      role: "História",
      photo: "/professores/matheus.jpg",
      teacherId: "matheus-glaydson"
    },
    content: [
      "A prova de Ciências Humanas do ENEM é amplamente conhecida por sua carga de leitura e pela exigência de uma postura crítica do estudante. Diferente dos vestibulares tradicionais, focados em decoreba de dinastias e datas específicas, o ENEM busca avaliar a capacidade de interpretação, a análise de fontes históricas variadas e o estabelecimento de pontes reflexivas entre diferentes temporalidades.",
      "O historiador e professor Matheus Glaydson defende que a melhor maneira de estudar História para o ENEM é focar nas 'narrativas de processos' e não em fatos isolados. 'O estudante precisa ver a história como um filme, onde cada evento é consequência de um processo anterior e causa de transformações futuras. Quando compreendemos a dinâmica econômica e social de um período, a questão do ENEM se torna muito mais simples de decifrar', afirma Glaydson.",
      "Entre as principais recomendações do professor para gabaritar a prova de Ciências Humanas, destacam-se:",
      "1. Leitura Crítica de Textos de Apoio: Mais de 80% das questões de história trazem um fragmento de documento histórico, poema, letra de música ou texto historiográfico. O segredo é ler primeiro o enunciado e a autoria do texto (a fonte bibliográfica ajuda muito a situar a época e o posicionamento político/filosófico do autor) antes de mergulhar no texto propriamente dito.",
      "2. Relação Passado-Presente: O ENEM ama debater temas contemporâneos a partir de suas raízes históricas. Questões sobre cidadania, desigualdade social, patrimônio material e imaterial, direitos humanos e lutas de minorias sociais aparecem constantemente associadas à Grécia Antiga, ao Brasil Império ou à ditadura militar.",
      "3. Divisão Temática de Foco: História do Brasil (Era Vargas, República Oligárquica, Período Colonial e Escravidão) e História Geral (Idade Média/Feudalismo, Revoluções Industriais, Guerras Mundiais e Direitos Humanos) devem ser as prioridades na reta final.",
      "Para Matheus, as ciências humanas são um convite ao pensamento livre e consciente. 'Não estudamos o passado para apenas fazer uma prova, estudamos para que esses jovens saibam ler as estruturas do mundo em que vivem, tomem decisões autônomas e atuem como cidadãos ativos. O ENEM é apenas o primeiro passo desse despertar crítico', conclui."
    ]
  }
];
