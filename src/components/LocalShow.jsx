import React, { useEffect, useState } from 'react'

const LocalShow = () => {
    const [data, setData] = useState({});

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("userdata"));
        setData(user);
    },[])

  return (
     <div>
        <h1>Your Details</h1>
        <div>
          <p>Name: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
        </div>
      </div>
  )
}

export default LocalShow