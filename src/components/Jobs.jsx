import React, { useEffect, useState } from 'react';
import Job from '../Job';

function Jobs({ jobs, setKeyWords, keywords}) {

    const [filteredData, setFilteredData] = useState([]);

    const modifiedData = () => {    

      if(keywords.length > 0) {
        const newData = filteredData.filter(data => {
          return (
            keywords.every(keyword => {
              return (
                data.role === keyword || 
                data.level === keyword ||
                data.languages.includes(keyword) ||
                data.tools.includes(keyword)
              )
            })
          )
        });

        setFilteredData(newData);
      } else {
          setFilteredData(jobs);
      }
    }

    useEffect(() => {
      modifiedData();
    }, [keywords]);

    const job = filteredData.map((job) => <Job job={job} key={job.id} setKeyWords={setKeyWords} />);

  return (
    <div className='container mx-auto w-[80%] py-8'>
      <div className="flex flex-col pt-4 space-y-20 md:space-y-4">  
        { job }
      </div>
    </div>
  );
}

export default Jobs;
