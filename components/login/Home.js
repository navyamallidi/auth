import { View, Text, Image, TextInput, Button } from "react-native";
import React, { cloneElement } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View>
      <Image
        style={{ width: "100%", height: 300, display: "flex" }}
        source={require("@/assets/images/bc.png")}
      />
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 20,
          marginTop: -10,
          height: "100%",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            marginLeft: 25,
            marginTop: 25,
            fontWeight: "bold",
          }}
        >
          Enter OTP
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "light",
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          Enter 6 digit code sent to *********732 to continue
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            alignItems: "center",
            marginLeft:20,
          }}
        >
          <TextInput
            placeholder="   *"
            style={{
              height: 50,
              borderColor: "#ccc",
              borderWidth: 1,
              marginLeft: 15,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          />

          <TextInput
            placeholder="   *"
            style={{
              height: 50,
              borderColor: "#ccc",
              borderWidth: 1,
              marginLeft: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          />

          <TextInput
            placeholder="   *"
            style={{
              height: 50,
              borderColor: "#ccc",
              borderWidth: 1,
              marginLeft: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          />

          <TextInput
            placeholder="   *"
            style={{
              height: 50,
              borderColor: "#ccc",
              borderWidth: 1,
              marginLeft: 30,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          />

          <TextInput
            placeholder="   *"
            style={{
              height: 50,
              borderColor: "#ccc",
              borderWidth: 1,
              marginLeft: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          />

          <TextInput
            placeholder="    *"
            style={{
              height: 50,
              borderColor: "#ccc",
              borderWidth: 1,
              marginLeft: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            fontSize: 20,
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Text style={{ textDecorationLine: "underline", color: "#808080" }}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{
          backgroundColor:"#4A2C76",
          marginTop:20,
          marginLeft:60,
          width:290,
          height:35,
          borderRadius:20,
          alignItems:"center",
        }}>
          <TouchableOpacity>
            <Text style={{color:"#fff", paddingTop:8}}> Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
