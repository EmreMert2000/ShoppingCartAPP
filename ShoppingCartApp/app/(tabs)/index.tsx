import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './ProductListScreen';
import CartScreen from './CartScreen';


const Stack = createStackNavigator<RootStackParamList>(); 

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductListScreen}
          options={{ title: 'Product List' }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: 'Your Cart' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;