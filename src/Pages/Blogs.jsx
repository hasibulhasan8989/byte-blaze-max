import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BlogCard from '../Components/BlogCard';

import Loader from '../Components/Loader';

const Blogs = () => {
    
    const blogs=useLoaderData()
	const navigation=useNavigation()

	 if (navigation.state==="loading"){return <Loader></Loader>}
   

    return (
        <section className="  text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12" bis_skin_checked="1">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 border-3 border-primary rounded-lg hover:border-secondary mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  bg-gray-900 p-5 ">
			<img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5" bis_skin_checked="1">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
				<span className="text-xs text-gray-400 ">{new Date(blogs[0].
                 published_at).toLocaleDateString()}</span>
				<p> {blogs[0].description}</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" bis_skin_checked="1">
			
			{
                blogs.slice(1).map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
		
			
			
			
		</div>
		
	</div>
</section>
    );
};

export default Blogs;