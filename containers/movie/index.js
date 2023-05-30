import FeaturedMovie from '@/components/featured-movie'
import React from 'react'

export default function MovieContainer({movie}) {
  return <FeaturedMovie movie={movie} isCompact={false}/>
}
