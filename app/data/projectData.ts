export type Project = {
   title: string
   slug: string
   category: "web3" | "web2"
   subtitle: string
   image: string[]
   overview: string
   features: string[]
   video: string
   challenges: string
   techStack: string[]
   linkWebsite: string
   linkGit: string
}

export const projects: Project[] = [
    {
        title: "Wallet Dashboard",
        slug: "wallet-dashboard",
        category: "web3",
        subtitle: "A Solana dApp for viewing your wallet in real time",
        image: ["/landingpage.png", "image2", "image3"],
        overview: "A full-stack Solana dashboard that connects directly to your wallet and pulls live on-chain data. Built to give you a clean, at-a-glance view of everything in your wallet — no noise, just the information you actually need.",
        features: ["View your SOL balance in real time", 
                    "Track your token holdings with live 24h price changes",
                    "Browse your full NFT collection",
                    "See your latest transactions with dates and amounts"],
        video: "",
        challenges: "The biggest challenge was working with multiple Solana APIs simultaneously — fetching transaction history, token metadata and live price data each required different endpoints and data structures. Learning to handle async API calls, normalize the responses and display them cleanly was the core technical problem this project solved.",
        techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "@Solana/web3.js", "Solana Token Extensions"],
        linkWebsite: "https://my-wallet-dashboard-mu.vercel.app/",
        linkGit: "https://github.com/Alvis97/MyWalletDashboard"
    },
      {
        title: "Stick to it",
        slug: "stickToIt",
        category: "web2",
        subtitle: "A Solana dApp for viewing your wallet in real time",
        image: ["/landingpage.png", "image2", "image3"],
        overview: "A full-stack Solana dashboard that connects directly to your wallet and pulls live on-chain data. Built to give you a clean, at-a-glance view of everything in your wallet — no noise, just the information you actually need.",
        features: ["View your SOL balance in real time", 
                    "Track your token holdings with live 24h price changes",
                    "Browse your full NFT collection",
                    "See your latest transactions with dates and amounts"],
        video: "",
        challenges: "The biggest challenge was working with multiple Solana APIs simultaneously — fetching transaction history, token metadata and live price data each required different endpoints and data structures. Learning to handle async API calls, normalize the responses and display them cleanly was the core technical problem this project solved.",
        techStack: ["React", "Next.js", "TypeScript", "CSS & Sass"],
        linkWebsite: "https://my-wallet-dashboard-mu.vercel.app/",
        linkGit: "https://github.com/Alvis97/MyWalletDashboard"
    },
]

