import { useEffect, useState } from "react";
import { client } from "../lib/axios";


export default function Search() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  async function getData(query = "") {
    setLoading(true);
    try {
      const response = await client.get(`/api/user/searchUser?search=${query}`);
      const { data } = response.data;
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(); // دریافت کاربران اولیه بدون فیلتر
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    getData(query);
  };

  return (
    <div className="container mt-30 px-4">
      {/* فیلد جستجو */}
      <input
        type="text"
        placeholder="جستجوی کاربر..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded-md mb-4"
      />

      {/* نمایش وضعیت بارگذاری */}
      {loading ? <h1>در حال دریافت اطلاعات...</h1> : null}

      {/* نمایش کاربران */}
      {users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center hover:shadow-xl transition-all"
            >
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <h1>نتیجه‌ای یافت نشد...</h1>
      )}
    </div>
  );
}
