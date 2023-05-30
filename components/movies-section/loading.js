import React from 'react'
import styles from './styles.module.css'
import Skeleton from '../skeleton'
export default function MoviesSectionLoading() {
  return (
    <div className={styles.moviesSection}>
        <Skeleton width={128} height={36} />
        {
            Array(7)
            .fill(null)
            .map((_, index) => (
                <Skeleton key={index}/>
            ))
        }
    </div>
  )
}
