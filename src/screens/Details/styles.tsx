import { Text, Button } from 'react-native-elements';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const ButtonBack = styled(Button).attrs({
  containerStyle: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: -12
  },
  buttonStyle: {
    backgroundColor: 'transparent'
  }
})``;

export const TopContainer = styled.View`
  height: 280px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const TopSectionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 28px;
`;

export const ActivityContainer = styled.View`
  margin-top: 30px;
  height: 24px;
  width: 24px;
`;

export const NameContainer = styled.View`
  margin-horizontal: 28px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const AbilitiesContainer = styled.View`
  margin-left: 28px;
  margin-top: 18px;
  flex-direction: column;
  justify-content: space-between;
`;

export const AbilitiesNameContainer = styled.View`
  align-self: flex-start;
  justify-content: flex-start;
  border-radius: 20px;
  margin-bottom: 8px;
`;

export const AbilitiesNameText = styled(Text).attrs({})`
  color: white;
  font-size: 13px;
  font-weight: bold;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-horizontal: 12px;
`;

export const CharacterImageContainer = styled.View`
  position: absolute;
  top: 110px;
  right: 20px;
`;

export const CharacterImage = styled(FastImage).attrs({})`
  backgroundcolor: transparent;
  width: 220px;
  height: 220px;
`;

export const BottomContainer = styled.View`
  margin-top: 30px;
`;

export const BottomStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-horizontal: 28px;
  padding-horizontal: 30px;
  padding-vertical: 20px;
  border-width: 4px;
  border-color: ${props => props.theme.colors.roundedBorder};
  border-radius: 20px;
`;

export const StatContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const StatLabelText = styled(Text).attrs({})`
  color: ${props => props.theme.colors.labelTitle};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const StatValueText = styled(Text).attrs({})`
  color: black;
  font-weight: 700;
  font-size: 14px;
`;

export const CharacterNameText = styled(Text).attrs({})`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const CharacterNumberText = styled(Text).attrs({})`
  margin-top: 8px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
