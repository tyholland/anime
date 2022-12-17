import React, { useEffect, useState } from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import CharacterMetadata from './characterMetadata';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import styles from './character.module.css';
import { useRouter } from 'next/router';

const Character = ({ players }) => {
  const router = useRouter();
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

  const handleRowClick = (item) => {
    router.push('/bio/123');
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <CharacterMetadata />
      <$GlobalContainer className="grid character">
        <DataGrid columns={columns} rows={rows} className={styles.fillGrid} onRowClick={(val) => handleRowClick(val)} />
      </$GlobalContainer>
    </>
  );
};

export default Character;
