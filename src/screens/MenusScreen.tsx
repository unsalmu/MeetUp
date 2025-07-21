import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type Props = StackScreenProps<RootStackParamList, 'Menus'>;

const Row = ({ title, text, count }: { title: string; text: string; count?: number }) => (
  <TouchableOpacity style={styles.row}>
    <View style={styles.rowTextContainer}>
      <Text style={styles.rowTitle}>{title}</Text>
      <Text style={styles.rowSubtitle}>{text}</Text>
    </View>
    <View style={styles.rowRight}>
      {count !== undefined && count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      )}
      <Text style={styles.arrow}>&gt;</Text>
    </View>
  </TouchableOpacity>
);

export default function MenusScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.avatar} />
          <View style={styles.headerInfo}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.username}>@johndoe</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.arrow}>&gt;</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          <Row title="Notification" text="See your recent activity." count={35} />
          <Row title="Friends" text="Friendliest totals" />
          <Row title="Messages" text="Message your friends" count={2} />
          <Row title="Albums" text="Save or post your albums" />
          <Row title="Favorites" text="Friends you love" />
        </View>

        <View style={styles.divider} />

        <View style={styles.menuSection}>
          <Row title="Privacy Policy" text="Protect your privacy" />
        </View>

        <TouchableOpacity style={styles.logoutButton}
        onPress={() => navigation.replace('Onboarding')}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  container: { 
    flex: 1 
  },
  contentContainer: { 
    flexGrow: 1,
    padding: 16,
    paddingBottom: 32 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 24,
    paddingTop: 8 
  },
  avatar: { 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: '#e0e0e0' 
  },
  headerInfo: { 
    flex: 1, 
    marginLeft: 16 
  },
  name: { 
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 2 
  },
  username: { 
    color: '#666',
    fontSize: 14 
  },
  arrow: { 
    fontSize: 20, 
    color: '#999', 
    marginLeft: 8 
  },
  stats: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 32,
    paddingVertical: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 16 
  },
  statItem: { 
    alignItems: 'center', 
    flex: 1 
  },
  statNumber: { 
    fontWeight: 'bold', 
    fontSize: 20,
    marginBottom: 4 
  },
  statLabel: { 
    color: '#666',
    fontSize: 12 
  },
  menuSection: {
    marginBottom: 16 
  },
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 16,
    paddingHorizontal: 4,
    borderRadius: 8 
  },
  rowTextContainer: { 
    flex: 1 
  },
  rowTitle: { 
    fontSize: 16, 
    fontWeight: '600',
    marginBottom: 2 
  },
  rowSubtitle: { 
    color: '#666', 
    fontSize: 13 
  },
  rowRight: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  badge: { 
    backgroundColor: '#28a745', 
    borderRadius: 12, 
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
    minWidth: 24,
    alignItems: 'center' 
  },
  badgeText: { 
    color: '#fff', 
    fontSize: 12,
    fontWeight: '600' 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#e9ecef', 
    marginVertical: 16 
  },
  logoutButton: { 
    marginTop: 24, 
    alignItems: 'center', 
    paddingVertical: 16, 
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dc3545' 
  },
  logoutText: { 
    fontWeight: '600', 
    color: '#dc3545',
    fontSize: 16 
  },
});
