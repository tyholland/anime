import Header from 'Components/header';
import { $GlobalStyles } from 'Styles/global.style';
import { AppWrapper } from 'src/hooks/context';
import { useEffect, useState } from 'react';
import { addEvent } from 'Utils/amplitude';
import { firebaseApp } from 'Utils/firebase';
import Footer from 'Components/footer';
import Notification from 'src/modals/notification';
import dayjs from 'dayjs';
import { FRIDAY, MONDAY, SUNDAY, THURSDAY, alerts } from 'Utils/constants.js';

const MyApp = ({ Component, pageProps, router }) => {
  firebaseApp();
  const [msg, setMsg] = useState(null);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const handleAlertMsg = (label, message) => {
    const theDate = `${dayjs().month()}/${dayjs().date()}/${dayjs().year()}`;
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
    const dayOfTheWeek = dayjs().day();
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
    <AppWrapper>
      <$GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Notification
        message={msg}
        modalIsOpen={isAlertModalOpen}
        closeModal={closeModal}
      />
    </AppWrapper>
  );
};

export default MyApp;
