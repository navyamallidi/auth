import React, { useState } from 'react';
import { View, TextInput,Image, Button, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '@/redux/actions/authAction';
import { useNavigation } from '@react-navigation/native';

const LoginSignupScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [phone, setphone] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (isLogin) {
      dispatch(login({ username, phone })).then(() => {
        navigation.navigate('Home'); // Navigate to Home screen on successful login
      });
    } else {
      dispatch(signup({ username, phone })).then(() => {
        navigation.navigate('Home'); // Navigate to Home screen on successful signup
      });
    }
  };

  return (
    <View>
    <Image
        style={{ width: "100%", height: 300, display: "flex" }}
        source={require("@/assets/images/bc.png")}
      />
      <View style={{
          backgroundColor: "#fff",
          borderRadius: 20,
          marginTop: -10,
          height: "100%",
          width: "100%",
        }}>

      <Text style={styles.title}>{isLogin ? 'Log in' : 'Sign up'}</Text>

      <Text style={{fontSize:15, marginLeft:20, marginTop:10}}>{isLogin ? "let's get you verified" : "let's get you started! fill in the below details"}</Text>


      <View style={{margin:20}}>
      <View style={styles.labelContainer}>
      <Text>Name</Text>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      </View>
      </View>
      
      
      {!isLogin && (
        <View style={{marginLeft:20, marginRight:20, marginTop:10}}>
        <View style={styles.labelContainer}>
      <Text>PhoneNumber</Text>
      </View>
      <View style={styles.inputContainer}>
          <TextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={setphone}
            secureTextEntry
          />
        </View>
        </View>
      )}

      {error && <Text style={styles.error}>{error.message}</Text>}


      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{alignItems:"center",color:"#fff", padding:10, fontSize:15, fontWeight:"bold"}}>{loading ? 'Loading...' : isLogin ? 'Get OTP' : 'Get OTP'}</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.switchButton} onPress={() => setIsLogin(!isLogin)}>
        <Text>{`${isLogin ? 'New' : 'already a'} member?`}
        <Text style={{color:"blue"}}>
        {`${isLogin ? ' Signup' : ' Login'}`}
        </Text>
        </Text>
      </TouchableOpacity>

    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 5,
    marginLeft:20,
    paddingTop:30,
    fontWeight:"bold"
  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
  labelContainer: {
        backgroundColor: "white",
        paddingHorizontal: 3, 
        marginStart: 10, // How far right do you want the label to start
        zIndex: 1, // Label must overlap border
        elevation: 1, // Needed for android
        shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
        position: "absolute", // Needed to be able to precisely overlap label with border
        top: -9, // Vertical position of label. Eyeball it to see where label intersects border.
    },
    inputContainer: {
        borderWidth: 1, 
        borderColor:"gray",
        borderRadius: 8, // Not needed. Just make it look nicer.
        padding: 8, // Also used to make it look nicer
        zIndex: 0, // Ensure border has z-index of 0
    },

    button:{
      backgroundColor:"#4A2C76",
      borderRadius:20,
      width:280,
      alignItems:"center",
      margin:20,
      marginLeft:70,
      height:40
    },
    switchButton:{
      alignItems:"center",
      marginTop:-20
    }
});

export default LoginSignupScreen;
