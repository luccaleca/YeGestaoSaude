import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


import Inicial from './components/Pages/Inicial';
import Agenda from './components/Pages/Agenda';
import Cadastro from './components/Pages/Cadastro';

import CriarAgendamento from './components/Pages/CriarAgendamento';
import EditarAgendamento from './components/Pages/EditarAgendamento';

import Documentos from './components/Pages/Documentos';
import Login from './components/Pages/Login';
import Menu from './components/Pages/Menu';
import PoliticaDePrivacidade from './components/Pages/PoliticaDePrivacidade';
import TermosDeServico from './components/Pages/TermosDeServico';


import Perfil from './components/Pages/Perfil';
import DadosPessoais from './components/Pages/DadosPessoais';
import DocumentoIdentidade from './components/Pages/DocumentoIdentidade';
import HistoricoMedico from './components/Pages/HistoricoMedico';
import Medicamentos from './components/Pages/Medicamentos';





const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen name="Inicial" component={Inicial}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Políticas De Privacidade" component={PoliticaDePrivacidade} />
        <Stack.Screen name="Termos De Servico" component={TermosDeServico} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="CriarAgendamento" component={CriarAgendamento} />
        <Stack.Screen name="Documentos" component={Documentos} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="DadosPessoais" component={DadosPessoais} />
        <Stack.Screen name="DocumentoIdentidade" component={DocumentoIdentidade} />
        <Stack.Screen name="HistoricoMedico" component={HistoricoMedico} />
        <Stack.Screen name="Medicamentos" component={Medicamentos} />
        <Stack.Screen name="EditarAgendamento" component={EditarAgendamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
