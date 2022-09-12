// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native'; // component to set for wrapping all navigation elements
import { createNativeStackNavigator } from '@react-navigation/native-stack' // for the stack navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' // for the bottom tabs navigator

import AllTasks from './Screens/AllTasks';
import LastSevenDaysTasks from './Screens/LastSevenDaysTasks';
import WeeksOverview from './Screens/WeeksOverview'; 
import TaskManager from './Screens/TaskManager';

import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './Constants/Styles';

import IconButton from './Components/UI/IconButton';
import TasksContextProvider from './store/tasks-context';

import Week1 from './Screens/Weeks/Week1';
import Week2 from './Screens/Weeks/Week2';
import Week3 from './Screens/Weeks/Week3';
import Week4 from './Screens/Weeks/Week4';
import Week5 from './Screens/Weeks/Week5';
import Week6 from './Screens/Weeks/Week6';
import Week7 from './Screens/Weeks/Week7';
import Week8 from './Screens/Weeks/Week8';
import Week9 from './Screens/Weeks/Week9';
import Week10 from './Screens/Weeks/Week10';
import Week11 from './Screens/Weeks/Week11';
import Week12 from './Screens/Weeks/Week12';
import Week13 from './Screens/Weeks/Week13';
import Week14 from './Screens/Weeks/Week14';
import Week15 from './Screens/Weeks/Week15';
import Week16 from './Screens/Weeks/Week16';
import Week17 from './Screens/Weeks/Week17';
import Week18 from './Screens/Weeks/Week18';
import Week19 from './Screens/Weeks/Week19';
import Week20 from './Screens/Weeks/Week20';
import Week21 from './Screens/Weeks/Week21';
import Week22 from './Screens/Weeks/Week22';
import Week23 from './Screens/Weeks/Week23';
import Week24 from './Screens/Weeks/Week24';
import Week25 from './Screens/Weeks/Week25';
import Week26 from './Screens/Weeks/Week26';
import Week27 from './Screens/Weeks/Week27';
import Week28 from './Screens/Weeks/Week28';
import Week29 from './Screens/Weeks/Week29';
import Week30 from './Screens/Weeks/Week30';
import Week31 from './Screens/Weeks/Week31';
import Week32 from './Screens/Weeks/Week32';
import Week33 from './Screens/Weeks/Week33';
import Week34 from './Screens/Weeks/Week34';
import Week35 from './Screens/Weeks/Week35';
import Week36 from './Screens/Weeks/Week36';
import Week37 from './Screens/Weeks/Week37';
import Week38 from './Screens/Weeks/Week38';
import Week39 from './Screens/Weeks/Week39';
import Week40 from './Screens/Weeks/Week40';
import Week41 from './Screens/Weeks/Week41';
import Week42 from './Screens/Weeks/Week42';

const Stack = createNativeStackNavigator(); // constant that holds the results of calling createNativeStackNavigator()
// Stack will hold an object that gives us access to 2 components: 1/ the navigator component and 2/ the component for registering screens
const BottomTabs = createBottomTabNavigator(); // the same as the other constant

function BottomTabElements() { // used for the nested navigator
  return (    
    <BottomTabs.Navigator
        screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
            navigation.navigate('TaskManager');
            }}
          />
        ),
      })}
    >
    <BottomTabs.Screen 
      name='DaddyDo - 40 Weeks ToDos' 
      component={WeeksOverview} 
      options={{
        title: 'DaddyDo - 40 Weeks ToDos',
        tabBarLabel: '40 Weeks ToDos',
        tabBarIcon: ({color, size}) => 
        <Ionicons name='bulb-outline' size={size} color={color}/>
      }}
    />
    <BottomTabs.Screen 
      name='DaddyDo - All Tasks' 
      component={AllTasks} 
      options={{
        title: 'DaddyDo - All Tasks',
        tabBarLabel: 'All Tasks',
        tabBarIcon: ({color, size}) => 
        <Ionicons name='bookmarks-outline' size={size} color={color}/>
      }}
    />
    <BottomTabs.Screen 
      name='DaddyDo - Last 7 days Tasks' 
      component={LastSevenDaysTasks} 
      options={{
        title: 'DaddyDo - Last 7 days Tasks',
        tabBarLabel: 'Last 7 days Tasks',
        tabBarIcon: ({color, size}) => 
        <Ionicons name='hourglass' size={size} color={color}/>
      }}
    />
  </BottomTabs.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <TasksContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}
          > 
            <Stack.Screen 
              name='BottomTabElements' 
              component={BottomTabElements} 
              options={{ headerShown: false}}
            /> 
            <Stack.Screen 
              name='TaskManager' 
              component={TaskManager}
              options={{
                presentation: 'modal',
              }}
            />
            <Stack.Screen name='WeeksOverview' component={WeeksOverview} />
            <Stack.Screen name='Week 1' component={Week1} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 2' component={Week2} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 3' component={Week3} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 4' component={Week4} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 5' component={Week5} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 6' component={Week6} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 7' component={Week7} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 8' component={Week8} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 9' component={Week9} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 10' component={Week10} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 11' component={Week11} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 12' component={Week12} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 13' component={Week13} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 14' component={Week14} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 15' component={Week15} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 16' component={Week16} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 17' component={Week17} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 18' component={Week18} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 19' component={Week19} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 20' component={Week20} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 21' component={Week21} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 22' component={Week22} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 23' component={Week23} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 24' component={Week24} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 25' component={Week25} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 26' component={Week26} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 27' component={Week27} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 28' component={Week28} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 29' component={Week29} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 30' component={Week30} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 31' component={Week31} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 32' component={Week32} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 33' component={Week33} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 34' component={Week34} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 35' component={Week35} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 36' component={Week36} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 37' component={Week37} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 38' component={Week38} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 39' component={Week39} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 40' component={Week40} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 41' component={Week41} options={{ presentation: 'modal'}}/>
            <Stack.Screen name='Week 42' component={Week42} options={{ presentation: 'modal'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </TasksContextProvider>
    </>
  );
}
