import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const photo = require("../data/sagepic.jpg");
const backImage = require("../data/bubbles1.jpg");

const ProfileScreen = () => {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
  const starImgCorner =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const user = auth.currentUser;
  const navigation = useNavigation();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />

      <Pressable style={{ marginVertical: 10 }}>
        <Text
          style={{
            marginTop: 50,
            fontSize: 40,
            color: "#f8edeb",
            fontWeight: "bold",
            marginLeft: 15,
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            color: "#ced4da",
            fontWeight: "bold",
            marginLeft: 15,
          }}
        >
          Hope you like our services!!
        </Text>

        <Image
          style={{
            width: 140,
            height: 140,
            borderRadius: 60,
            marginLeft: 130,
            marginTop: 80,
          }}
          source={photo}
        />

        <Text
          style={{
            alignItems: "center",
            marginTop: 25,
            fontSize: 20,
            textAlign: "center",
            color: "white",
          }}
        >
          {user.email}
        </Text>
      </Pressable>

      <Pressable onPress={signOutUser}>
        <Text
          style={{
            width: 200,
            backgroundColor: "#318CE7",
            padding: 15,
            borderRadius: 7,

            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            color: "white",
            fontSize: 20,
          }}
        >
          Sign Out
        </Text>
      </Pressable>
      <Text
        style={{
          marginTop: 100,
          fontSize: 20,
          color: "#caf0f8",
          fontWeight: "bold",
          marginLeft: 15,
        }}
      >
        Would you like to rate our services out of 5?
      </Text>

      <Text
        style={{
          marginTop: 8,
          fontSize: 16,
          color: "#edede9",
          fontStyle: "italic",
          marginLeft: 15,
        }}
      >
        Your ratings matter to improve our services
      </Text>
      <CustomRatingBar />
      <Pressable style={{ marginVertical: 10 }} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  backImage: {
    width: "100%",
    height: "150%",
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "130%",
    position: "absolute",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  CustomRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
});
