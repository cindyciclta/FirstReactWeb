import React from 'react';

// TODO: Put background photo and make nice font
const greybackground = {
    layout: {
        backgroundColor: '#cccccc',
        height: '730px',
        width:'100%',
        backgroundSize: 'cover',
    }
};
function FollowUsLayout() {
  return (
    <div style={greybackground.layout}> 
    {/* //ToDO:get rid of the whitespace */}
        <h1>Follow Us KASA ey</h1>
    </div>

  );
}
export default FollowUsLayout;