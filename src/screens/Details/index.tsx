import React, { FC, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetSinglePokemon } from '@hooks/useHooks';
import { PageWrapper } from '@components';
import { shadeColour } from '@utils';
import {
  TopContainer,
  TopSectionContainer,
  ActivityContainer,
  NameContainer,
  AbilitiesContainer,
  AbilitiesNameContainer,
  AbilitiesNameText,
  CharacterImageContainer,
  CharacterImage,
  BottomContainer,
  BottomStatsContainer,
  StatContainer,
  StatLabelText,
  StatValueText,
  ButtonBack,
  CharacterNameText,
  CharacterNumberText
} from './styles';

const Details: FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { colour: backgroundColour, item: { itemId, photo, name } } = route.params as { colour: string, item: { itemId: number, photo: string, name: string }};

  const { data, isLoading } = useGetSinglePokemon(itemId);

  const onPressBack = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <PageWrapper statusBarColour={backgroundColour}>
      <TopContainer backgroundColor={backgroundColour}>
        <TopSectionContainer>
          <ButtonBack icon={<Icon name='arrow-left' size={22} color='white' />} onPress={onPressBack} />
          <ActivityContainer>
            <ActivityIndicator color='#fff' size='small' animating={isLoading} />
          </ActivityContainer>
        </TopSectionContainer>

        <NameContainer>
          <CharacterNameText>{name}</CharacterNameText>
          <CharacterNumberText>#{itemId}</CharacterNumberText>
        </NameContainer>

        {!isLoading ?
          <AbilitiesContainer>
            {data.abilities.map(({ ability }) =>
              <AbilitiesNameContainer key={ability.name} backgroundColor={shadeColour(backgroundColour, 7)}>
                <AbilitiesNameText>
                  {ability.name[0].toUpperCase()}
                  {ability.name.substring(1)}
                </AbilitiesNameText>
              </AbilitiesNameContainer>
            )}
          </AbilitiesContainer>
        : null}

        <CharacterImageContainer>
          <CharacterImage source={{ uri: photo }} />
        </CharacterImageContainer>
      </TopContainer>

      <BottomContainer>
        {!isLoading ?
          <BottomStatsContainer>
            <StatContainer>
              <StatLabelText>Base Experience</StatLabelText>
              <StatValueText>{data.base_experience}</StatValueText>
            </StatContainer>
            <StatContainer>
              <StatLabelText>Height</StatLabelText>
              <StatValueText>{data.height}cm</StatValueText>
            </StatContainer>
            <StatContainer>
              <StatLabelText>Weight</StatLabelText>
              <StatValueText>{data.weight}kg</StatValueText>
            </StatContainer>
          </BottomStatsContainer>
        : null}
      </BottomContainer>
    </PageWrapper>
  );
};

export default Details;
