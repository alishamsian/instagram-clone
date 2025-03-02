
import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import LoginImg from "../assets/login-img.png";


const recentSearches = [
  { id: 1, name: "ted", desc: "TED Talks" },
  { id: 2, name: "voxdotcom", desc: "Vox" },
  { id: 3, name: "mkbhd", desc: "Marques Brownlee • Following" },
  { id: 4, name: "veritasium", desc: "Veritasium • Following" },
  { id: 5, name: "lewishamilton", desc: "Lewis Hamilton • Following" },
  { id: 6, name: "openaidalle", desc: "DALL-E by OpenAI • Following" }
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(recentSearches);

  const handleDelete = (id) => {
    setSearchResults(searchResults.filter(item => item.id !== id));
  };

  const clearAll = () => {
    setSearchResults([]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
          <SearchIcon className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 ml-3 outline-none text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Recent Searches */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent</h3>
            <button className="text-blue-500 text-sm" onClick={clearAll}>
              Clear all
            </button>
          </div>

          {searchResults.length === 0 ? (
            <p className="text-gray-400 text-sm mt-4">No recent searches</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {searchResults.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-medium text-black">{item.name} <span className="text-blue-500">✔</span></p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(item.id)}>
                    <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
