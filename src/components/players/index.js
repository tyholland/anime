import React, { useEffect, useState } from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { useRouter } from 'next/router';
import * as Styles from './players.style';
import TextField from 'Components/text-field';
import Button from 'Components/button';
import { getAffinitiesTypes } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import { useAppContext } from 'src/hooks/context';

const Players = ({
  data,
  changeRoster = false,
  setPlayerList,
  playerList,
  field,
  page = null,
  leagueWeek,
  openDraft,
  series = 'all',
}) => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [rows, setRows] = useState([]);
  const [listOfPlayers, setListOfPlayers] = useState(data);
  const [seriesArr, setSeriesArr] = useState([]);
  const [rankArr, setRankArr] = useState([]);
  const [seriesName, setSeriesName] = useState(series);
  const [rankName, setRankName] = useState('all');
  const [powerLevel, setPowerLevel] = useState('none');
  const [searchWord, setSearchWord] = useState(null);
  const [isFilter, setIsFilter] = useState(false);
  const columns = [
    {
      key: 'fullName',
      name: 'Name',
    },
    {
      key: 'rank',
      name: 'Rank',
    },
    {
      key: 'cost',
      name: 'Points',
    },
    {
      key: 'series',
      name: 'Anime Series',
    },
  ];
  const mobileColumns = [
    {
      key: 'fullName',
      name: 'Name',
    },
    {
      key: 'rank',
      name: 'Rank',
    },
    {
      key: 'cost',
      name: 'Points',
    },
  ];
  const teamColumns = [
    {
      key: 'fullName',
      name: 'Name',
    },
    {
      key: 'rank',
      name: 'Rank',
    },
    {
      key: 'cost',
      name: 'Points',
    },
    {
      key: 'affinity',
      name: 'Affinities',
    },
  ];
  const teamMobileColumns = [
    {
      key: 'name',
      name: 'Name',
    },
    {
      key: 'cost',
      name: 'Points',
    },
    {
      key: 'affinity',
      name: 'Affinities',
    },
  ];
  const adminColumns = [
    {
      key: 'fullName',
      name: 'Name',
    },
    {
      key: 'rank',
      name: 'Rank',
    },
    {
      key: 'cost',
      name: 'Points',
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
  const adminMobileColumns = [
    {
      key: 'fullName',
      name: 'Name',
    },
    {
      key: 'rank',
      name: 'Rank',
    },
    {
      key: 'cost',
      name: 'Points',
    },
    {
      key: 'power',
      name: 'Power',
    },
  ];

  const getCharacters = () => {
    const playerArr = [];
    const series = [];
    const rank = [];

    if (powerLevel === 'none') {
      listOfPlayers?.sort((a, b) => {
        if (a.full_name < b.full_name) {
          return -1;
        }
        if (a.full_name > b.full_name) {
          return 1;
        }
        return 0;
      });
    }

    listOfPlayers?.forEach((item) => {
      series.push(item.series);
      rank.push(item.category);
      const affinity = getAffinitiesTypes(item);

      if (!!page && page === 'admin') {
        playerArr.push({
          fullName: item.full_name,
          name: item.name,
          rank: item.category,
          cost: item.cost,
          power: item.power_level,
          series: item.series,
          affinity: affinity.join(', '),
          width: 200,
          id: item.id,
          all: item,
        });

        return;
      }

      playerArr.push({
        fullName: item.full_name,
        name: item.name,
        rank: item.category,
        cost: item.bye_week === leagueWeek ? 'Bye' : item.cost,
        series: item.series,
        affinity: affinity.join(', '),
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
    if (changeRoster) {
      playerList[field] = item;

      addEvent('Bracket Selection', {
        player: item.fullName,
        userId: currentUser?.user_id
      });

      setPlayerList(playerList);
      return;
    }

    if (!page) {
      router.push(`/bio?character=${item.id}`);
    }

    if (page === 'admin') {
      setPlayerList(item);
      return;
    }

    if (page === 'draft') {
      openDraft(item);
      return;
    }

    if (page === 'roster') {
      openDraft(item);
      return;
    }
  };

  const handleRankFilter = (e) => {
    setRankName(e.target.value);

    if (e.target.value === 'all') {
      let playersList = data;

      if (seriesName !== 'all') {
        playersList = data.filter((item) => {
          if (searchWord) {
            return (
              item.series === seriesName &&
              item.full_name.toLowerCase().includes(searchWord.toLowerCase())
            );
          }

          return item.series === seriesName;
        });

        setListOfPlayers(playersList);
        return;
      }

      if (searchWord) {
        playersList = data.filter((item) => {
          return item.full_name
            .toLowerCase()
            .includes(searchWord.toLowerCase());
        });

        setListOfPlayers(playersList);
        return;
      }

      setListOfPlayers(playersList);
      return;
    }

    let playersList = data.filter((item) => {
      if (searchWord) {
        return (
          item.category === e.target.value &&
          item.full_name.toLowerCase().includes(searchWord.toLowerCase())
        );
      }
      return item.category === e.target.value;
    });

    if (seriesName !== 'all') {
      playersList = data.filter((item) => {
        if (searchWord) {
          return (
            item.category === e.target.value &&
            item.series === seriesName &&
            item.full_name.toLowerCase().includes(searchWord.toLowerCase())
          );
        }

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
          if (searchWord) {
            return (
              item.category === rankName &&
              item.full_name.toLowerCase().includes(searchWord.toLowerCase())
            );
          }

          return item.category === rankName;
        });

        setListOfPlayers(playersList);
        return;
      }

      if (searchWord) {
        playersList = data.filter((item) => {
          return item.full_name
            .toLowerCase()
            .includes(searchWord.toLowerCase());
        });

        setListOfPlayers(playersList);
        return;
      }

      setListOfPlayers(playersList);
      return;
    }

    let playersList = data.filter((item) => {
      if (searchWord) {
        return (
          item.series === e.target.value &&
          item.full_name.toLowerCase().includes(searchWord.toLowerCase())
        );
      }

      return item.series === e.target.value;
    });

    if (rankName !== 'all') {
      playersList = data.filter((item) => {
        if (searchWord) {
          return (
            item.series === e.target.value &&
            item.category === rankName &&
            item.full_name.toLowerCase().includes(searchWord.toLowerCase())
          );
        }

        return item.series === e.target.value && item.category === rankName;
      });
    }

    setListOfPlayers(playersList);
  };

  const handleSearchWord = (search) => {
    setSearchWord(search);

    const playersList = data.filter((item) => {
      return item.full_name.toLowerCase().includes(search.toLowerCase());
    });

    setListOfPlayers(playersList);
  };

  const handleFilterDisplay = () => {
    setIsFilter(!isFilter);
  };

  const handlePowerSort = (e) => {
    setPowerLevel(e.target.value);
    let playersList = data;

    if (e.target.value === 'none') {
      if (rankName !== 'all') {
        playersList = playersList.filter((item) => {
          if (searchWord) {
            return (
              item.category === rankName &&
              item.full_name.toLowerCase().includes(searchWord.toLowerCase())
            );
          }

          return item.category === rankName;
        });
      }

      if (seriesName !== 'all') {
        playersList = playersList.filter((item) => {
          if (searchWord) {
            return (
              item.series === seriesName &&
              item.full_name.toLowerCase().includes(searchWord.toLowerCase())
            );
          }

          return item.series === seriesName;
        });
      }

      setListOfPlayers(playersList);
      return;
    }

    if (e.target.value === 'low') {
      playersList = data.sort((a, b) => {
        if (a.cost < b.cost) {
          return -1;
        }
        if (a.cost > b.cost) {
          return 1;
        }
        return 0;
      });

      if (rankName !== 'all') {
        playersList = playersList.filter((item) => {
          if (searchWord) {
            return (
              item.category === rankName &&
              item.full_name.toLowerCase().includes(searchWord.toLowerCase())
            );
          }

          return item.category === rankName;
        });
      }

      if (seriesName !== 'all') {
        playersList = playersList.filter((item) => {
          if (searchWord) {
            return (
              item.series === seriesName &&
              item.full_name.toLowerCase().includes(searchWord.toLowerCase())
            );
          }

          return item.series === seriesName;
        });
      }

      setListOfPlayers(playersList);
      return;
    }

    playersList = data.sort((a, b) => {
      if (a.cost > b.cost) {
        return -1;
      }
      if (a.cost < b.cost) {
        return 1;
      }
      return 0;
    });

    if (rankName !== 'all') {
      playersList = playersList.filter((item) => {
        if (searchWord) {
          return (
            item.category === rankName &&
            item.full_name.toLowerCase().includes(searchWord.toLowerCase())
          );
        }

        return item.category === rankName;
      });
    }

    if (seriesName !== 'all') {
      playersList = playersList.filter((item) => {
        if (searchWord) {
          return (
            item.series === seriesName &&
            item.full_name.toLowerCase().includes(searchWord.toLowerCase())
          );
        }

        return item.series === seriesName;
      });
    }

    setListOfPlayers(playersList);
  };

  useEffect(() => {
    getCharacters();
  }, [listOfPlayers, powerLevel]);

  useEffect(() => {
    setListOfPlayers(data);
  }, [data]);

  useEffect(() => {
    const seriesObj = {
      target: {
        value: series
      }
    };
    
    handleSeriesFilter(seriesObj);

    setSeriesArr([series]);
  }, [series]);

  return (
    <>
      <Styles.PlayersStyles />
      <Styles.PlayersFilter>
        <TextField
          placeholder="Search for character..."
          onChange={(val) => handleSearchWord(val)}
        />
        <Button
          btnText="Filter"
          btnColor="primary"
          customBtnClass="small"
          btnFunction={handleFilterDisplay}
        />
      </Styles.PlayersFilter>
      {isFilter && (
        <Styles.PlayersFilter className={`special${changeRoster ? ' team' : ''}`}>
          {!changeRoster && (
            <>
              <div className="rankFilter">
                <label>Rank</label>
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
              {page !== 'draft' && (
                <div className="seriesFilter">
                  <label>Series</label>
                  <select
                    onChange={(val) => handleSeriesFilter(val)}
                    defaultValue={series}
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
              )}
            </>
          )}
          <div className="powerFilter">
            <label>Sort Points</label>
            <select
              onChange={(val) => handlePowerSort(val)}
              defaultValue={powerLevel}
            >
              <option value="none">None</option>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </div>
        </Styles.PlayersFilter>
      )}
      <div className="desktopGrid">
        <DataGrid
          columns={
            changeRoster || page === 'roster'
              ? teamColumns
              : page === 'admin'
                ? adminColumns
                : columns
          }
          rows={rows}
          className={
            changeRoster || page === 'roster'
              ? 'fillModal'
              : page === 'draft'
                ? 'fillDraft'
                : page === 'admin'
                  ? 'fillAdmin'
                  : 'fillGrid'
          }
          onRowClick={(val) => handleRowClick(val)}
        />
      </div>
      <div className="mobileGrid">
        <DataGrid
          columns={
            changeRoster || page === 'roster'
              ? teamMobileColumns
              : page === 'admin'
                ? adminMobileColumns
                : mobileColumns
          }
          rows={rows}
          className={
            changeRoster || page === 'roster'
              ? 'fillModal'
              : page === 'draft'
                ? 'fillDraft'
                : page === 'admin'
                  ? 'fillAdmin'
                  : 'fillGrid'
          }
          onRowClick={(val) => handleRowClick(val)}
        />
      </div>
    </>
  );
};

export default Players;
