import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { Tabs, List, Option, Content } from './componentes/Tabs';



export default function App() {
return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      
      <Text style={styles.title}>Prueba Tecnica - Tabs</Text>
      
      
      <Tabs initialValue="home">
        
        <List>
          <Option value="home">Home</Option>
          <Option value="settings">Settings</Option>
          <Option value="profile">Profile</Option>
        </List>

        <Content value="home">Contenido de la pestaña </Content>
        <Content value="settings">configuraciones</Content>
        <Content value="profile">usuario</Content>
        
      </Tabs>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
screen: {
  flex: 1,
  backgroundColor: '#f5f5f5',
  padding: 20,
  justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333'
  }
});
