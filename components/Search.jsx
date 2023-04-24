'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    function handleSearch(e) {
        e.preventDefault();
        if (!search) return;
        router.push(`search/${search}`);
    }
    return (
        <form onSubmit={handleSearch} className='flex border-b-2 '>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)} type="text"
                placeholder='Search movies...'
                className='w-full h-10 outline-none px-2 md:px-20 '
            />
            <button disabled={!search} type="submit" className='px-2 md:px-20'>Search</button>
        </form>
    )
}

export default Search