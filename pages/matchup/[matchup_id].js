import ViewMatchup from 'PageComponents/view-matchup';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { matchup_id } = query;

  return {
    props: {
      matchupId: matchup_id,
    },
  };
};

export default ViewMatchup;
