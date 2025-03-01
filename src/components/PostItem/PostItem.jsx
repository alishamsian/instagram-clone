import { useState } from "react";
import LoginImg from "../../assets/login-img.png";
import { Heart, MessageCircle, Bookmark, MoreHorizontal } from "lucide-react";


export default function PostItem() {

    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 border">
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center">
        <img
          src={LoginImg}
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-semibold text-gray-800">lewishamilton</span>
        <span className="text-gray-500 ml-2">• 5h</span>
      </div>
      <MoreHorizontal className="text-gray-600 cursor-pointer" />
    </div>

    <img
      src={LoginImg}
      alt="Post"
      className="w-full object-cover"
    />

    {/* Actions */}
    <div className="flex justify-between px-3 py-2">
      <div className="flex space-x-4">
        <Heart
          className={`cursor-pointer ${
            liked ? "fill-red-500 text-red-500" : "text-gray-600"
          }`}
          onClick={() => setLiked(!liked)}
        />
        <MessageCircle className="text-gray-600 cursor-pointer" />
      </div>
      <Bookmark
        className={`cursor-pointer ${
          saved ? "fill-blue-500 text-blue-500" : "text-gray-600"
        }`}
        onClick={() => setSaved(!saved)}
      />
    </div>

    <div className="px-3 pb-2">
      <p className="font-semibold text-gray-800">
        {liked ? "741,369" : "741,368"} likes
      </p>
      <p className=" text-gray-400">
        <span className="font-semibold text-black">lewishamilton</span> This is a caption for the post. 
      </p>
      <p className="text-blue-500 text-sm cursor-pointer">See translation</p>
      <p className="text-gray-500 text-sm cursor-pointer">
        View all 13,384 comments
      </p>
      <p className="text-gray-400 text-sm">Add a comment...</p>
    </div>
  </div>
);
}
