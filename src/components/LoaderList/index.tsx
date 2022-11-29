import React from 'react';
import { ActivityIndicator } from 'react-native';
import Container from './styles';

interface LoadingProps {
  loading: boolean;
}

export default ({ loading }: LoadingProps) => {
  if (loading) {
    return (
      <Container>
        <ActivityIndicator color='#6f757f' size='small' animating />
      </Container>
    );
  }
  return null;
};
