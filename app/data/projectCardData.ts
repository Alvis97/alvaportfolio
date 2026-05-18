export type Project = {
    title: string
    tech: string[]
    description: string
    image: string
    category: "web3" | "web2"
    link: string 
}

export const projects: Project[] = [
    {
         title: "Wallet Dashboard",
        tech: ["React", "Next", "TypeScript", "Tailwind", "@Solana-Extensions"],
        description: "A wallet dashboard to view Sol, tokens, previous transactions and NFTs",
        image: "/landingpage.png",
        category: "web3",
        link: "https://..."
    },
        {
         title: "Dex swap",
        tech: ["React", "Next", "TypeScript", "Tailwind", "@Solana-Extensions"],
        description: "A web aplication to swap SOL and USDC",
        image: "/Swap.png",
        category: "web3",
        link: "https://..."
    },
           {
         title: "Stick to it",
        tech: ["React", "Next", "Node"],
        description: "A web aplication for teams or individuals to structure ideas and projects",
        image: "/walletdashboard.png",
        category: "web2",
        link: "https://..."
    }

]