import React, { useEffect, useState } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import * as Styles from './loader.style';
import { LoaderProps } from 'Utils/types';
import { COLOR_DARK_WHITE } from 'Styles/global.style';
import { getStorageData } from 'Utils/cache';
import { defaultAnimeNews } from 'Utils/constants';
import { randomInt } from 'Utils/index';

const Loader = ({ isSmall = false }: LoaderProps) => {
  const [msg, setMsg] = useState<React.JSX.Element | null>(null);

  const handleFunFactMsg = () => {
    let abzNews = getStorageData('afl.news');
    const news = !abzNews ? defaultAnimeNews : abzNews[randomInt(50)];

    const filteredMsg = (
      <>
        <div>
          <strong>
            In the meantime, are you looking for a new series to watch!!!
          </strong>
        </div>
        <div>
          <strong>Anime Series: </strong> {news?.title}
        </div>
        <div>
          <strong>Description: </strong> {news?.shortDescription}
        </div>
      </>
    );

    setMsg(filteredMsg);
  };

  useEffect(() => {
    handleFunFactMsg();
  }, []);

  if (isSmall) {
    return (
      <Styles.LoaderWrapper className="small">
        <PacmanLoader size={10} color={COLOR_DARK_WHITE} />
      </Styles.LoaderWrapper>
    );
  }

  return (
    <Styles.LoaderWrapper>
      {msg && (
        <Styles.LoaderContent>
          {msg}
        </Styles.LoaderContent>
      )}
      <PacmanLoader color={COLOR_DARK_WHITE} />
    </Styles.LoaderWrapper>
  );
};

export default Loader;
