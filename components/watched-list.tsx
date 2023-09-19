'use client'

import React from 'react'
import Sort from '@/components/ui/sort'
import { useSession } from "next-auth/react"

export default function WatchedShelf() {
    const { data: session } = useSession()

    if (!session || !session.user) {
        return null;
    }

    return (
        <section className=''>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className='flex justify-between pt-8'>
                    <h2>{session.user.name}&apos;s Watched Shelf</h2>
                    <Sort />
                </div>
                {/* Empty State */}
                <div className="flex flex-col items-center justify-center bg-slate-400 p-8 rounded-md">
                    +
                </div>

            </div>
        </section>
    )
}