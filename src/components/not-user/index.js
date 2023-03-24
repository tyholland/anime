import Button from 'Components/button';
import React, { useEffect, useState } from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $NotUserContent, $NotUserBtnWrapper } from './notUser.style';
import { useRouter } from 'next/router';
import { randomInt } from 'Utils/index';

const NotUser = ({ message = null }) => {
  const router = useRouter();
  const [msg, setMsg] = useState(null);

  const handleFunFactMsg = () => {
    if (!message) {
      let abzNews =
        typeof window !== 'undefined' &&
        window.localStorage.getItem('abz.news');

      if (!abzNews) {
        return;
      }

      abzNews = JSON.parse(abzNews);
      const news = abzNews[randomInt()];
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
      <$GlobalContainer className="bgImage notFound">
        <$NotUserContent>
          {!!msg && (
            <div>
              {msg}
              Please login to view this page.
            </div>
          )}
          {!msg && <div>Please login to view this page.</div>}
        </$NotUserContent>
        <$NotUserBtnWrapper>
          <Button
            btnText="Login To Continue"
            redirect={`/login?continue=${router.asPath}`}
            btnColor="primary"
            customBtnClass="medium"
          />
        </$NotUserBtnWrapper>
      </$GlobalContainer>
    </>
  );
};

export default NotUser;
