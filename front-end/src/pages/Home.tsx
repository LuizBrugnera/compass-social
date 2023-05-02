import React, { useState, useEffect } from 'react';
import HomeLayout from '../components/templates/HomeLayout'

const Home = () => {

  const [userList, setUserList] = useState<any[]>([]);
  const [postList, setPostList] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3005/api/v1/user/')
      .then(response => response.json())
      .then(data => setUserList(data.users));
  }, []);
  
  useEffect(() => {
    fetch('http://localhost:3005/api/v1/user/post')
      .then(response => response.json())
      .then(data => setPostList(data.posts));
  }, []);
  

  return (
    <HomeLayout userList={userList} postList={postList} setPostList={setPostList}/>
  )
}

export default Home