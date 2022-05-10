import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import './Commentaire.css'

function CommentaireItem({ post }) {
  const dispatch = useDispatch()
  const avatar= Math.floor( Math.random() * 5 + 1 ) ;
  const url = `https://bootdey.com/img/Content/avatar/avatar${avatar}.png` ;
  return (
        <div class="be-comment">
            <div class="be-img-comment">	
                <a href="blog-detail-2.html">
                    <img src={url} alt="" class="be-imgEl-comment"/>
                </a>
            </div>
            <div class="be-comment-content">
                
                    <span class="be-comment-name">
                        <a href="#">{post.user}</a>
                        </span>
                    <span class="be-comment-time">
                    {new Date(post.createdAt).toLocaleString('en-US')}
                    </span>
    
                <p class="be-comment-text">
                {post.text}
                </p>
            </div>
        </div>
  )
}

export default CommentaireItem
