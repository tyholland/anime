import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as Styles from './players.style';
import TextField from 'Components/text-field/text-field';
import Button from 'Components/button/button';
import { getAffinitiesTypes } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import { useUserContext } from 'Hooks/user';
import { PlayersProps } from 'Utils/types';
import * as GlobalStyles from 'Styles/global.style';

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
  const [rows, setRows] = useState<Record<string, any>>([]);
  const [listOfPlayers, setListOfPlayers] = useState<Record<string, any>>(data);
  const [seriesArr, setSeriesArr] = useState<Record<string, any>>([]);
  const [rankArr, setRankArr] = useState<Record<string, any>>([]);
  const [affinityArr, setAffinityArr] = useState<Record<string, any>>([]);
  const [seriesName, setSeriesName] = useState<string>(series);
  const [rankName, setRankName] = useState<string>('all');
  const [affinityName, setAffinityName] = useState<string>('all');
  const [powerLevel, setPowerLevel] = useState<string>('none');
  const [searchWord, setSearchWord] = useState<string | null>(null);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const columns: Record<string, any> = [
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
      name: 'Series',
    },
    {
      key: 'affinity',
      name: 'Affinity',
    },
  ];
  const mobileColumns: Record<string, any> = [
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
      name: 'Affinity',
    },
  ];
  const teamColumns: Record<string, any> = [
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
      name: 'Affinity',
    },
  ];
  const adminColumns: Record<string, any> = [
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
    {
      key: 'affinity',
      name: 'Affinity',
    },
  ];
  const adminMobileColumns: Record<string, any> = [
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
      name: 'Affinity',
    },
  ];

  const getCharacters = () => {
    const playerArr = [];
    const series = [];
    const rank = [];
    const affinities = [];

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
      affinity.forEach(item => {
        affinities.push(item);
      });

      if (!!page && page === 'admin') {
        playerArr.push({
          fullName: item.full_name,
          name: item.name,
          rank: item.category,
          cost: item.cost,
          power: item.power_level,
          series: item.series,
          affinity: affinity,
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
        affinity: affinity,
        width: 200,
        id: item.id,
      });
    });

    const uniqueSeries = series.filter(
      (val: string, index: number, arr: Record<string, any>) => {
        return arr.indexOf(val) === index;
      }
    );
    const uniqueRank = rank.filter(
      (val: string, index: number, arr: Record<string, any>) => {
        return arr.indexOf(val) === index;
      }
    );
    const uniqueAffinity = affinities.filter(
      (val: string, index: number, arr: Record<string, any>) => {
        return arr.indexOf(val) === index;
      }
    );

    setRows(playerArr);
    setSeriesArr(uniqueSeries.sort());
    setRankArr(uniqueRank.sort());
    setAffinityArr(uniqueAffinity.sort());
  };

  const getSpecificSeries = (data: Record<string, any>) => {
    return data.filter((item: Record<string, any>) => {
      return item.series === seriesName;
    });
  };

  const getSpecificRank = (data: Record<string, any>) => {
    return data.filter((item: Record<string, any>) => {
      return item.category === rankName;
    });
  };

  const getSpecificAffinity = (data: Record<string, any>) => {
    return data.filter((item: Record<string, any>) => {
      const currentAffinities = getAffinitiesTypes(item);

      return currentAffinities.some((affinity) => affinity === affinityName);
    });
  };

  const getSpecificSearch = (data: Record<string, any>) => {
    return data.filter((item: Record<string, any>) => {
      return item.full_name
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
  };

  const handleRowClick = (item: Record<string, any>) => {
    if (changeRoster) {
      playerList[field] = item;

      addEvent('Bracket Selection', {
        player: item.fullName,
        userId: currentUser?.user_id,
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

      if (searchWord) {
        playersList = getSpecificSearch(playersList);
      }

      if (seriesName !== 'all') {
        playersList = getSpecificSeries(playersList);
      }

      if (affinityName !== 'all') {
        playersList = getSpecificAffinity(playersList);
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
      playersList = getSpecificSeries(playersList);
    }

    if (affinityName !== 'all') {
      playersList = getSpecificAffinity(playersList);
    }

    setListOfPlayers(playersList);
  };

  const handleSeriesFilter = (e: Record<string, any>) => {
    setSeriesName(e.target.value);

    if (e.target.value === 'all') {
      let playersList = data;

      if (searchWord) {
        playersList = getSpecificSearch(playersList);
      }

      if (rankName !== 'all') {
        playersList = getSpecificRank(playersList);
      }

      if (affinityName !== 'all') {
        playersList = getSpecificAffinity(playersList);
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
      playersList = getSpecificRank(playersList);
    }

    if (affinityName !== 'all') {
      playersList = getSpecificAffinity(playersList);
    }

    setListOfPlayers(playersList);
  };

  const handleAffinityFilter = (e: Record<string, any>) => {
    setAffinityName(e.target.value);

    if (e.target.value === 'all') {
      let playersList = data;

      if (searchWord) {
        playersList = getSpecificSearch(playersList);
      }

      if (seriesName !== 'all') {
        playersList = getSpecificSeries(playersList);
      }

      if (rankName !== 'all') {
        playersList = getSpecificRank(playersList);
      }

      setListOfPlayers(playersList);
      return;
    }

    let playersList = data.filter((item: Record<string, any>) => {
      const currentAffinities = getAffinitiesTypes(item);

      if (searchWord) {
        return (
          currentAffinities.some((affinity) => affinity === e.target.value) &&
          item.full_name.toLowerCase().includes(searchWord.toLowerCase())
        );
      }

      return currentAffinities.some((affinity) => affinity === e.target.value);
    });

    if (seriesName !== 'all') {
      playersList = getSpecificSeries(playersList);
    }

    if (rankName !== 'all') {
      playersList = getSpecificRank(playersList);
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
      if (searchWord) {
        playersList = getSpecificSearch(playersList);
      }

      if (rankName !== 'all') {
        playersList = getSpecificRank(playersList);
      }

      if (seriesName !== 'all') {
        playersList = getSpecificSeries(playersList);
      }

      if (affinityName !== 'all') {
        playersList = getSpecificAffinity(playersList);
      }

      setListOfPlayers(playersList);
      return;
    }

    if (e.target.value === 'low') {
      playersList = data.sort(
        (a: Record<string, any>, b: Record<string, any>) => {
          if (a.cost < b.cost) {
            return -1;
          }
          if (a.cost > b.cost) {
            return 1;
          }
          return 0;
        }
      );

      if (searchWord) {
        playersList = getSpecificSearch(playersList);
      }

      if (rankName !== 'all') {
        playersList = getSpecificRank(playersList);
      }

      if (seriesName !== 'all') {
        playersList = getSpecificSeries(playersList);
      }

      if (affinityName !== 'all') {
        playersList = getSpecificAffinity(playersList);
      }

      setListOfPlayers(playersList);
      return;
    }

    playersList = data.sort(
      (a: Record<string, any>, b: Record<string, any>) => {
        if (a.cost > b.cost) {
          return -1;
        }
        if (a.cost < b.cost) {
          return 1;
        }
        return 0;
      }
    );

    if (rankName !== 'all') {
      playersList = getSpecificRank(playersList);
    }

    if (seriesName !== 'all') {
      playersList = getSpecificSeries(playersList);
    }

    if (affinityName !== 'all') {
      playersList = getSpecificAffinity(playersList);
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
        value: series,
      },
    };

    handleSeriesFilter(seriesObj);
  }, [series]);

  const theColumn =
    changeRoster || page === 'roster'
      ? teamColumns
      : page === 'admin'
        ? adminColumns
        : columns;

  const theMobileColumn =
    changeRoster || page === 'roster'
      ? teamColumns
      : page === 'admin'
        ? adminMobileColumns
        : mobileColumns;

  return (
    <>
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
        <Styles.PlayersFilter
          className={`special ${page} ${changeRoster ? 'team' : ''}`}
        >
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
              {page === 'character' && (
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
              {page !== 'character' && (
                <div className="affinityFilter">
                  <label>Affinity</label>
                  <select
                    onChange={(val) => handleAffinityFilter(val)}
                  >
                    <option value="all">All</option>
                    {affinityArr.map((item: string) => {
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
      <Styles.PlayersGrid className={`desktopGrid ${page}`}>
        {rows.length > 0 && (
          <>
            <Styles.PlayersRowHead>
              {theColumn.map((column: Record<string, any>) => {
                return (
                  <div key={column.key} className={column.name.toLowerCase()}>
                    {column.name}
                  </div>
                );
              })}
            </Styles.PlayersRowHead>
            <Styles.PlayersRowSection className={page}>
              {rows.map((row: Record<string, any>) => {
                return (
                  <Styles.PlayersRow
                    key={row.id}
                    onClick={() => handleRowClick(row)}
                  >
                    <div className="name"><span>{row.fullName}</span></div>
                    <div className="rank">{row.rank}</div>
                    <div className="points">{row.cost}</div>
                    { !(changeRoster || page === 'roster')  && <div className="series"><span>{row.series}</span></div> }
                    <div className="affinity">
                      {row.affinity.map((item: string, index: number) => {
                        const affinity = item === 'no affinity' ? 'noAffinity' : item;

                        return (
                          <GlobalStyles.GlobalCircle
                            key={index}
                            className={`team ${affinity}`}
                            title={item}
                          ></GlobalStyles.GlobalCircle>
                        );
                      })}
                    </div>
                  </Styles.PlayersRow>
                );
              })}
            </Styles.PlayersRowSection>
          </>
        )}
      </Styles.PlayersGrid>
      <Styles.PlayersGrid className={`mobileGrid ${page}`}>
        <>
          <Styles.PlayersRowHead>
            {theMobileColumn.map((column: Record<string, any>) => {
              return (
                <div key={column.key} className={column.name.toLowerCase()}>
                  {column.name}
                </div>
              );
            })}
          </Styles.PlayersRowHead>
          <Styles.PlayersRowSection className={page}>
            {rows.map((row: Record<string, any>) => {
              return (
                <Styles.PlayersRow
                  key={row.id}
                  onClick={() => handleRowClick(row)}
                >
                  <div className="name"><span>{row.name}</span></div>
                  <div className="rank">{row.rank}</div>
                  <div className="points">{row.cost}</div>
                  <div className="affinity">
                    {row.affinity.map((item: string, index: number) => {
                      const affinity = item === 'no affinity' ? 'noAffinity' : item;

                      return (
                        <GlobalStyles.GlobalCircle
                          key={index}
                          className={`team ${affinity}`}
                          title={item}
                        ></GlobalStyles.GlobalCircle>
                      );
                    })}
                  </div>
                </Styles.PlayersRow>
              );
            })}
          </Styles.PlayersRowSection>
        </>
      </Styles.PlayersGrid>
    </>
  );
};

export default Players;
