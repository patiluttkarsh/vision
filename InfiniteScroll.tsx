'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const InfiniteScroll = ({ initialItems, fetchMore, children }) => {
  const [items, setItems] = useState(initialItems)
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView])

  const loadMore = async () => {
    const nextPage = page + 1
    const newItems = await fetchMore(nextPage, 6)
    if (newItems.length > 0) {
      setItems([...items, ...newItems])
      setPage(nextPage)
    }
  }

  return (
    <>
      {children(items)}
      <div ref={ref} className="h-10" />
    </>
  )
}

export default InfiniteScroll

