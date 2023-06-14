import React from 'react';
import iconClose from './images/icon-remove.svg';

function Header({ keywords, deleteKeyword, clear }) {
  return (
    <header className="container mx-auto w-[80%] bg-white">
       <div className='flex justify-between items-center'>
              <div className='flex flex-wrap gap-4 items-center py-2 px-4 space-x-4 '>
              {keywords.map((keyword, index) => {

return <div key={index} className='flex items-center'>
  <button className='bg-LightGrayishCyan text-center text-DesaturatedDarkCyan py-2 px-4 shadow-md rounded-l-md'>{keyword}
</button>
<button onClick={() => deleteKeyword(keyword)} className='bg-DesaturatedDarkCyan p-2 rounded-r-md '>
  <img src={iconClose} alt="close-icon" className='w-6'/>
</button>
</div>
})}

              </div>
<button onClick={() => clear()} className='pr-8 text-DesaturatedDarkCyan' >Clear</button>
       </div>
    </header>
  )
}

export default Header;
