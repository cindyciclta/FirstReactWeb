import React from 'react';
import lionImage from '../images/kasatigercolored.png';
// TODO: Put background photo and make nice font

const greybackground = {
    layout: {
        backgroundColor: '#cccccc',
        height: '730px',
        width:'100%',
        backgroundSize: 'cover',
    }
};

const lionlogo = {
    logo: {
      // TODO: CHANGE CSS BACKGROUND, the background repeats 
      height: '400px',
      width:'400px',
      backgroundColor: 'rgba(52, 52, 52, 0)',
      backgroundImage: `url(${lionImage})`
    }
};
function MembershipLayout() {
  return (
    <div style = {greybackground.layout}>
        <div style = {lionlogo.logo}>
            <h1>Membership KASA ey</h1>
        </div>
    </div>
  );
}
export default MembershipLayout;