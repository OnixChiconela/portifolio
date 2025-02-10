"use client"
import { useRouter } from "next/navigation"
import OpinionInput from "./inputs/OpinionInput"
import { articles, getArticles } from "../articles/articles"
import { useEffect, useState } from "react"
import { Article } from "../articles/articleTypes"

const Opinions = () => {
    const router = useRouter()
    const [articles, setArticles] = useState<Article[]>([])

    // useEffect(() => {
    //     const findArticle = async () => {
    //         try {
    //             const data = await getArticles()
    //             console.log(articles)
    //             setArticles(data)
    //         } catch (error) {
    //             return
    //         }
    //     }
    //     findArticle()
    // }, [])


    return (
        <div>
            <h2 className='
            text-3xl sm:text-4xl 
            lg:text-5xl font-bold 
            mb-8 text-transparent 
            bg-clip-text bg-gradient-to-br 
            from-[#f0f0f0] via-fuchsia-950
            to-white h-16'>
                What I have wrote
            </h2>
            <div className="flex flex-col gap-4">
                {/* {articles && articles.map((article) => ( */}
                {/* // <div key={article.id} className="pb-4">  */}
                <OpinionInput
                    title={"Strive For It"}
                    description={"Creating and managing a company as a first-time founder"}
                    onClick={() => router.push(`articles/pages/striveForIt`)}
                />
                {/* <OpinionInput
                    title={"First Time and Solo Founder"}
                    description={"Creating and managing a company as a first-time founder"}
                    onClick={() => router.push(`articles/pages/striveForIt`)}
                /> */}
                {/* //  </div> */}
                {/* ))} */}
            </div>
        </div>
    )
}

export default Opinions