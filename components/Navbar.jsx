import Link from "next/link"
import NavbarItem from "./NavbarItem"

const Navbar = () => {
    return (
        <div className="flex justify-center gap-8 dark:bg-gray-600 bg-gray-200 text-lg font-semibold  ">
            <NavbarItem title="Trending" param="fetchTrending" />
            <NavbarItem title="TopRated" param="fetchTopRated" />
        </div>
    )
}

export default Navbar