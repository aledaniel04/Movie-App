import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { MoviesCard } from './MoviesCard'
import { FiltrarPelicula } from './FiltrarPelicula'
import { Icon } from '@iconify/react';



export const PopularMovies = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(500)
  const [filter, setFilter] = useState('')
  const [nameGenre, setNameGenre] = useState('')
  const [resetGenre, setResetGenre] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [resetDate, setResetDate] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const apiKey = 'f726666e6db5f180da40897e494897e0'
  const getMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&with_genres=${filter}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`)
      const data = await response.json()
      // const {results} = data;
      // const [{original_title}] = results
      // console.log(original_title)
      setMovies(data.results)
      //console.log(movies)
    } catch (error) {
      console.log('algo fallo' + error)
    }
  }

  useEffect(() => {
    getMovies()
  }, [page, filter, startDate, endDate])

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage(page + 1)
      window.scrollTo({
        top: 0,
      });
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
      window.scrollTo({
        top: 0,
      });
    }
  }

  const selectGenre = (value, name) => {
    setFilter(value)
    setNameGenre(name)
    setResetGenre(true)
  }

  const recetiar = () => {
    setFilter('')
    setNameGenre('')
    setResetGenre(false)
  }

  const selectDate = (start, end) => {
    setStartDate(start)
    setEndDate(end)
    setResetDate(true)
  }

  const recetiarDate = () => {
    setStartDate('')
    setEndDate('')
    setResetDate(false)
  }

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <FiltrarPelicula genre={selectGenre} date={selectDate} valor={searchTerm} actualizador={setSearchTerm}/>
        <div className='flex gap-4'>
          <div>{nameGenre}
            {
              resetGenre && (<button onClick={() => recetiar()}><Icon icon="line-md:close" /></button>)
            }
          </div>
          <div>{startDate}
            {
              resetDate && (<button onClick={() => recetiarDate()}><Icon icon="line-md:close" /></button>)
            }
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {filteredMovies.map(movie => (
            <div key={movie.id} className="group relative">
              <MoviesCard movie={movie} generos={nameGenre} />
            </div>
        ))}
        </div>
        <div className='flex justify-between mt-4 items-center'>
          <div>
            {
              page > 1 && (<button className='border py-2 px-4 bg-indigo-500 font-bold' onClick={() => { handlePreviousPage() }}>Previous</button>)
            }
          </div>
          <div>
            <span> page: {page} de {totalPage} </span>
          </div>
          <div>
            <button className='border py-2 px-4 bg-indigo-500 font-bold' onClick={() => { handleNextPage() }}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
