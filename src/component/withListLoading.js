import React from 'react';

function WithListLoading(Component){
  return function WithLoadingComponent({isLoading,...props}){
    if (!isLoading) return <Component {...props}/>;
    return (
      <p style={{textAlign:'center', fontSize:'30px'}}>
          Hold on, fetching Data
      </p>
    );
  };
}

export default WithListLoading;
