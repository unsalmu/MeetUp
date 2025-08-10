// src/screens/CommentsScreen.tsx
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faEllipsisV,
  faShareAlt,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type Props = StackScreenProps<RootStackParamList, 'Comments'>;

interface Comment {
  id: string;
  name: string;
  avatar: string;
  time: string;
  text: string;
  liked?: boolean;
}

const { width } = Dimensions.get('window');

const shareCount = 8;
const likeCount = 186;
const commentCount = 38;

// dummy comments
const comments: Comment[] = [
  {
    id: '1',
    name: 'Morsalin Nur',
    avatar: 'https://i.pravatar.cc/150?img=6',
    time: '52 minutes ago',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '2',
    name: 'Arthur Aguilar',
    avatar: 'https://i.pravatar.cc/150?img=3',
    time: '52 minutes ago',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    name: 'Brenden Ramirez',
    avatar: 'https://i.pravatar.cc/150?img=12',
    time: '52 minutes ago',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function CommentsScreen({ navigation }: Props) {
  const renderHeader = () => (
    <View>
      {/* Banner */}
      <View style={styles.bannerWrapper}>
        <Image
          source={require('../assets/onboard.png')}
          style={styles.bannerImage}
        />
        <TouchableOpacity
          style={styles.bannerBack}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bannerMenu}
          onPress={() => {
            /* TODO: menu action */
          }}
        >
          <FontAwesomeIcon icon={faEllipsisV} size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Actions row */}
      <View style={styles.actionRow}>
        <View style={styles.actionItem}>
          <FontAwesomeIcon icon={faShareAlt} size={18} color="#444" />
          <Text style={styles.actionText}>{shareCount}</Text>
        </View>
        <View style={styles.actionItem}>
          <FontAwesomeIcon icon={faHeart} size={18} color="#444" />
          <Text style={styles.actionText}>{likeCount}</Text>
        </View>
        <View style={styles.actionItem}>
          <FontAwesomeIcon icon={faComment} size={18} color="#444" />
          <Text style={styles.actionText}>{commentCount}</Text>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }: { item: Comment }) => (
    <View style={styles.commentRow}>
      <Image source={{ uri: item.avatar }} style={styles.commentAvatar} />
      <View style={styles.commentBody}>
        <View style={styles.commentHeader}>
          <Text style={styles.commentName}>{item.name}</Text>
          <Text style={styles.commentTime}>{item.time}</Text>
          <TouchableOpacity style={styles.commentLike}>
            <FontAwesomeIcon icon={faHeart} size={16} color="#999" />
          </TouchableOpacity>
        </View>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={comments}
        keyExtractor={(c) => c.id}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { paddingBottom: 24 },

  bannerWrapper: {
    width,
    height: width * 0.6,
    position: 'relative',
    backgroundColor: '#000',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerBack: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(0,200,83,0.9)',
    padding: 8,
    borderRadius: 8,
  },
  bannerMenu: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 8,
    borderRadius: 8,
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#444',
  },

  commentRow: {
    flexDirection: 'row',
    padding: 16,
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e1e1e1',
  },
  commentBody: {
    flex: 1,
    marginLeft: 12,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentName: {
    fontSize: 15,
    fontWeight: '600',
  },
  commentTime: {
    marginLeft: 8,
    fontSize: 12,
    color: '#666',
  },
  commentLike: {
    marginLeft: 'auto',
  },
  commentText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
