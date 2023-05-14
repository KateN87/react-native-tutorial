import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';

//prevent splashscreen from hiding while fonts are loaded
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
    //get fonts
    const [fontsLoaded] = useFonts({
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    });
    //when fonts are loading we hide the splashscreen and display app screen
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    //splashscreen will continune to show
    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer onReady={onLayoutRootView}>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'pink',
                    },
                    headerTintColor: '#444',
                }}
            >
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: 'GameZone',
                    }}
                />
                <Stack.Screen name='Review Details' component={ReviewDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
