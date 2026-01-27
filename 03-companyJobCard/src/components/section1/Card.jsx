import CardContent from "./CardContent";

const Card = (props) => {
  return (
      <div className="relative shrink-0 overflow-hidden h-[80vh] w-3/10 rounded-4xl">
        <img className="h-full w-full object-cover" src={props.img} alt="image" />
        <CardContent id={props.id} tag={props.tag} intro={props.intro}  />
      </div>
  );
};

export default Card;
