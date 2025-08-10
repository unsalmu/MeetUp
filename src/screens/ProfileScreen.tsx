// src/screens/ProfileScreen.tsx
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faHeart as faHeartSolid,
  faSearch,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type Props = StackScreenProps<RootStackParamList, 'Profile'>;

const { width } = Dimensions.get('window');
const AVATAR_SIZE = 100;
const STAT_CARD_WIDTH = (width - 48) / 3;
const STORY_COUNT = 4;

const galleryImages = [
  // replace with your own URIs or require(...) calls
  'https://i.pravatar.cc/200?img=1',
  'https://i.pravatar.cc/200?img=2',
  'https://i.pravatar.cc/200?img=3',
];

export default function ProfileScreen({ navigation }: Props) {
  // you could fetch user data via route.params.userId
  const user = {
    name: 'Tom Cruise',
    username: 'tomcruise',
    avatar: 'https://i.pravatar.cc/200?img=3',
    stats: {
      followers: '6.3k',
      posts: '572',
      following: '2.5k',
    },
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesomeIcon icon={faHeartSolid} size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesomeIcon icon={faSearch} size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Avatar & Info */}
        <View style={styles.profileSection}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>@{user.username}</Text>

          {/* Story Indicators */}
          <View style={styles.storiesRow}>
            {Array.from({ length: STORY_COUNT }).map((_, i) => (
              <View key={i} style={styles.storyCircle} />
            ))}
          </View>

          {/* Actions */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.messageButton}>
              <View style={styles.onlineDot} />
              <FontAwesomeIcon
                icon={faCommentDots}
                size={16}
                color="#000"
                style={styles.messageIcon}
              />
              <Text style={styles.messageText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{user.stats.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{user.stats.posts}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{user.stats.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        {/* Gallery */}
        <FlatList
          data={galleryImages}
          keyExtractor={(uri) => uri}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.gallery}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.galleryImage} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { paddingBottom: 24 },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00C853',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerButton: {
    padding: 8,
    backgroundColor: '#00C853',
    borderRadius: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  headerActions: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 12,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  profileSection: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 2,
    borderColor: '#00C853',
    backgroundColor: '#e1e1e1',
  },
  name: {
    marginTop: 12,
    fontSize: 22,
    fontWeight: '600',
  },
  username: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },

  storiesRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  storyCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e1e1e1',
    marginHorizontal: 4,
  },

  actionRow: {
    flexDirection: 'row',
    marginTop: 16,
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00C853',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
    backgroundColor: '#fff',
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00C853',
  },
  messageIcon: {
    marginLeft: 8,
  },
  messageText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
  },
  followButton: {
    backgroundColor: '#00C853',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  followText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingHorizontal: 16,
  },
  statCard: {
    width: STAT_CARD_WIDTH,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    // shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  gallery: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  galleryImage: {
    width: (width - 48) / 3,
    height: (width - 48) / 3,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: '#e1e1e1',
  },
});
