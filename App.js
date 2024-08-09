import { Dimensions, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import ProductCard from './src/components/ProductCard/ProductCard';
import products_data from './src/products_data.json'

export default function App() {


  const renderProduct = ({item}) => <ProductCard products={item} />
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Store</Text>
      <TextInput 
        style={styles.input}
        placeholder='Search..'
        value= ''
      />
      <FlatList style={styles.flatlist}  numColumns={2} 
        data={products_data}
        renderItem={renderProduct}
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
   

    
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    textAlign: 'center',

  },
  input: {
    borderColor: '#B4B4B8',
    height: 40,
    margin: 12, 
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    padding: 10,
    fontSize: 14,

  },
  
});
