import React, { useEffect, useState } from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import CharacterMetadata from './characterMetadata';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { useRouter } from 'next/router';
import BackLink from 'Components/back-link';
import { $CharacterFilter, $CharacterStyles } from './character.style';

const Character = ({ players }) => {
  const router = useRouter();
  const [rows, setRows] = useState([]);
  const [listOfPlayers, setListOfPlayers] = useState(players);
  const columns = [
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
      name: 'Power Level'
    },
    {
      key: 'series',
      name: 'Anime Series'
    }
  ];

  const getCharacters = async () => {
    const playerArr = [];

    listOfPlayers.forEach(item => {
      playerArr.push({
        name: item.full_name,
        rank: item.category,
        power: item.power_level,
        series: item.series,
        width: 200,
        id: item.id,
      });
    });

    setRows(playerArr);
  };

  const handleRowClick = (item) => {
    router.push(`/bio/${item.id}`);
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
      <$CharacterStyles />
      <CharacterMetadata />
      <BackLink />
      <$GlobalContainer className="grid character">
        <$CharacterFilter>
          <label>Filter by rank</label>
          <select onChange={(val) => handleFilter(val)}>
            <option value="all">All</option>
            <option value="Captain">Captain</option>
            <option value="Brawler">Brawler</option>
            <option value="Support">Support</option>
            <option value="Villain">Villain</option>
          </select>
        </$CharacterFilter>
        <DataGrid columns={columns} rows={rows} className="fillGrid" onRowClick={(val) => handleRowClick(val)} />
      </$GlobalContainer>
    </>
  );
};

export default Character;
