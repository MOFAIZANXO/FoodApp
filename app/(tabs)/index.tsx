import { StyleSheet, Image, Text, View } from 'react-native';
import Food from  '@/assets/Data/Food';//This line imports Food array data from  the Food.tsx file

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: Food[0].image }}
        style={styles.image}
      />
      <Text style={styles.titleText}>{Food[0].title}</Text>
      <Text style={styles.titleText}>{Food[0].price}</Text>
      <Image
        source={{ uri: Food[1].image }}
        style={styles.image}
      />
      <Text style={styles.titleText}>{Food[1].title}</Text>
      <Text style={styles.titleText}>{Food[1].price}</Text>
    </View>
  );
}

//Styling like in html css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleText: {
    fontSize: 30,
    color: 'black',
  },
  image: {
    width: '100%',
    aspectRatio: 2/1,
    marginBottom: 5,
  },
});
