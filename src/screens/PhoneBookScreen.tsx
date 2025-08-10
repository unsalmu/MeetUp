// src/screens/PhoneBookScreen.tsx
import React, { useState, useMemo } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThLarge, faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type Props = StackScreenProps<RootStackParamList, 'PhoneBook'>;

interface Contact {
  id: string;
  name: string;
  username: string;
  avatar?: string;
}

const { width } = Dimensions.get('window');
const ITEM_SPACING = 16;
const ITEM_WIDTH = (width - ITEM_SPACING * 3) / 2;

const TABS = ['All', 'Facebook', 'Linkedin', 'Instagram', 'Twitter'] as const;

const ALL_CONTACTS: Record<typeof TABS[number], Contact[]> = {
  All: [
    { id: '1', name: 'Rose',     username: 'aarushga',  avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', name: 'Jack',     username: 'arlapottter', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', name: 'Tom',      username: 'arthuragu', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: '4', name: 'Rdj',      username: 'addiebarr', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: '5', name: 'Brenden',  username: 'brendenra',  /* no avatar */ },
    { id: '6', name: 'Brax',     username: 'braxstott',  /* no avatar */ },
  ],
  Facebook: [
    { id: '1', name: 'Rose', username: 'aarushga', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', name: 'Jack', username: 'arlapottter', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', name: 'Tom',  username: 'arthuragu', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: '4', name: 'Rdj',  username: 'addiebarr', avatar: 'https://i.pravatar.cc/150?img=4' },
  ],
  Linkedin: [],
  Instagram: [],
  Twitter: [],
};

export default function PhoneBookScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]>('Facebook');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const list = ALL_CONTACTS[activeTab];
    if (!search.trim()) return list;
    return list.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.username.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeTab, search]);

  const sections = useMemo(() => {
    const groups: Record<string, Contact[]> = {};
    filtered.forEach((c) => {
      const letter = c.name[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(c);
    });
    return Object.entries(groups)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([title, data]) => ({ title, data }));
  }, [filtered]);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faThLarge} size={24} color="#00C853" />
        </TouchableOpacity>
        <Text style={styles.title}>Phone book</Text>
        <TouchableOpacity onPress={() => navigation.replace('Menus')} style={styles.backButton}>
                  <FontAwesomeIcon icon={faArrowLeft} size={24} color="#fff" />
                </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faSearch} size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabItem,
              activeTab === tab && styles.tabItemActive,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          style={styles.searchInput}
        />
      </View>

      {/* List */}
      <ScrollView contentContainerStyle={styles.list}>
        {sections.map(({ title, data }) => (
          <View key={title} style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.grid}>
              {data.map((c) => (
                <TouchableOpacity
                  key={c.id}
                  style={styles.card}
                  onPress={() =>
                    navigation.navigate('Profile', { userId: c.id })
                  }
                >
                  <Image
                    src={c.avatar}
                    style={styles.avatar}
                  />
                  <Text style={styles.name}>{c.name}</Text>
                  <Text style={styles.username}>@{c.username}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  tabItem: {
    marginRight: 16,
    paddingBottom: 8,
  },
  tabItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#00C853',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  tabTextActive: {
    color: '#00C853',
    fontWeight: '600',
  },
  searchContainer: {
    margin: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  list: {
    paddingBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: ITEM_SPACING / -2,
  },
  card: {
    width: ITEM_WIDTH,
    margin: ITEM_SPACING / 2,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#00C853',
    marginBottom: 8,
    backgroundColor: '#e1e1e1',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  username: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#00C853',
    alignItems: 'center',
    justifyContent: 'center',    
    marginRight: 16
  }
});
