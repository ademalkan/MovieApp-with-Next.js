import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './styles.module.css'

export default  function MoviesSection( {title,movies}) {
  return (
    <div className={styles.moviesSection}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.movies}>
            {movies.map((movie) => (
                <div className={styles.movie} key={movie.id}>
                    <Link href={`/movie/${movie.id}`}>
                        <Image
                        fill
                        unoptimized
                        alt={movie.alt}
                        src={`https:image.tmdb.org/t/p/original${movie.poster_path}`}
                        />
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}
