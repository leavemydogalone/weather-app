import React, { useState } from 'react';

function BackgroundImg(props) {
  const [imageURL, setImageURL] = useState(
    'https://i2.wp.com/www.positivelynaperville.com/wp-content/uploads/2016/11/sunshine.jpg?resize=696%2C470&ssl=1'
  );
  // if (props.weather === 'rainy') {
  //   setImageURL()
  // }
  return (
    <div className="backgroundImg">
      <img src={imageURL} alt="heres the background" />
    </div>
  );
}
export default BackgroundImg;
