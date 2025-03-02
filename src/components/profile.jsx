import { useEffect, useState } from "react";
import axios from "axios";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

import profileImg from "../assets/profile.png"

export default function Profile() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) {
      console.log("No username found in localStorage!");
      setLoading(false);
      return;
    }

    console.log(`Fetching data for: ${username}`);

    axios.get(`https://instagram-backend-ugd3.onrender.com/api/user/u/${username}`)
      .then(response => {
        console.log("API Response:", response.data);
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <div className="text-center text-black text-xl mt-20">Loading...</div>;
  if (!user) return <div className="text-center text-black text-xl mt-20">User not found!</div>;

  return (
    <div className=" flex flex-col">
    <div className="flex items-center gap-6 p-6 text-black rounded-lg max-w-2xl mx-auto">
      <div className="relative">
        <img src={user.user.profilePic || profileImg } alt={user.user.username} className="w-24 h-24 rounded-full border-4 border-pink-500" />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">{user.user.username}</h1>
          <span className="text-blue-500 text-lg">✔</span>
          <button className="ml-4 bg-gray-800 px-4 py-1 rounded-lg text-white text-sm">Following ▼</button>
        </div>
        
        <div className="text-gray-400 text-sm mt-1">
          <span className="font-semibold text-black">0</span> posts • 
          <span className="font-semibold text-black ml-2">{user.user.followers.length}</span> followers • 
          <span className="font-semibold text-black ml-2">{user.user.followings.length}</span> following
        </div>
        
        <p className="mt-2 text-gray-300">{user.bio || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium!"}</p>

        {user.user.email && (
          <a href={user.user.email} className="text-blue-400 hover:underline block mt-1">{user.user.email || "alishamsian@gmail.com"}</a>
        )}
      </div>
    </div>
    <ProfilePosts />
    </div>
  );
}
