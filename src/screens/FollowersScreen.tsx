// src/screens/FollowersScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';


type Props = StackScreenProps<RootStackParamList, 'Followers'>;

interface Follower {
  id: string;
  name: string;
  username: string;
  avatar: string;       // URI or require‑path
  isFollowing: boolean;
}

const { width } = Dimensions.get('window');

// dummy data – replace avatar URIs with your own assets
const followers: Follower[] = [
  { id: '1', name: 'Shah Rukh Khan', username: 'srk', avatar: 'https://i.pravatar.cc/150?img=1', isFollowing: false },
  { id: '2', name: 'Robert Downey Jr.', username: 'rdj', avatar: 'https://i.pravatar.cc/150?img=2', isFollowing: true },
  { id: '3', name: 'Tom Cruise', username: 'tomcruise', avatar: 'https://i.pravatar.cc/150?img=3', isFollowing: false },
  { id: '4', name: 'Eleazbeth', username: 'eleazbeth', avatar: 'https://i.pravatar.cc/150?img=4', isFollowing: false },
  { id: '5', name: 'Kate Winslet', username: 'KateWinslet', avatar: 'https://i.pravatar.cc/150?img=5', isFollowing: false },
  { id: '6', name: 'Saoirse Hopper', username: 'saoirsehop', avatar: '', isFollowing: true },
  { id: '7', name: 'Melina Charlton', username: 'melinacharl', avatar: '', isFollowing: true },
];

export default function FollowersScreen({ navigation }: Props) {
  const renderItem = ({ item }: { item: Follower }) => (
    <View style={styles.itemContainer}>
      <Image
        src={item.avatar}
        style={styles.avatar}
      />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>@{item.username}</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          item.isFollowing ? styles.buttonFollowing : styles.buttonFollow,
        ]}
        onPress={() => {
          // TODO: toggle follow state
        }}
      >
        <Text
          style={[
            styles.buttonText,
            item.isFollowing ? styles.textFollowing : styles.textFollow,
          ]}
        >
          {item.isFollowing ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.replace('Menus')} style={styles.backButton}>
            <FontAwesomeIcon icon={faArrowLeft} size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Followers (4K)</Text>
        </View>

        {/* List */}
        <FlatList
          data={followers}
          keyExtractor={i => i.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#00C853',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#00C853',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  list: {
    paddingVertical: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e1e1e1',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  username: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },

  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonFollow: {
    backgroundColor: '#00C853',
  },
  buttonFollowing: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#00C853',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  textFollow: {
    color: '#fff',
  },
  textFollowing: {
    color: '#00C853',
  },
});
