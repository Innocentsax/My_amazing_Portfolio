// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';

// const Hero = () => {
//   return (
//     <section className= "relative w-full h-screen mx-auto">
//       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1
//       mx-auto flex flex-row items-start gap-5`}>
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915eff]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>
        
//         <div>
//         <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Innocent Udo</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop robust, scalable applications and <br className='sm:block hidden' />
//             secured API's for Enterprise platforms.
//           </p>
//         </div>
//       </div>
//       <ComputersCanvas />

//       <div className="absolute xs:bottom-10 bottom-32 w-full 
//       flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 
//             border-secondary flex justify-center items-start p-2">
//               <motion.dev 
//                 animate={{
//                   y: [0, 24, 0]
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatType: 'loop'
//                 }}
//                 className="w-3 h-3 rounded-full bg-secondary mb-1"
//               />
//           </div>

//         </a>
//       </div>
//     </section>
//   )
// }

// export default Hero


import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className= "relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1
      mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEcr7hsL275sQ/profile-displayphoto-shrink_200_200/0/1691916173136?e=1697673600&v=beta&t=8wWo-UJAld0bWcFOajvKjaujfz9MxbRDfjZGcjugxQw"
            alt="Profile"
            className="w-30 h-30 rounded-full bg-[#915eff]"
          />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Innocent Udo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop robust, scalable applications and <br className='sm:block hidden' />
            secured API's for Enterprise platforms.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full 
      flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 
            border-secondary flex justify-center items-start p-2">
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>

        </a>
      </div>
    </section>
  )
}

export default Hero;
