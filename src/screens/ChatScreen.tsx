import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type Props = StackScreenProps<RootStackParamList, 'Chat'>;

export default function ChatScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text>ChatScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
