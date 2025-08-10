// src/screens/NotificationScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RootStackParamList } from '../navigation/types';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type Props = StackScreenProps<RootStackParamList, 'Notification'>;

interface Notification {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: string;
  isUnread: boolean;
}

const { width } = Dimensions.get('window');

const notifications: Notification[] = [
  {
    id: '1',
    name: 'Aarush Galloway',
    message: 'Shared your post',
    time: '52 minute ago',
    avatar: 'https://i.pravatar.cc/150?img=7',
    isUnread: true,
  },
  {
    id: '2',
    name: 'Arla Potter',
    message: 'Liked your profile photo',
    time: '1 h ago',
    avatar: 'https://i.pravatar.cc/150?img=8',
    isUnread: true,
  },
  {
    id: '3',
    name: 'Arthur Aguilar',
    message: 'Liked your photo',
    time: '2 h ago',
    avatar: 'https://i.pravatar.cc/150?img=9',
    isUnread: false,
  },
  {
    id: '4',
    name: 'Addie Barrera',
    message: 'Commented your post',
    time: '3 h ago',
    avatar: 'https://i.pravatar.cc/150?img=10',
    isUnread: false,
  },
  {
    id: '5',
    name: 'Anne Southern',
    message: 'added photo in group Awesome UI Kit',
    time: '4 h ago',
    avatar: 'https://i.pravatar.cc/150?img=11',
    isUnread: false,
  },
  {
    id: '6',
    name: 'Brenden Ramirez',
    message: 'Liked your post',
    time: '5 h ago',
    avatar: 'https://i.pravatar.cc/150?img=12',
    isUnread: false,
  },
  {
    id: '7',
    name: 'Brax Stott',
    message: 'Liked your comments',
    time: '6 h ago',
    avatar: 'https://i.pravatar.cc/150?img=13',
    isUnread: false,
  },
];

export default function NotificationScreen({ navigation }: Props) {
  const renderItem = ({
    item,
    index,
  }: {
    item: Notification;
    index: number;
  }) => {
    // First unread in a card style
    if (index === 0 && item.isUnread) {
      return (
        <View style={styles.card}>
          <Image source={{ uri: item.avatar }} style={styles.cardAvatar} />
          <View style={styles.cardText}>
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardMessage}>{item.message}</Text>
          </View>
          <Text style={styles.cardTime}>{item.time}</Text>
        </View>
      );
    }

    return (
      <View style={styles.listItem}>
        <Image source={{ uri: item.avatar }} style={styles.itemAvatar} />
        <View style={styles.itemText}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemMessage}>{item.message}</Text>
        </View>
        {item.isUnread && (
          <TouchableOpacity style={styles.readBtn}>
            <Text style={styles.readBtnText}>Read</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: notifications[0].avatar }}
            style={styles.headerAvatar}
          />
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => {
              /* TODO: handle search */
            }}
          >
            <FontAwesomeIcon icon={faSearch} size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Title & Badge */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Notification</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>35</Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionsRow}>
          <TouchableOpacity>
            <Text style={styles.actionText}>Show all</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionText}>Mark all as read</Text>
          </TouchableOpacity>
        </View>

        {/* List */}
        <FlatList
          data={notifications}
          keyExtractor={(i) => i.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.actionsRow}>
        <TouchableOpacity onPress={() => navigation.replace('Menus')} style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#00C853',
  },
  searchBtn: {
    marginLeft: 'auto',
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#00C853',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    marginLeft: 8,
    backgroundColor: '#00C853',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  actionText: {
    fontSize: 14,
    color: '#666',
  },

  list: {
    paddingBottom: 16,
  },

  // card for first notification
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 8,
    elevation: 2,        // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: 12,
  },
  cardAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cardText: {
    flex: 1,
    marginLeft: 12,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardMessage: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cardTime: {
    fontSize: 12,
    color: '#999',
  },

  // list items
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  itemAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  itemText: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '600',
  },
  itemMessage: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  readBtn: {
    backgroundColor: '#00C853',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  readBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
