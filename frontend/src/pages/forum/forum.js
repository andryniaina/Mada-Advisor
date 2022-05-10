import React, { Component, Fragment } from 'react';

import './Forum.css';
import CommentaireForm from '../../components/CommentaireForm'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PostForm from '../../components/PostForm'
import PostItem from '../../components/PostItem'
import Spinner from '../../components/Spinner'
import { getPosts, reset } from '../../features/posts/postSlice'
import CommentaireItem from '../../components/CommentaireItem';

function Forum() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user } = useSelector((state) => state.auth)
    const { posts, isLoading, isError, message } = useSelector(
      (state) => state.posts
    )
    const { comments } = useSelector(
      (state) => state.comments
    )
  
    useEffect(() => {
      if (isError) {
        console.log(message)
      }
  
      if (!user) {
        navigate('/login')
      }
  
      dispatch(getPosts())
      
      console.log(posts)
  
      return () => {
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])
  
    if (isLoading) {
      return <Spinner />
    }
  

    return (
        <div>
          <div class="container">
    <div class="be-comment-block">
        <h1 class="comments-title">Forum</h1>
        {posts.length > 0 ? (
          <div className='goals'>
            {posts.map((post) => (
              <CommentaireItem key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <h3>Il n'y a pas de post</h3>
        )}

        <CommentaireForm />
    </div>
    </div>
        </div>
    );
  }

export default Forum;