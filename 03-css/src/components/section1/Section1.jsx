import Navbar from './Navbar'
import Page1Content from './page1Content'

const Section1 = (props) => {
  return (
    <div className=''>
      <Navbar />
      <Page1Content users = {props.users}/>  
    </div>
  )
}

export default Section1
