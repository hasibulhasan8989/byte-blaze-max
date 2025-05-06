import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/404.jpg'
import { MdDelete } from "react-icons/md";


const BlogCard = ({blog ,canDelete,handleDelete}) => {
    const {cover_image,description,published_at,title,id
    }=blog


    return (
         <div className='flex relative'>
            <Link  to={`/blogs/${id}`} className={`max-w-sm mx-auto group transition hover:no-underline focus:no-underline  bg-gray-900 hidden  border-3 rounded-lg border-primary hover:border-secondary    ${canDelete|| 'hover:scale-105'}   sm:block relative`}>
				<img role="presentation" className="object-cover w-full rounded h-44  bg-gray-500" src={cover_image || notFound } />
				<div className="p-6 space-y-2" bis_skin_checked="1">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {title}
                    </h3>
					<span className="text-xs  text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
                  
                   
				</div>
               
               
			</Link>

            <div>
           <div className='absolute right-6 -top-4 cursor-pointer '>
           {
                canDelete && <div onClick={()=>handleDelete(id)}   className=' text-3xl text-secondary p-2 bg-primary rounded-full hover:scale-110'><MdDelete />
                  </div>
              }
           </div>

            </div>


         </div>

        
              
          
    );
};

export default BlogCard;