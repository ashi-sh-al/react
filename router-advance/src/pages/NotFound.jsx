import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#22b455] to-[#1dd1a1]">
      <div
        className="
          w-[550px]
          max-w-[90%]
          min-h-[350px]
          px-6 py-8
          rounded-[50px]
          bg-[#e0e0e0]
          shadow-neumorphism
          flex flex-col
          items-center justify-center
          text-center
        "
      >
        <h1 className="text-[clamp(6rem,14vw,10rem)] font-[750] bg-gradient-to-br from-[#22b455] to-[#1dd1a1] bg-clip-text text-transparent leading-none">
          404
        </h1>

        <h2 className="text-[#204829] my-2 font-semibold">
          Oops, Page Not Found
        </h2>

        <p className="text-[#204829] font-medium mb-5 max-w-[420px]">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="
            px-7 py-3
            rounded-[20px]
            bg-gradient-to-l from-[#22b455] via-[#1dd1a1] to-[#22b455]
            bg-[length:200%]
            text-white
            font-medium
            transition-all
            duration-300
            ease-in-out
            hover:bg-right
            hover:-translate-y-1
            active:scale-95
          "
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;