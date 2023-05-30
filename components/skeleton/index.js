import React from 'react'
import styles from './style.module.css'
export default function Skeleton({width,height}) {
  return (
    <div className={styles.skeleton} style={{width,height}}></div>
  )
}
