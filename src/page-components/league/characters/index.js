import React, { useEffect, useState } from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import LeagueCharacterMetadata from './leagueCharacterMetadata';
import 'react-data-grid/lib/styles.css';
import DataGrid, { SelectColumn } from 'react-data-grid';
import styles from './leaguecharacters.module.css';

const LeagueCharacters = ({ players }) => {
  const [rows, setRows] = useState([]);

  const columns = [
    SelectColumn,
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
      name: 'Cost'
    }
  ];

  const getCharacters = async () => {
    const playerArr = [];

    players.forEach(item => {
      playerArr.push({
        name: item.full_name,
        position: item.category,
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

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <LeagueCharacterMetadata />
      <$GlobalContainer className="grid leagueCharacter">
        <div>Remaining Points: 9000</div>
        <DataGrid
          columns={columns}
          rows={rows}
          className={styles.fillGrid}
          onRowClick={(val) => handleRowClick(val)}
        />
      </$GlobalContainer>
    </>
  );
};

export default LeagueCharacters;
