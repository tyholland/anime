import React, { useEffect, useState } from 'react';
import { getAnimeNews } from 'src/requests/player';
import { addEvent } from 'Utils/amplitude';
import { randomInt, responseError } from 'Utils/index';
import { $ReadMoreWrapper, $ReadMoreDisclaimer } from './readMore.style';

const ReadMore = ({ children }) => {
  const [news, setNews] = useState(null);

  const handleAnimeNews = async () => {
    try {
      const data = await getAnimeNews();

      window.localStorage.setItem('abz.news', JSON.stringify(data));

      setNews(data[randomInt(50)]);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get anime news'));
    }
  };

  useEffect(() => {
    let abzNews = window.localStorage.getItem('abz.news');

    if (!abzNews) {
      handleAnimeNews();
    } else {
      abzNews = JSON.parse(abzNews);
      setNews(abzNews[randomInt(50)]);
    }
  }, []);

  return (
    <$ReadMoreWrapper>
      {!!news && (
        <>
          <div>
            <p>
              <strong>Anime:</strong> {news.title}
            </p>
            <p>
              <strong>Description:</strong> {news.shortDescription}.
            </p>
          </div>
          {!!children && (
            <$ReadMoreDisclaimer>
              <strong>Page Info: </strong>
              {children}
            </$ReadMoreDisclaimer>
          )}
        </>
      )}
    </$ReadMoreWrapper>
  );
};

export default ReadMore;
