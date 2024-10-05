import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

// Sample notification data
const notifications = [
  {
    id: '1',
    date: 'Today, 10:20',
    title: 'LIMITED-TIME PROMO - UP TO 50% OFF!',
    description: "Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!"
  },
  {
    id: '2',
    date: 'Today, 09:05',
    title: 'FLASH SALE ALERT - SAVE BIG TODAY!',
    description: "Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices. This offer won't last long!"
  },
  {
    id: '3',
    date: 'Yesterday, 08:10',
    title: 'GOOD MORNING, RUNNER!',
    description: 'It’s time to step out and run. Give your best to your body today. Find comfort in every step.'
  },
  {
    id: '4',
    date: 'July 13, 2023, 17:30',
    title: 'EXCLUSIVE DISCOUNT JUST FOR YOU',
    description: 'Hello loyal customers! We want to reward you with an exclusive 15% discount on all our shoe products. Use the code "EXCLUSIVE15" at checkout.'
  }
];

const NotificationScreen: React.FC = () => {
  // Function to render each notification item
  const renderNotificationItem = ({ item }: { item: typeof notifications[0] }) => {
    console.log(`Rendering notification: ${item.id}`); // Logging
    return (
      <View style={styles.notificationItem}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <FontAwesome name="chevron-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NOTIFICATION</Text>
        <TouchableOpacity>
          <Text style={styles.markAsRead}>Mark as read</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList for Notifications */}
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderNotificationItem}
        contentContainerStyle={styles.flatListContent}
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
  markAsRead: {
    color: 'orange',
    fontSize: 16,
  },
  flatListContent: {
    padding: 15,
  },
  notificationItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderColor: 'orange',
  },
  dateText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
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

export default NotificationScreen;
