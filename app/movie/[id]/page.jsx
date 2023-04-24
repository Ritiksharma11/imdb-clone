import Image from 'next/image'
import { TiThumbsUp } from 'react-icons/ti'

async function getMovie(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    return await res.json();
}

const MoviePage = async ({ params }) => {
    const movieId = params.id;
    const movie = await getMovie(movieId);
    return (
        <div className='flex flex-col items-center max-w-6xl mx-auto p-5 md:flex-row md:gap-8 py-5 '>
            <Image className="rounded-md pb-4 " src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path
                }`}
                width={400}
                height={300}
                placeholder="blur"
                blurDataURL="/loading.svg"
                alt="Image is not available"
            ></Image>
            <div className='flex flex-col '>
                <h1 className='text-lg font-bold'>{movie.title || movie.name}</h1>
                <p className='flex gap-4 text-justify'>
                    <span className='font-semibold text-lg '>Overview:</span>
                    {movie.overview}
                </p>
                <p className='flex gap-2 items-center '> <span className='font-semibold text-lg '>Release Date:</span>
                    {movie.release_date || movie.first_air_date}</p>
                <p className="flex items-center gap-2 ">
                    <span className='text-lg font-semibold '>Rating:</span>
                    <TiThumbsUp />{movie.vote_count}
                </p>
            </div>
        </div>
    )
}

export default MoviePage