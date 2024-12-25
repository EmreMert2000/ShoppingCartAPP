import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

type Product = {
  id: string;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: '1', name: 'Laptop', price: 1200 },
  { id: '2', name: 'Phone', price: 800 },
  { id: '3', name: 'Headphones', price: 200 },
];

type ProductListScreenProps = {
  navigation: any;
};

const ProductListScreen: React.FC<ProductListScreenProps> = ({ navigation }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Cart', { cart })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  product: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default ProductListScreen;