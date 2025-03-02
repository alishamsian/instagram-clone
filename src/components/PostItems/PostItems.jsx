import PostItem from "../PostItem/PostItem";

const postsData = [
  {
    id: 1,
    userAvatar: "https://i.imgur.com/0Z2M18u.jpg",
    username: "lewishamilton",
    image: "https://i.imgur.com/RjXlOyz.jpg",
    likes: 741368,
    caption: "Parabéns Ayrton, minha inspiração sempre 🇧🇷👊",
  },
  {
    id: 2,
    userAvatar: "https://i.imgur.com/2pV3yYN.jpg",
    username: "cristiano",
    image: "https://i.imgur.com/fR7YHP7.jpg",
    likes: 1234567,
    caption: "Great win today! 💪⚽",
  },
  {
    id: 3,
    userAvatar: "https://i.imgur.com/3aW4Bfj.jpg",
    username: "elonmusk",
    image: "https://i.imgur.com/oX3OoQF.jpg",
    likes: 890000,
    caption: "Going to Mars soon 🚀🔥",
  },
];

export default function PostItems() {
  return (
    <div className="flex flex-col items-center space-y-6">
      {postsData.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

