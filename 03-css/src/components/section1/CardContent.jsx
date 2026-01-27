import { ArrowRight } from "lucide-react";

const CardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between" >
      <div className="flex items-center">
        <h2 className="bg-white text-2xl font-semibold rounded-full h-10 w-10  flex justify-center items-center ">{props.id}</h2>
      </div>
      <div className="text-white flex flex-col gap-10">
        <p className="text-xl">
          {props.intro}
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white font-medium rounded-full px-4 py-2">
            {props.tag}
          </button>
          <button className="bg-blue-500 text-white font-medium rounded-full px-2 py-2">
            <ArrowRight
              size={20}
              strokeWidth={1}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardContent
