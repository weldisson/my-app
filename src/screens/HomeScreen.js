import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { getProducts } from '../api';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import HeaderButton from '../components/HeaderButton';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProducts().then((res) => {
      console.log('res', res.data);
      setProducts(res.data.products);
    }).catch(err => console.error(err));
  }, []);

  const handleBuyPress = (product) => {
    addToCart(product);
  };

  const handleCartPress = () => {
    navigation.navigate('Carrinho');
  };

  return (
    <View>
      <Header
        placement="left"
        leftComponent={<Icon name="menu" onPress={() => navigation.toggleDrawer()} />}
        centerComponent={{ text: 'Produtos', style: { color: '#fff', fontSize: 20 } }}
        rightComponent={<Icon name="shopping-cart" onPress={handleCartPress} />}
      />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} onBuyPress={handleBuyPress} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Produtos',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Carrinho"
          iconName="shopping-cart"
          onPress={() => {
            navigation.navigate('Carrinho');
          }}
        />
      </HeaderButtons>
    ),
  };
};
