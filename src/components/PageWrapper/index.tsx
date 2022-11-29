import React, { FC, PropsWithChildren } from 'react';
import { StatusBar, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Container from './styles';
import theme from '@styles/theme';

interface PageWrapperProps {
  statusBarColour?: string;
}

const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({ children, statusBarColour = theme.colors.statusBarDefault }) => {
  const renderStatusBar = () => (
    <View
      style={{
        backgroundColor: statusBarColour,
        height: getStatusBarHeight()
      }}
    >
      <StatusBar translucent backgroundColor={statusBarColour} barStyle={'dark-content'} />
    </View>
  );
  return (
    <>
      {renderStatusBar()}
      <Container>{children}</Container>
    </>
  );
};

export default PageWrapper;
