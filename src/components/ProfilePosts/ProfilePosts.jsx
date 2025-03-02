export default function ProfilePosts() {
    const posts = [
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
      "/src/assets/Frame.png",
    ];
  
    return (
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">📸 POSTS</h2>
        <div className="grid grid-cols-3 gap-1">
          {posts.map((post, index) => (
            <img 
              key={index} 
              src={post} 
              alt={`Post ${index + 1}`} 
              className="w-full h-70 bg-cover object-cover hover:opacity-75 transition duration-200" 
            />
          ))}
        </div>
      </div>
    );
  }