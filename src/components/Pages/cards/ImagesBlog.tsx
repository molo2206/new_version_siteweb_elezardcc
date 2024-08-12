/* eslint-disable @typescript-eslint/no-explicit-any */

interface props {
  blogImage?: any;
}
const ImagesBlog = ({ blogImage }: props) => {
  return (
      <div className="p-4 shadow-lg  relative overflow-hidden  text-sm rounded-md">
        <div className="overflow-hidden  hovering ">
          <img
            src={blogImage?.image}
            alt="not found"
            className="mx-auto h-40 w-full
            object-contain transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
    </div>
  );
};

export default ImagesBlog;
