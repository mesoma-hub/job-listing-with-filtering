import React, { useEffect, useState } from 'react';

function Job({ job, setKeyWords }) {

  const {
    id,
  company,
  logo,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools 

} = job;

const [icon, setIcon] = useState("");

const importSvgs = () => {
  const logoSvg = import(`${logo}`);
  
    logoSvg.then(data => {
    setIcon(data.default);
  });
};

useEffect(() => {
  importSvgs();
}, [logo]);

let borderStyle = 'border border-LightGrayishCyan';

let border = '';

if (id <= 2) {
  border = 'border-l-4 border-l-DesaturatedDarkCyan';
}

const keywords = [role, level, ...languages, ...tools];

return (
   <div className={`${border} ${borderStyle} bg-white rounded-md shadow-md`}>
     <div className='flex flex-col justify-start space-x-0 space-y-2 md:space-y-0 md:flex-row md:space-x-4 md:justify-between'>


      <div className='flex flex-col p-4 space-y-4 space-x-0 md:space-x-4 d:space-y-0 md:flex-row'>
        <div className='relative pt-0 md:pt-3'>
          <img src={icon} alt="logo" className='absolute w-14 left-2 -top-11 md:w-auto md:static md:left-0 md:top-' />
        </div>
        
        <div className='relative left-2 flex flex-col space-y-2 pt-4  md:pt-0'>
          <div className='flex items-center space-x-4'>
            <p className='text-DesaturatedDarkCyan font-bold'>{company}</p>
            { job.new && <span className='text-center uppercase font-semibold px-3 py-[2px] rounded-full bg-DesaturatedDarkCyan text-white text-center'>New!</span>}
                
            {featured && <span className='uppercase px-3 py-[2px] rounded-full bg-VeryDarkGrayishCyan text-white text-center'>Featured</span>}
          </div>

          <h2 className='font-bold'>{position}</h2>
          <ul className='text-xs text-DarkGrayishCyan flex justify-start space-x-4 list-disc'>
                <li className='list-none'>{postedAt}</li>
                <li>{contract}</li>
                <li>{location}</li>
          </ul>
        </div>
      </div>

      <div className='px-6'>
        <div className='border border-DarkGrayishCyan md:hidden'></div>
      </div>

      <div className='flex items-center justify-center p-6'>
        <div className='grid grid-cols-3 md:grid-cols-6 gap-4 justify-center items-center md:justify-center'>

          {
          keywords.map((keyword, index) => <button className='bg-LightGrayishCyan font-sans w-auto text-center text-DesaturatedDarkCyan py-2 px-4 shadow-md rounded-md' key={index} onClick={() => setKeyWords(keyword)} >{keyword}</button>)
          }
       </div>
      </div>
     </div>
    </div>
  )
}

export default Job;