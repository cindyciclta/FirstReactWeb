import React from 'react';

const greybackground = {
  layout: {
      backgroundColor: '#cccccc',
      height: '730px',
      width:'100%',
      backgroundSize: 'cover',
  }
};
// TODO: Put background photo and make nice font
function AboutPageLayout() {
  return (
    <div style = {greybackground.layout}>
      <h1>About KASA</h1>
    </div>
  );
}
export default AboutPageLayout;