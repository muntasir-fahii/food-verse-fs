import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container justify-center mx-auto py-10 flex flex-col items-center ">
      <p className="text-2xl lg:text-4xl font-semibold text-rose-300">
        Not Found
      </p>
      <Link
        to={"/"}
        className="mt-3 bg-orange-300 text-white p-3 px-8 rounded-full uppercase shadow-lg shadow-orange-200 hover:bg-white-300 hover:text-gray-400 hover:shadow-orange-100 duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
