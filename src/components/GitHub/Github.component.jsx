import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

// ye hai component jo main.jsx me Github ke naam se upload hoga 
const Github = () => {
    // direct values dega useLoaderData ();
    const {followers,avatar_url} = useLoaderData();
    // const gitAPI = 'https://api.github.com/repos/octocat/Spoon-Knife/issues';
    // const [issues, setIssues] = useState('');
    // const [data, setData] = useState('');
    //  // mai api call karna chataha hu kab jab ye componenet load ho uske baad to useEffect() karta hai 
    //  useEffect(()=>{
    //     fetch('https://api.github.com/users/parasbagri')
    //     .then(res => res.json()).then((res)=> {
    //         setData(res)
    //         console.log(res)})
    //     //.then(data => setIssues(data))
    //     //.catch(error => console.log(error))
    // },[])
    // const {avatar_url, followers} = data;
    return(   
        <>
       <div>
          <div>
            <img src ={avatar_url} alt="UserImgement" />
          </div>
          <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Followers: {followers} </div>
       </div>
        </>
    )
}

export default Github;

// ye hai method jo alag se main.jsx me import hoga {gitHubInfoLoader} kuch aise 
export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/parasbagri');
    const data = await response.json();
    return data;
}