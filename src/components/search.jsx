import { useState, useEffect } from "react";
import axios from "axios";
import { Search as SearchIcon, X } from "lucide-react";
import LoginImg from "../assets/login-img.png";


export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const fetchUsers = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://instagram-backend-ugd3.onrender.com/api/user/searchUser?search=${searchTerm}&limit=5`
          );
          if (Array.isArray(response.data.users)) {
            setSearchResults(response.data.users);  
          } else {
            console.error("The 'users' field is not an array");
            setSearchResults([]); 
          }
        } catch (error) {
          console.error("Error fetching users:", error);
          setSearchResults([]); 
        } finally {
          setLoading(false);
        }
      };

    const delayDebounce = setTimeout(fetchUsers, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        {/* Search Bar */}
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

        {/* Results */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-black">Search Results</h3>
          {loading ? (
            <p className="text-gray-400 text-sm mt-4">Loading...</p>
          ) : searchResults.length === 0 ? (
            <p className="text-gray-400 text-sm mt-4">No results found</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {searchResults?.map((user) => (
                <li key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.profilePicture ??
                         {LoginImg}}
                      alt={user.username}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-black">{user.username} <span className="text-blue-500">✔</span></p>
                      <p className="text-gray-500 text-sm">{user.username}</p>
                    </div>
                  </div>
                  <button>
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