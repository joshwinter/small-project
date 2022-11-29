import React, { FC, useEffect, useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import ImageColors from 'react-native-image-colors';
import { Text } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { CharacterAugmentedData } from '@models';
import { shadeColour } from '@utils';

import styles from './styles';
export { cardHeight } from './styles';

const HomeCard: FC<{ item: CharacterAugmentedData; onPress: (item: CharacterAugmentedData) => void }> = ({ item, onPress }) => {
  const [backgroundColour, setBackgroundColour] = useState('#ececec');

  const isMounted = useRef(true);

  useEffect(() => {
    const getColour = async function getColour() {
      const getColours = await ImageColors.getColors(item.photo, {
        fallback: '#ececec',
        cache: true,
        quality: 'lowest'
      });
      if (isMounted.current === false) {
        return;
      }
      setBackgroundColour(shadeColour(getColours.background, 5));
    };
    getColour();

    return () => {
      isMounted.current = false;
    };
  }, [item.photo]);

  const handleOnPress = () => {
    onPress({ item, colour: backgroundColour });
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleOnPress} style={[styles.containerTouchable, { backgroundColor: backgroundColour }]}>
      <Text style={styles.characterNameText}>{item.name}</Text>
      <FastImage source={{ uri: item.photo }} style={styles.characterImage} />
    </TouchableOpacity>
  );
};

export default HomeCard;
