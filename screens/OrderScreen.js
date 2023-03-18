import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
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

  const navigation = useNavigation();
  return (
    <ScrollView>
      <Pressable style={{ marginVertical: 10 }}></Pressable>
      <Text
        style={{
          marginTop: 50,
          fontSize: 40,
          color: "#662d91",
          fontWeight: "bold",
          marginLeft: 15,
        }}
      >
        Order Details
      </Text>
      <LottieView
        source={require("../assets/thumbs.json")}
        style={{
          height: 360,
          width: 300,
          alignSelf: "center",
          marginTop: 5,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 1,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your order has been placed!!
      </Text>
      <Text
        style={{
          marginTop: 1,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Order Details have been sent to your Email
      </Text>

      <LottieView
        source={require("../assets/sparkle.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text
        style={{
          marginTop: 70,
          fontSize: 20,
          color: "grey",
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
          color: "grey",
          fontStyle: "italic",
          marginLeft: 15,
        }}
      >
        Your ratings matter to improve our services
      </Text>
      <CustomRatingBar />
      <Pressable style={{ marginVertical: 10 }} />
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text
          style={{
            width: 200,
            backgroundColor: "#318CE7",
            padding: 15,
            borderRadius: 7,
            marginTop: 70,
            marginBottom: 30,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            color: "white",
            fontSize: 20,
          }}
        >
          Continue to wash
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
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
