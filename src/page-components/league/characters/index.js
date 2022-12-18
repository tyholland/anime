import React, { useEffect, useState } from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import LeagueCharacterMetadata from './leagueCharacterMetadata';
import 'react-data-grid/lib/styles.css';
import DataGrid, { SelectColumn } from 'react-data-grid';
import { $LeagueCharacterStyles, $LeagueCharacterFilter } from './leagueCharacters.style';
import BackLink from 'Components/back-link';

const LeagueCharacters = ({ players }) => {
  const [rows, setRows] = useState([]);
  const [listOfPlayers, setListOfPlayers] = useState(players);

  const columns = [
    SelectColumn,
    {
      key: 'name',
      name: 'Name'
    },
    {
      key: 'rank',
      name: 'Rank'
    },
    {
      key: 'power',
      name: 'Cost'
    }
  ];

  const getCharacters = async () => {
    const playerArr = [];

    listOfPlayers.forEach(item => {
      playerArr.push({
        name: item.full_name,
        rank: item.category,
        power: item.power_level,
        width: 200,
        id: item.id,
      });
    });

    setRows(playerArr);
  };

  const handleRowClick = async (item) => {
    console.log(item);
  };

  const handleFilter = (e) => {
    if (e.target.value === 'all') {
      setListOfPlayers(players);
      return;
    }

    const playersList = players.filter(item => {
      return item.category === e.target.value;
    });

    setListOfPlayers(playersList);
  };

  useEffect(() => {
    getCharacters();
  }, [listOfPlayers]);

  return (
    <>
      <$LeagueCharacterStyles />
      <LeagueCharacterMetadata />
      <BackLink />
      <$GlobalContainer className="grid leagueCharacter">
        <div>Remaining Points: 9000</div>
        <$LeagueCharacterFilter>
          <label>Filter by rank</label>
          <select onChange={(val) => handleFilter(val)}>
            <option value="all">All</option>
            <option value="Captain">Captain</option>
            <option value="Brawler">Brawler</option>
            <option value="Support">Support</option>
            <option value="Villain">Villain</option>
          </select>
        </$LeagueCharacterFilter>
        <DataGrid
          columns={columns}
          rows={rows}
          className="fillGrid"
          onRowClick={(val) => handleRowClick(val)}
        />
      </$GlobalContainer>
    </>
  );
};

export default LeagueCharacters;
