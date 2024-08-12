/* eslint-disable @typescript-eslint/no-explicit-any */
import useAsync from "../hooks/useAsync";
import BlogServices from "../services/BlogsServices";
import CardBlog from "./Pages/cards/CardBlog";
const Blog = () => {
 
  const { data } = useAsync(() => BlogServices.getBlogHome());

  return (
    <div
      className="py-12 px-4 lg:px-14 max-w-screen-2xl
     mx-auto my-12  dark:bg-slate-800 dark:text-slate-200"
      id="testimonial"
    >
      <div className=" text-center md:w-1/2 mx-auto">
        <h2 className=" text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
          Blogs
        </h2>
        <p className=" text-sm text-neutralGray mb-8 md:w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          aspernatur assumenda, dolorem aperiam vero, illo, quae odio quibusdam
          ab porro fugit repudiandae distinctio quos laboriosam illum in magnam
          laborum earum. Voluptas, blanditiis.
        </p>
      </div>
      <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-8 h-96 items-center justify-between">
        {data.map((blog: any) => (
          <CardBlog blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
