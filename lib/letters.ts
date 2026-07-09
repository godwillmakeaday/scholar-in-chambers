export type Letter = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  status: "Read Letter" | "Coming Soon";
  salutation: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const editorialDisclaimer =
  "Letters from Chambers is for public legal education, institutional reflection, and civic guidance. It is not a substitute for formal legal advice on a specific matter.";

export const letters: Letter[] = [
  {
    title: "Letter to the Citizen Facing a Police Invitation",
    slug: "letter-to-the-citizen-facing-a-police-invitation",
    category: "Citizens’ Legal Notes",
    excerpt:
      "A calm note on fear, preparation, documentation, dignity, and the wisdom of seeking proper legal guidance before a small issue becomes a larger danger.",
    date: "Archive note · Date to be assigned",
    readTime: "6 min read",
    status: "Read Letter",
    salutation: "Dear Citizen,",
    sections: [
      {
        heading: "Do not let fear become your first adviser",
        paragraphs: [
          "A police invitation can unsettle even a careful person. The first danger is often not the invitation itself, but the confusion, panic, and informal advice that surround it. A citizen must learn to respond with dignity, not with recklessness; with preparation, not with fear.",
          "The law does not require a person to abandon judgment simply because authority has spoken. It requires respect for lawful process, but it also preserves the citizen’s right to understand the nature of the invitation and to seek proper guidance before making statements that may later carry consequences.",
        ],
      },
      {
        heading: "Prepare the facts before you present yourself",
        paragraphs: [
          "Before attending to an invitation, gather the documents, messages, witnesses, dates, receipts, photographs, or correspondence that explain your side of the matter. Memory is useful, but evidence is stronger. A citizen who arrives with clarity is different from a citizen who arrives with agitation.",
          "Where the issue involves land, debt, family conflict, business disagreement, employment, tenancy, or political tension, the facts should be arranged carefully. Many matters that look criminal at first glance may have civil, contractual, or property roots that must be properly explained.",
        ],
      },
      {
        heading: "Let dignity guide the encounter",
        paragraphs: [
          "Courtesy is not weakness. Silence is not guilt. Asking for legal guidance is not defiance. The citizen should speak respectfully, avoid arguments, and refuse the temptation to treat the station as a theatre of pride.",
          "Where the matter is serious, do not go alone if you can avoid it. Speak to counsel. Let your response be guided by law, documentation, and prudence. A small issue can become a larger danger when handled with panic, anger, or careless words.",
        ],
      },
    ],
  },
  {
    title: "Letter to the Business Owner Who Signs Without Reading",
    slug: "letter-to-the-business-owner-who-signs-without-reading",
    category: "Business & Contracts",
    excerpt:
      "A warning from chambers on signatures, obligations, clauses, informal trust, and the hidden cost of treating documents as a formality.",
    date: "Archive note · Date to be assigned",
    readTime: "7 min read",
    status: "Read Letter",
    salutation: "Dear Business Owner,",
    sections: [
      {
        heading: "The signature is not decoration",
        paragraphs: [
          "Many business disputes begin with a simple sentence: I did not know that was inside the agreement. But the law usually treats a signature as evidence that a person accepted the document, unless there are strong reasons to say otherwise. The signature is therefore not a ceremony. It is a doorway into obligation.",
          "Trust is valuable, but trust does not cancel clauses. Friendship is useful, but friendship does not rewrite terms. A business owner who signs without reading has converted uncertainty into evidence against himself.",
        ],
      },
      {
        heading: "Contracts reveal the future before it arrives",
        paragraphs: [
          "A good contract is not merely a document for the present transaction. It is a forecast of possible disagreement. It asks: what happens if payment is delayed, goods are defective, land is disputed, supply fails, partnership breaks, or one party dies, relocates, changes mind, or becomes insolvent?",
          "The careful reader is not being suspicious. He is being responsible. Business discipline requires that promises be reduced into clear terms, not left floating in memory and goodwill.",
        ],
      },
      {
        heading: "Let counsel read what enthusiasm ignores",
        paragraphs: [
          "Excitement is a poor legal adviser. The promise of profit can make dangerous clauses look harmless. Before you sign, slow down. Ask what the document gives, what it takes, what it assumes, what it hides, and what it makes difficult to prove later.",
          "The cheapest legal review is often the one done before the signature. After the signature, the cost of advice may include negotiation, dispute, debt recovery, court, reputation damage, and the painful correction of avoidable mistakes.",
        ],
      },
    ],
  },
  {
    title: "Letter to the Young Lawyer Learning Judgment",
    slug: "letter-to-the-young-lawyer-learning-judgment",
    category: "Young Lawyers",
    excerpt:
      "A reflection on the difference between knowing law, sounding legal, reading people, preserving credibility, and exercising disciplined judgment.",
    date: "Archive note · Date to be assigned",
    readTime: "8 min read",
    status: "Read Letter",
    salutation: "Dear Young Lawyer,",
    sections: [
      {
        heading: "Knowledge is not yet judgment",
        paragraphs: [
          "The young lawyer often discovers quickly that law school taught rules, but practice demands judgment. To know a provision is one thing. To know when to speak, when to pause, when to write, when to warn, when to negotiate, and when to refuse a client’s dangerous enthusiasm is another thing altogether.",
          "Do not confuse sounding legal with being useful. A client does not merely need vocabulary. A client needs clarity, proportion, courage, restraint, and an honest assessment of risk.",
        ],
      },
      {
        heading: "Credibility is a professional asset",
        paragraphs: [
          "The chamber trains the lawyer to respect time, documents, facts, and silence. Every careless promise weakens your authority. Every exaggerated assurance teaches clients to misunderstand the uncertainty of legal process.",
          "Learn to say: this is what we know; this is what we need to verify; this is the risk; this is the available path. Such language may sound less dramatic, but it builds trust because it is disciplined.",
        ],
      },
      {
        heading: "Read people, not only papers",
        paragraphs: [
          "Cases come through documents, but they also come through human pressure: pride, fear, revenge, confusion, poverty, politics, family tension, and business desperation. The lawyer who cannot read the human layer may miss the real matter even while citing the correct law.",
          "Judgment is learned slowly. Let the chamber teach you patience. Let every file become a lesson in evidence, ethics, language, power, and the dignity of the person who has come seeking help.",
        ],
      },
    ],
  },
  {
    title: "Letter to the Family Holding Land Without Records",
    slug: "letter-to-the-family-holding-land-without-records",
    category: "Land & Property",
    excerpt:
      "A practical public note on memory, boundaries, witnesses, succession, family meetings, and the tragedy of undocumented ownership.",
    date: "Archive note · Date to be assigned",
    readTime: "6 min read",
    status: "Read Letter",
    salutation: "Dear Family,",
    sections: [
      {
        heading: "Memory alone is a fragile title",
        paragraphs: [
          "Many families hold land through inheritance, community recognition, old boundaries, ancestral use, and oral memory. These things matter. But when conflict comes, memory alone may become weak, contested, or divided among those who remember differently.",
          "The tragedy of family land is that everyone assumes the facts are known until a sale, death, trespass, boundary dispute, or succession conflict reveals that nothing was properly recorded.",
        ],
      },
      {
        heading: "Convert family memory into family record",
        paragraphs: [
          "A wise family should document boundaries, names of witnesses, history of possession, old transactions, minutes of family meetings, grants, receipts, photographs, survey plans where available, and the agreed authority of family representatives.",
          "Records do not dishonour tradition. They protect it. They help the next generation know what was inherited, what was sold, what was disputed, and what must not be touched without family consent.",
        ],
      },
      {
        heading: "Do not wait for litigation to organise truth",
        paragraphs: [
          "Court often enters when family discipline has already failed. By then, documents may be missing, witnesses may be dead, boundaries may have shifted, and relations may have hardened into accusation.",
          "Let the family create order before conflict demands it. Land is not only soil. It is memory, dignity, economy, inheritance, and peace. Such things deserve record.",
        ],
      },
    ],
  },
  {
    title: "Letter to the Public Officer and the Burden of Power",
    slug: "letter-to-the-public-officer-and-the-burden-of-power",
    category: "Governance & Public Order",
    excerpt:
      "A chamber reflection on authority as responsibility, public office as restraint, and power as something that must answer to dignity.",
    date: "Archive note · Date to be assigned",
    readTime: "9 min read",
    status: "Read Letter",
    salutation: "Dear Public Officer,",
    sections: [
      {
        heading: "Power is not merely permission",
        paragraphs: [
          "Public office gives authority, but authority is not a personal decoration. It is a burden carried on behalf of society. The officer who forgets this begins to treat citizens as interruptions rather than as the reason public power exists.",
          "Lawful power must be exercised with restraint. The public officer must ask not only whether an action is possible, but whether it is just, proportionate, documented, reviewable, and consistent with the dignity of the person affected.",
        ],
      },
      {
        heading: "The record will outlive the moment",
        paragraphs: [
          "Every instruction, approval, refusal, arrest, seizure, allocation, demolition, clearance, memo, and public statement may become part of institutional memory. The moment may pass, but the record remains.",
          "A serious officer therefore acts with the consciousness that power should be able to explain itself. Where power cannot give reasons, it begins to look like fear, arbitrariness, or private interest wearing public clothing.",
        ],
      },
      {
        heading: "Dignity is a standard of governance",
        paragraphs: [
          "A society is safer when citizens do not have to tremble before every office. Respect for authority should not require humiliation. Compliance should not require fear. Governance should not make people smaller in order to prove that power is large.",
          "The burden of power is the duty to remain human while holding authority. That is the discipline that separates public service from domination.",
        ],
      },
    ],
  },
  {
    title: "Letter to the Client Who Thinks Law Begins in Court",
    slug: "letter-to-the-client-who-thinks-law-begins-in-court",
    category: "Law & Society",
    excerpt:
      "An explanation of prevention, records, negotiation, correspondence, documentation, and why court is often the late stage of legal life.",
    date: "Archive note · Date to be assigned",
    readTime: "7 min read",
    status: "Read Letter",
    salutation: "Dear Client,",
    sections: [
      {
        heading: "Law begins before the dispute becomes loud",
        paragraphs: [
          "Many clients meet the lawyer when anger has matured, documents have disappeared, relationships have broken, and the other side has already shaped the story. At that stage, the lawyer is not only solving a problem; he is also trying to recover what earlier discipline could have preserved.",
          "Law does not begin in court. It begins with how agreements are written, how payments are recorded, how notices are sent, how land is verified, how meetings are minuted, and how risk is noticed before it grows teeth.",
        ],
      },
      {
        heading: "Prevention is legal work",
        paragraphs: [
          "The letter from chambers, the reviewed agreement, the search, the receipt, the warning, the negotiation, the memo, and the careful record are not lesser forms of law. They are often the forms of law that prevent damage.",
          "Court is important, but court is not the only room in which justice is protected. Sometimes justice is protected by a properly written clause, a timely letter, a verified title, a clear policy, or a record that prevents lies from becoming persuasive.",
        ],
      },
      {
        heading: "Use the lawyer before crisis narrows the options",
        paragraphs: [
          "A lawyer is not only a fighter in litigation. A lawyer is also a reader of risk, a translator of obligation, a designer of evidence, and a witness to the seriousness of human affairs.",
          "Bring the matter early. Bring the documents early. Bring the confusion before it becomes emergency. The law is more useful when it is allowed to guide conduct, not only to repair collapse.",
        ],
      },
    ],
  },
];

export function getLetterBySlug(slug: string) {
  return letters.find((letter) => letter.slug === slug);
}

export function getAdjacentLetters(slug: string) {
  const index = letters.findIndex((letter) => letter.slug === slug);
  return {
    previous: index > 0 ? letters[index - 1] : null,
    next: index >= 0 && index < letters.length - 1 ? letters[index + 1] : null,
  };
}
