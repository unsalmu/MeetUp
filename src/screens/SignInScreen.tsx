import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type Props = StackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignInScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
