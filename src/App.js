import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'



import Login from './components/Pages/Login';
import Cadastro from './components/Pages/Cadastro';
import Home from './components/Pages/Home';
import PoliticaDePrivacidade from './components/Pages/PoliticaDePrivacidade';
import TermosDeServico from './components/Pages/TermosDeServico';
import Consultas from './components/Pages/Agenda'
import SideBar from './components/SideBar';
import Agenda from './components/Pages/Agenda';


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Políticas De Privacidade" component={PoliticaDePrivacidade} />
        <Stack.Screen name="Termos De Servico" component={TermosDeServico} />
        <Stack.Screen name="Agenda" component={Agenda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
