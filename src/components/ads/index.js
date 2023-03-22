import React, { useEffect } from 'react';

const Ads = () => {
  useEffect(() => {
    var ads = document.getElementsByClassName('adsbygoogle').length;

    for (var i = 0; i < ads; i++) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6648399860832112"
        data-ad-slot="4473046527"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Ads;
