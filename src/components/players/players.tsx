import React, { useEffect, useState } from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid, { Row } from 'react-data-grid';
import { useRouter } from 'next/router';
import * as Styles from './players.style';
import TextField from 'Components/text-field/text-field';
import Button from 'Components/button/button';
import { getAffinitiesTypes } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import { useUserContext } from 'Hooks/user';
import { PlayersProps } from 'Utils/types';

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
}: PlayersProps) => {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const [rows, setRows] = useState<Row[]>([]);
  const [listOfPlayers, setListOfPlayers] = useState<Record<string, any>>(data);
  const [seriesArr, setSeriesArr] = useState<Record<string, any>>([]);
  const [rankArr, setRankArr] = useState<Record<string, any>>([]);
  const [seriesName, setSeriesName] = useState<string>(series);
  const [rankName, setRankName] = useState<string>('all');
  const [powerLevel, setPowerLevel] = useState<string>('none');
  const [searchWord, setSearchWord] = useState<string | null>(null);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const columns: DataGrid.Column<unknown>[] = [
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
  const mobileColumns: DataGrid.Column<unknown>[] = [
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
  const teamColumns: DataGrid.Column<unknown>[] = [
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
  const teamMobileColumns: DataGrid.Column<unknown>[] = [
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
  const adminColumns: DataGrid.Column<unknown>[] = [
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
  const adminMobileColumns: DataGrid.Column<unknown>[] = [
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
      listOfPlayers?.sort((a: Record<string, any>, b: Record<string, any>) => {
        if (a.full_name < b.full_name) {
          return -1;
        }
        if (a.full_name > b.full_name) {
          return 1;
        }
        return 0;
      });
    }

    listOfPlayers?.forEach((item: Record<string, any>) => {
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

    const uniqueSeries = series.filter((val: string, index: number, arr: Record<string, any>) => {
      return arr.indexOf(val) === index;
    });
    const uniqueRank = rank.filter((val: string, index: number, arr: Record<string, any>) => {
      return arr.indexOf(val) === index;
    });

    setRows(playerArr);
    setSeriesArr(uniqueSeries.sort());
    setRankArr(uniqueRank.sort());
  };

  const handleRowClick = (item: Record<string, any>) => {
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

  const handleRankFilter = (e: Record<string, any>) => {
    setRankName(e.target.value);

    if (e.target.value === 'all') {
      let playersList = data;

      if (seriesName !== 'all') {
        playersList = data.filter((item: Record<string, any>) => {
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
        playersList = data.filter((item: Record<string, any>) => {
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

    let playersList = data.filter((item: Record<string, any>) => {
      if (searchWord) {
        return (
          item.category === e.target.value &&
          item.full_name.toLowerCase().includes(searchWord.toLowerCase())
        );
      }
      return item.category === e.target.value;
    });

    if (seriesName !== 'all') {
      playersList = data.filter((item: Record<string, any>) => {
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

  const handleSeriesFilter = (e: Record<string, any>) => {
    setSeriesName(e.target.value);

    if (e.target.value === 'all') {
      let playersList = data;

      if (rankName !== 'all') {
        playersList = data.filter((item: Record<string, any>) => {
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
        playersList = data.filter((item: Record<string, any>) => {
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

    let playersList = data.filter((item: Record<string, any>) => {
      if (searchWord) {
        return (
          item.series === e.target.value &&
          item.full_name.toLowerCase().includes(searchWord.toLowerCase())
        );
      }

      return item.series === e.target.value;
    });

    if (rankName !== 'all') {
      playersList = data.filter((item: Record<string, any>) => {
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

  const handleSearchWord = (search: string) => {
    setSearchWord(search);

    const playersList = data.filter((item: Record<string, any>) => {
      return item.full_name.toLowerCase().includes(search.toLowerCase());
    });

    setListOfPlayers(playersList);
  };

  const handleFilterDisplay = () => {
    setIsFilter(!isFilter);
  };

  const handlePowerSort = (e: Record<string, any>) => {
    setPowerLevel(e.target.value);
    let playersList = data;

    if (e.target.value === 'none') {
      if (rankName !== 'all') {
        playersList = playersList.filter((item: Record<string, any>) => {
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
        playersList = playersList.filter((item: Record<string, any>) => {
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
      playersList = data.sort((a: Record<string, any>, b: Record<string, any>) => {
        if (a.cost < b.cost) {
          return -1;
        }
        if (a.cost > b.cost) {
          return 1;
        }
        return 0;
      });

      if (rankName !== 'all') {
        playersList = playersList.filter((item: Record<string, any>) => {
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
        playersList = playersList.filter((item: Record<string, any>) => {
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

    playersList = data.sort((a: Record<string, any>, b: Record<string, any>) => {
      if (a.cost > b.cost) {
        return -1;
      }
      if (a.cost < b.cost) {
        return 1;
      }
      return 0;
    });

    if (rankName !== 'all') {
      playersList = playersList.filter((item: Record<string, any>) => {
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
      playersList = playersList.filter((item: Record<string, any>) => {
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
          onChange={(val: string) => handleSearchWord(val)}
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
                  onChange={(val: Record<string, any>) => handleRankFilter(val)}
                  defaultValue={rankArr[0] === rankName ? rankName : 'all'}
                >
                  <option value="all">All</option>
                  {rankArr.map((item: string) => {
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
                    {seriesArr.map((item: string) => {
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
          rowGetter={rows}
          rowsCount={rows.length}
          // className={
          //   changeRoster || page === 'roster'
          //     ? 'fillModal'
          //     : page === 'draft'
          //       ? 'fillDraft'
          //       : page === 'admin'
          //         ? 'fillAdmin'
          //         : 'fillGrid'
          // }
          onRowClick={(rowIdx, row) => handleRowClick(row)}
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
          rowGetter={rows}
          rowsCount={rows.length}
          // className={
          //   changeRoster || page === 'roster'
          //     ? 'fillModal'
          //     : page === 'draft'
          //       ? 'fillDraft'
          //       : page === 'admin'
          //         ? 'fillAdmin'
          //         : 'fillGrid'
          // }
          onRowClick={(val, row) => handleRowClick(row)}
        />
      </div>
    </>
  );
};

export default Players;