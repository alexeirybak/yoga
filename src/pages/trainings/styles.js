import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: #fafafa;
`;

export const TopContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: rgb(250, 250, 250);
`;

export const LogoBlock = styled.div`
  position: absolute;
  top: 2rem;
  left: 5rem;
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PersonBlock = styled.div`
  position: absolute;
  top: 2rem;
  right: 5rem;
  width: 12rem;
  height: 3rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  z-index: 9;
`;

export const PersonPlace = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonDetails = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PersonIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: rgb(105, 105, 105);
`;

export const PersonName = styled.span`
  min-width: 4rem;
  max-width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 15px;
  margin-right: 12px;
  font-size: 1.5rem;
  color: rgb(0, 0, 0);
`;

export const PersonMenuBlock = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PersonMenu = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const MenuList = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  position: absolute;
  top: 2rem;
  right: 0rem;
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease-in-out 0s;
  height: ${({ $menuVisible }) => ($menuVisible ? "140px" : "0")};
`;

export const MenuItem = styled.a`
  width: inherit;
  text-align: right;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1.7;
  color: rgb(0, 0, 0);

  &:hover {
    color: #c9c9c9;
  }
`;

export const ContentBlock = styled.div`
  min-height: 100vh;
  width: 1160px;
  padding: 140px 0px;
`;

export const ContentVideoBlock = styled.div`
  margin-bottom: 75px;
`;

export const VideoHeader = styled.div`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px;
  margin-bottom: 40px;
`;

export const VideoName = styled.div`
  color: #000;
  font-family: StratosSkyeng, sans-serif;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 40px;
`;

export const VideoExercise = styled.iframe`
  width: 1160px;
  height: 639px;
  flex-shrink: 0;
  margin-bottom: 75px;
`;

export const ExerciseBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ExerciseDescription = styled.div`
  max-width: 425px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ExerciseDescriptionHeader = styled.div`
  font-size: 2rem;
`;

export const ExercisesList = styled.ul`
  padding-left: 30px;
  margin-bottom: 10px;
`;

export const ExerciseListItem = styled.li`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const FillInProgress = styled.button`
  outline: none;
  border: none;
  border-radius: 5rem;
  padding: 12px 1rem 16px;
  min-width: 17rem;
  font-family: inherit;
  font-size: 1.25rem;
  color: rgb(255, 255, 255);
  background-color: rgb(88, 14, 162);
  cursor: pointer;
`;

export const Progress = styled.div`
  padding: 32px 44px;
  border-radius: 30px;
  background-color: rgb(244, 245, 246);
  color: black;
`;

export const ProgressHeader = styled.div`
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
`;

export const ProgressDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ProgressItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ExerciseProgress = styled.div`
  font-size: 1.5rem;
  width: 230px;
`;

const ProgressExerciseBarMixin = css`
  box-sizing: border-box;
  width: 280px;
  height: 40px;
  border-radius: 22px;
  overflow: hidden;
`;

export const FirstExerciseBar = styled.div`
  ${ProgressExerciseBarMixin}
  background-color: ${({ $progColorLight }) => ($progColorLight)};
  border: 2px solid ${({ $progColorMain }) => ($progColorMain)};
`;

// export const SecondExerciseBar = styled.div`
//   ${ProgressExerciseBarMixin}
//   border: 2px solid rgb(255, 109, 0);
// `;

// export const ThirdExerciseBar = styled.div`
//   ${ProgressExerciseBarMixin}
//   border: 2px solid rgb(86, 94, 239);
// `;

const ProgressFilledInMixin = css`
  color: rgb(255, 255, 255);
  position: relative;
  height: 100%;
`;

export const FirstFilledIn = styled.div`
  ${ProgressFilledInMixin}
  background: ${({ $progColorMain }) => ($progColorMain)};
  width: ${({ $width }) => ($width)}%;
`;

// export const SecondFilledIn = styled.div`
//   ${ProgressFilledInMixin}
//   background: rgb(255, 109, 0);
//   width: 60%;
// `;

// export const ThirdFilledIn = styled.div`
//   ${ProgressFilledInMixin}
//   background: rgb(86, 94, 239);
//   width: 20%;
//   color: rgb(154, 72, 241);
// `;

export const ProgressResult = styled.span`
  margin-left: 4rem;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;
