import { StyleSheet, Dimensions, ImageStyle, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  containerTouchable: ViewStyle;
  characterNameText: TextStyle;
  characterImage: ImageStyle;
}

export const cardHeight = 120;

const containerWidth = Math.round((Dimensions.get('window').width * 45) / 100);

const styles: Styles = StyleSheet.create<Styles>({
  containerTouchable: {
    height: cardHeight,
    borderRadius: 12,
    marginHorizontal: 5,
    marginBottom: 10,
    width: containerWidth
  },
  characterNameText: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    top: 10,
    left: 10
  },
  characterImage: {
    position: 'absolute',
    width: 90,
    height: 90,
    bottom: 5,
    right: 5
  } as ImageStyle
});

export default styles;
