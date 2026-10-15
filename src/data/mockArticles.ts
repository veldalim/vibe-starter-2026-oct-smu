import { Article, NationCommitment } from '../types';

export const HERO_ARTICLE: Article = {
  id: 'geneva-accord-frontier-models',
  kicker: 'ACCORD REACHED',
  kickerColor: '#ba1a1a',
  title: 'In Unprecedented Accord, Major Powers Agree on Common Guardrails for Frontier Models',
  subhead: 'The non-binding pact outlines mandatory red-teaming, cross-border incident registers, and strict hardware verification protocols to prevent catastrophic deployment.',
  summary: 'Following seventy-two continuous hours of marathon plenary sessions, chief negotiators from the United States, China, the European Union, and twelve regional allies endorsed an extensive 88-page declaration. While human rights monitors warned against self-policing loopholes, market analysts characterized the development as the first multilateral benchmark of the computing era.',
  byline: 'By STEVEN ERLANGER and DAVID E. SANGER',
  location: 'GENEVA',
  readTime: '8 MIN READ',
  timestamp: 'Updated 22m ago',
  section: 'tech',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHsXjAZD36tz6W62utJRvIrAvrqQX7lu55eieY90HmTaWInFYqNDfaKeygSZh9UIKlEij1-9uM5fzOQmCdUMKrmpaBGkFzc-AIGQjnKUmIBBaRcx_0F0SzsO2stTlK6fCxoxbtce6O7Ogzp7qS26D-OGMIjikOOjNj3mNUhj1IPaSR88k09DOPbyF9P79kB3UDY7gWhXnZBweSmKR0x0cCfY_RhdeLJzUpWDbI85LQWfSbbO-Jpwsy',
  imageAlt: 'Editorial broadsheet photograph of the historic Assembly Hall at the Palais des Nations in Geneva.',
  imageCaption: 'Representatives from 34 nations meeting at the Palais des Nations in Geneva on Wednesday.',
  imageCredit: 'Damon Winter/The New York Times',
  hasInteractiveTracker: true,
  pullQuote: {
    quote: 'We have avoided an anarchic digital arms race not with lofty rhetoric, but with concrete telemetry and mutual inspection guarantees.',
    attribution: 'Elena Vasquez, Special Envoy for International Cyber Governance'
  },
  fullContent: [
    'Following seventy-two continuous hours of marathon plenary sessions inside the vaulted granite chambers of the Palais des Nations, chief negotiators from the United States, China, the European Union, and twelve key regional powers initialed what diplomatic historians are already terming the Geneva Computing Accords.',
    'The 88-page compact establishes the first multilateral benchmark for governing the deployment of frontier artificial intelligence models—systems whose compute consumption exceeds 10^26 floating-point operations. Key provisions mandate mutual notification before training runs that cross catastrophic risk thresholds, real-time telemetry sharing for runaway autonomous behaviors, and a permanent trilateral emergency liaison office headquartered in Bern.',
    'For months, such an outcome had seemed vanishingly improbable. Negotiating teams had repeatedly deadlocked over intellectual property rights, state subsidies for semiconductor manufacturing, and verification protocols for closed-weights foundational systems. Yet a series of backchannel sessions in Stockholm and Zurich—spearheaded by neutral Swiss technologists and academic liaisons—bridged the gap between Washington’s emphasis on voluntary national standards and Beijing’s insistence on state-led supervisory councils.',
    '“We did not come here to stifle mathematical progress,” said Elena Vasquez, the lead American envoy, addressing delegates as dawn broke over Lake Geneva. “We came to ensure that as intellect unmoors itself from biological constraints, the safeguards we erect around humanity remain anchored in democratic accountability and empirical verification.”',
    'Under the terms of Section IV, participating nations agreed to establish independent, federally chartered red-teaming laboratories with unfettered pre-deployment access to any model trained above agreed compute ceilings. While the agreement remains formally non-binding—reflecting the absence of treaty ratification mechanisms in several key capitals—it binds signatories to reciprocal market exclusion clauses: nations failing to verify compliance will face export restrictions on high-bandwidth memory chips and advanced lithographic equipment.'
  ],
  comments: [
    {
      id: 'c1',
      author: 'Marcus Vance',
      location: 'Cambridge, MA',
      timestamp: '2 hours ago',
      content: 'The red-teaming requirement is a historic start, but without statutory subpoena power for independent inspection teams, we are still relying heavily on internal corporate ethics councils. Let us hope Bern liaison office has real teeth.',
      likes: 142,
      isEditorsPick: true
    },
    {
      id: 'c2',
      author: 'Dr. Lin Wei',
      location: 'Singapore',
      timestamp: '1 hour ago',
      content: 'The compute threshold of 10^26 FLOPs may be obsolete within 18 months due to algorithmic efficiency gains. The framework must evolve dynamically rather than fixing static hardware metrics.',
      likes: 89
    }
  ]
};

export const ARTICLES_DATA: Article[] = [
  HERO_ARTICLE,
  {
    id: 'global-central-banks-pivot',
    kicker: 'ECONOMIC POLICY',
    title: 'Global Central Banks Signal Pivot as Growth Resumes and Inflation Moderates',
    subhead: 'With core gauges reaching pre-pandemic norms across three continents, governors convene behind closed doors.',
    summary: 'With core gauges reaching pre-pandemic norms across three continents, governors convene behind closed doors to orchestrate an orderly transition toward gradual rate normalization.',
    byline: 'By JEANNA SMIALEK and PATRICIA COHEN',
    location: 'WASHINGTON',
    readTime: '7 MIN READ',
    timestamp: '52m ago',
    section: 'business',
    fullContent: [
      'In a coordinated signal that could mark the definitive conclusion of the post-pandemic inflationary era, central bankers across North America, Europe, and Asia signaled that benchmark interest rates have reached their terminal plateaus.',
      'Data released Wednesday showed harmonized consumer price indices slowing to an annualized 2.1 percent across the OECD economies, while preliminary employment data indicated that labor markets have managed to absorb restrictive monetary stances without entering recessionary contractions.',
      'Federal Reserve officials, gathering ahead of next month’s Open Market Committee meetings, pointed to stable wage expectations and balanced labor supply as evidence that the elusive soft landing has progressed from aspirational projection to statistical reality.'
    ]
  },
  {
    id: 'supreme-court-water-rights',
    kicker: 'SUPREME COURT',
    title: 'High Court Weighs Limits on Federal Regulatory Scope in Landmark Water Rights Case',
    subhead: 'Justices heard contentious oral arguments concerning Western river basin allocations.',
    summary: 'Justices heard contentious oral arguments concerning Western river basin allocations, in a dispute that could redefine federal agency authority.',
    byline: 'By ADAM LIPTAK',
    readTime: '5 MIN READ',
    timestamp: '38m ago',
    section: 'politics',
    fullContent: [
      'The Supreme Court on Wednesday heard spirited oral arguments in a dispute spanning seven Western states over federal authority to reallocate reservoir releases from the Colorado River Basin during prolonged aridification cycles.',
      'Conservative justices questioned whether the Department of the Interior exceeded its statutory mandate under century-old compacts, while liberal members warned that nullifying federal apportionment powers would spark chaotic interstate litigation and jeopardize municipal water supplies for 40 million residents.'
    ]
  },
  {
    id: 'rural-hospitals-maternity-wards',
    kicker: 'HEALTH CARE',
    title: 'In Rural Hospitals, a Struggle to Keep Maternity Wards Open',
    summary: 'Declining birth rates, Medicaid reimbursement caps, and an acute shortage of specialized OB-GYN staff have forced scores of county health centers to shutter obstetric wings.',
    byline: 'By SARAH KLIFF',
    readTime: '6 MIN READ',
    timestamp: '1h ago',
    section: 'health',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApeuKbS8OQKG7vlOMr1FF0qi_n80fv-2wwzJbndbe_ThquQzrF_eAKhwhMpQXTxv1m9oz9SKdkRcnNuhYvPca4WpU1_50BJ1m6zjtfYjrz1H7RexdWanRsfui4lFPALMY4yd9OToBvInmLZvzBVnGqIIzP0ZIAaqKvlCvbgJe57a9dlBmL18ITHOHuXCJZmQJndD-yno6CQP4KXucn3JQnRBv0ylGuy-suYKre_LZAVHar7AyKMXQw',
    imageAlt: 'Black and white documentary style photography of a quiet rural clinic hallway with soft morning window light.',
    fullContent: [
      'In town after town across the American interior, expectant mothers are finding that the closest hospital room equipped for labor is now an hour or more down two-lane highways.',
      'Over the past five years, more than 100 rural obstetric departments have ceased operations, squeezed between Medicaid reimbursement rates that cover barely sixty cents on every dollar of clinical cost and an aging nursing cohort that rural hospital districts can rarely afford to replace.'
    ]
  },
  {
    id: 'backchannel-diplomacy-consensus',
    kicker: 'DIPLOMATIC DISPATCH',
    title: 'How Six Months of Backchannel Diplomacy Paved the Way for Consensus',
    summary: 'Behind quiet weekend retreats in Stockholm and Zurich, technical advisors built common verbiage that sidestepped traditional geopolitical friction points.',
    byline: 'By STEVEN ERLANGER and DAVID E. SANGER',
    readTime: '6 MIN READ',
    timestamp: '1h ago',
    section: 'world',
    fullContent: [
      'The breakthrough announced in Geneva did not originate inside formal United Nations halls, but in a snowbound ski lodge outside Klosters and a private conference annex in suburban Stockholm.',
      'Beginning last November, a clandestine working group composed of six American computer scientists, four Chinese Academy of Sciences researchers, and European legal theorists met without press briefings or official diplomatic badges to construct a vocabulary of risk that both superpowers could sign without admitting technological vulnerability.'
    ]
  },
  {
    id: 'opinion-friedman-fracture',
    kicker: 'THOMAS L. FRIEDMAN',
    title: '"The Real Crisis Isn’t the Machines. It’s Our Fracture."',
    summary: 'We are constructing artificial intellects that can converse with the gods, while retaining political institutions that struggle to address basic infrastructure.',
    byline: 'THOMAS L. FRIEDMAN',
    bylineRole: 'Contributing Columnist',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5fbVBm8Lobxj45U_0txp7onRPCEu_9-ab6_Wk2s76xNePrG3GcBGYpumzG9EHSAeVw2YGSq_TsccM2sjmpXd3GT2KduXTilzk0eSYRSjYAxtlemtaOf_gk_9vlKk01y1SpBpWGtYBnKxtwbXZjBE4wTLmxdm4BVdXCJTxotLPqXAz4Zke0M_o91HvasekeNWrbvDZdg9EiVxFgeB29sgH3jjxA__Q0YVVj09lclGiK1ESfYbK1qNO',
    readTime: '5 MIN READ',
    timestamp: 'Today',
    section: 'opinion',
    fullContent: [
      'I spent the last three days talking to delegates from across the Atlantic and Pacific in Geneva, and one chilling paradox kept echoing through every conversation.',
      'We are assembling mathematical architectures capable of synthesizing quantum chemistry and re-engineering genetic transcripts within seconds. Yet at the exact same historical juncture, our civic machinery in the world’s leading democracies cannot muster the consensus to repair a wastewater culvert or certify an elementary school textbook without a culture war.',
      'The existential risk is not that an autonomous algorithm turns malicious. The real risk is that our social fabric disintegrates before we cultivate the wisdom to steer what we have forged.'
    ]
  },
  {
    id: 'opinion-ezra-klein-speed',
    kicker: 'EZRA KLEIN',
    title: '"Why Government Is Moving Faster Than Expected on Tech"',
    summary: 'The standard trope is that civil servants are hopelessly outmatched by Silicon Valley coders. Geneva proved that hypothesis wrong.',
    byline: 'EZRA KLEIN',
    bylineRole: 'Opinion Columnist',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy63L67XLcTxN0S6CN6241B_wiTbRk4rb0beiyp3fk6FB-h0Us0U-uoqSE7aDjn06IKWXJT409S8ZODcOa-oP3ERbH-tf8h5CP9ucQus_kUjpXYlI5qqkPx_ICxnq20IFIT87rx_Y_jLspAlinM64SVB_zR7yWgfWnFKupdIkuYWNpnX4PdHhn0VGqNLswVDFdvMYI86FQUV69zL1JG3aQa2Sc1SW9n4gCgpxKMNDHPoIKg8fb0dsK',
    readTime: '6 MIN READ',
    timestamp: 'Today',
    section: 'opinion',
    fullContent: [
      'For two decades, Silicon Valley operated under a self-flattering mythology: bureaucratic government was slow, antiquated, and fundamentally incapable of comprehending the lightning-fast inflection curves of modern code.',
      'Yet look closely at what transpired in Switzerland this week. The diplomats and policy architects who drafted Section IV were not aging careerists bewildered by neural networks. They were 30-something machine learning PhDs, former algorithmic red-teamers, and cryptographic specialists who transitioned into statecraft.',
      'For once, policy did not arrive a decade after the disruption; it met the technology at the very threshold of its transformation.'
    ]
  },
  {
    id: 'opinion-margaret-atwood-intuition',
    kicker: 'GUEST ESSAY',
    title: 'What Thirty Years in the Classroom Taught Me About Creative Intuition',
    summary: 'True craft is not predictive token modeling. It is the unquantifiable friction of doubt, error, and physical mortality.',
    byline: 'By MARGARET ATWOOD',
    readTime: '8 MIN READ',
    timestamp: 'Today',
    section: 'opinion',
    fullContent: [
      'A machine can string words into flawless syntactical sequences. It can emulate cadence, reproduce iambic pentameter, and counterfeit the mournful melancholy of an 18th-century elegy.',
      'What it cannot do—what it can never do—is tremble at the blank page because it knows it has only seventy or eighty years on this earth to get the sentence right.',
      'Literature is born not from the probability distribution of what came before, but from the radical refusal to accept the expected continuation.'
    ]
  },
  {
    id: 'editorial-board-enforcement',
    kicker: 'THE EDITORIAL BOARD',
    title: 'A Constructive First Step, but the Enforcement Challenge Awaits',
    summary: 'Without statutory penalties and verified inspections, even the most eloquent diplomatic communiqués remain voluntary recommendations.',
    byline: 'By THE EDITORIAL BOARD',
    readTime: '4 MIN READ',
    timestamp: 'Today',
    section: 'opinion',
    fullContent: [
      'The agreement brokered in Geneva represents an essential diplomatic foundation. For the first time, Beijing, Washington, and Brussels have recognized that runaway algorithmic capability poses a shared civilizational danger rather than a purely national advantage.',
      'However, words on parchment do not constrain compute clusters. Unless governments follow through by giving international inspectorates genuine physical audit rights inside data centers, this accord risks joining the long catalog of well-intentioned declarations that failed when tested by geopolitical self-interest.'
    ]
  },
  {
    id: 'cooking-crispy-gnocchi',
    kicker: 'NYT COOKING',
    title: 'Crispy Gnocchi with Burst Tomatoes, Basil and Fresh Mozzarella',
    summary: 'A 25-minute weeknight miracle where skillet heat caramelizes the potato pillows without boiling water.',
    byline: 'Recipe by ALI SLAGLE',
    readTime: '25 MIN PREP',
    timestamp: '4.9 ★ (2.4k)',
    section: 'cooking',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUaq8vM6jzuj_DscAR52cl8llDthvMUpabxKAowQc5ISC4XnzSHJNnL8aVfTNcjL9EUtIldoHxnOOLVlBQpx-EoGEd8OvrVPWAtaMML4u3GIN9sn_n1Uwn6JWMpNSbOYQ6vKl56LY7kbuqJvLFDB2t0tM-Rf_p6V0GbmdWqkJ0tQyPbiRrY7Ogd4T3Bjw3xmBwdGFm7ea78RGG9goWytOPF7_zgdmQWHjNYXDDIEdroHPpZxQsESS2',
    imageAlt: 'Golden crispy pan-fried gnocchi mingled with blistered sweet cherry tomatoes.',
    fullContent: [
      'If you’ve only ever boiled shelf-stable or refrigerated gnocchi in salted water, prepare for an eye-opening culinary revelation.',
      'By throwing them directly into a hot, oiled cast-iron skillet, you skip the water completely. The exterior crisps into golden, crackling crunch while the interior turns delightfully pillowy and steam-soft.',
      'Add sweet cherry tomatoes that pop under the heat to release their jammy juices, fold in fragrant torn basil, and finish with creamy torn mozzarella that melts into luscious pools in under 60 seconds.'
    ]
  },
  {
    id: 'athletic-champions-league',
    kicker: 'THE ATHLETIC',
    title: 'How Tactical Re-Engineering Reshaped the Champions League Final',
    summary: 'An inverted fullback strategy neutralized the transition blitz that had defined the European season.',
    byline: 'By MICHAEL COX',
    readTime: '6 MIN READ',
    timestamp: 'TACTICAL TAPE',
    section: 'the-athletic',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvsUBszmcGWTJ454-eK5RuRKcUlGxIKfQkBJjagttTejxp7b9DegP39cP4qNohM15v8_Nzf_bDERp7-W7Xkjb_1kP7ojLeNcP8V5N2wZTv9ZY0irD5veYDgKx_U1paYOXKTtb6crgaXqfm_cfLaKKiYcSodKEHGOUZZONgz3tsGS9kbGzKSZDnXZxGCN_RtL3mkeeuQEEKfe8C0hRRGxzqDeNUrY3tub1OEksSKbePjQGarwAb4NwP',
    imageAlt: 'High energy sports photojournalism showing soccer players locked in mid-air contest.',
    fullContent: [
      'When the lineups dropped an hour before kickoff, pundits assumed a standard 4-3-3 shape. But on the pitch, the structural mechanics were revolutionary.',
      'By shifting the left fullback into the midfield pivot during possession transitions, they severed the passing lanes that the opponents had exploited in twenty consecutive tournament matches.'
    ]
  },
  {
    id: 'wirecutter-headphones-2025',
    kicker: 'WIRECUTTER',
    title: 'The 6 Best Noise-Canceling Headphones of 2025',
    summary: 'After 140 hours of rigorous acoustic laboratory testing and real-world subway commutes, one model surpassed Sony and Bose.',
    byline: 'By LAUREN DRAGAN',
    readTime: '12 MIN READ',
    timestamp: 'TESTER PICK',
    section: 'wirecutter',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXQnEPjFeyECnTnU8au5_9pZBGGB5kCy02BkSiJ67vJ_iS3IVXHV4vKLd6RVQuZnu5cSmJfXVgjTKB_G5XnAIvfQtOqjnV8O261qHEiCxhLOZApHVIguU4KK0GrAFUxFMkzcywr2gxK1mDAzLKOhDEbnsRSbhh2-FBrN53PV3j678v4tgqKC0Cv9RqoXVps5ph83cYwnr6xL_02_2vtc-Zv8mZynomAvOv_Us_maOQXh8LceEL2kjF',
    imageAlt: 'Studio product photograph of premium matte black over-ear noise-canceling headphones.',
    fullContent: [
      'Whether you are drowning out the low drone of jet engines at 35,000 feet, the clatter of a crowded subway car, or the chatty buzz of an open-plan office, premium active noise cancellation (ANC) is indispensable.',
      'Our team measured passive and active attenuation across frequencies from 20 Hz to 20 kHz in an anechoic test chamber, combined with blind listening trials across twenty testers with diverse ear shapes and musical tastes.'
    ]
  },
  {
    id: 'the-morning-global-trade',
    kicker: 'THE MORNING',
    title: 'The Shifting Contours of Global Trade in an Era of Tariffs and Tenacity',
    summary: 'Good morning. For decades, supply chain efficiency was governed by a solitary objective: lowest absolute unit cost. Today, redundancy, homeland security covenants, and green certificates dictate shipping manifests.',
    byline: 'By David Leonhardt',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdu90kduQSgvq9IM_XLVpY8tcYDW_DbZbrAlbqx84zY-q8gFFkhHkKlj5G3zaXBn3LYlmvuBBIgTqI0k2V7uvbambJ2-YA0qbsTHFFB9d0Bjh4iKCG2jecMYI2Waar-Uo3nvBdC4equH92JMu9GNeu4ggdfpXwN5Da8kpEGoSDbwACHo4SUvkVSZFmsLMw80Yw4jaTcCtyUokhxMWAcOqJgU9-hSDpkRIJj_VZKgyFIwTl2kt053b3',
    readTime: '6 MIN READ',
    timestamp: 'Today',
    section: 'business',
    fullContent: [
      'Good morning. For decades, supply chain efficiency was governed by a solitary objective: lowest absolute unit cost. If a port in Guangdong could stamp out a ball-bearing for six cents less than one in Ohio or Monterrey, the cargo ship was booked.',
      'Today, that calculus is thoroughly inverted. Redundancy, national security covenants, carbon boundary adjustments, and digital pedigree tracking now outweigh pure unit cost.',
      'In today’s newsletter: A breakdown of who bears the true levy burden, why Southeast Asian manufacturing clusters are booming, and what it implies for domestic inflation in the coming quarter.'
    ]
  },
  {
    id: 'silicon-valley-seed-rounds',
    kicker: 'BUSINESS & TECHNOLOGY',
    title: 'Silicon Valley Adjusts to New Capital Realities as Seed Rounds Tighten',
    summary: 'Venture allocations dropped 18 percent year-over-year as institutional backers demand verified unit economics and immediate operating profits over speculative headcounts.',
    byline: 'By ERIN GRIFFITH',
    readTime: '4 MIN READ',
    timestamp: '1h ago',
    location: 'SAN FRANCISCO',
    section: 'business',
    fullContent: [
      'The era of eight-figure pre-revenue seed checks signed on the back of pitch decks is drawing to a decisive close.',
      'Venture capital disbursements in Northern California slid 18 percent in the first quarter, according to data from PitchBook, while median times between seed rounds and Series A financings stretched to a record 24 months.'
    ]
  },
  {
    id: 'auto-giants-hybrid-rollout',
    kicker: 'BUSINESS & TECHNOLOGY',
    title: 'Auto Giants Accelerate Hybrid Rollouts Amid Cooling Demand for Full Electrics',
    summary: 'Consumer range anxiety and residual value volatility push automakers back toward flexible dual-powertrain assemblies.',
    byline: 'By JACK EWING',
    readTime: '3 MIN READ',
    timestamp: '2h ago',
    section: 'business',
    fullContent: [
      'Automotive executives who once pledged an all-electric showroom by decade’s end are recalibrating assembly lines toward plug-in and traditional hybrid platforms.',
      'Slowing EV growth rates in North America and Western Europe have prompted Detroit and Stuttgart to double down on hybrid options that provide battery-assisted mileage without requiring motorists to depend on public high-speed charging infrastructure.'
    ]
  },
  {
    id: 'broadway-revival-stripped-down',
    kicker: 'ARTS & LEISURE',
    title: 'A Triumphant Return to Broadway in an Intimate, Stripped-Down Revival',
    summary: 'Director Sam Gold’s radical re-staging of the classical tragedy discards ornate scenic illusions in favor of raw emotional proximity.',
    byline: 'By JESSE GREEN (Chief Theater Critic)',
    readTime: '5 MIN READ',
    timestamp: 'Today',
    section: 'arts',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0kFe0EVbwa4E8xlillmSyM_oHrbGZaIDcOl4ENenLj3FbwtZp8vhYCgtDgBgIhocA9gNp726u26I7Lr80rXA_aWwjA87YvEFWMzmSQ6JUI6GXQiBYrAtbEt2pw9dkSbYV6fvxJrya9tWzF-LBPQYw5LnKg0xu4tVZlYp0ggeVihfaLm-SC7OfYmqvQpxbjLZm3g1G6tVQAXhSq41JjR2NRHXMlMRxSZoq3NmyVFvLXsEkt68v9pvk',
    imageAlt: 'Atmospheric stage photography of an intimate theater production, a single spotlight illuminating two actors.',
    fullContent: [
      'In a theater ecosystem often suffocated by pyrotechnic spectacle and million-dollar LED backdrops, Sam Gold’s new production arrives like a cold glass of well water.',
      'Stripping the stage bare down to raw wooden boards and relying solely on warm overhead halogen spots, Gold places the burden entirely on the spoken word and the microscopic flicker of facial expression.'
    ]
  },
  {
    id: 'thomas-pynchon-biography',
    kicker: 'BOOK REVIEW',
    title: 'The Architect of Modern Anonymity: A Biography of Thomas Pynchon',
    summary: 'A new biographical study explores how American fiction’s most elusive recluse constructed his labyrinthine masterworks without ever granting an interview.',
    byline: 'Reviewed by DWIGHT GARNER',
    readTime: '5 MIN READ',
    timestamp: 'Today',
    section: 'books',
    fullContent: [
      'In our hyper-photographed, algorithmically cataloged society, true literary invisibility feels less like an eccentricity and more like a heroic act of resistance.',
      'Dwight Garner examines the monumental new biography that traces Thomas Pynchon from Boeing technical writing desks in Seattle to the subterranean counterculture of 1960s California.'
    ]
  }
];

export const NATIONS_COMMITMENT_DATA: NationCommitment[] = [
  { country: 'United States', code: 'USA', delegationLead: 'Elena Vasquez', redTeamingMandate: 'Ratified', incidentRegister: 'Full Disclosure', hardwareAudit: 'Physical Inspection', computeThreshold: '10^26 FLOPs', status: 'Full Ratification', flag: '🇺🇸' },
  { country: 'China', code: 'CHN', delegationLead: 'Dr. Zhang Wen', redTeamingMandate: 'Ratified', incidentRegister: 'Anonymized Tier', hardwareAudit: 'Cryptographic Enclave', computeThreshold: '10^26 FLOPs', status: 'Full Ratification', flag: '🇨🇳' },
  { country: 'European Union (27)', code: 'EU', delegationLead: 'Margrethe Vane', redTeamingMandate: 'Ratified', incidentRegister: 'Full Disclosure', hardwareAudit: 'Physical Inspection', computeThreshold: '10^25 FLOPs', status: 'Full Ratification', flag: '🇪🇺' },
  { country: 'United Kingdom', code: 'GBR', delegationLead: 'Lord Alistair Sterling', redTeamingMandate: 'Ratified', incidentRegister: 'Full Disclosure', hardwareAudit: 'Cryptographic Enclave', computeThreshold: '10^26 FLOPs', status: 'Full Ratification', flag: '🇬🇧' },
  { country: 'Japan', code: 'JPN', delegationLead: 'Kenji Takahashi', redTeamingMandate: 'Ratified', incidentRegister: 'Full Disclosure', hardwareAudit: 'Cryptographic Enclave', computeThreshold: '10^26 FLOPs', status: 'Full Ratification', flag: '🇯🇵' },
  { country: 'South Korea', code: 'KOR', delegationLead: 'Park Sun-woo', redTeamingMandate: 'Ratified', incidentRegister: 'Full Disclosure', hardwareAudit: 'Cryptographic Enclave', computeThreshold: '10^26 FLOPs', status: 'Full Ratification', flag: '🇰🇷' },
  { country: 'Canada', code: 'CAN', delegationLead: 'Catherine Roy', redTeamingMandate: 'Ratified', incidentRegister: 'Full Disclosure', hardwareAudit: 'Physical Inspection', computeThreshold: '10^26 FLOPs', status: 'Full Ratification', flag: '🇨🇦' },
  { country: 'Singapore', code: 'SGP', delegationLead: 'David Tan', redTeamingMandate: 'Ratified', incidentRegister: 'Full Disclosure', hardwareAudit: 'Cryptographic Enclave', computeThreshold: '10^26 FLOPs', status: 'Full Ratification', flag: '🇸🇬' },
  { country: 'Switzerland', code: 'CHE', delegationLead: 'Beatrix Fontana (Host)', redTeamingMandate: 'Ratified', incidentRegister: 'Full Disclosure', hardwareAudit: 'Physical Inspection', computeThreshold: '10^26 FLOPs', status: 'Full Ratification', flag: '🇨🇭' },
  { country: 'Australia', code: 'AUS', delegationLead: 'Malcolm Wright', redTeamingMandate: 'Adopted with Caveat', incidentRegister: 'Full Disclosure', hardwareAudit: 'Cryptographic Enclave', computeThreshold: '10^26 FLOPs', status: 'Conditional Signatory', flag: '🇦🇺' },
  { country: 'India', code: 'IND', delegationLead: 'Rajesh Sharma', redTeamingMandate: 'Adopted with Caveat', incidentRegister: 'Anonymized Tier', hardwareAudit: 'Cryptographic Enclave', computeThreshold: '10^27 FLOPs', status: 'Conditional Signatory', flag: '🇮🇳' },
  { country: 'Brazil', code: 'BRA', delegationLead: 'Luiza Mendonça', redTeamingMandate: 'Pending Review', incidentRegister: 'Anonymized Tier', hardwareAudit: 'Opposed', computeThreshold: '10^27 FLOPs', status: 'Conditional Signatory', flag: '🇧🇷' },
  { country: 'United Arab Emirates', code: 'ARE', delegationLead: 'Omar Al-Hashemi', redTeamingMandate: 'Adopted with Caveat', incidentRegister: 'Anonymized Tier', hardwareAudit: 'Cryptographic Enclave', computeThreshold: '10^26 FLOPs', status: 'Conditional Signatory', flag: '🇦🇪' },
  { country: 'Israel', code: 'ISR', delegationLead: 'Yaron Lev', redTeamingMandate: 'Adopted with Caveat', incidentRegister: 'Voluntary', hardwareAudit: 'Opposed', computeThreshold: '10^26 FLOPs', status: 'Observer State', flag: '🇮🇱' },
  { country: 'Norway', code: 'NOR', delegationLead: 'Astrid Lind', redTeamingMandate: 'Ratified', incidentRegister: 'Full Disclosure', hardwareAudit: 'Physical Inspection', computeThreshold: '10^25 FLOPs', status: 'Full Ratification', flag: '🇳🇴' },
  { country: 'New Zealand', code: 'NZL', delegationLead: 'Moana Clarke', redTeamingMandate: 'Ratified', incidentRegister: 'Full Disclosure', hardwareAudit: 'Physical Inspection', computeThreshold: '10^26 FLOPs', status: 'Full Ratification', flag: '🇳🇿' },
  { country: 'Mexico', code: 'MEX', delegationLead: 'Rodrigo Cruz', redTeamingMandate: 'Pending Review', incidentRegister: 'Anonymized Tier', hardwareAudit: 'Cryptographic Enclave', computeThreshold: '10^27 FLOPs', status: 'Conditional Signatory', flag: '🇲🇽' },
  { country: 'Saudi Arabia', code: 'SAU', delegationLead: 'Faisal Al-Saud', redTeamingMandate: 'Pending Review', incidentRegister: 'Voluntary', hardwareAudit: 'Opposed', computeThreshold: '10^27 FLOPs', status: 'Observer State', flag: '🇸🇦' }
];
