export type Card = {
  question: string;
  answers: { id: number; text: string }[];
  correctAnswerId: number;
  explanation: string;
};

export const NEW_CARDS: Card[] = [
  {
    question:
      "Why does React recommend using unique and stable keys when rendering lists?",
    answers: [
      { id: 1, text: "To improve SEO ranking" },
      { id: 2, text: "To keep the UI responsive to network speed" },
      {
        id: 3,
        text: "To help React identify which items have changed, been added, or removed",
      },
      { id: 4, text: "To automatically memoize list items" },
    ],
    correctAnswerId: 3,
    explanation:
      "Keys help React efficiently update the DOM by identifying which items changed, were added, or removed during reconciliation.",
  },
  {
    question:
      "In React, when you give all items in a list the same `key`, what is a likely outcome?",
    answers: [
      { id: 1, text: "React ignores the key and rerenders all items anyway" },
      {
        id: 2,
        text: "React treats all items as the same, leading to incorrect UI updates",
      },
      { id: 3, text: "React automatically creates keys based on index" },
      { id: 4, text: "The app will crash with a key error" },
    ],
    correctAnswerId: 2,
    explanation:
      "React uses keys to track each item. If they're the same, React can't differentiate between them and will reuse or merge them incorrectly.",
  },
  {
    question: "Why is lifting state up a common pattern in React?",
    answers: [
      {
        id: 1,
        text: "It allows parent components to manage shared state between children",
      },
      { id: 2, text: "It avoids the use of useEffect" },
      { id: 3, text: "It makes components pure functions" },
      { id: 4, text: "It improves the performance of event handlers" },
    ],
    correctAnswerId: 1,
    explanation:
      "Lifting state up enables sibling or nested components to share and modify the same data through their common parent.",
  },
  {
    question:
      "How can you ensure a component fully resets its internal state when props change?",
    answers: [
      { id: 1, text: "Use `useMemo` to recompute values" },
      { id: 2, text: "Pass a new key to the component to force remount" },
      { id: 3, text: "Use `useEffect` with a cleanup function" },
      { id: 4, text: "Wrap the component in `React.memo`" },
    ],
    correctAnswerId: 2,
    explanation:
      "Changing a component's key causes React to unmount and remount it, effectively resetting its internal state.",
  },
  {
    question:
      "What happens if you store selection state inside each `PossibleAnswer` component?",
    answers: [
      { id: 1, text: "Each answer will know when others are selected" },
      {
        id: 2,
        text: "React will share state across all answers automatically",
      },
      {
        id: 3,
        text: "Each answer manages its own state, so multiple can appear selected at once",
      },
      { id: 4, text: "It forces a re-render of the entire app" },
    ],
    correctAnswerId: 3,
    explanation:
      "Each component is isolated, so without shared state, they can't coordinate — multiple answers might show as selected.",
  },
  {
    question: "What does `useState` return?",
    answers: [
      { id: 1, text: "The current state and a function to update it" },
      { id: 2, text: "Only a getter for state" },
      { id: 3, text: "A reference to a global state object" },
      { id: 4, text: "A memoized version of state" },
    ],
    correctAnswerId: 1,
    explanation:
      "`useState` returns an array with the current state value and a setter function to update it asynchronously.",
  },
  {
    question: "When is the function passed to `useEffect` called?",
    answers: [
      { id: 1, text: "Only when the component is unmounted" },
      { id: 2, text: "After every render, unless dependencies are provided" },
      { id: 3, text: "Before the component renders" },
      { id: 4, text: "Only when state changes" },
    ],
    correctAnswerId: 2,
    explanation:
      "By default, the effect runs after every render. With dependencies, it only runs when one of them changes.",
  },
  {
    question:
      "What happens if you call the setter function from `useState` with the same value as before?",
    answers: [
      { id: 1, text: "The component always re-renders" },
      { id: 2, text: "React throws an error" },
      { id: 3, text: "React skips the re-render for optimization" },
      { id: 4, text: "The state resets to the initial value" },
    ],
    correctAnswerId: 3,
    explanation:
      "React compares the new state to the previous one. If they're equal (`===`), it skips re-rendering for performance.",
  },
  {
    question: "How do you run an effect only once when the component mounts?",
    answers: [
      { id: 1, text: "Use `useEffect` with no arguments" },
      { id: 2, text: "Use `useEffect` with an empty dependency array" },
      { id: 3, text: "Use `useMemo` instead of `useEffect`" },
      { id: 4, text: "Wrap `useEffect` in a `setTimeout`" },
    ],
    correctAnswerId: 2,
    explanation:
      "Passing an empty dependency array `[]` means the effect only runs after the initial mount, similar to `componentDidMount`.",
  },
  {
    question:
      "What is the purpose of the cleanup function returned from `useEffect`?",
    answers: [
      { id: 1, text: "To trigger the next effect" },
      {
        id: 2,
        text: "To cancel or clean up side effects like timers or subscriptions",
      },
      { id: 3, text: "To avoid memory leaks in `useState`" },
      { id: 4, text: "To store previous props" },
    ],
    correctAnswerId: 2,
    explanation:
      "The cleanup function allows you to clean up subscriptions, timeouts, or other effects before the component unmounts or re-runs the effect.",
  },
];

export const PRIVATE_REAL_ESTATE_DECK = {
  deckName: "Private Equity Real Estate",
  description: "Test your knowledge of private equity real estate strategies, structures, and market trends",
  cards: [
    {
      question: "By 2029, private real estate assets under management are projected to reach approximately what amount?",
      answers: [
        { id: 0, text: "$1.7 trillion" },
        { id: 1, text: "$2.7 trillion" },
        { id: 2, text: "$3.7 trillion" },
        { id: 3, text: "$4.7 trillion" }
      ],
      correctAnswerId: 1,
      explanation: "The article notes that AUM in private real estate is expected to rise from about $1.7 trillion in 2024 to near $2.7 trillion by 2029."
    },
    {
      question: "Which fund structure allows investors to enter or exit at any time (subject to liquidity queues)?",
      answers: [
        { id: 0, text: "Closed-ended" },
        { id: 1, text: "Open-ended (Evergreen)" },
        { id: 2, text: "Listed REIT" },
        { id: 3, text: "Opportunistic vehicle" }
      ],
      correctAnswerId: 1,
      explanation: "Open-ended, or evergreen, funds permit periodic subscriptions and redemptions, unlike closed-ended vehicles with fixed lock-up periods."
    },
    {
      question: "Which private real estate strategy focuses on high-quality, stabilized assets with minimal leverage?",
      answers: [
        { id: 0, text: "Core" },
        { id: 1, text: "Core-Plus" },
        { id: 2, text: "Value-Add" },
        { id: 3, text: "Opportunistic" }
      ],
      correctAnswerId: 0,
      explanation: "Core strategies target low-risk, stabilized properties, generating most returns from income with minimal leverage."
    },
    {
      question: "The J-Curve phenomenon in private real estate describes:",
      answers: [
        { id: 0, text: "Rapid early gains followed by stabilization" },
        { id: 1, text: "Flat returns throughout the fund life" },
        { id: 2, text: "Early negative cash flows before asset appreciation accelerates" },
        { id: 3, text: "Immediate positive cash flows at closing" }
      ],
      correctAnswerId: 2,
      explanation: "J-Curve refers to initial capital calls and fees causing negative returns early, before value appreciation drives gains."
    },
    {
      question: "Which property sector is characterized by warehouses and distribution centers?",
      answers: [
        { id: 0, text: "Retail" },
        { id: 1, text: "Industrial" },
        { id: 2, text: "Data Centers" },
        { id: 3, text: "Residential" }
      ],
      correctAnswerId: 1,
      explanation: "Industrial real estate includes logistics assets such as warehouses, distribution hubs, and manufacturing facilities."
    },
    {
      question: "Which benefit of private real estate arises because rents often adjust with CPI or market rates?",
      answers: [
        { id: 0, text: "Low correlation" },
        { id: 1, text: "Inflation hedge" },
        { id: 2, text: "J-Curve mitigation" },
        { id: 3, text: "Tax shelter" }
      ],
      correctAnswerId: 1,
      explanation: "Private real estate can serve as an inflation hedge since lease agreements often include rent escalators tied to inflation."
    },
    {
      question: "In value-add strategies, the majority of returns come from:",
      answers: [
        { id: 0, text: "Stable income yield" },
        { id: 1, text: "Minor operational improvements" },
        { id: 2, text: "Capital appreciation through repositioning" },
        { id: 3, text: "Ground-up development" }
      ],
      correctAnswerId: 2,
      explanation: "Value-add funds target assets needing repositioning or renovation, driving returns mainly from price appreciation."
    },
    {
      question: "Which diversification dimension is NOT mentioned as key for private real estate portfolios?",
      answers: [
        { id: 0, text: "Manager selection" },
        { id: 1, text: "Geography" },
        { id: 2, text: "Asset class vintage" },
        { id: 3, text: "Currency overlay" }
      ],
      correctAnswerId: 3,
      explanation: "The article recommends diversification by manager, geography, vintage, strategy, and property type—but not currency overlay."
    },
    {
      question: "Which risk is most directly tied to the operational expertise and deal access of the fund sponsor?",
      answers: [
        { id: 0, text: "Liquidity risk" },
        { id: 1, text: "Manager selection risk" },
        { id: 2, text: "Inflation risk" },
        { id: 3, text: "Market timing risk" }
      ],
      correctAnswerId: 1,
      explanation: "Manager selection risk stems from choosing sponsors with insufficient deal flow or operational capabilities, impacting returns."
    },
    {
      question: "Opportunistic private real estate strategies typically feature:",
      answers: [
        { id: 0, text: "High leverage and short holding periods aiming for capital gains" },
        { id: 1, text: "Minimal debt and long-term leases" },
        { id: 2, text: "Moderate improvements with balanced income/appreciation" },
        { id: 3, text: "Stabilized core assets with predictable yields" }
      ],
      correctAnswerId: 0,
      explanation: "Opportunistic funds pursue special situations—like distressed assets or development—using high leverage and short holds to maximize gains."
    }]
}

export const HEGDE_FUND_DECK = {
  deckName: "Hedge Fund Strategies",
  description: "Test your knowledge of hedge fund strategies, structures, and market trends",
  cards: [
    {
      question: "By 2029, hedge fund assets under management are projected to reach approximately what amount?",
      answers: [
        { id: 0, text: "$4.8 trillion" },
        { id: 1, text: "$5.7 trillion" },
        { id: 2, text: "$6.5 trillion" },
        { id: 3, text: "$7.2 trillion" }
      ],
      correctAnswerId: 1,
      explanation: "The article notes that AUM for hedge funds is expected to grow from about $4.8 trillion in 2024 to over $5.7 trillion by 2029."
    },
    {
      question: "Hedge funds are most commonly structured as which type of legal entity?",
      answers: [
        { id: 0, text: "Limited Partnership" },
        { id: 1, text: "Open-Ended Trust" },
        { id: 2, text: "Mutual Fund" },
        { id: 3, text: "Exchange-Traded Fund (ETF)" }
      ],
      correctAnswerId: 0,
      explanation: "Most hedge funds are set up as limited partnerships, with a general partner managing the fund and limited partners providing capital."
    },
    {
      question: "Which investor category requires a net worth of at least $1 million or specified income thresholds to participate in hedge funds?",
      answers: [
        { id: 0, text: "Institutional Investors" },
        { id: 1, text: "Accredited Investors" },
        { id: 2, text: "Qualified Purchasers" },
        { id: 3, text: "Fund of Hedge Funds" }
      ],
      correctAnswerId: 1,
      explanation: "Accredited Investors are individuals with a net worth over $1 million or income over $200 000 (single) or $300 000 (joint) for at least two years."
    },
    {
      question: "Which investor category requires a minimum of $5 million in assets (or $25 million for entities)?",
      answers: [
        { id: 0, text: "Accredited Investors" },
        { id: 1, text: "Institutional Investors" },
        { id: 2, text: "Qualified Purchasers" },
        { id: 3, text: "Retail Investors" }
      ],
      correctAnswerId: 2,
      explanation: "Qualified Purchasers are defined under the Investment Company Act as individuals or families with at least $5 million in assets (or entities with $25 million)."
    },
    {
      question: "What does the fee structure “2 and 20” represent in hedge funds?",
      answers: [
        { id: 0, text: "2% performance fee + 20% management fee" },
        { id: 1, text: "2% management fee + 20% performance fee" },
        { id: 2, text: "2% redemption fee + 20% incentive fee" },
        { id: 3, text: "2% administration fee + 20% advisory fee" }
      ],
      correctAnswerId: 1,
      explanation: "“2 and 20” refers to a 2% annual management fee plus a 20% performance (incentive) fee on returns above a specified hurdle."
    },
    {
      question: "Global Macro hedge funds primarily seek to profit from what?",
      answers: [
        { id: 0, text: "Corporate actions like mergers" },
        { id: 1, text: "Interest rate arbitrage" },
        { id: 2, text: "Market swings caused by political or economic events" },
        { id: 3, text: "Pricing inefficiencies between related securities" }
      ],
      correctAnswerId: 2,
      explanation: "Global Macro funds aim to profit from large market moves driven by political or economic developments across regions."
    },
    {
      question: "Equity Hedge Funds typically combine which types of positions in stocks?",
      answers: [
        { id: 0, text: "Long and Short positions" },
        { id: 1, text: "Short and Leverage positions" },
        { id: 2, text: "Only Long positions" },
        { id: 3, text: "Only Index positions" }
      ],
      correctAnswerId: 0,
      explanation: "Equity Hedge strategies use both long and short stock positions to generate returns while managing market exposure."
    },
    {
      question: "Event-Driven hedge fund strategies focus on mispriced securities due to what types of catalysts?",
      answers: [
        { id: 0, text: "Political elections and policy changes" },
        { id: 1, text: "Mergers, acquisitions, reorganizations, or bankruptcies" },
        { id: 2, text: "Interest rate adjustments" },
        { id: 3, text: "Currency fluctuations" }
      ],
      correctAnswerId: 1,
      explanation: "Event-Driven strategies target securities expected to reprice around corporate actions such as mergers, acquisitions, or bankruptcies."
    },
    {
      question: "Relative Value hedge funds seek to generate returns by:",
      answers: [
        { id: 0, text: "Taking directional bets on market trends" },
        { id: 1, text: "Arbitraging price differences between related financial instruments" },
        { id: 2, text: "Short-selling overvalued companies" },
        { id: 3, text: "Leveraging macroeconomic forecasts" }
      ],
      correctAnswerId: 1,
      explanation: "Relative Value strategies exploit pricing inefficiencies between related instruments, such as stocks versus bonds."
    },
    {
      question: "Hedge funds often impose lock-up periods limiting withdrawals for approximately how long?",
      answers: [
        { id: 0, text: "6 months" },
        { id: 1, text: "1–2 years" },
        { id: 2, text: "3–5 years" },
        { id: 3, text: "No lock-up" }
      ],
      correctAnswerId: 1,
      explanation: "Many hedge funds require investors to lock up capital for about one to two years to support their strategies and liquidity management."
    }

  ]
}

export const PRIVATE_DEBT_DECK = {
  deckName: "Private Debt Strategies",
  description: "Test your knowledge of private debt strategies, structures, and market trends",
  cards: [
    {
      question: "What defines private debt compared to traditional public credit instruments?",
      answers: [
        { id: 0, text: "Loans issued by governments" },
        { id: 1, text: "Syndicated bank loans traded on public markets" },
        { id: 2, text: "Privately negotiated loans not broadly syndicated or publicly rated" },
        { id: 3, text: "Exchange-traded bonds" }
      ],
      correctAnswerId: 2,
      explanation: "Private debt consists of loans negotiated directly between lender and borrower, unlike syndicated or publicly rated credit instruments."
    },
    {
      question: "By 2026, private debt assets under management are projected to reach approximately what amount?",
      answers: [
        { id: 0, text: "$1.2 trillion" },
        { id: 1, text: "$2.6 trillion" },
        { id: 2, text: "$3.5 trillion" },
        { id: 3, text: "$4.0 trillion" }
      ],
      correctAnswerId: 1,
      explanation: "Preqin forecasts private debt AUM to grow from about $1.5 trillion in 2024 to near $2.6 trillion by 2026."
    },
    {
      question: "Private debt is most closely compared to which public credit categories?",
      answers: [
        { id: 0, text: "Investment-grade corporate bonds" },
        { id: 1, text: "Government Treasury securities" },
        { id: 2, text: "Non-investment-grade syndicated leveraged loans and high-yield bonds" },
        { id: 3, text: "Mortgage-backed securities only" }
      ],
      correctAnswerId: 2,
      explanation: "Private debt's risk and return profile aligns most closely with leveraged loans and high-yield bonds, though it lacks public ratings."
    },
    {
      question: "How are most private debt funds structured?",
      answers: [
        { id: 0, text: "Open-ended mutual funds" },
        { id: 1, text: "Exchange-traded funds (ETFs)" },
        { id: 2, text: "Limited partnerships with defined or evergreen lives" },
        { id: 3, text: "Unit investment trusts" }
      ],
      correctAnswerId: 2,
      explanation: "Private debt is typically accessed via limited partnership funds, either with shorter maturities or as evergreen vehicles."
    },
    {
      question: "Which strategy involves making loans backed by a company's future cash flows or specific assets?",
      answers: [
        { id: 0, text: "Distressed debt" },
        { id: 1, text: "Direct lending" },
        { id: 2, text: "Collateralized loan obligations" },
        { id: 3, text: "Mezzanine debt" }
      ],
      correctAnswerId: 1,
      explanation: "Direct lending refers to private corporate loans secured by a borrower's cash flows or assets."
    },
    {
      question: "Collateralized loan obligations (CLOs) are an example of which private debt category?",
      answers: [
        { id: 0, text: "Special situations" },
        { id: 1, text: "Asset-based lending" },
        { id: 2, text: "Structured debt" },
        { id: 3, text: "Mezzanine financing" }
      ],
      correctAnswerId: 2,
      explanation: "CLOs bundle and tranche corporate loans for investors, making them a form of structured debt."
    },
    {
      question: "Floating-rate coupons are used in private debt to mitigate which risk?",
      answers: [
        { id: 0, text: "Credit risk" },
        { id: 1, text: "Interest-rate risk" },
        { id: 2, text: "Liquidity risk" },
        { id: 3, text: "Operational risk" }
      ],
      correctAnswerId: 1,
      explanation: "Floating-rate coupons adjust with benchmarks like the 10-year Treasury, reducing exposure to rising interest rates."
    },
    {
      question: "Which loan term gives lenders stronger protections and early warning monitoring capabilities?",
      answers: [
        { id: 0, text: "Origination fee" },
        { id: 1, text: "Floating-rate coupon" },
        { id: 2, text: "Covenants" },
        { id: 3, text: "Prepayment penalty" }
      ],
      correctAnswerId: 2,
      explanation: "Covenants allow lenders to enforce financial or operational requirements and detect borrower distress early."
    },
    {
      question: "Why is credit/default risk in private debt harder to evaluate?",
      answers: [
        { id: 0, text: "Loans are publicly rated by multiple agencies" },
        { id: 1, text: "Secondary market pricing is widely available" },
        { id: 2, text: "Private loans lack independent ratings and public disclosure" },
        { id: 3, text: "All loans are senior secured" }
      ],
      correctAnswerId: 2,
      explanation: "Because private loans are not rated and trade infrequently, assessing default risk requires deeper due diligence."
    },
    {
      question: "What distinguishes the J-curve effect in private debt from other private investments?",
      answers: [
        { id: 0, text: "Stronger negative early returns before income begins" },
        { id: 1, text: "Absence of a pronounced J-curve due to early income generation" },
        { id: 2, text: "Complete lack of early income" },
        { id: 3, text: "Immediate capital appreciation only" }
      ],
      correctAnswerId: 1,
      explanation: "Private debt often delivers current income from interest, reducing or eliminating the typical early negative cash flows (J-curve)."
    }
  ]
}

export const PRIVATE_EQUITY_DECK = {
  deckname: "Private Equity Strategies",
  description: "Test your knowledge of private equity strategies, structures, and market trends",
  cards: [
    {
      question: "By 2029, private equity assets under management are projected to reach approximately what amount?",
      answers: [
        { id: 0, text: "$12.6 trillion" },
        { id: 1, text: "$15.6 trillion" },
        { id: 2, text: "$18.6 trillion" },
        { id: 3, text: "$20.6 trillion" }
      ],
      correctAnswerId: 1,
      explanation: "Preqin forecasts private equity AUM to grow from \$9.6 trillion in 2024 to about \$15.6 trillion by 2029."
    },
    {
      question: "Private equity funds are most commonly structured as which legal entity?",
      answers: [
        { id: 0, text: "C-Corporation" },
        { id: 1, text: "Open-ended mutual fund" },
        { id: 2, text: "Limited Partnership" },
        { id: 3, text: "Real Estate Investment Trust (REIT)" }
      ],
      correctAnswerId: 2,
      explanation: "Most private equity investments use a limited partnership structure, with GPs managing and LPs supplying capital."
    },
    {
      question: "Which stage of the private equity lifecycle involves GPs deploying capital and LPs meeting capital calls?",
      answers: [
        { id: 0, text: "Fundraising" },
        { id: 1, text: "Investing" },
        { id: 2, text: "Harvesting" },
        { id: 3, text: "Distribution" }
      ],
      correctAnswerId: 1,
      explanation: "The Investing stage is when asset managers deploy committed capital and LPs fulfill capital calls."
    },
    {
      question: "Buyout funds typically aim to:",
      answers: [
        { id: 0, text: "Provide growth capital to startups" },
        { id: 1, text: "Gain controlling ownership of a company and improve its operations" },
        { id: 2, text: "Purchase distressed debt at discount" },
        { id: 3, text: "Invest only in public markets" }
      ],
      correctAnswerId: 1,
      explanation: "Buyout strategies seek majority or controlling stakes in companies to drive operational improvements and exit at higher valuations."
    },
    {
      question: "Growth equity investments generally target:",
      answers: [
        { id: 0, text: "Early-stage seed companies" },
        { id: 1, text: "Mature public corporations" },
        { id: 2, text: "Established private businesses at an earlier development stage than buyouts" },
        { id: 3, text: "Only distressed companies" }
      ],
      correctAnswerId: 2,
      explanation: "Growth equity focuses on companies that are more mature than VC but earlier stage than buyouts, offering growth capital."
    },
    {
      question: "Secondary investments refer to:",
      answers: [
        { id: 0, text: "Debt financing for secondary schools" },
        { id: 1, text: "Purchase of limited partnership interests from existing investors" },
        { id: 2, text: "Investing in secondary public offerings" },
        { id: 3, text: "Early-stage venture capital" }
      ],
      correctAnswerId: 1,
      explanation: "Secondary investments involve buying an interest in a private equity fund from another LP, often at a discount or premium."
    },
    {
      question: "Venture capital investments are generally made in companies that are:",
      answers: [
        { id: 0, text: "Distressed and in need of restructuring" },
        { id: 1, text: "New, disruptive businesses across various stages from seed to pre-IPO" },
        { id: 2, text: "Large, established public companies" },
        { id: 3, text: "Only in the healthcare sector" }
      ],
      correctAnswerId: 1,
      explanation: "Venture capital targets new, high-growth companies at stages ranging from angel and seed to pre-IPO."
    },
    {
      question: "The J-Curve effect in private equity describes:",
      answers: [
        { id: 0, text: "Immediate positive returns after fundraising" },
        { id: 1, text: "Flat performance throughout the fund's life" },
        { id: 2, text: "Early negative cash flows followed by value appreciation" },
        { id: 3, text: "Only upside potential with no downside" }
      ],
      correctAnswerId: 2,
      explanation: "Private equity often incurs fees and capital calls early, producing negative returns before underlying investments are marked up."
    },
    {
      question: "Which consideration emphasizes evaluating a GP's track record and deal-sourcing capabilities?",
      answers: [
        { id: 0, text: "Illiquidity risk" },
        { id: 1, text: "Manager selection and access" },
        { id: 2, text: "Valuation volatility" },
        { id: 3, text: "Business risk" }
      ],
      correctAnswerId: 1,
      explanation: "Due diligence on a GP's experience, performance history, and network is critical to accessing top-tier deals."
    },
    {
      question: "Private equity can appear less volatile in a portfolio because:",
      answers: [
        { id: 0, text: "It is marked daily at market prices" },
        { id: 1, text: "It has no real risk" },
        { id: 2, text: "Valuations occur only periodically rather than in real time" },
        { id: 3, text: "It uses no leverage" }
      ],
      correctAnswerId: 2,
      explanation: "Private equity investments are valued periodically, which can smooth out apparent volatility compared to daily-marked public equities."
    }
  ]
}

export const ALTERNATIVE_INVESTMENTS_DECK = {
  deckName: "Alternative Investments",
  description: "Test your knowledge of alternative investment strategies, structures, and market trends",
  cards: [
    {
      question: "By 2029, alternative investment assets under management are projected to reach approximately what amount?",
      answers: [
        { id: 0, text: "$18.2 trillion" },
        { id: 1, text: "$23.0 trillion" },
        { id: 2, text: "$29.2 trillion" },
        { id: 3, text: "$34.5 trillion" }
      ],
      correctAnswerId: 2,
      explanation: "Preqin forecasts alternatives AUM growing to about $29.2 trillion by 2029."
    },
    {
      question: "Which of the following is NOT cited as a primary reason advisors allocate to alternatives?",
      answers: [
        { id: 0, text: "Potential for higher risk-adjusted returns" },
        { id: 1, text: "Portfolio diversification via low-correlation assets" },
        { id: 2, text: "Daily liquidity and tradability" },
        { id: 3, text: "Risk mitigation through negotiated contract terms" }
      ],
      correctAnswerId: 2,
      explanation: "Alternatives are generally less liquid, requiring multi-year lock-ups rather than daily tradability."
    },
    {
      question: "Alternative investments typically require what investment horizon?",
      answers: [
        { id: 0, text: "Intraday trading" },
        { id: 1, text: "Short-term (less than 1 year)" },
        { id: 2, text: "Medium-term (1–3 years)" },
        { id: 3, text: "Long-term (multi-year)" }
      ],
      correctAnswerId: 3,
      explanation: "Many alternative strategies need time—often several years—for value-creation plans to materialize."
    },
    {
      question: "Which of these is considered an “unconventional exposure” in alternative investments?",
      answers: [
        { id: 0, text: "Large-cap U.S. equities" },
        { id: 1, text: "Government Treasuries" },
        { id: 2, text: "Sports, media, and entertainment rights" },
        { id: 3, text: "High-yield corporate bonds" }
      ],
      correctAnswerId: 2,
      explanation: "Alternatives can include niche assets like sports, media, and entertainment rights, which aren't accessible in traditional funds."
    },
    {
      question: "Alternative investments are generally:",
      answers: [
        { id: 0, text: "Highly regulated, like mutual funds" },
        { id: 1, text: "Private and subject to limited regulation" },
        { id: 2, text: "Traded on public exchanges daily" },
        { id: 3, text: "Required to publish daily NAVs" }
      ],
      correctAnswerId: 1,
      explanation: "Alternatives are mostly private vehicles with less public disclosure and oversight than mutual funds or ETFs."
    },
    {
      question: "Which feature distinguishes alternative funds from typical mutual funds?",
      answers: [
        { id: 0, text: "Low minimum investment requirements" },
        { id: 1, text: "Extensive secondary market liquidity" },
        { id: 2, text: "Capital lock-ups and limited secondary trading" },
        { id: 3, text: "Daily pricing transparency" }
      ],
      correctAnswerId: 2,
      explanation: "Alternative funds often lock up capital for years and have scant secondary-market trading."
    },
    {
      question: "Historically, access to alternative investments has been restricted to:",
      answers: [
        { id: 0, text: "Retail investors with small portfolios" },
        { id: 1, text: "Day traders on margin" },
        { id: 2, text: "Institutional and accredited investors" },
        { id: 3, text: "All investors via index ETFs" }
      ],
      correctAnswerId: 2,
      explanation: "Alternatives traditionally require accreditation or institutional status and carry high minimums."
    },
    {
      question: "Which of the following is NOT one of the major alternative asset categories listed?",
      answers: [
        { id: 0, text: "Private Equity" },
        { id: 1, text: "Private Debt" },
        { id: 2, text: "Commodities Futures" },
        { id: 3, text: "Infrastructure & Real Assets" }
      ],
      correctAnswerId: 2,
      explanation: "Commodities futures are traded in public markets, whereas private debt, equity, real assets, and hedge funds are alternative categories."
    },
    {
      question: "Which new fund structures aim to improve liquidity and lower minimums for alternatives?",
      answers: [
        { id: 0, text: "Closed-end mutual funds" },
        { id: 1, text: "Interval funds and BDCs" },
        { id: 2, text: "Traditional hedge funds" },
        { id: 3, text: "Index ETFs" }
      ],
      correctAnswerId: 1,
      explanation: "Interval funds and business development companies (BDCs) offer periodic liquidity and smaller minimums."
    },
    {
      question: "Which risk is NOT specifically mentioned among the key risks of alternative investing?",
      answers: [
        { id: 0, text: "Manager risk" },
        { id: 1, text: "Illiquidity risk" },
        { id: 2, text: "Currency risk" },
        { id: 3, text: "Reduced transparency" }
      ],
      correctAnswerId: 2,
      explanation: "While manager, liquidity, and transparency risks are cited, currency risk is not listed as a primary concern."
    }
  ]
}

export const STRUCTURE_NOTE_DECK = {
  deckName: "Structured Notes",
  description: "Test your knowledge of structured notes, their features, and market applications",
  cards: [
    {
      question: "Structured notes most commonly combine a zero-coupon bond, origination costs, and which additional component?",
      answers: [
        { id: 0, text: "Equity shares" },
        { id: 1, text: "Derivatives (e.g., options)" },
        { id: 2, text: "Real estate assets" },
        { id: 3, text: "Commodities inventory" }
      ],
      correctAnswerId: 1,
      explanation: "A standard structured note is built from a discounted zero-coupon bond, fees, and derivative components such as options."
    },
    {
      question: "In 2024, U.S. structured-note issuance volume reached approximately:",
      answers: [
        { id: 0, text: "$94 billion" },
        { id: 1, text: "$144 billion" },
        { id: 2, text: "$194 billion" },
        { id: 3, text: "$244 billion" }
      ],
      correctAnswerId: 2,
      explanation: "Issuance grew more than 40% between 2023 and 2024, reaching $194 billion in 2024."
    },
    {
      question: "Which strategy category of structured notes is designed to seek enhanced upside participation while offering some downside protection?",
      answers: [
        { id: 0, text: "Yield notes" },
        { id: 1, text: "Growth notes" },
        { id: 2, text: "Protection notes" },
        { id: 3, text: "Income notes" }
      ],
      correctAnswerId: 1,
      explanation: "Growth notes target levered upside participation in an underlier's return, often with downside mitigation features."
    },
    {
      question: "Yield notes primarily aim to:",
      answers: [
        { id: 0, text: "Track index performance" },
        { id: 1, text: "Provide full principal protection" },
        { id: 2, text: "Achieve enhanced yield relative to fixed income" },
        { id: 3, text: "Offer uncapped equity upside" }
      ],
      correctAnswerId: 2,
      explanation: "Yield notes seek higher income payouts compared to comparable fixed-income or credit investments."
    },
    {
      question: "Protection notes are designed to provide:",
      answers: [
        { id: 0, text: "Enhanced leveraged equity gains" },
        { id: 1, text: "Fixed-rate coupons only" },
        { id: 2, text: "Market exposure with full or partial downside protection" },
        { id: 3, text: "Unlimited upside and downside participation" }
      ],
      correctAnswerId: 2,
      explanation: "Protection notes offer exposure to an underlier while seeking full or partial principal protection at maturity."
    },
    {
      question: "A key liquidity risk with structured notes is that they:",
      answers: [
        { id: 0, text: "Trade on multiple exchanges" },
        { id: 1, text: "Have no maturity date" },
        { id: 2, text: "Lack a broad secondary market" },
        { id: 3, text: "Are always repurchased early by issuers" }
      ],
      correctAnswerId: 2,
      explanation: "Structured notes generally lack an active secondary market, so investors hold them until maturity."
    },
    {
      question: "Why is the issuer's credit quality particularly important for structured-note investors?",
      answers: [
        { id: 0, text: "It determines voting rights" },
        { id: 1, text: "It impacts the repayment of principal and coupons" },
        { id: 2, text: "It sets the note's participation rate" },
        { id: 3, text: "It defines the underlying asset class" }
      ],
      correctAnswerId: 1,
      explanation: "All payments, including principal and any coupons, depend on the issuer's ability to meet its debt obligations."
    },
    {
      question: "Investors in structured notes do NOT have which of the following rights?",
      answers: [
        { id: 0, text: "Pre-specified return potential" },
        { id: 1, text: "Dividend payments from the underlying asset" },
        { id: 2, text: "Exposure to derivative gains" },
        { id: 3, text: "Principal protection features" }
      ],
      correctAnswerId: 1,
      explanation: "Note holders do not own the underlying asset and therefore do not receive dividends or distributions it pays."
    },
    {
      question: "Caps on upside participation in structured notes can result in:",
      answers: [
        { id: 0, text: "Unlimited equity exposure" },
        { id: 1, text: "No downside risk" },
        { id: 2, text: "A limit on the maximum gain an investor can realize" },
        { id: 3, text: "Guaranteed double returns" }
      ],
      correctAnswerId: 2,
      explanation: "When a note's participation rate is capped, investors cannot benefit beyond a specified maximum return."
    },
    {
      question: "Which tax-related consideration is highlighted for structured-note investors?",
      answers: [
        { id: 0, text: "All notes receive favorable IRS treatment" },
        { id: 1, text: "Tax consequences can vary and may be uncertain" },
        { id: 2, text: "Taxes are always deferred until maturity" },
        { id: 3, text: "Notes are tax-exempt if held over one year" }
      ],
      correctAnswerId: 1,
      explanation: "Tax treatment depends on the note's structure and may be unclear without reviewing offering documents and consulting advisors."
    }
  ]
}

export const INFRASTRUCTURES_DECK = {
  deckName: "Infrastructure Investments",
  description: "Test your knowledge of infrastructure investment strategies, structures, and market trends",
  cards: [
    {
      question: "Which of the following best describes private infrastructure?",
      answers: [
        { id: 0, text: "Publicly traded utilities and telecom stocks" },
        { id: 1, text: "Privately held physical assets like roads, bridges, and data centers" },
        { id: 2, text: "Mutual funds focused on government bonds" },
        { id: 3, text: "Exchange-traded infrastructure indices" }
      ],
      correctAnswerId: 1,
      explanation: "Private infrastructure refers to direct investments in physical assets (e.g., roads, utilities, data centers) outside public markets."
    },
    {
      question: "Which sector would include toll roads and airports?",
      answers: [
        { id: 0, text: "Utilities" },
        { id: 1, text: "Energy" },
        { id: 2, text: "Transportation & Logistics" },
        { id: 3, text: "Social" }
      ],
      correctAnswerId: 2,
      explanation: "Transportation & Logistics encompasses highways, toll roads, railways, airports, and related assets."
    },
    {
      question: "Which attribute of infrastructure assets makes them relatively recession resistant?",
      answers: [
        { id: 0, text: "High leverage" },
        { id: 1, text: "Essential service nature" },
        { id: 2, text: "Short asset life" },
        { id: 3, text: "Public market trading" }
      ],
      correctAnswerId: 1,
      explanation: "Infrastructure assets provide essential services (water, power, transport), making demand stable even in downturns."
    },
    {
      question: "Why are infrastructure assets said to have high barriers to entry?",
      answers: [
        { id: 0, text: "They require minimal capital" },
        { id: 1, text: "They face few regulatory approvals" },
        { id: 2, text: "They need substantial capital and regulatory support" },
        { id: 3, text: "They are easily replicated" }
      ],
      correctAnswerId: 2,
      explanation: "Developing infrastructure requires large upfront investments and complex regulatory approvals, limiting new competitors."
    },
    {
      question: "Which potential benefit arises from contractual price increase clauses?",
      answers: [
        { id: 0, text: "Inflation hedge" },
        { id: 1, text: "High correlation to equities" },
        { id: 2, text: "Leveraged returns" },
        { id: 3, text: "Immediate liquidity" }
      ],
      correctAnswerId: 0,
      explanation: "Contracts often allow periodic price escalations, helping infrastructure investments keep pace with inflation."
    },
    {
      question: "A core-plus infrastructure strategy typically involves:",
      answers: [
        { id: 0, text: "Only undeveloped greenfield projects" },
        { id: 1, text: "Fully stabilized, low-volatility assets" },
        { id: 2, text: "Income-producing assets with some appreciation potential" },
        { id: 3, text: "Pure high-risk, high-reward plays" }
      ],
      correctAnswerId: 2,
      explanation: "Core-plus adds modest capital appreciation opportunities to the stable, income-producing core assets."
    },
    {
      question: "Which access vehicle offers the ability to add or redeem capital continuously?",
      answers: [
        { id: 0, text: "Finite-life drawdown fund" },
        { id: 1, text: "Evergreen, fully funded fund" },
        { id: 2, text: "Closed-end listed fund" },
        { id: 3, text: "Blind-pool IPO" }
      ],
      correctAnswerId: 1,
      explanation: "Evergreen funds allow periodic subscriptions and redemptions throughout the fund's life."
    },
    {
      question: "Blind-pool risk refers to:",
      answers: [
        { id: 0, text: "Investing only in government projects" },
        { id: 1, text: "Committing capital before knowing specific investments" },
        { id: 2, text: "Having no due diligence process" },
        { id: 3, text: "Guaranteed returns" }
      ],
      correctAnswerId: 1,
      explanation: "Investors commit to the fund without knowing which assets the manager will purchase, creating execution risk."
    },
    {
      question: "Environmental risk in infrastructure investing involves:",
      answers: [
        { id: 0, text: "Low returns on renewable assets" },
        { id: 1, text: "Possible contamination, fines, and regulatory changes" },
        { id: 2, text: "Automatic government bailouts" },
        { id: 3, text: "No need for maintenance" }
      ],
      correctAnswerId: 1,
      explanation: "Assets like oil pipelines or waste facilities can face contamination events, fines, or regulatory shifts impacting performance."
    },
    {
      question: "Which feature helps infrastructure assets deliver stable cash flows?",
      answers: [
        { id: 0, text: "Short-term leases" },
        { id: 1, text: "Long-term contracts or rate regulation" },
        { id: 2, text: "Daily market pricing" },
        { id: 3, text: "High trading volumes" }
      ],
      correctAnswerId: 1,
      explanation: "Long-term concession agreements or regulated tariffs provide predictable revenue streams over many years."
    }
  ]
}

export const REACT_RENDER_CYCLE_DECK_MEMOIZATION = {
  deckName: "React Render Cycle & Memoization",
  description: "Test your knowledge of React's render cycle, common misconceptions, and the foundations for using memoization hooks like useMemo and useCallback",
  cards: [
    {
      question: "What is the only trigger for a React component to re-render?",
      answers: [
        { id: 0, text: "A change to its state" },
        { id: 1, text: "A change to its props" },
        { id: 2, text: "A parent re-rendering" },
        { id: 3, text: "A change in context" }
      ],
      correctAnswerId: 0,
      explanation: "Every re-render in React starts with a state change on that component; props changes only matter because they flow down from a stateful ancestor."
    },
    {
      question: "When a component re-renders, which other components will React also re-render?",
      answers: [
        { id: 0, text: "Its parent components" },
        { id: 1, text: "All of its descendants" },
        { id: 2, text: "Only its siblings" },
        { id: 3, text: "The entire application" }
      ],
      correctAnswerId: 1,
      explanation: "A re-render cascades down the tree: React re-runs the render function for the component with updated state and then for all of its children to build a fresh snapshot."
    },
    {
      question: "True or false: A component will re-render simply because one of its props has changed.",
      answers: [
        { id: 0, text: "True" },
        { id: 1, text: "False" }
      ],
      correctAnswerId: 1,
      explanation: "Props changes themselves aren't the trigger—state changes are. What you observe as a prop-driven update is actually the ancestor's state change causing a cascading re-render."
    },
    {
      question: "Why does React re-render components like <Decoration /> even if they don't directly use the updated state?",
      answers: [
        { id: 0, text: "Because React can't assume a component is pure, so it re-renders all descendants to avoid stale UI." },
        { id: 1, text: "Because props have changed on Decoration." },
        { id: 2, text: "Because useEffect fires on every render." },
        { id: 3, text: "Because React always re-mounts components after state changes." }
      ],
      correctAnswerId: 0,
      explanation: "Since React can't know whether a component reads state, refs, or other impure values internally, it opts to re-render all children to keep the UI in sync."
    },
    {
      question: "Which pair of React hooks does the lesson say you need to understand the render cycle before using?",
      answers: [
        { id: 0, text: "useState & useEffect" },
        { id: 1, text: "useMemo & useCallback" },
        { id: 2, text: "useRef & useLayoutEffect" },
        { id: 3, text: "useContext & useReducer" }
      ],
      correctAnswerId: 1,
      explanation: "The lesson introduces useMemo and useCallback as the next step, after mastering how React's render cycle works and why re-renders happen."
    },
    {
      question: "What technique does React use to update the DOM efficiently after a render?",
      answers: [
        { id: 0, text: "It takes two snapshots of the virtual DOM and diffs them to apply minimal changes." },
        { id: 1, text: "It clears and rebuilds the entire DOM subtree on every render." },
        { id: 2, text: "It relies on CSS selectors to update only changed elements." },
        { id: 3, text: "It batches all state updates into one big DOM replace." }
      ],
      correctAnswerId: 0,
      explanation: "React's reconciliation process compares the previous and next virtual DOM trees, then updates only the parts that have actually changed."
    }
  ]
};
