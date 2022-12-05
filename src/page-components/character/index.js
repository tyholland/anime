import React, { useEffect, useState } from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import CharacterMetadata from './characterMetadata';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { getPlayers } from 'src/requests/character';
import styles from './character.module.css';

const Character = () => {
  const [rows, setRows] = useState([]);
  const columns = [
    {
      key: 'name',
      name: 'Name'
    },
    {
      key: 'position',
      name: 'Position'
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
    const players = await getPlayers();
    const playerArr = [];

    players.forEach(item => {
      playerArr.push({
        name: item.full_name,
        position: item.category,
        power: item.power_level,
        series: item.series,
        width: 200
      });
    });

    setRows(playerArr);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <CharacterMetadata />
      <$GlobalContainer className="grid">
        <DataGrid columns={columns} rows={rows} className={styles.fillGrid} />
      </$GlobalContainer>
    </>
  );
};

export default Character;
