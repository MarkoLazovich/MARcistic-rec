import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TeamMemberItem';

// Team Images
import teamMember1 from '../../assets/images/team1.png';
import teamMember2 from '../../assets/images/team2.png';
import teamMember3 from '../../assets/images/team3.png';

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      gap: 8rem;
    }
  }
`;

function TeamSection() {
  return (
    <TeamSectionStyles>
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <ParagraphText className="team__subtitle">
              Team Members
            </ParagraphText>
            <SectionTitle className="about__title">
              The Best Team Avaliable
            </SectionTitle>
          </div>
          <div className="team__members">
            <TeamMemberItem
              img={teamMember1}
              name="Alexandra"
              title="Photo Editor"
            />
            <TeamMemberItem
              img={teamMember2}
              name="Marcus"
              title="Creative Mind - CEO"
            />
            <TeamMemberItem
              img={teamMember3}
              name="Victor"
              title="Photographer"
            />
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default TeamSection;
