import React from 'react';
import * as GlobalStyles from 'Styles/global.style';
import Metadata from 'Components/metadata/metadata';

const Changelog = () => {
  return (
    <>
      <Metadata
        title="Changelog"
        description="Displays all the changes that happen on the site. Keeping you informed and up to date"
      />
      <GlobalStyles.GlobalContainer>
        <GlobalStyles.GlobalTitle>Changelog</GlobalStyles.GlobalTitle>
        <h3>June 7, 2023</h3>
        <ul>
          <li>
            League Admin
            <ul>
              <li>You can add a draft date and time</li>
            </ul>
          </li>
        </ul>
        <h3>May 25, 2023</h3>
        <ul>
          <li>
            Roster
            <ul>
              <li>You can now add bench players</li>
              <li>
                Each bench spot is an additional 400 points added to your team
                total too allow you to add more players to your team.
              </li>
            </ul>
          </li>
        </ul>
        <h3>May 22, 2023</h3>
        <ul>
          <li>
            Content
            <ul>
              <li>Add anime flair</li>
            </ul>
          </li>
        </ul>
        <h3>May 20, 2023</h3>
        <ul>
          <li>
            All Matchup Voting page
            <ul>
              <li>On mobile, added a set height to the character images.</li>
            </ul>
          </li>
          <li>
            Mobile Nav
            <ul>
              <li>Darken the overlay that is shown when mobile nav is open.</li>
            </ul>
          </li>
        </ul>
        <h3>May 17, 2023</h3>
        <ul>
          <li>
            All Matchup Voting page
            <ul>
              <li>
                You can now view and vote on matchups from any active League
                head-to-head battles. As well as matchups within any Bracket
                that is active.
              </li>
            </ul>
          </li>
        </ul>
        <h3>May 16, 2023</h3>
        <ul>
          <li>
            Roster Selection Modal
            <ul>
              <li>Mobile: you can type in the search bar</li>
              <li>Mobile: UI improvements for viewing a character to select</li>
            </ul>
          </li>
          <li>
            Team Edit page
            <ul>
              <li>
                Updated UI to include affinities and character cost (points)
              </li>
            </ul>
          </li>
        </ul>
        <h3>May 15, 2023</h3>
        <ul>
          <li>
            Reminders
            <ul>
              <li>
                Added some reminder modals and emails to keep users up to date
                with weekly events.
              </li>
            </ul>
          </li>
        </ul>
        <h3>May 14, 2023</h3>
        <ul>
          <li>
            League Hub
            <ul>
              <li>
                Updated copy for error modal that pops up when Week 1 hasn't
                started yet
              </li>
            </ul>
          </li>
          <li>
            Account page
            <ul>
              <li>Add disclaimer message</li>
            </ul>
          </li>
          <li>
            Buttons
            <ul>
              <li>Add specific error message to disabled buttons</li>
            </ul>
          </li>
          <li>
            Bracket feature
            <ul>
              <li>
                You can view all active brackets now on the Brackets page, even
                if you aren't logged in
              </li>
              <li>
                Logged in users will see their own brackets (if they have any)
                first. Then they will also be able to view all other active
                brackets
              </li>
              <li>
                You can randomize your bracket if you can't think of any good
                matchups
              </li>
            </ul>
          </li>
        </ul>
        <h3>May 12, 2023</h3>
        <ul>
          <li>
            Suggest Character feature
            <ul>
              <li>
                Add message explaining the reason for suggesting a character
              </li>
            </ul>
          </li>
          <li>
            Roster Change
            <ul>
              <li>You can now view character info prior to selecting them</li>
            </ul>
          </li>
          <li>
            Buttons
            <ul>
              <li>
                Added a hover message on disabled buttons explaining why they
                are disabled.
              </li>
            </ul>
          </li>
          <li>
            Share feature
            <ul>
              <li>Remove unnecessary modal</li>
            </ul>
          </li>
          <li>
            Bracket feature
            <ul>
              <li>Can't submit Bracket until you add a bracket name</li>
              <li>
                Show vote totals, in the modal, for the winner of any specific
                round
              </li>
            </ul>
          </li>
          <li>
            Join League
            <ul>
              <li>
                The join url now contains the league ID in it. So now when you
                use the join url, it will pre-populate the input field and you
                just need to click on the button to join the league.
              </li>
            </ul>
          </li>
          <li>
            Homepage Series list
            <ul>
              <li>
                Clicking on a series will take you to a list of character
                specific to that series.
              </li>
            </ul>
          </li>
        </ul>
        <h3>May 09, 2023</h3>
        <ul>
          <li>
            Affinity Icons
            <ul>
              <li>
                Removed the color swatches and added icons for each affinity
              </li>
            </ul>
          </li>
          <li>
            Accordion arrows
            <ul>
              <li>Add down/ip arrows to all remaining accordions</li>
            </ul>
          </li>
          <li>
            Gameplay Rules
            <ul>
              <li>Updated Weekly Element Affinities copy</li>
              <li>Added affinity icons</li>
            </ul>
          </li>
        </ul>
        <h3>March 24, 2023</h3>
        <ul>
          <li>
            Bio page/modal
            <ul>
              <li>
                Clicking on a character will now open a modal on all pages
                except for the characters page.
              </li>
              <li>
                From the characters page, you will still be directed to the bio
                page for that character.
              </li>
            </ul>
          </li>
        </ul>
        <h3>March 24, 2023</h3>
        <ul>
          <li>
            Updated Homepage
            <ul>
              <li>Added new welcome copy</li>
            </ul>
          </li>
          <li>
            Updated Matchups Feature
            <ul>
              <li>Added team name and league name for each character</li>
              <li>Any user, logged in or not, can vote on matchups</li>
            </ul>
          </li>
          <li>
            Updated Bracket Feature
            <ul>
              <li>Moved voting on each matchup into a modal</li>
              <li>Added imagery for the characters</li>
              <li>For previous rounds, the modal displays the winner only</li>
            </ul>
          </li>
        </ul>
        <h3>March 23, 2023</h3>
        <ul>
          <li>
            Update All Characters
            <ul>
              <li>New formula to calculate power level</li>
              <li>
                New formula to calculate cost for each character in order to add
                them to your team
              </li>
            </ul>
          </li>
          <li>
            Update Suggest Characters
            <ul>
              <li>
                After suggesting a new character. The success message will ask
                if you want to add another
              </li>
            </ul>
          </li>
          <li>
            Updated Fun Facts
            <ul>
              <li>Removed "Fun Fact" button</li>
              <li>
                Facts and Page Info now display at the bottom of most pages in
                small font
              </li>
            </ul>
          </li>
        </ul>
        <h3>March 22, 2023</h3>
        <ul>
          <li>
            Homepage Redesign
            <ul>
              <li>Updated navigation links</li>
              <li>Added more content to homepage</li>
              <li>Updated links in footer</li>
            </ul>
          </li>
        </ul>
        <h3>March 21, 2023</h3>
        <ul>
          <li>
            Character update
            <ul>
              <li>Twice - Villain</li>
              <li>Zeldris - Villain</li>
              <li>Yomi - Villain</li>
              <li>Wrath (King Bradly) - Villain</li>
              <li>Ulquiorra - Villain</li>
            </ul>
          </li>
          <li>Added Week Recap modal</li>
          <li>
            Updated Gameplay rules
            <ul>
              <li>Explanation about bye weeks</li>
            </ul>
          </li>
          <li>
            Updated Character Bio page
            <ul>
              <li>Added bye week</li>
            </ul>
          </li>
        </ul>
        <h3>March 20, 2023</h3>
        <ul>
          <li>
            Add Bye week
            <ul>
              <li>Anime series will now have a bye week</li>
              <li>
                A character's bye week will be associated to the anime series
              </li>
            </ul>
          </li>
          <li>
            Updated Standings page
            <ul>
              <li>Fixed how records for individual teams is calculated</li>
            </ul>
          </li>
          <li>
            Updated League Matchups page
            <ul>
              <li>Removed random 0 underneath team names</li>
            </ul>
          </li>
        </ul>
        <h3>March 18, 2023</h3>
        <ul>
          <li>
            Updated Bracket feature
            <ul>
              <li>Removed ability to vote on previous rounds</li>
            </ul>
          </li>
          <li>
            Gameplay Rules
            <ul>
              <li>Changed copy under the Bracket section</li>
            </ul>
          </li>
        </ul>
        <h3>March 16, 2023</h3>
        <ul>
          <li>
            New character added
            <ul>
              <li>Mo Fan - Captain</li>
              <li>Zhuo Yifan - Captain</li>
              <li>Ye Ming - Captain</li>
              <li>John - Support</li>
              <li>Seraphina - Support</li>
              <li>Joker - Villain</li>
            </ul>
          </li>
          <li>
            Updated Bracket feature
            <ul>
              <li>Changed from 24 players to 16 players</li>
              <li>Allow users to vote without creating an account</li>
              <li>
                Give bracket creator the ability to activate each round within
                the bracket
              </li>
            </ul>
          </li>
        </ul>
      </GlobalStyles.GlobalContainer>
    </>
  );
};

export default Changelog;