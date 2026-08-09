import person from'../../../../public/assets/images/about_us/person.jpg';
import parts from '../../../../public/assets/images/about_us/parts.jpg'
import Image from 'next/image';
const About = () => {
      return (
               <div className="mt-16 mb-16 hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row ">
   <div className='relative ml-6 lg:w-1/2 mb-28'>
   <Image
      src={person}
       alt="Car Doctor service specialist"
       width={240} height={640} 
      className="w-6/7 h-[200px] rounded-lg shadow-2xl"
    />
     <Image
      src={parts}
       width={240} height={640} 
      className="w-2/3 absolute border-7 border-white right-1 top-39 rounded-lg  h-[170px] shadow-2xl"
    />
   </div>
    <div className='px-16 my-5 space-y-5 lg:w-1/2'>
   
   <h3 className='text-[#FF3811] text-3xl font-bold '>About Us</h3>
      <h1 className="text-5xl font-bold ">We are qualified & of experience in this field</h1>
      <p className="font-semibold text-zinc-400">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <p className='font-semibold text-zinc-400'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn shadow-none text-[9px] font-bold  border-[#FF3811] mr-4 text-white bg-[#FF3811]">Get More Info</button>
  
    </div>
  </div>
</div>
      );
};

export default About;