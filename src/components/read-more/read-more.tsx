import React, { PropsWithChildren, useEffect, useState } from 'react';
import { getAnimeNews } from 'Requests/player';
import { addEvent } from 'Utils/amplitude';
import { randomInt, responseError } from 'Utils/index';
import { getStorageData, setStorageData } from 'Utils/cache';
import * as Styles from './readMore.style';
import { defaultAnimeNews } from 'Utils/constants';

const ReadMore = ({ children }: PropsWithChildren) => {
  const [news, setNews] = useState<Record<string, any> | null>(null);

  const handleAnimeNews = async () => {
    try {
      const data = await getAnimeNews();

      setStorageData('afl.news', JSON.stringify(data));

      setNews(data[randomInt(50)]);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get anime news'));
      setNews(defaultAnimeNews);
    }
  };

  useEffect(() => {
    let abzNews = getStorageData('afl.news');

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
