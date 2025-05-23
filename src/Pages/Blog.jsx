import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../assets/Utils";



const Blog = () => {

    const [tab,setTab]=useState(0)
   
    const blog=useLoaderData()
   const{comments_count,published_at,title,reading_time_minutes,public_reactions_count


  }=blog

  const handleBookmark=()=>{
    saveBlog(blog)
    console.log(blog)
  }

    return (
        <div className="max-w-4xl px-6 py-16 mx-auto space-y-12" bis_skin_checked="1">
        <article className="space-y-8  text-black">
            <div className="space-y-6" bis_skin_checked="1">
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-black" bis_skin_checked="1">
                    <div className="flex items-center md:space-x-2" bis_skin_checked="1">
                        
                        <p className="text-sm">{reading_time_minutes} min read --  {new Date(published_at).toLocaleDateString()}</p>
                    </div>
                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments {public_reactions_count} views</p>
                </div>
            </div>


            <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-black ">

	        <Link to={''}  onClick={()=>setTab(0)} className={`flex items-center flex-shrink-0 px-5  py-3 space-x-2    text-black border-gray-400 rounded-t-lg ${tab===0  ? 'border-b-1 text-primary':'border'}`}>
		    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		    </svg>
		     <span>Content</span>
	        </Link>

	        <Link to={'author'} onClick={()=>setTab(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2    ${tab===1?'border-b-1 text-primary':'border'} rounded-t-lg border-gray-400 text-black`}>
		    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		   </svg>
		   <span>Author</span>
	        </Link>

            <div onClick={()=>handleBookmark()} className="flex  min-h-[50px] justify-center items-center ml-6 hover:scale-130 cursor-pointer">
            <MdBookmarkAdd size={25} className="text-secondary"></MdBookmarkAdd>
            </div>
            


	
              </div>

         <Outlet></Outlet>
              
        </article>
        
    </div>
    );
};

export default Blog;