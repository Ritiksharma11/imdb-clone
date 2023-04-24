import Image from "next/image"
import Link from "next/link"
import { TiThumbsUp } from 'react-icons/ti'

export const Card = ({ result }) => {
    return (
        <div className="p-2 border shadow-slate-300 shadow-md hover:shadow-lg cursor-pointer m-3 rounded-md ">
            <Link href={`/movie/${result.id}`} >
                <Image className="rounded-t-md " src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path
                    }`}
                    width={400}
                    height={300}
                    placeholder="blur"
                    blurDataURL="/loading.svg"
                    alt="Image is not available"
                    style={
                        {
                            maxWidth: "100%",
                            height: "auto",
                        }
                    }
                ></Image>
                <h1 className="p-1 font-bold ">{result.title || result.name}</h1>
                <div className="flex justify-between items-center p-1 ">
                    <p>{result.release_date || result.first_air_date}</p>
                    <p className="flex justify-center items-center "><TiThumbsUp />{result.vote_count}</p>
                </div>
            </Link>
        </div>
    )
}
