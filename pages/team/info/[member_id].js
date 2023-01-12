import TeamInfo from 'PageComponents/team/team-info';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { member_id } = query;

  return {
    props: {
      memberId: member_id,
    },
  };
};

export default TeamInfo;
