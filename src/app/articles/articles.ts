import { Article } from "./articleTypes";

export const articles = [
    {
        id: "strive_f0r_1t",
        title: "Strive for It: Building Your Own Company",
        subtitle: "Creating and managing a company as a first-time founder (like me)",
        author: "Jose Chiconela",
        brief: `This article explores the journey of launching a startup, covering essential phases like idea generation
        , MVP creation, and embracing a founder's mindset. It provides actionable insigths for we aspiring entrepreneurs`,
        date: new Date(),

        theme1: "Create a Company",
        theme1Content: `Many of us, at some point, have a great idea and wonder, "Could this work?" Often, this question leaves us feeling stuck or hesiitant to take the next step. As a first-time
        founder, I can confirm this uncertainty is part of the process.

        Creating a company is a journey that requires determination, creativity, and resilience. To navigate it effectively, let's break it down into key stages: the idea, the product,
        and the founder's mindset.`,

        theme2: "The Idea",
        theme2Content: `We often hear that starting point of any successful company is identifying a problem and solving it. And yes, this strategy works--many successful founders will attest to it.But
        where does this great idea come from?

        Sometimes, inspiration strikes unexpectedly, but rather than waiting for it, you should actively seek out problems to solve. Think about this: the world is full of people with unmet
        needs. Your task is to identify these gaps and envision how your product or service can fill them. People are willing to pay for solutions that make their lives easier.
        For example: 
        + Airbnb started when the founders saw travelers struggling to find affordable accommodations during large events. They connected people needing lodging with homeowners willing to rent
        out spare rooms. And curiosity fuct they make the first Airbnb, and the CEO still host to people out there

        + Dropbox solved the problem of transferring files between devices, creating a simple and seamless solution.

        And if you find an idea that already exists? That's ok! Many successfull companies began with existing ideas but found ways to differentiate themselves. For example, Facebook entered the
        crowded social networking space but succeeded by focusing on exclusivity and user experience. Your goal is to innovate, improve, and stand out.

        `,

        theme3: "The Product",
        theme3Content: `So, you've got your idea. Now what?The Next step os to build your product--but don't fall into the trap of perfectionism. Spending too much time crafting the "perfect" solution without real-world
        feedback can lead to wasted effort.

        This is where the concept of the MVP (Minumum Viable Product) comes in. It applies not only to technology but to virtually any industry. Your MVP should:

        + Fulfill the basic functional requirements

        + Be launched as quicky as possible to test the waters.

        Take this approach:

        + Launch quickly: An early release helps you gauge wether people will adopt your solution.

        + Engage your users: Seek their feedback and improve iteratively based on their needs.

        For instance, Instagram launched as a simple photo-sharing app, but user feedback shaped features like filters and Stories. When you release an MVP, you're not only proving the concept but also
        building a relationship with early adopters who can guide your product's evolution
        `,
        theme4: "Founder Mindset and Marketing",
        theme4Content: `
        As a founder, success ultimately depends on you. Developing the right mindset is crucial: you'll have to do what you can--and learn what you can't--to make your vision a reality

        Learning New Skills

        A tech founder without sales skills may feel out theirdepth trying to attract customers. However, cultivating a growth mindset means being willing to step out of your comfort zone. Whether
        it's mastering sales, improving communication, or diving into marketing, you must embrace the challenges of the journey.

        Marketing on a Budget

        Startups often have limited resources, so focus on strategies that provides maximum reach for minimal cost:

        + Leverage social media: Build your presence on platforms like Instagram or TikTok, where authenticity and creativity trump expesinve campaigns.

        + Engage with communities: Participate in online forums and groups where your target audience hangsout.

        + Build trust: Create blogs, videos, or bihind-the-scenes content that hightlights your journey and connects eith potential users.

        These tactics are especially powerful for foundes working solo or small teams.
        `,
        theme5: "Collaboration and Team Building",
        theme5Content: `
        While passion drives success, collaboration accelerates it. If your strengths lie in product development, find someone whose expertise complements yours--like marketing or finance. Many
        success startups, such as Google and Apple, were build by co-founders with disting but complementary skill sets.

        Practical Tip: Attend local startup meetups, pitch events, or connect on platforms like LinkedIn to find potential collaborators. Shared vision and complementary skills are often the secret
        ingredients for long-term success`,
        theme6: "Overcoming Challenges",
        theme6Content: `Launching a company isn't all smootg sailing. There are challenges to handle, like:

        + Imposter syndrome: Even experienced founders faced doubts early on. Action dispels fear, so it's way betterfocus on progress over perfection.

        + Criticism of the MVP: Feedback is a tool for growth. Rather than defending your product, listin to users and adapt accordingly.

        + Slow traction: Patience and persistence are key. Reevaluate your marketing strategy and find new ways to reach potential customers
        `,
        theme7: "Customer Feedback and Iteration ",
        theme7Content: `Isso pode ser meio especulativo findo de mim, but listening to your users can make or break your product. Make it easy for customer to share feedback via survey, live chats, or even direct interviews.
        When your product based on what people need, you're not only improving--you're building trust.

        Example: Slack, now leader in workplace communication, started as a gaming company but pivoted to messaging after realizing the potential from internal user feedback.

        Funding and Financial Strategiy

        Securing resources to build your product can be intimidating. Explore options like:

        + Bootstrapping: Fund the startup from your own savings.

        + Crowdfunding: Platforms like Kickstarter validate demand while raising capital.

        + Grants or competitions: Reasearch local pprograms supporting entrepreneurs
        `,
        theme8: "Funding and Financial Strategy",
        theme8Content: `Securing resources to build your product can be intimidating. Explore options like:

        Bootstrapping: Fund the startup from your own savings.

        Crowdfunding: Platforms like Kickstarter validate demand while raising capital.

        Grants or competitions: Research local programs supporting entrepreneurs.

        Keeping your budget lean early on ensures you stay focused on solving the problem, not scaling too quickly.`,
        theme9: "",
        theme9Content: "",
        theme10: "",
        theme10Content: "",
    },
    {
        id: "strive_f0",
        title: "Strive for It: Building Your Own Company",
        subtitle: "Creating and managing a company as a firs-time founder (like me)",
        author: "Jose Chiconela",
        date: new Date(),

        theme1: "Create a Company",
        theme1Content: `Many of us, at some point, have a great idea and wonder, "Could this work?" Often, this question leaves us feeling stuck or hesiitant to take the next step. As a first-time
        founder, I can confirm this uncertainty is part of the process.

        Creating a company is a journey that requires determination, creativity, and resilience. To navigate it effectively, let's break it down into key stages: the idea, the product,
        and the founder's mindset.`,

        theme2: "",
        theme2Content: "",

        theme3: "",
        theme3Content: "",
        theme4: "",
        theme4Content: "",
        theme5: "",
        theme5Content: "",
        theme6: "",
        theme6Content: "",
        theme7: "",
        theme7Content: "",
        theme8: "",
        theme8Content: "",
        theme9: "",
        theme9Content: "",
        theme10: "",
        theme10Content: "",
    }
]

export const getArticles = async () => {
    return articles
}

export const getArticleById = async (id: string) => {
    const data = await articles.find((article) => article.id == id)
    return data
}