"use client"

import Container from "@/app/components/Container"
import { useEffect, useState } from "react"
import { Article } from "../../articleTypes"
import { useParams } from "next/navigation"
import { getArticleById, } from "../../articles"
import Link from "next/link"
import Image from "next/image"

const ArticlePage = () => {
    const [article, setArticle] = useState<Article>()
    const { articleId } = useParams()

    // useEffect(() => {
    //     const findArticle = async () => {
    //         try {
    //             const data = await getArticleById(articleId as string)
    //             setArticle(data)
    //         } catch (error) {
    //             return
    //         }
    //     }
    //     findArticle()
    // }, [articleId])


    return (
        <div>
            {/* {article && article.map((article) => ( */}
            <div>


                <div className="flex flex-row w-full">
                    <div className="w-full sm:w-[40%] max-w-full">
                        <Image
                            alt="Image"
                            src={require("@/../public/StriveIt.webp")}
                            className="w-full h-72 sm:h-[90%] object-cover max-h-[720px]"
                        />
                        <div className="justify-start pl-5 flex md:pr-5 md:justify-end">
                            jose-chiconela
                        </div>
                    </div>
                    <div
                        className="
                            w-full sm:w-[60%] max-w-[5200px]
                            bg-gradient-to-r
                            from-gray-900
                            to-fuchsia-950
                            hidden sm:flex
                            justify-center
                            items-center
                            p-4
                            relative
                        "
                        style={{
                            minHeight: 'calc(100% + 50px)', // Faz com que sempre seja 50px maior que o container da imagem.
                        }}
                    >
                        <h1 className="text-2xl md:text-4xl text-white font-semibold text-center">
                            Creating and managing a company as a first-time founder
                        </h1>
                    </div>
                </div>

                <div className="pt-16">
                    <Container>
                        <div className="flex flex-col gap-10">
                            <h1 className="text-xl md:text-2xl font-bold">
                                Strive for It: Building Your Own Company <text>💀</text>
                            </h1>
                            <div className="flex flex-col gap-4">
                                <div>
                                    {article?.subtitle}
                                </div>
                                <h1 className="text-lg font-semibold ">
                                    Author: Jose Chiconela
                                </h1>
                                {/* <div className="text-lg font-semibold">
                                    Published: 01/04/2025
                                </div> */}
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-neutral-950 text-lg font-bold">
                                    About This Article
                                </p>
                                <p>
                                    This article explores the journey of launching a startup, covering essential phases like idea generation
                                    , MVP creation, and embracing a founder's mindset. It provides actionable insigths for we aspiring entrepreneurs,
                                    <br />
                                    I want to share my opinion with all of you as an aspiring entrepreneur either.
                                </p>
                            </div>

                            {/*Content */}
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-lg font-semibold">
                                        Create a Company <text>💀</text>
                                    </h2>
                                    <div className="" style={{ lineHeight: 1.8 }}>
                                        {`
                                        Many of us, at some point, have a great idea and wonder, "Could this work?" Often, this question leaves us feeling stuck or hesiitant to take the next step. As a first-time
                                        founder, I can confirm this uncertainty is part of the process.
                                        `}
                                        <br /><br />
                                        {`
                                        Creating a company is a journey that requires determination, creativity, and resilience. To navigate it effectively, let's break it down into key stages: the idea, the product,
                                        and the founder's mindset
                                        `}
                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-lg font-semibold">
                                        The Idea <text>💀</text>
                                    </h2>
                                    <div className="" style={{ lineHeight: 1.8 }}>
                                        {`We often hear that starting point of any successful company is identifying a problem and solving it. And yes, this strategy works--many successful founders will attest to it.But
                                        where does this great idea come from?
                                        `}
                                        <br /><br />
                                        {`
                                        Sometimes, inspiration strikes unexpectedly, but rather than waiting for it, you should actively seek out problems to solve. Think about this: the world is full of people with unmet
                                        needs. Your task is to identify these gaps and envision how your product or service can fill them. People are willing to pay for solutions that make their lives easier.
                                        For example: 
                                        `}
                                        <ul className='list-disc font-medium pl-5 flex flex-col gap-4'>
                                            <li className="font-semibold">
                                                {`Airbnb was born when its founders noticed that travelers struggled to find affordable accommodations during large events. They saw an opportunity to connect people seeking 
                                                lodging with homeowners willing to rent out spare rooms. Fun fact: The first Airbnb was created in their own apartment, and even today, CEO Brian Chesky continues to host guests, 
                                                staying true to the company's roots.`}
                                            </li>
                                            <li className="font-semibold">
                                                {`Dropbox solved the problem of transferring files between devices, creating a simple and seamless solution.`}
                                            </li>
                                        </ul>
                                        <br />
                                        {`
                                        And if you find an idea that already exists? That's ok! Many successfull companies began with existing ideas but found ways to differentiate themselves. For example, Facebook entered the
                                        crowded social networking space but succeeded by focusing on exclusivity and user experience. Your goal is to innovate, improve, and stand out.
                                        `}
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                    <div className="flex flex-col gap-3">
                                        <h2 className="text-lg font-semibold pt-4">
                                            The Product
                                        </h2>
                                        <div className="" style={{ lineHeight: 1.8 }}>
                                            {`
                                            So, you've got your idea. Now what? The Next step is to build your product--but don't fall into the trap of perfectionism. Spending too much time crafting the "perfect" solution without real-world
                                            feedback can lead to wasted effort.

                                            This is where the concept of the MVP (Minumum Viable Product) comes in. It applies not only to technology but to virtually any industry. Your MVP should:
                                            `}
                                            <div />
                                            <ul className='list-disc font-medium pl-5 flex flex-col gap-1'>
                                                <li className="font-semibold">
                                                    {`Fulfill the basic functional requirements`}
                                                </li>
                                                <li className="font-semibold">
                                                    {`Be launched as quicky as possible to test the waters.`}
                                                </li>
                                            </ul>
                                            <div />
                                            Take this approach:
                                            <ul className='list-disc font-medium pl-5 flex flex-col gap-1'>
                                                <li className="">
                                                    <a className="font-semibold">Launch quickly:</a> {` An early release helps you gauge wether people will adopt your solution.`}
                                                </li>
                                                <li className="font-semibold">
                                                    <a className="font-semibold">Engage your users:</a>{` Seek their feedback and improve iteratively based on their needs.`}
                                                </li>
                                            </ul><br />

                                            {
                                                `For instance, Instagram launched as a simple photo-sharing app, but user feedback shaped features like filters and Stories. When you release an MVP, you're not only proving the concept but also
                                                 building a relationship with early adopters who can guide your product's evolution`
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-3">
                                        <hr />
                                        <h2 className="text-lg font-semibold">
                                            Founder Mindset and Marketing
                                        </h2>
                                        <div className="" style={{ lineHeight: 1.8 }}>
                                            As a founder, success ultimately depends on you. Developing the right mindset is crucial: <text className="italic underline">you'll have to do what you can and learn what you can't to make your vision a reality.</text>
                                            <br /><br />
                                            <div className="font-semibold">Learning New Skills</div>
                                            {
                                                `A tech founder without sales skills may feel out theirdepth trying to attract customers. However, cultivating a growth mindset means being willing to step out of your comfort zone. Whether
                                                it's mastering sales, improving communication, or diving into marketing, you must embrace the challenges of the journey.`
                                            } <br /><br />
                                            <h2 className="font-semibold">Marketing on a Budget</h2>
                                            {`Startups often have limited resources, so focus on strategies that provides maximum reach for minimal cost:`}
                                            <br />
                                            <ul className='list-disc font-medium pl-5 flex flex-col gap-1'>
                                                <li className="">
                                                    <a className="font-semibold">Leverage social media:</a>{` Leverage social media: Build your presence on platforms like Instagram or TikTok, where authenticity and creativity trump expesinve campaigns.`}
                                                </li>
                                                <hr />
                                                <li className="">
                                                    <a className="font-semibold">Engage with communities:</a> {` Participate in online forums and groups where your target audience hangs out.`}
                                                </li>
                                                <hr />
                                                <li className="">
                                                    <a className="font-semibold">Build trust:</a>{` Create blogs, videos, or bihind-the-scenes content that hightlights your journey and connects eith potential users.`}
                                                </li>
                                            </ul>
                                            <br />
                                            These tactics are especially powerful for foundes working solo or small teams.
                                        </div>
                                    </div>
                                </div>

                                {/* <div>
                                    <div className="flex flex-col gap-3">
                                        <hr />
                                        <h2 className="text-lg font-semibold">
                                            Marketing on a Budget
                                        </h2>
                                        <div className="" style={{ lineHeight: 1.8 }}>
                                           
                                        </div>
                                    </div>
                                </div> */}

                                <div>
                                    <div className="flex flex-col gap-3">
                                        <hr />
                                        <h2 className="text-lg font-semibold">
                                            Collaboration and Team Building
                                        </h2>
                                        <div className="" style={{ lineHeight: 1.8 }}>
                                            While passion drives success, collaboration accelerates it. If your strengths lie in product development, find someone whose expertise complements yours--like marketing or finance. Many
                                            success startups, such as Google and Apple, were build by co-founders with disting but complementary skill sets. <br />
                                            <div>
                                                <a className="font-semibold">Practical Tip:</a> Attend local startup meetups, pitch events, or connect on platforms like LinkedIn to find potential collaborators. Shared vision and complementary skills are often the secret
                                                ingredients for long-term success
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-3">
                                        <hr />
                                        <p className="text-lg font-semibold">
                                            Overcoming Challenges
                                        </p>
                                        <div className="" style={{ lineHeight: 1.8 }}>
                                            {`Launching a company isn't all smooth sailing. There are challenges to handle, like:`}
                                            <br />
                                            <ul className='list-disc font-medium pl-5 flex flex-col gap-1'>
                                                <li className="">
                                                    <a className="font-semibold">Imposter syndrome:</a>{` I heard a lot about  this, but I didn't know how to deal with. Even experienced founders faced doubts early on. Action dispels fear, so it's way betterfocus on progress over perfection.`}
                                                </li>
                                                <hr />
                                                <li className="">
                                                    <a className="font-semibold">Criticism of the MVP:</a>{` Criticism of the MVP: Feedback is a tool for growth. Rather than defending your product, listin to users and adapt accordingly.`}
                                                </li>
                                                <hr />
                                                <li className="">
                                                    <a className="font-semibold">Slow traction:</a>{` Patience and persistence are key. Reevaluate your marketing strategy and find new ways to reach potential customers.`}
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-3">
                                        <hr />
                                        <p className="text-lg font-semibold">
                                            Customers Feedback and Interation
                                        </p>
                                        <div className="" style={{ lineHeight: 1.8 }}>
                                            {`listening to your users can make or break your product, I presume😅. Make it easy for customer to share feedback via survey, live chats, or even direct interviews.
                                            When your product based on what people need, you're not only improving--you're building trust.
                                            `}
                                            <a className="underline">Example:</a> Slack, now leader in workplace communication, started as a gaming company but pivoted to messaging after realizing the potential from internal user feedback.
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-3">
                                        <hr />
                                        <p className="text-lg font-semibold">
                                            Funding and Financial Strategy
                                        </p>
                                        <div className="" style={{ lineHeight: 1.8 }}>
                                            {`If you make all the way to this part well done my friend, now it's time to grow your startup, now it's about where to find money to keep you alive, it's about have financial strategies.
                                             Securing resources to build your product can be intimidating. The only thing I can do it's recommend you explore options like:
                                            `}
                                            <br />
                                            <ul className='list-disc font-medium pl-5 flex flex-col gap-1'>
                                                <li className="">
                                                    <a className="font-semibold">Bootstrapping:</a>{` Fund the startup from your own savings.`}
                                                </li>
                                                <li className="">
                                                    <a className="font-semibold">Crowdfunding:</a>{` Platforms like Kickstarter validate demand while raising capital.`}
                                                </li>
                                                <li className="">
                                                    <a className="font-semibold">Grants or competitions:</a>{` Research local programs supporting entrepreneurs..`}
                                                </li>
                                                <li className="">
                                                    <a className="font-semibold">Angel investors:</a>{` Individuals who professionally invest their own money into young companies.`}
                                                </li>

                                            </ul>
                                            <br />
                                            Keeping your budget lean early on ensures you stay focused on solving the problem, not scaling too quickly.`,

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-3">
                                        <hr />
                                        <p className="text-lg font-semibold">
                                            Conclusion: Strive for It
                                        </p>
                                        <div className="" style={{ lineHeight: 1.8 }}>
                                            {`Building a company isn't easy, but it's one of the most rewarding journeys you can undertake. Remember:`}
                                            <br />
                                            <ul className='list-disc font-medium pl-5 flex flex-col gap-1'>
                                                <li className="">
                                                    <a className="font-semibold">Idea:</a>{` Look for ideas by focusing on problems waiting to be solved, they don't need to be unique.`}
                                                </li>
                                                <li className="">
                                                    <a className="font-semibold">Build your MVP quicky:</a>{` Platforms like Kickstarter validate demand while raising capital.`}
                                                </li>
                                                <li className="">
                                                    <a className="font-semibold">Cultivate a founder mindset:</a>{` Be resourceful, adaptable, and dertermined. uhh!!`}
                                                </li>
                                            </ul>
                                            <br />
                                            {`
                                            so, what's the first step? Start now. List frustration you've experienced recently. Explore how you could solve one. Every great company starts 
                                            with a simple idea and determination to strive for it
                                            `}
                                            <br /><br />
                                            <p>
                                                <a className="font-semibold">Note:</a>{` This's my opinion as a first-time founder, I'm share with you what I have learn in my founder journey, and I hope to share more that expect to learn.
                                                Good job and a nice journey to all of us`}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Container>
                    <footer className="w-full h-16 bg-white z-40 pt-10">
                        <div className="px-4 sm:px-2 md:px-10 xl:px-20 absolute w-full border-t-4 bg-neutral-200">
                            <Container>
                                <div className="flex justify-between items-center pt-5">
                                    <div className="flex flex-row gap-2">
                                        <p className="text-neutral-500">
                                            Check this {`-->`}
                                        </p>
                                        <Link href={"http://fireus.vercel.app"} className="font-semibold hover:underline">
                                            fireus.vercel.app
                                        </Link>
                                    </div>
                                    <div className="socials flex flex-row gap-5">
                                        <Link href={"https://github.com/OnixChiconela"} className="flex flex-col gap-2 items-center">
                                            <Image src={"/github.svg"} width={30} height={30} alt="" />
                                            <text className="text-black font-semibold">Github</text>
                                        </Link>
                                        <Link href={"https://www.linkedin.com/in/jose-chiconela-507941286/"} className="flex flex-col gap-2 items-center">
                                            <Image src={"/LinkedIn_icon.svg.webp"} width={30} height={30} alt="" />
                                            <text className="text-black font-semibold">Linkedin</text>
                                        </Link>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </footer>
                </div>
            </div>
            {/* ))} */}
        </div>
    )
}

export default ArticlePage