import Button from 'Components/button/button';
import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './notUser.style';
import { useRouter } from 'next/router';
import { randomInt } from 'Utils/index';
import { getStorageData } from 'Utils/cache';
import { NotUserProps } from 'Utils/types';
import { defaultAnimeNews } from 'Utils/constants';

const NotUser = ({ message = null }: NotUserProps) => {
  const router = useRouter();
  const [msg, setMsg] = useState<React.JSX.Element | string | null>(null);

  const handleFunFactMsg = () => {
    if (!message) {
      let abzNews = getStorageData('abz.news');
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
    } else {
      setMsg(message);
    }
  };

  useEffect(() => {
    handleFunFactMsg();
  }, []);

  return (
    <>
      <GlobalStyles.GlobalContainer className="bgImage notUser">
        <Styles.NotUserContent>
          {!!msg && (
            <div>
              <h3>Please login to view this page.</h3>
              {msg}
            </div>
          )}
          {!msg && <div>Please login to view this page.</div>}
        </Styles.NotUserContent>
        <Styles.NotUserBtnWrapper>
          <Button
            btnText="Login To Continue"
            redirect={`/login?continue=${router.asPath}`}
            btnColor="primary"
            customBtnClass="medium"
          />
        </Styles.NotUserBtnWrapper>
      </GlobalStyles.GlobalContainer>
    </>
  );
};

export default NotUser;
