import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartScreenProps = {
  route: {
    params: {
      cart: Product[];
    };
  };
};

const CartScreen: React.FC<CartScreenProps> = ({ route }) => {
  const { cart } = route.params;

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${calculateTotal()}</Text>
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
  cartItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default CartScreen;