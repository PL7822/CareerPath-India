import { Link } from "react-router-dom";
import "@lottiefiles/lottie-player";

const NotFound = () => {
  return (
    <section className="flex items-center min-h-screen py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* Animation Section */}
          <div className="order-1 md:order-2 flex justify-center">
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_kcsr6fcp.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left order-2 md:order-1">

            <h1 className="text-7xl font-bold text-gray-400 mb-4">
              Error 404
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              The page you are looking for was moved, removed,
              or might never have existed.
            </p>

            <Link
              to="/"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Back to Homepage
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default NotFound;