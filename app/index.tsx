import { Text, View, SafeAreaView, StyleSheet} from 'react-native';

import { useRouter } from 'expo-router';

import Card_Logo from '../components/common/Card_Logo';
import Colors from '../assets/Colors/Colors';
import Button_TelaInicial from '../components/Tela_Inicial/Button-Tela_Inicial';

export default function Tela_Inicial() {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.view_Logo}>
         <Card_Logo/>
        </View>
        <View style={styles.view_Card_Bottom}>
          <View style = {styles.titulo_View_Buttons}>
            <Text style = {styles.text_Titulo_Card_Button}>Seja Bem-Vindo(a) {'\n'}
              <Text style = {[styles.text_Titulo_Card_Button, {color: 'white'}]}>Ao Movimento Sem Barreira</Text>
            </Text>
            <Text  style= {styles.text_Texto_Card_Button}>Prepare-se para conhecer a inovação que está redefinindo  
              acessibilidade na educação. O Movimento Sem Barreira mergulhou  
              profundamente no mapeamento de 6000 escolas estaduais e numerosas 
              escolas privadas no estado de São Paulo.
            </Text>
          </View>
          <View style = {styles.view_Buttons}>
            <Button_TelaInicial 
              onPress={() => router.push('/')}
              title="Login" backgroundColor = {'black'} 
              pressedColor={'white'} 
              textColor={'white'} 
              textPressedColor={Colors.cor_principal_vermelho}>
            </Button_TelaInicial>
            <Button_TelaInicial 
              onPress={() => router.push('/')}
              title="Cadastrar-se" backgroundColor = {'white'} 
              pressedColor={'black'} 
              textColor={Colors.cor_principal_vermelho} 
              textPressedColor={'white'}>
            </Button_TelaInicial>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  view_Logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view_Card_Bottom: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EF345F',
    paddingBottom: 40,
    height: 350,
  },
  titulo_View_Buttons: {
    justifyContent: 'space-between',
    width: 350,
    height: 170
  },
  text_Titulo_Card_Button: {
    fontSize: 26,
    fontWeight: '700',
    width: 440,
  },
  text_Texto_Card_Button: {
    fontSize: 14,
    fontWeight: '500'
  },
  view_Buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 160,
    height: 60,
  }
});
