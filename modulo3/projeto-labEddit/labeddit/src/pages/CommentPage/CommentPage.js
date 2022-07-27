import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams} from 'react-router-dom'
import useRequestdata from '../../hooks/useRequestdata'
import { BASE_URL } from '../../constants/urls'

const CommentPage = () => {
  useProtectedPage()
  const params = useParams()

  const comments = useRequestdata([], `${BASE_URL}/posts/${params.id}/comments`)

  const showComments = comments.map((comment) => {
    return(
      <div key = {comment.id}>
         {comment.username}
         {comment.body}
      </div>
     
    )
  })

  return (
    <div>
      {showComments}
    </div>
  )
}

export default CommentPage