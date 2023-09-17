'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { stats } from "@/data/stats"
import Image from "next/image"

const ClientProtectedPage = () => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callbackUrl=/protected/client")
        }
    })

    return (
        <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
            <div className="sm:hidden lg:block lg:max-w-xl">
                <Image 
                    src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                    className="rounded-lg" 
                    alt="" 
                    width={800}
                    height={600} />
            </div>
            <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                <div className="max-w-2xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        We do our best to make customers always happy
                    </h3>
                    <p>Welcome, {session?.user?.name}</p>
                </div>
                <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                    <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="">
                                    <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ClientProtectedPage