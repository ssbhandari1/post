import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './style.scss'
const Home = () => {
    const[searchID,setSearchID]=useState('')
const[xmark,setXmark]=useState(false)
const[searchPost,setSearchPost]=useState([])
    const [selectedPostDetails, setSelectedPostDetails] = useState([])
    const postData = useSelector((state) => state.post.data)
 
    const uniqPostId = []
    const filterData = postData.filter((post) => {
        if (!uniqPostId.includes(post.postId)) {
            uniqPostId.push(post.postId)
            return true
        }
        return false
    })


    const handleSelectPost = (postID, id) => {
        const selectedPost = postData.filter((post) => {
            return post.postId === postID
        })

        setSelectedPostDetails(selectedPost)

    }

    const handleSearch=()=>{
        
const searchItem=filterData.filter((post)=>{
    return post.postId === +searchID
})
setSearchPost(searchItem)
setXmark(true)
    }
    const hansleClose=()=>{
        setSearchPost([])
        setXmark(false)
        setSearchID('')
    }

    return (
        <>
       <div className="header">
       <div className="searchInput">
          <input type="text"
          value={searchID}
         onChange={(e)=>setSearchID(e.target.value)}
          placeholder='Search Post By Post ID...'
        />
        {xmark  &&  searchPost.length  ? <i className="fa-solid fa-circle-xmark" onClick={hansleClose}></i>:''
}
        <button onClick={handleSearch}>Search</button>
        </div>
</div>
        <div className='containerWrapper'>

            <div className="postItems">


                {
                    searchPost.length && searchID!==""?(
                        searchPost.map((post) => {
                            return (
                                <div key={post.id} className="postItem" onClick={() => handleSelectPost(post.postId, post.id)}>
                                    <h2>Post ID : {post.postId}</h2>
                                    <h4>{post.name}</h4>
                                    <h5>Email :{post.email}</h5 >
                                    <p>{post.body}</p>
                                </div>
                            )
                        }) 
                    ):
                    filterData.map((post) => {
                        return (
                            <div key={post.id} className="postItem" onClick={() => handleSelectPost(post.postId, post.id)}>
                                <h2>Post ID : {post.postId}</h2>
                                <h4>{post.name}</h4>
                                <h5>Email :{post.email}</h5 >
                                <p>{post.body}</p>
                            </div>
                        )
                    })
                }


            </div>
            <div className="postItems">
                {
                    selectedPostDetails.length ?
                        selectedPostDetails.map((post) => {
                            return (
                                <div key={post.id} className="postItem" onClick={() => handleSelectPost(post.postId, post.id)}>
                                    <h2>Post ID : {post.postId}</h2>
                                    <h4>{post.name}</h4>
                                    <h5>Email :{post.email}</h5 >
                                    <p>{post.body}</p>
                                </div>
                            )
                        })
                        :
                     <div className="notItems">
<h1>No Posts Available!</h1>
                     </div>
                }

            </div>

        </div>
        </>
    )
}

export default Home