import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import NavBar from "../components/NavBar";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]


export function Header() {
    const text = "“AMPEI siempre mirando al futuro”";
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <div className="backgorund1 bg-center bg-no-repeat bg-cover h-screen relative">
                <div className="h-full bg-black opacity-50 absolute inset-0 z-10"/>
                <NavBar/>
                    <div className="relative isolate px-6 pt-14 lg:px-8 z-20">
                        <div className="mx-auto py-32 sm:py-48 lg:py-56">
                            <div className="text-center">
                                <h1 className="animate-pulse text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                    {text}
                                </h1>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}