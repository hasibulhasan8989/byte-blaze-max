import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../assets/Utils";
import BlogCard from "../Components/BlogCard";
import NoBookmark from "../Components/NoBookmark";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  if (blogs.length < 1) {
    return <NoBookmark></NoBookmark>
  }

  return (
    <div>
      <div
        className="grid justify-center grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 text-white mt-18"
        bis_skin_checked="1"
      >
        {blogs.map((blog) => (
          <BlogCard
            handleDelete={handleDelete}
            canDelete={true}
            key={blog.id}
            blog={blog}
          ></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
