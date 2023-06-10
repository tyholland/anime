import React, { PropsWithChildren, useEffect, useState } from 'react';
import { getAnimeNews } from 'Requests/player';
import { addEvent } from 'Utils/amplitude';
import { getStorageData, randomInt, responseError, setStorageData } from 'Utils/index';
import * as Styles from './readMore.style';

const ReadMore = ({ children }: PropsWithChildren) => {
  const [news, setNews] = useState<Record<string, any> | null>(null);

  const handleAnimeNews = async () => {
    try {
      const data = await getAnimeNews();

      setStorageData('abz.news', JSON.stringify(data));

      setNews(data[randomInt(50)]);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get anime news'));
    }
  };

  useEffect(() => {
    let abzNews = getStorageData('abz.news');

    if (!abzNews) {
      handleAnimeNews();
    } else {
      setNews(abzNews[randomInt(50)]);
    }
  }, []);

  return (
    <Styles.ReadMoreWrapper>
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
            <Styles.ReadMoreDisclaimer>
              <strong>Page Info: </strong>
              {children}
            </Styles.ReadMoreDisclaimer>
          )}
        </>
      )}
    </Styles.ReadMoreWrapper>
  );
};

export default ReadMore;
