import React from 'react';
import './Marker.css';

const Marker = ({lat,lng,id}) => {
    return (
      <div>
        <div
        //   className="pin bounce"
          key={id}
        />
        <div className='user_name'>username</div>
        {/* <img style={{width:50}} src="https://upload.wikimedia.org/wikipedia/commons/f/f2/678111-map-marker-512.png" alt="" /> */}
      </div>
    );
  };

  export default Marker;