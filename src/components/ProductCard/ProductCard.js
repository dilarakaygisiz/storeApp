import React from "react";
import styles from "./ProductCard.style";
import { View, Image, Text } from "react-native";

const ProductCard = ({ products }) => {
  return (
    <View style={styles.container}  >
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{ uri: products.imgURL }} />
        <View style= {styles.description}>
          <Text style={styles.title}>{products.title}</Text>
          <Text style={styles.price}>{products.price}</Text>
            <Text style={styles.inStock}>{products.inStock ? "" : "Out of Stock "}
           </Text> 
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
