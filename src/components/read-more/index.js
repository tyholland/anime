import Button from 'Components/button';
import React, { useEffect, useState } from 'react';
import { getAnimeNews } from 'src/requests/player';
import { addEvent } from 'Utils/amplitude';
import { randomInt, responseError } from 'Utils/index';
import {
  $ReadMoreWrapper,
  $ReadMoreContent,
  $ReadMoreNews,
} from './readMore.style';

const ReadMore = ({ children }) => {
  const [showMore, setShowMore] = useState(false);
  const [news, setNews] = useState(null);

  const handleAnimeNews = async () => {
    try {
      const data = await getAnimeNews();

      window.localStorage.setItem('abz.news', JSON.stringify(data));

      setNews(data[randomInt()]);
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
      setNews(abzNews[randomInt()]);
    }
  }, []);

  return (
    <$ReadMoreWrapper>
      <$ReadMoreContent className={showMore && 'show'}>
        <$ReadMoreNews>
          Check out this anime called {news?.title}. Here's a short description
          about it. {news?.shortDescription}.
        </$ReadMoreNews>
        {children}
      </$ReadMoreContent>
      <Button
        btnText="Fun Fact"
        btnFunction={() => setShowMore(!showMore)}
        btnColor="readMore"
      />
    </$ReadMoreWrapper>
  );
};

export default ReadMore;
