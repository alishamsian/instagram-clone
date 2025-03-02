import { useState } from "react";
import { X } from "lucide-react";

function CardContent({ children }) {
  return <div className="mt-4 space-y-4">{children}</div>;
}

export default function PostPopup({ onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="fixed top-1/3 left-2/5 flex items-center justify-center bg-opacity-75">
      <div className="relative w-96 p-6 bg-white rounded-2xl shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="text-lg font-semibold text-black text-center">Create new post</h2>
        <CardContent>
          <div className="text-center text-gray-700">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Select from computer
            </button>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
