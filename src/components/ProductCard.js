import React from 'react';
import { Card, Button, Icon } from 'react-native-elements';

const ProductCard = ({ product, onBuyPress }) => {
  return (
    <Card>
      <Card.Image source={{ uri: product.image }} />
      <Card.Title>{product.name}</Card.Title>
      <Card.Divider />
      <Card.FeaturedSubtitle>{product.price}</Card.FeaturedSubtitle>
      <Button
        icon={<Icon name="shopping-cart" color="#ffffff" />}
        buttonStyle={{ backgroundColor: '#007bff', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title="Comprar"
        onPress={() => onBuyPress(product)}
      />
    </Card>
  );
};

export default ProductCard;
