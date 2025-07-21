import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type Props = StackScreenProps<RootStackParamList, 'Notification'>;

export default function NotificationScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text>NotificationScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});