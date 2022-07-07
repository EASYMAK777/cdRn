import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from "react-redux";

// 1. Set up Redux


// View -> UIView
export default function App() {
  
  // This is the main App component
  return (

    <Provider>
      <View style={styles.container}>
        <Text></Text>
      </View>
    </Provider>
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
