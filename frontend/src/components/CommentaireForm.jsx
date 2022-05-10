import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../features/posts/postSlice'
import './Commentaire.css'

function CommentaireForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createPost({ text }))
    setText('')
  }

  return (
    
      <form class="form-block" onSubmit={onSubmit}>
            <div class="row">
                <div class="col-12">									
                    <div class="form-group">
                        <textarea class="form-input" required placeholder="Votre commentaire"
                        value = {text}
                        onChange={e => setText(e.target.value)}
                        ></textarea>
                        
                    </div>
                </div>
                <div class="col-4">
                    <a class="btn btn-primary text-right">
                       <input type="submit" class="butt" value="Commenter"/> </a>
                </div>
            </div>
        </form>
  )
}

export default CommentaireForm
