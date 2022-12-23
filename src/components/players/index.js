import React, { useEffect, useState } from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { useRouter } from 'next/router';
import { $PlayersFilter, $PlayersStyles } from './players.style';

const Players = ({ data }) => {
  const router = useRouter();
  const [rows, setRows] = useState([]);
  const [listOfPlayers, setListOfPlayers] = useState(data);
  const [seriesArr, setSeriesArr] = useState([]);
  const [rankArr, setRankArr] = useState([]);
  const [seriesName, setSeriesName] = useState('all');
  const [rankName, setRankName] = useState('all');
  const columns = [
    {
      key: 'name',
      name: 'Name',
    },
    {
      key: 'rank',
      name: 'Rank',
    },
    {
      key: 'power',
      name: 'Power Level',
    },
    {
      key: 'series',
      name: 'Anime Series',
    },
  ];

  const getCharacters = async () => {
    const playerArr = [];
    const series = [];
    const rank = [];

    listOfPlayers.sort(function (a, b) {
      if (a.full_name < b.full_name) {
        return -1;
      }
      if (a.full_name > b.full_name) {
        return 1;
      }
      return 0;
    });

    listOfPlayers.forEach((item) => {
      series.push(item.series);
      rank.push(item.category);

      playerArr.push({
        name: item.full_name,
        rank: item.category,
        power: item.power_level,
        series: item.series,
        width: 200,
        id: item.id,
      });
    });

    const uniqueSeries = [...new Set(series)];
    const uniqueRank = [...new Set(rank)];

    setRows(playerArr);
    setSeriesArr(uniqueSeries.sort());
    setRankArr(uniqueRank.sort());
  };

  const handleRowClick = (item) => {
    router.push(`/bio/${item.id}`);
  };

  const handleRankFilter = (e) => {
    setRankName(e.target.value);

    if (e.target.value === 'all') {
      let playersList = data;

      if (rankName !== 'all') {
        playersList = data.filter((item) => {
          return item.series === seriesName;
        });
      }

      setListOfPlayers(playersList);
      return;
    }

    let playersList = data.filter((item) => {
      return item.category === e.target.value;
    });

    if (seriesName !== 'all') {
      playersList = data.filter((item) => {
        return item.category === e.target.value && item.series === seriesName;
      });
    }

    setListOfPlayers(playersList);
  };

  const handleSeriesFilter = (e) => {
    setSeriesName(e.target.value);

    if (e.target.value === 'all') {
      let playersList = data;

      if (rankName !== 'all') {
        playersList = data.filter((item) => {
          return item.category === rankName;
        });
      }

      setListOfPlayers(playersList);
      return;
    }

    let playersList = data.filter((item) => {
      return item.series === e.target.value;
    });

    if (rankName !== 'all') {
      playersList = data.filter((item) => {
        return item.series === e.target.value && item.category === rankName;
      });
    }

    setListOfPlayers(playersList);
  };

  useEffect(() => {
    getCharacters();
  }, [listOfPlayers]);

  return (
    <>
      <$PlayersStyles />
      <$PlayersFilter>
        <div>
          <label>Filter by rank</label>
          <select
            onChange={(val) => handleRankFilter(val)}
            defaultValue={rankArr[0] === rankName}
          >
            <option value="all">All</option>
            {rankArr.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Filter by series</label>
          <select
            onChange={(val) => handleSeriesFilter(val)}
            defaultValue={seriesArr[0] === seriesName}
          >
            <option value="all">All</option>
            {seriesArr.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </$PlayersFilter>
      <DataGrid
        columns={columns}
        rows={rows}
        className="fillGrid"
        onRowClick={(val) => handleRowClick(val)}
      />
    </>
  );
};

export default Players;
