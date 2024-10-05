import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const wishlist: React.FC = () => {
    
  // Sample data for wishlist items (you can replace this with your actual data)
  const wishlistItems = [
    {
      id: '1',
      name: 'AERO SPORT INFINITY PRO',
      category: 'Footwear',
      price: 'Rp400.000',
      image: require('../../assets/images/shoe1.png'), // Replace with your image source
    },
    {
      id: '2',
      name: 'SPORT - INVINCIBLE PRO',
      category: 'Footwear',
      price: 'Rp389.000',
      image: require('../../assets/images/shoe2.png'), // Replace with your image source
    },
    {
      id: '3',
      name: 'SPORT SNEAKERS - BLUE',
      category: 'Footwear',
      price: 'Rp200.000',
      image: require('../../assets/images/shoe3.png'), // Replace with your image source
    },
    {
      id: '4',
      name: 'SPORT - INVINCIBLE MAX',
      category: 'Footwear',
      price: 'Rp399.000',
      image: require('../../assets/images/shoe4.png'), // Replace with your image source
    },
  ];

  const renderWishlistItem = ({ item }: { item: any }) => (
    <View style={styles.wishlistItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <FontAwesome name="chevron-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>WISHLIST</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <FontAwesome name="heart" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartIcon}>
            <FontAwesome name="shopping-cart" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* FlatList for Wishlist Items */}
      <FlatList
        data={wishlistItems}
        renderItem={renderWishlistItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.grid}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('index')}>
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('wishlist')}>
          <FontAwesome name="shopping-bag" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('notification')}>
          <Ionicons name="notifications-sharp" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  cartIcon: {
    marginLeft: 15,
  },
  grid: {
    padding: 15,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  wishlistItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  itemCategory: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default wishlist;
