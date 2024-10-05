import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: '1', title: 'FOOTWEAR' },
  { id: '2', title: 'BAGS' },
  { id: '3', title: 'APPAREL' },
];

const products = [
  { id: '1', title: 'Air Legging Sport', category: 'Apparel', price: 'Rp200.000', image: require('../../assets/images/pict.png') },
  { id: '2', title: 'Aero Sport Infinity Max', category: 'Footwear', price: 'Rp450.000', image: require('../../assets/images/450.png') },
  { id: '3', title: 'Sport Runner Blue Edition', category: 'Footwear', price: 'Rp250.000', image: require('../../assets/images/250.png') },
  { id: '4', title: 'Sport Bag', category: 'Bag', price: 'Rp350.000', image: require('../../assets/images/350.png') },
];

// Add banner data
const banners = [
  { id: '1', image: require('../../assets/images/banner.png') },
  { id: '2', image: require('../../assets/images/banner1.png') },
];

const index: React.FC = () => {
  const navigate=useNavigation()
  // Render category items
  const renderCategoryItem = ({ item }: { item: { title: string } }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  // Render product items
  const renderProductItem = ({ item }: { item: { title: string, category: string, price: string, image: any } }) => (
    <View style={styles.productItem}>
      <Image
        source={item.image} // use require for local images
        style={styles.productImage}
      />
      <Text>{item.title}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  // Render banner items
  const renderBannerItem = ({ item }: { item: { image: any } }) => (
    <Image
      source={item.image}
      style={styles.banner}
    />
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.logoText}>Sport Shoes</Text>
          <View style={styles.headerIcons}>
            <FontAwesome name="heart-o" size={24} color="black" style={styles.icon} />
            <FontAwesome name="shopping-cart" size={24} color="black" style={styles.icon} />
          </View>
        </View>

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search Items"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Wallet balance and top-up */}
        <View style={styles.balanceContainer}>
          <View style={styles.balanceItem}>
            <Text style={styles.balanceLabel}>Wallet balance</Text>
            <Text style={styles.balanceAmount}>Rp1.000.000</Text>
          </View>
          <View style={styles.topUpContainer}>
            <Text style={styles.balanceLabel}>Top up balance</Text>
            <TouchableOpacity style={styles.topUpButton}>
              <MaterialIcons name="payment" size={24} color="black" />
              <Text>Top up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Banners */}
        <Text style={styles.sectionTitle}>Banners</Text>
        <FlatList
          data={banners}
          renderItem={renderBannerItem}
          keyExtractor={item => item.id}
          horizontal // Enable horizontal scrolling
          contentContainerStyle={styles.bannerList}
        />

        {/* Shop by Category */}
        <Text style={styles.sectionTitle}>Shop by Category</Text>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal // Set to true for horizontal scrolling
          contentContainerStyle={styles.categoryList}
        />

        {/* For You Section */}
        <Text style={styles.sectionTitle}>For You</Text>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />
      </ScrollView>

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
  scrollContent: {
    paddingBottom: 100, // Extra space for scrolling past bottom navbar
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  searchButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  balanceItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
  },
  balanceLabel: {
    fontSize: 12,
    color: '#666',
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  topUpContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerList: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  banner: {
    width: 300, // Adjust based on your desired banner width
    height: 100,
    borderRadius: 10,
    marginRight: 10, // Space between banners
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryList: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  productList: {
    paddingHorizontal: 20,
  },
  productItem: {
    width: '47%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productCategory: {
    fontSize: 12,
    color: '#666',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default index;
