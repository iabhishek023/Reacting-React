// eslint-disable-next-line no-unused-vars
import React,{useEffect,useState} from "react"
import { useLoaderData } from "react-router-dom"
function GitHub(){

    const data=useLoaderData();
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/user/iabhishek023')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     },[])
    // })
    return(
        <div className="text-center m-4 bg-gray-600 text-white
        p-4 text-3xl"> Github Followers:{data.followers}
        <img src={data.avatar_url} alt="github profile" width={300} /></div>

    )
}

export default GitHub

export const githubinfoloader=async()=>{
    const response=await fetch("https://api.github.com/users/iabhishek023")
    return response.json()
}