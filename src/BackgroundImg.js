import React, { useState } from 'react';

function BackgroundImg(props) {
  const clear =
    'https://i2.wp.com/www.positivelynaperville.com/wp-content/uploads/2016/11/sunshine.jpg?resize=696%2C470&ssl=1';
  const rainy =
    'https://bonafideelitist.files.wordpress.com/2012/08/night-rain.jpg?w=470&h=324';
  const snowy = 'https://greetergrammer1.files.wordpress.com/2018/02/snow.jpg';
  const cloudy =
    'https://s7d2.scene7.com/is/image/TWCNews/clouds_jpg_jpg_jpgjpgjpg';
  const [imageURL, setImageURL] = useState(snowy);
  // if (props.weather === 'rainy') {
  //   setImageURL()
  // "Clouds" "Clear" ""
  // }
  return (
    <div
      className="backgroundImg"
      style={{ backgroundImage: 'url(' + imageURL + ')' }}
    ></div>
  );
}
export default BackgroundImg;
