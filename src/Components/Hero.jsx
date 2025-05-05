import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="min-w-md">
         
          <h1 className="text-5xl font-bold">Welcome to <span className=" font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">ByteBlaze</span>
          </h1>
          
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and <br />
            the curious minds eager to understand it
          </p>

         <div className="flex justify-center items-center gap-4">
         <Link to={'/blogs'} class="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-secondary rounded-lg group-hover:text-white">
           <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
           <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
            <span class="relative">Read Blogs</span>
           </span>
           <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
           </Link>

          <Link to={'/bookmarks'} class="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-secondary rounded-lg group-hover:text-white">
           <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
           <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
            <span class="relative">Bookmarks</span>
           </span>
           <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
           </Link>
         </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
