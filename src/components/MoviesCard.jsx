import React from 'react'

export const MoviesCard = ({ movie, generos }) => {
    return (
        <>
        <div>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    alt={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="h-full w-full object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={movie.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {movie.title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{movie.release_date}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{generos}</p>
            </div>
        </div>
        </>
    )
}
