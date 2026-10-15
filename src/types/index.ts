export type SectionId = 
  | 'front-page'
  | 'world'
  | 'politics'
  | 'business'
  | 'opinion'
  | 'tech'
  | 'science'
  | 'health'
  | 'sports'
  | 'arts'
  | 'books'
  | 'style'
  | 'food'
  | 'travel'
  | 'magazine'
  | 'games'
  | 'cooking'
  | 'wirecutter'
  | 'the-athletic';

export interface ArticleComment {
  id: string;
  author: string;
  location: string;
  timestamp: string;
  content: string;
  likes: number;
  isEditorsPick?: boolean;
}

export interface Article {
  id: string;
  kicker: string;
  kickerColor?: string;
  title: string;
  subhead?: string;
  summary: string;
  byline: string;
  bylineRole?: string;
  authorImage?: string;
  location?: string;
  readTime: string;
  timestamp: string;
  section: SectionId;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageCredit?: string;
  fullContent: string[];
  pullQuote?: {
    quote: string;
    attribution: string;
  };
  hasInteractiveTracker?: boolean;
  comments?: ArticleComment[];
}

export interface NationCommitment {
  country: string;
  code: string;
  delegationLead: string;
  redTeamingMandate: 'Ratified' | 'Adopted with Caveat' | 'Pending Review';
  incidentRegister: 'Full Disclosure' | 'Anonymized Tier' | 'Voluntary';
  hardwareAudit: 'Physical Inspection' | 'Cryptographic Enclave' | 'Opposed';
  computeThreshold: string;
  status: 'Full Ratification' | 'Conditional Signatory' | 'Observer State';
  flag: string;
}
