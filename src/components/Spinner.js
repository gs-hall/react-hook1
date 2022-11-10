import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function Spinner({ isLoading }) {
  if (!isLoading) {return null};
  return (
    <div className='spinner'>
      <Oval
          height={50}
          width={50}

          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
    </div>
  );
};