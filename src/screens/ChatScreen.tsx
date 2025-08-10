// src/screens/ChatScreen.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faPhoneAlt,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type Props = StackScreenProps<RootStackParamList, 'Chat'>;

interface Message {
  id: string;
  text: string;
  isMine: boolean;
  avatar: string;
}

const { width } = Dimensions.get('window');

const initialMessages: Message[] = [
  // …same dummy data…
];

export default function ChatScreen({ navigation, route }: Props) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList<Message>>(null);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      isMine: true,
      avatar: 'https://i.pravatar.cc/150?img=6',
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageRow,
        item.isMine ? styles.messageRowMine : styles.messageRowTheir,
      ]}
    >
      {!item.isMine && (
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
      )}
      <View
        style={[
          styles.bubble,
          item.isMine ? styles.bubbleMine : styles.bubbleTheir,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            item.isMine ? styles.textMine : styles.textTheir,
          ]}
        >
          {item.text}
        </Text>
      </View>
      {item.isMine && (
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} color="#fff" size={20} />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <View style={styles.onlineDot} />
          <Text style={styles.headerTitle}>@{route.params.userName}</Text>
          <Text style={styles.lastActive}>Last active: 10 sec ago</Text>
        </View>
        <TouchableOpacity style={styles.callButton}>
          <FontAwesomeIcon icon={faPhoneAlt} color="#00C853" size={18} />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messagesList}
        showsVerticalScrollIndicator={false}
      />

      {/* Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Say something"
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendMessage}
            activeOpacity={0.7}
          >
            <FontAwesomeIcon icon={faPaperPlane} color="#fff" size={18} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// …styles stay the same as before…
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#00C853',
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#00C853',
  },
  headerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00C853',
    marginBottom: 4,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  lastActive: {
    color: '#e0ffe0',
    fontSize: 12,
    marginTop: 2,
  },
  callButton: {
    padding: 8,
    borderRadius: 24,
    backgroundColor: '#e8ffe8',
  },
  messagesList: { padding: 12 },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 6,
  },
  messageRowMine: { justifyContent: 'flex-end' },
  messageRowTheir: { justifyContent: 'flex-start' },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 8,
    backgroundColor: '#e1e1e1',
  },
  bubble: {
    maxWidth: width * 0.7,
    padding: 12,
    borderRadius: 16,
  },
  bubbleMine: {
    backgroundColor: '#00C853',
    borderBottomRightRadius: 0,
  },
  bubbleTheir: {
    backgroundColor: '#f1f1f1',
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  textMine: { color: '#fff' },
  textTheir: { color: '#000' },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  input: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: '#00C853',
    padding: 12,
    borderRadius: 24,
  },
});
