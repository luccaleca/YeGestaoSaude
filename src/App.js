import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Agenda from './components/Pages/Agenda';
import Cadastro from './components/Pages/Cadastro';
import CriarAgendamento from './components/Pages/CriarAgendamento';
import DadosPessoais from './components/Pages/DadosPessoais';
import DocumentoIdentidade from './components/Pages/DocumentoIdentidade';
import Documentos from './components/Pages/Documentos';
import EditarAgendamento from './components/Pages/EditarAgendamento';
import EsqueciSenha from './components/Pages/EsqueciSenha';
import HistoricoMedico from './components/Pages/HistoricoMedico';
import Inicial from './components/Pages/Inicial';
import Login from './components/Pages/Login';
import Medicamentos from './components/Pages/Medicamentos';
import Menu from './components/Pages/Menu/Menu';
import Perfil from './components/Pages/Perfil';
import PoliticaDePrivacidade from './components/Pages/PoliticaDePrivacidade';
import TermosDeServico from './components/Pages/TermosDeServico';

import Onboarding1 from './components/Pages/OnBoarding/OnBoarding1';
import Onboarding2 from './components/Pages/OnBoarding/OnBoarding2';
import Onboarding3 from './components/Pages/OnBoarding/OnBoarding3';
import Onboarding4 from './components/Pages/OnBoarding/OnBoarding4';
import SplashScreen from './components/Pages/OnBoarding/SplashScreen';

import ArtigoSaudeMenu1 from './components/Pages/ArtigosSaude/ArtigoSaudeMenu1';
import ArtigoSaudeMenu2 from './components/Pages/ArtigosSaude/ArtigoSaudeMenu2';
import ArtigoSaudeMenu3 from './components/Pages/ArtigosSaude/ArtigoSaudeMenu3';
import ArtigoSaudeMenu4 from './components/Pages/ArtigosSaude/ArtigoSaudeMenu4';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding4" component={Onboarding4} options={{ headerShown: false }} />
        <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="Políticas De Privacidade" component={PoliticaDePrivacidade} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="Termos De Servico" component={TermosDeServico} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="Agenda" component={Agenda} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="CriarAgendamento" component={CriarAgendamento} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="Documentos" component={Documentos} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="DadosPessoais" component={DadosPessoais} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="DocumentoIdentidade" component={DocumentoIdentidade} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="HistoricoMedico" component={HistoricoMedico} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="Medicamentos" component={Medicamentos} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="EditarAgendamento" component={EditarAgendamento} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="ArtigoSaudeMenu1" component={ArtigoSaudeMenu1} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="ArtigoSaudeMenu2" component={ArtigoSaudeMenu2} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="ArtigoSaudeMenu3" component={ArtigoSaudeMenu3} options={{ headerTitle: '', headerBackTitleVisible: false }} />
        <Stack.Screen name="ArtigoSaudeMenu4" component={ArtigoSaudeMenu4} options={{ headerTitle: '', headerBackTitleVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
