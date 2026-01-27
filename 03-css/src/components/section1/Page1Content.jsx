import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex h-[80vh] px-18 gap-4'>
      <LeftContent />
      <RightContent users = {props.users} />
    </div>
  )
}

export default Page1Content
