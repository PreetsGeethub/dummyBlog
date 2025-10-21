import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import Signup from './pages/Signup'
import AddPost from './pages/AddPost'
import AllPosts from './pages/AllPosts'
import EditPost from './pages/EditPost'
import Post from './pages/Post'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/all-posts" element={<AllPosts />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/edit-post/:slug" element={<EditPost />} />
            <Route path="/post/:slug" element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App