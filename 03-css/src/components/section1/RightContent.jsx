import Card from "./Card"

const RightContent = (props) => {
  return (
    <div id="right" className='w-[75%] flex justify-around overflow-x-auto gap-4'>
      {props.users.map((user) => {
        return <Card key={user.id} id={user.id} img={user.backgroundImg} intro={user.intro} tag={user.tag} />
      })}
    </div>
  )
}

export default RightContent