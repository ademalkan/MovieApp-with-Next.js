import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp; 
      <Link href={"https://www.linkedin.com/in/adem-alkan-47a207211/"} target={"_blank"}>Adem ALKAN</Link>
    </footer>
  )
}
