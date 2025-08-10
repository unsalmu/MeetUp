// src/screens/SignInScreen.tsx
import React, { useState ,useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';



const { width } = Dimensions.get('window');

export default function SignInScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('useEffect ile çalıştım')
    
  }, [email])
  

  return (
    <SafeAreaView style={styles.container}>
      {/* Top bar with back arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View style={styles.content}>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>

        {/* Form */}
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry
          keyboardType={'numeric'}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => console.log('selmammm')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>

        {/* Sign In button */}
        <TouchableOpacity
          style={styles.signInBtn}
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate('Menus')} // or 'Home' etc.
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or with</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesomeIcon icon={faGoogle} size={20} style={styles.socialIcon} />
          <Text style={styles.socialText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesomeIcon icon={faFacebook} size={20} style={styles.socialIcon} />
          <Text style={styles.socialText}>Sign in with Facebook</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} //burayı düzelteceiz 
          >
            <Text style={styles.signUpText}>Let's Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    height: 60,
    backgroundColor: '#00C853',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  input: {
    width: width - 48,
    borderWidth: 1,
    borderColor: '#00C853',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  forgot: {
    alignSelf: 'flex-end',
    color: '#00C853',
    textDecorationLine: 'underline',
    marginBottom: 32,
  },
  signInBtn: {
    width: width - 48,
    backgroundColor: '#00C853',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#666',
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  socialIcon: { marginRight: 12 },
  socialText: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 32,
  },
  footerText: {
    color: '#666',
  },
  signUpText: {
    color: '#00C853',
    fontWeight: '600',
  },
});
