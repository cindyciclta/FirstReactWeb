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
function EventsPageLayout() {
  return (
    <div style = {greybackground.layout}>
        <h1>Event KASA ey</h1>
    </div>
  );
}
export default EventsPageLayout;