import Button from 'Components/button/button';
import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './notUser.style';
import { useRouter } from 'next/router';
import { getStorageData, randomInt } from 'Utils/index';

const NotUser = ({ message = null }) => {
  const router = useRouter();
  const [msg, setMsg] = useState(null);

  const handleFunFactMsg = () => {
    if (!message) {
      let abzNews = getStorageData('abz.news');

      if (!abzNews) {
        return;
      }

      const news = abzNews[randomInt(50)];
      const filteredMsg = (
        <>
          <h3>Looking for a new series to watch!!!</h3>
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
              {msg}
              Please login to view this page.
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
