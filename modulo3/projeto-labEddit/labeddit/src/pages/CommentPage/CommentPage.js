import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const CommentPage = () => {
  useProtectedPage()
  return (
    <div>CommentPage</div>
  )
}

export default CommentPage