import Results from '@/components/Results'

const SearchPage = async ({ params }) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    const data = await res.json();
    const results = data.results;
    return (
        <div className='flex flex-col items-center max-w-6xl mx-auto p-5'>
            {
                results && results.length === 0 && (
                    <h1 className='text-center'>No results found</h1>
                )
            }
            {
                results && <Results results={results} />
            }
        </div>
    )
}

export default SearchPage
