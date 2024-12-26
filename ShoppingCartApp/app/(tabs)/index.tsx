import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type Product = {
  id: string;
  name: string;
  price: number;
};

const ProductListScreen: React.FC<StackScreenProps<RootStackParamList, 'Products'>> = ({ navigation }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    { id: '1', name: 'Product 1', price: 10 },
    { id: '2', name: 'Product 2', price: 20 },
    { id: '3', name: 'Product 3', price: 30 },
  ];

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
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(item)} style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
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
  productItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    marginTop: 5,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ProductListScreen;