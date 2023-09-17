'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { signIn, signOut, useSession } from "next-auth/react"
import { Menu, Transition } from "@headlessui/react"
import { Button } from "@/components/ui/button"

import { ArrowRightOnRectangleIcon, Cog8ToothIcon } from "@heroicons/react/24/outline"

export default function SignInButton() {
    const { data: session, status } = useSession()

    return (
        <>
        {session ? (
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none">
                        <span className="flex items-center">
                            <Image
                                src={session.user.image}
                                className="rounded-full"
                                width={32}
                                height={32}
                                alt=""
                            />
                            <span className="ml-2">{session.user.name}</span>
                        </span>
                        <ArrowRightOnRectangleIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </div>
                <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href="/protected/client"
                                            className={`${
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                        >
                                            <Cog8ToothIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                            Settings
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="/api/auth/signout?callbackUrl=%2F"
                                        className={`${
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        Sign out
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        ) : (
            <Button
                onClick={() => signIn()}
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none"
            >
                Sign in
            </Button>
        )}        
        </>
    )
}
