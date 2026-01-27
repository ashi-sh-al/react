import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='flex flex-col justify-between w-[25%]'>
      <div className='pt-10'>
        <h3 className='text-black text-4xl font-bold leading-[1.2]'>Prospective <br />customer <br />segmentation</h3>
        <p className='pt-4 text-[16px]'>Depending on customer <br /> satisfaction and access <br />to banking products, potential <br />target audience can be divided <br />into three groups.</p>
      </div>
        <div className=''>
          <ArrowUpRight size={50} />
        </div>
    </div>
  )
}

export default LeftContent
