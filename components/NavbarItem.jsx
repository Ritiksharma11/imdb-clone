'use client'
import Link from "next/link"
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({ title, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
    return (
        <div className="dark:hover:text-yellow-300 hover:text-yellow-500 duration-200">
            <Link href={`/?genre=${param}`} >{title}</Link>
        </div>
    )
}

export default NavbarItem