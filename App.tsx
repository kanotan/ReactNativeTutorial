import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 32,
    color: 'red',
  },
})

function A() {
  React.useEffect(() => {
    Alert.alert('ฅ(｡•ㅅ•｡ฅ)');
  })
  return <Text>A</Text>
}

function B() {
  React.useEffect(() => {
    Alert.alert('(´・ω・｀)');
  })
  return <Text>B</Text>
}

export default function App() {
  const [needToShowA, setNeedsToShowA] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}
        onPress={() => {
          setNeedsToShowA(!needToShowA);
        }}
      >
        切り替え
      </Text>
      {needToShowA ? <A /> : <B />}
    </View>
  );
}
