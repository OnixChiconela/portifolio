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

    return (
        <div>
            {/* {article && article.map((article) => ( */}
            <div>
                <div className="flex flex-row w-full ">
                    <div className="w-[40%]">
                        <div className="h-[90%] bg-red-500">
                            image
                        </div>
                        <div className="justify-end flex md:pr-5">
                            Image credit
                        </div>
                    </div>
                    <div className="
                        h-96 w-[60%]
                        bg-gradient-to-r
                        from-gray-900
                        to-fuchsia-950
                        flex justify-center
                        items-center
                        p-4
                  "
                    >
                        <p className="text-2xl md:text-4xl text-white font-semibold">
                            {article?.subtitle}
                        </p>
                    </div>
                </div>

                <div className="pt-16">
                    <Container>
                        <div className="flex flex-col gap-10">
                            <p className="text-xl md:text-2xl font-bold">
                                {article?.title}
                            </p>
                            <div className="flex flex-col gap-4">
                                <div>
                                    {article?.subtitle}
                                </div>
                                <div className="text-lg font-semibold">
                                    Author: {article?.author}
                                </div>
                                <div className="text-lg font-semibold">
                                    {article?.date?.toDateString()}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-neutral-500 text-lg">
                                    About This Article
                                </p>
                                <p>
                                    {article?.brief}
                                </p>
                            </div>

                            {/*Content */}
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg font-semibold">
                                        {article?.theme1}
                                    </p>
                                    <div className="" style={{ lineHeight: 1.8 }}>
                                        {article?.theme1Content}
                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg font-semibold">
                                        {article?.theme2}
                                    </p>
                                    <div className="" style={{ lineHeight: 1.8 }}>
                                        {article?.theme2Content}
                                    </div>
                                </div>
                                {article?.theme3 ? (
                                    <div>
                                        <hr />
                                        <div className="flex flex-col gap-3">
                                            <p className="text-lg font-semibold">
                                                {article?.theme3}
                                            </p>
                                            <div className="" style={{ lineHeight: 1.8 }}>
                                                {article?.theme3Content}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div />
                                )}
                                {article?.theme4 ? (
                                    <div>
                                        <div className="flex flex-col gap-3">
                                            <hr />
                                            <p className="text-lg font-semibold">
                                                {article?.theme4}
                                            </p>
                                            <div className="" style={{ lineHeight: 1.8 }}>
                                                {article?.theme4Content}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div />
                                )}
                                {article?.theme5 ? (
                                    <div>
                                        <div className="flex flex-col gap-3">
                                            <hr />
                                            <p className="text-lg font-semibold">
                                                {article?.theme5}
                                            </p>
                                            <div className="" style={{ lineHeight: 1.8 }}>
                                                {article?.theme5Content}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div />
                                )}
                                {article?.theme6 ? (
                                    <div>
                                        <div className="flex flex-col gap-3">
                                            <hr />
                                            <p className="text-lg font-semibold">
                                                {article?.theme6}
                                            </p>
                                            <div className="" style={{ lineHeight: 1.8 }}>
                                                {article?.theme6Content}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div />
                                )}
                                {article?.theme7 ? (
                                    <div>
                                        <div className="flex flex-col gap-3">
                                            <hr />
                                            <p className="text-lg font-semibold">
                                                {article?.theme7}
                                            </p>
                                            <div className="" style={{ lineHeight: 1.8 }}>
                                                {article?.theme7Content}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div />
                                )}
                                {article?.theme8 ? (
                                    <div>
                                        <div className="flex flex-col gap-3">
                                            <hr />
                                            <p className="text-lg font-semibold">
                                                {article?.theme8}
                                            </p>
                                            <div className="" style={{ lineHeight: 1.8 }}>
                                                {article?.theme8Content}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div />
                                )}
                            </div>
                        </div>
                    </Container>
                    <footer className="w-full h-16 bg-white z-40 pt-10">
                        <div className="px-4 sm:px-2 md:px-10 xl:px-20 absolute w-full border-t-4 bg-white">
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
                                            <Image src={"/github.svg"} width={40} height={40} alt="" />
                                            <text className="text-black font-semibold">Github</text>
                                        </Link>
                                        <Link href={"https://www.linkedin.com/in/jose-chiconela-507941286/"} className="flex flex-col gap-2 items-center">
                                            <Image src={"/LinkedIn_icon.svg.webp"} width={40} height={40} alt="" />
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