import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import Metadata from 'Components/metadata/metadata';
import Button from 'Components/button/button';
import { useAppContext } from 'src/hooks/user';
import Loader from 'Components/loader/loader';
import TextField from 'Components/text-field/text-field';
import { responseError } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import NotUser from 'Components/not-user/not-user';
import Players from 'Components/players/players';
import { getAdminPlayers, updatePlayerData } from 'src/requests/player';
import { getAdminAccess } from 'src/requests/users';
import * as Styles from './adminDashboard.style';
import Image from 'next/image';

const AdminDashboard = () => {
  const { currentUser } = useAppContext();
  const [hasAccess, setHasAccess] = useState(true);
  const [players, setPlayers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [updatePlayer, setUpdatePlayer] = useState(false);
  const [playerInfo, setPlayerInfo] = useState(null);
  const [playerChange, setPlayerChange] = useState(null);
  const [editFullName, setEditFullName] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editSeries, setEditSeries] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [editPowerLevel, setEditPowerLevel] = useState(false);
  const [editFire, setEditFire] = useState(false);
  const [editWater, setEditWater] = useState(false);
  const [editWind, setEditWind] = useState(false);
  const [editEarth, setEditEarth] = useState(false);
  const [editArcane, setEditArcane] = useState(false);
  const [editElectric, setEditElectric] = useState(false);
  const [editCelestial, setEditCelestial] = useState(false);
  const [editDarkness, setEditDarkness] = useState(false);
  const [editIce, setEditIce] = useState(false);
  const [editNoAffinity, setEditNoAffinity] = useState(false);
  const [editWeakness, setEditWeakness] = useState(false);
  const [editImage, setEditImage] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [editCost, setEditCost] = useState(false);
  const [editByeWeek, setEditByeWeek] = useState(false);

  const handleAdminAccess = async () => {
    try {
      const { success } = await getAdminAccess(currentUser?.token);
      const allPlayers = await getAdminPlayers(currentUser?.token);

      setPlayers(allPlayers);
      setHasAccess(success);
      setIsLoading(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to access admin dashboard'));
      setHasAccess(false);
      setIsLoading(false);
    }
  };

  const handlePlayerUpdate = (player) => {
    setUpdatePlayer(true);
    setPlayerInfo(player.all);
  };

  const handleNewVal = (val) => {
    setPlayerChange(val);
  };

  const handlePlayerSave = async (attr) => {
    const payload = {
      ...playerInfo,
    };

    payload[attr] = playerChange;

    try {
      await updatePlayerData(payload, currentUser?.token);

      addEvent('Admin Dashboard', {
        action: 'update player',
        user: currentUser?.email,
        playerId: playerInfo.id,
      });

      playerInfo[attr] = playerChange;
      setEditFullName(false);
      setEditName(false);
      setEditSeries(false);
      setEditCategory(false);
      setEditPowerLevel(false);
      setEditFire(false);
      setEditWater(false);
      setEditWind(false);
      setEditEarth(false);
      setEditArcane(false);
      setEditElectric(false);
      setEditCelestial(false);
      setEditDarkness(false);
      setEditIce(false);
      setEditNoAffinity(false);
      setEditWeakness(false);
      setEditImage(false);
      setEditStatus(false);
      setEditCost(false);
      setEditByeWeek(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to update player'));
    }
  };

  useEffect(() => {
    handleAdminAccess();
  }, []);

  if (!hasAccess) {
    return <NotUser />;
  }

  return (
    <>
      <GlobalStyles.CollapsibleStyles />
      <Metadata
        title="Account"
        description="Look at your profile, update username, and your password. Delete your account if you must."
      />
      {isLoading && <Loader />}
      {!isLoading && (
        <GlobalStyles.GlobalContainer className="grid character">
          <GlobalStyles.GlobalTitle>Admin Dashboard</GlobalStyles.GlobalTitle>
          {!updatePlayer && (
            <Players
              data={players}
              page={'admin'}
              setPlayerList={handlePlayerUpdate}
            />
          )}
          {updatePlayer && (
            <>
              <Styles.AdminDashboardSection className="img">
                <Image
                  src={playerInfo.image_url}
                  width={200}
                  height={200}
                  alt={playerInfo.full_name}
                />
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Image:</label>
                {editImage && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      inputVal={playerInfo.image_url}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('image_url')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditImage(false);
                        setPlayerChange(playerInfo.image_url);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editImage && (
                  <>
                    <TextField
                      inputVal={playerInfo.image_url}
                      isDisabled={true}
                    />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditImage(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Full Name:</label>
                {editFullName && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      inputVal={playerInfo.full_name}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('full_name')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditFullName(false);
                        setPlayerChange(playerInfo.full_name);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editFullName && (
                  <>
                    <TextField
                      inputVal={playerInfo.full_name}
                      isDisabled={true}
                    />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditFullName(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Name:</label>
                {editName && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      inputVal={playerInfo.name}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('name')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditName(false);
                        setPlayerChange(playerInfo.name);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editName && (
                  <>
                    <TextField inputVal={playerInfo.name} isDisabled={true} />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditName(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Series:</label>
                {editSeries && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      inputVal={playerInfo.series}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('series')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditSeries(false);
                        setPlayerChange(playerInfo.series);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editSeries && (
                  <>
                    <TextField inputVal={playerInfo.series} isDisabled={true} />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditSeries(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Power Level:</label>
                {editPowerLevel && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.power_level}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('power_level')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditPowerLevel(false);
                        setPlayerChange(playerInfo.power_level);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editPowerLevel && (
                  <>
                    <TextField
                      inputVal={playerInfo.power_level}
                      isDisabled={true}
                    />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditPowerLevel(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Cost:</label>
                {editCost && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.cost}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('cost')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditCost(false);
                        setPlayerChange(playerInfo.cost);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editCost && (
                  <>
                    <TextField inputVal={playerInfo.cost} isDisabled={true} />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditCost(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Category:</label>
                {editCategory && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.category}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('category')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditCategory(false);
                        setPlayerChange(playerInfo.category);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editCategory && (
                  <>
                    <TextField
                      inputVal={playerInfo.category}
                      isDisabled={true}
                    />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditCategory(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Fire:</label>
                {editFire && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.fire}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('fire')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditFire(false);
                        setPlayerChange(playerInfo.fire);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editFire && (
                  <>
                    <TextField inputVal={playerInfo.fire} isDisabled={true} />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditFire(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Water:</label>
                {editWater && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.water}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('water')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditWater(false);
                        setPlayerChange(playerInfo.water);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editWater && (
                  <>
                    <TextField inputVal={playerInfo.water} isDisabled={true} />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditWater(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Wind:</label>
                {editWind && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.wind}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('wind')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditWind(false);
                        setPlayerChange(playerInfo.wind);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editWind && (
                  <>
                    <TextField inputVal={playerInfo.wind} isDisabled={true} />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditWind(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Earth:</label>
                {editEarth && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.earth}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('earth')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditEarth(false);
                        setPlayerChange(playerInfo.earth);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editEarth && (
                  <>
                    <TextField inputVal={playerInfo.earth} isDisabled={true} />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditEarth(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Arcane:</label>
                {editArcane && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.arcane}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('arcane')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditArcane(false);
                        setPlayerChange(playerInfo.arcane);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editArcane && (
                  <>
                    <TextField inputVal={playerInfo.arcane} isDisabled={true} />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditArcane(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Electric:</label>
                {editElectric && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.electric}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('electric')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditElectric(false);
                        setPlayerChange(playerInfo.electric);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editElectric && (
                  <>
                    <TextField
                      inputVal={playerInfo.electric}
                      isDisabled={true}
                    />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditElectric(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Celestial:</label>
                {editCelestial && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.celestial}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('celestial')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditCelestial(false);
                        setPlayerChange(playerInfo.celestial);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editCelestial && (
                  <>
                    <TextField
                      inputVal={playerInfo.celestial}
                      isDisabled={true}
                    />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditCelestial(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Darkness:</label>
                {editDarkness && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.darkness}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('darkness')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditDarkness(false);
                        setPlayerChange(playerInfo.darkness);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editDarkness && (
                  <>
                    <TextField
                      inputVal={playerInfo.darkness}
                      isDisabled={true}
                    />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditDarkness(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Ice:</label>
                {editIce && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.ice}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('ice')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditIce(false);
                        setPlayerChange(playerInfo.ice);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editIce && (
                  <>
                    <TextField inputVal={playerInfo.ice} isDisabled={true} />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditIce(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>No Affinity:</label>
                {editNoAffinity && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.no_affinity}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('no_affinity')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditNoAffinity(false);
                        setPlayerChange(playerInfo.no_affinity);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editNoAffinity && (
                  <>
                    <TextField
                      inputVal={playerInfo.no_affinity}
                      isDisabled={true}
                    />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditNoAffinity(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Weakness:</label>
                {editWeakness && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.weakness}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('weakness')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditWeakness(false);
                        setPlayerChange(playerInfo.weakness);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editWeakness && (
                  <>
                    <TextField
                      inputVal={playerInfo.weakness}
                      isDisabled={true}
                    />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditWeakness(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Active:</label>
                {editStatus && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.active}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('active')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditStatus(false);
                        setPlayerChange(playerInfo.active);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editStatus && (
                  <>
                    <TextField inputVal={playerInfo.active} isDisabled={true} />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditStatus(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Styles.AdminDashboardSection>
                <label>Bye Week:</label>
                {editByeWeek && (
                  <>
                    <TextField
                      onChange={handleNewVal}
                      maxLength={15}
                      inputVal={playerInfo.bye_week}
                    />
                    <Button
                      btnText="Save"
                      btnFunction={() => handlePlayerSave('bye_week')}
                      customBtnClass="text edit change"
                    />
                    <Button
                      btnText="Cancel"
                      btnFunction={() => {
                        setEditByeWeek(false);
                        setPlayerChange(playerInfo.bye_week);
                      }}
                      customBtnClass="text edit change"
                    />
                  </>
                )}
                {!editByeWeek && (
                  <>
                    <TextField
                      inputVal={playerInfo.bye_week}
                      isDisabled={true}
                    />
                    <Button
                      btnText="Edit"
                      btnFunction={() => setEditByeWeek(true)}
                      customBtnClass="text edit"
                    />
                  </>
                )}
              </Styles.AdminDashboardSection>
              <Button
                btnText="Back to Characters"
                btnFunction={() => setUpdatePlayer(false)}
                btnColor="primary"
                customBtnClass="medium"
              />
            </>
          )}
        </GlobalStyles.GlobalContainer>
      )}
    </>
  );
};

export default AdminDashboard;
