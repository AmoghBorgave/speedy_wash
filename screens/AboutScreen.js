import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const photo = require("../data/laundry.webp");
const AboutScreen = () => {
  return (
    <ScrollView>
      <Image source={photo} style={styles.photo} />
      <View style={styles.whiteSheet} />
      <Text
        style={{
          marginTop: 50,
          fontSize: 40,
          color: "#dda15e",
          fontWeight: "bold",
          marginLeft: 18,
        }}
      >
        About Us
      </Text>
      <Text
        style={{
          marginTop: 5,
          fontSize: 30,
          color: "#faedcd",
          fontWeight: "bold",
          marginLeft: 18,
        }}
      >
        Speedy Wash
      </Text>
      <Text
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
          color: "white",
          fontWeight: "500",
          fontSize: 20,
          padding: 20,
        }}
      >
        We offer the best laundry services in Pune. Our services includes
        washing, bleaching, ironing,etc. for clothes ranging from shorts to
        marriage dresses as well. We also offer Home Delivery services for our
        customers based on their convenient Date and Time at the lowest costs.
        We are now planning to bring in more features to this app like Buy Now
        and Pay Later Scheme for people who are too busy to take out time and
        pay with cash.
      </Text>

      <Text
        style={{
          alignItems: "center",
          marginTop: 20,
          fontWeight: "600",
          color: "white",
          fontSize: 25,
          fontStyle: "italic",
          padding: 10,
          marginLeft: 5,
        }}
      >
        Contact Details
      </Text>
      <MaterialCommunityIcons
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}
        name="email-outline"
        size={28}
        color="white"
      />
      <Text
        style={{
          fontSize: 18,
          color: "white",
          marginLeft: 13,
          marginTop: 5,
          marginBottom: 7,
        }}
      >
        amobeer@gmail.com
      </Text>
      <MaterialCommunityIcons
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 18 }}
        name="home-outline"
        size={30}
        color="white"
      />
      <Text
        style={{
          fontSize: 18,
          color: "white",
          marginLeft: 13,
          marginTop: 5,
          marginBottom: 7,
        }}
      >
        Sppedy Wash Sr.No-1/2, Behind Dhobi Ghat,Golibar Maidan, Camp, Pune-
        411001, Maharashtra, India.
      </Text>
      <Feather
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 22,
          marginTop: 10,
        }}
        name="phone"
        size={24}
        color="white"
      />
      <Text
        style={{
          fontSize: 18,
          color: "white",
          marginLeft: 20,
          marginTop: 5,
          marginBottom: 7,
        }}
      >
        020-2427001442 (Landline),
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "white",
          marginLeft: 20,
        }}
      >
        +91-9627475453, +91-8728651371
      </Text>

      <Text
        style={{
          alignItems: "center",
          marginTop: 100,
          fontWeight: "500",
          color: "#ccc5b9",
          fontSize: 16,
          padding: 20,
        }}
      >
        This Laundry App has been developed by Amogh and Abeer for presentation
        purposes only. We have used technologies like firebase, react-native and
        javascript. We work as Associate Developers-Technology at Stratacent,
        Pune
      </Text>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  photo: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
});
