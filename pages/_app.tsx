import Header from 'Components/header/header';
import * as GlobalStyles from 'Styles/global.style';
import { UserWrapper } from 'Hooks/user';
import { useEffect, useState } from 'react';
import { addEvent } from 'Utils/amplitude';
import { firebaseApp } from 'Utils/firebase';
import Footer from 'Components/footer/footer';
import Notification from 'Modals/notification/notification';
import { FRIDAY, MONDAY, SUNDAY, THURSDAY, alerts } from 'Utils/constants';
import { LeagueWrapper } from 'Hooks/league';
import { TeamWrapper } from 'Hooks/team';
import { getDate, getStorageData, setStorageData } from 'Utils/index';

const MyApp = ({ Component, pageProps, router }) => {
  firebaseApp();
  const [msg, setMsg] = useState(null);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false);

  const handleAlertMsg = (label: string, message: string) => {
    const date = getDate();
    const theDate = `${date.month()}/${date.date()}/${date.year()}`;
    const previousDate = getStorageData(label);

    if (previousDate === theDate) {
      return;
    }

    setMsg(message);
    setIsAlertModalOpen(true);
    setStorageData(label, JSON.stringify(theDate));
  };

  const closeModal = () => {
    setIsAlertModalOpen(false);
    setMsg(null);
  };

  const handleAlerts = () => {
    const date = getDate();
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
