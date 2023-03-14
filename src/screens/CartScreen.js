import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const CartScreen = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemovePress = (product) => {
    removeFromCart(product);
  };

  const handleClearPress = () => {
    clearCart();
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <ProductCard product={item} />
        <Button
          icon={<Icon name="remove" size={20} color="white" />}
          buttonStyle={{ backgroundColor: 'red', marginLeft: 10 }}
          onPress={() => handleRemovePress(item)}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 50 }}>O carrinho está vazio.</Text>
      )}
      {cartItems.length > 0 && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <Button title="Limpar carrinho" onPress={handleClearPress} />
          <Button
            title="Finalizar compra"
            onPress={() => alert('Compra finalizada com sucesso!')}
          />
        </View>
      )}
    </View>
  );
};

export default CartScreen;
