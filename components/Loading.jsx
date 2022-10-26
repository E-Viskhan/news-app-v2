import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.Text`
  margin-top: 15px;
`;

export const Loading = () => (
    <Container>
        <ActivityIndicator size="large"/>
        <LoadingText>Загрузка...</LoadingText>
    </Container>
);