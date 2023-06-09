import Header from 'Components/header/header';
import * as GlobalStyles from 'Styles/global.style';
import { UserWrapper } from 'src/hooks/user';
import { useEffect, useState } from 'react';
import { addEvent } from 'Utils/amplitude';
import { firebaseApp } from 'Utils/firebase';
import Footer from 'Components/footer/footer';
import Notification from 'src/modals/notification/notification';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { FRIDAY, MONDAY, SUNDAY, THURSDAY, alerts } from 'Utils/constants.js';
import { LeagueWrapper } from 'src/hooks/league';
import { TeamWrapper } from 'src/hooks/team';

const MyApp = ({ Component, pageProps, router }) => {
  firebaseApp();
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [msg, setMsg] = useState(null);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const handleAlertMsg = (label, message) => {
    const currentDate = new Date();
    const date = dayjs.tz(currentDate, 'America/New_York');
    const theDate = `${date.month()}/${date.date()}/${date.year()}`;
    const previousDate = window.localStorage.getItem(label);

    if (previousDate === theDate) {
      return;
    }

    setMsg(message);
    setIsAlertModalOpen(true);
    window.localStorage.setItem(label, theDate);
  };

  const closeModal = () => {
    setIsAlertModalOpen(false);
    setMsg(null);
  };

  const handleAlerts = () => {
    const currentDate = new Date();
    const date = dayjs.tz(currentDate, 'America/New_York');
    const dayOfTheWeek = date.day();
    const eligiblePage = router.state.pathname !== '/login' && router.state.pathname !== '/sign-up';

    if (eligiblePage) {
      switch (dayOfTheWeek) {
      case MONDAY:
        handleAlertMsg('abz.monday', alerts.start.msg);
        break;
      case THURSDAY:
        handleAlertMsg('abz.thursday', alerts.voting.msg);
        break;
      case FRIDAY:
        handleAlertMsg('abz.friday', alerts.damage.msg);
        break;
      case SUNDAY:
        handleAlertMsg('abz.sunday', alerts.affinity.msg);
        break;
      default:
        break;
      }
    }
  };

  useEffect(() => {
    const handleRouteChange = () => {
      addEvent('PageView', {
        path: router.state.pathname,
      });
      handleAlerts();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <UserWrapper>
      <LeagueWrapper>
        <TeamWrapper>
          <GlobalStyles.GlobalStyles />
          <Header />
          <Component {...pageProps} />
          <Footer />
          <Notification
            message={msg}
            modalIsOpen={isAlertModalOpen}
            closeModal={closeModal}
          />
        </TeamWrapper>
      </LeagueWrapper>
    </UserWrapper>
  );
};

export default MyApp;
