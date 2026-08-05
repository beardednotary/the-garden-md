export type Source = {
  id: string;
  organization: string;
  topic: string;
  publicationDate: string;
  url: string;
};

export type CauseLink = {
  slug: string;
  confidence: number;
};

export type ContentImage = {
  /** Path under /public, e.g. "/images/diagnose/yellow-leaves.jpg". Self-hosted only, no hotlinking. */
  src: string;
  alt: string;
  credit?: string;
  creditUrl?: string;
};

export type VideoEmbed = {
  youtubeId: string;
  title: string;
  channel?: string;
};

export type Symptom = {
  slug: string;
  name: string;
  questionTitle?: string;
  description: string;
  quickAnswer: string;
  aliases: string[];
  bodyArea: string;
  urgency: string;
  commonCauses: CauseLink[];
  relatedSymptoms: string[];
  recommendedTools: string[];
  fieldCheck: string;
  firstSteps: string[];
  patterns: Array<{
    observation: string;
    likelyCause: string;
    checkFirst: string;
  }>;
  sources: string[];
  images?: ContentImage[];
  video?: VideoEmbed;
};

export type Cause = {
  slug: string;
  name: string;
  category: string;
  description: string;
  symptoms: string[];
  typicalPlants: string[];
  confirmationSteps: string[];
  fixes: string[];
  tools: string[];
  sources: string[];
  image?: ContentImage;
};

export type Solution = {
  slug: string;
  name: string;
  difficulty: string;
  time: string;
  cost: string;
  summary: string;
  steps: string[];
  requiredTools: string[];
  helpsWith: string[];
  sources: string[];
  video?: VideoEmbed;
};

export type ToolEntry = {
  slug: string;
  name: string;
  category: string;
  typicalPrice: string;
  useCases: string[];
  worksFor: string[];
  avoidIf: string[];
  features: string[];
  description: string;
  featuredProduct: string;
  affiliateUrl: string;
};

export type Plant = {
  slug: string;
  name: string;
  season: string;
  difficulty: string;
  commonProblems: string[];
  recommendedSystems: string[];
  summary: string;
};

export type Calculator = {
  slug: string;
  name: string;
  description: string;
  inputs: string[];
  relatedTools: string[];
  formulaLabel: string;
};

export type SystemEntry = {
  slug: string;
  name: string;
  summary: string;
  idealFor: string[];
  watchFor: string[];
  relatedTools: string[];
};
