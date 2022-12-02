import React from "react";
import Button from "Components/button";
import BackLink from "Components/back-link";
import { $GlobalContainer, $GlobalCircle } from "Styles/global.style.js";
import {
  $BioAffinity,
  $BioAffinityText,
  $BioTitle,
  $BioSubTitle,
  $BioAttribute,
  $BioSubAttribute,
} from "./bio.style";

const Bio = () => {
  return (
    <>
      <BackLink />
      <$GlobalContainer>
        <$BioTitle>Natsu</$BioTitle>
        <$BioSubTitle>Anime Series: DBZ</$BioSubTitle>
        <$BioAttribute>Rank:</$BioAttribute>
        <$BioSubAttribute>Captain</$BioSubAttribute>
        <$BioAttribute>Power Level:</$BioAttribute>
        <$BioSubAttribute>1500</$BioSubAttribute>
        <$BioAttribute>Element Affinity:</$BioAttribute>
        <$BioAffinity className="down">
          <$BioAffinity className="right">
            <$GlobalCircle className="fire"></$GlobalCircle>
            <$BioAffinityText>Fire</$BioAffinityText>
          </$BioAffinity>
          <$BioAffinity className="right">
            <$GlobalCircle className="darkness"></$GlobalCircle>
            <$BioAffinityText>Darkness</$BioAffinityText>
          </$BioAffinity>
        </$BioAffinity>
        <$BioAttribute>Element Weakness:</$BioAttribute>
        <$BioAffinity className="last">
          <$BioAffinity>
            <$GlobalCircle className="water"></$GlobalCircle>
            <$BioAffinityText>Water</$BioAffinityText>
          </$BioAffinity>
        </$BioAffinity>
        <Button
          btnText="Drop Character"
          btnTextColor="white"
          btnColor="red"
          btnFunction={() => alert("This functionality hasn't been created yet")}
          customBtnClass="medium"
        />
      </$GlobalContainer>
    </>
  );
};

export default Bio;
