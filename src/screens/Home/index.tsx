import React, { FC, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useGetPokemon } from '@hooks/useHooks';
import { CharacterAugmentedData, CharacterCombinedData, CharacterData } from '@models';
import { PageWrapper, LoaderList, HomeCard } from '@components';
import { cardHeight } from '@components/HomeCard';
import { TitleText, CardFlatList, SearchBarComponent } from './styles';
import screenRoutes from '@routes/screenRoutes';

const renderHeaderComponent = () => <TitleText>Pokedex</TitleText>;
const keyExtractor = (item: CharacterData) => item.name;
const getItemLayout = (_: any, index: number) => ({ length: cardHeight, offset: cardHeight * index, index });

const Home: FC = () => {
  const navigation = useNavigation();

  const [matchingPokemon, setMatchingPokemon] = useState<CharacterAugmentedData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { data, isLoading } = useGetPokemon(151);

  if (!isLoading && matchingPokemon.length === 0) {
    setMatchingPokemon(data.results);
  }

  const onPressItem = useCallback(
    ({ item, colour }: CharacterCombinedData) => {
      navigation.navigate(screenRoutes.Details, { item, colour });
    },
    [navigation]
  );

  const renderFlatlistItem = useCallback(({ item }: { item: CharacterData }) => <HomeCard item={item} onPress={onPressItem} />, [onPressItem]);

  const searchBarUpdateText = useCallback(
    (text: string) => {
      setSearchTerm(text);

      if (Number(text)) {
        const filtered = data.results.find((result: CharacterAugmentedData) => result.itemId === Number(text));
        setMatchingPokemon([filtered]);
      } else {
        const filtered = data.results.filter((result: CharacterAugmentedData) => result.name.toLowerCase().includes(text.toLowerCase()));
        setMatchingPokemon(filtered);
      }
    },
    [data]
  );

  return (
    <PageWrapper>
      <SearchBarComponent placeholder={'Search Pokedex...'} onChangeText={searchBarUpdateText} autoFocus={false} value={searchTerm} />
      <LoaderList loading={isLoading} />
      {!isLoading ? (
        <CardFlatList
          ListHeaderComponent={renderHeaderComponent}
          data={matchingPokemon}
          keyExtractor={keyExtractor}
          renderItem={renderFlatlistItem}
          getItemLayout={getItemLayout}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          initialNumToRender={10}
          windowSize={3}
          removeClippedSubviews
          bounces
          decelerationRate='fast'
          disableVirtualization={false}
          automaticallyAdjustContentInsets={false}
        />
      ) : null}
    </PageWrapper>
  );
};

export default Home;
