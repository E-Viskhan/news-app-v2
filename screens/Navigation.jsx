import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FullPost, Home } from './';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: "Новости" }}/>
                <Stack.Screen name="FullPost" component={FullPost} options={{ title: "Статья" }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}