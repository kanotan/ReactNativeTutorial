import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  label: {
    fontSize: 32,
    color: 'blue',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    color: 'white',
  },
  label: {
    fontSize: 32,
    color: 'red',
  },
});

type Theme = typeof lightTheme | typeof darkTheme;

interface Context {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

const ThemeContext = React.createContext<Context>({
  theme: lightTheme,
  setTheme: (_: typeof lightTheme | typeof darkTheme) => {},
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
  const [theme, setTheme] = React.useState(lightTheme);
  const [needToShowA, setNeedsToShowA] = React.useState(true);

  return (
    <View style={theme.container}>
      <Text style={theme.label}
        onPress={() => {
          setTheme(theme === lightTheme ? darkTheme :lightTheme);
          setNeedsToShowA(!needToShowA);
        }}
      >
        切り替え
      </Text>
      {needToShowA ? <A /> : <B />}
    </View>
  );
}
