import { FlatList } from 'react-native';
import { Text, SearchBar } from 'react-native-elements';
import styled from 'styled-components/native';
import theme from '@styles/theme';

export const CardFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 10,
    backgroundColor: theme.colors.pageBackground,
    flexGrow: 1
  },
  columnWrapperStyle: {
    justifyContent: 'space-between'
  }
})``;

export const TitleText = styled(Text).attrs({})`
  font-size: 26px;
  font-weight: bold;
  color: black;
  margin-top: 20px;
  margin-left: 16px;
  margin-bottom: 20px;
`;

export const SearchBarComponent = styled(SearchBar).attrs({
  containerStyle: {
    backgroundColor: theme.colors.searchBarBackground,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  inputContainerStyle: {
    borderRadius: 25,
    height: 35,
    backgroundColor: theme.colors.searchBarContainer
  },
  inputStyle: {
    color: 'black',
    fontSize: 15
  },
  searchIcon: {
    size: 24,
    color: 'black'
  },
  clearIcon: {
    color: 'black',
    size: 24
  }
})``;
