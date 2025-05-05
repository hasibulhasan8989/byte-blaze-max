import { useLoaderData } from "react-router-dom";
import notFound from "../assets/404.jpg";

import rehypeRaw from "rehype-raw";

import ReactMarkdown from 'react-markdown';

const Content = () => {
  const blog = useLoaderData();
  const { tags, title, published_at, body_html, cover_image } = blog;
  return (
    <div>
      <div className=" mx-auto group hover:no-underline focus:no-underline  hidden  border-3 rounded-lg border-primary sm:block p-6">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44  bg-gray-500"
          src={cover_image || notFound}
        />

        <div className="my-6">
          {tags.map((tag) => (
            <a
              key={tag}
              className="px-3 py-1 rounded-sm hover:underline mr-6 bg-violet-400 text-gray-900"
            >
              #{tag}
            </a>
          ))}
        </div>

        <div className="p-6 space-y-2" bis_skin_checked="1">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs  text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                 {body_html}
               </ReactMarkdown>

        </div>
      </div>
    </div>
  );
};

export default Content;
