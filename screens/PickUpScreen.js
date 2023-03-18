import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [payments, setPayment] = useState([]);

  const deliveryTime = [
    {
      id: "0",
      name: "Tomorrow",
    },
    {
      id: "1",
      name: "2-3 Days",
    },
    {
      id: "2",
      name: "3-4 Days",
    },
    {
      id: "3",
      name: "4-5 Days",
    },
    {
      id: "4",
      name: "5-6 Days",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 AM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "3",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];

  const payment = [
    {
      id: "0",
      name: "Cash",
    },
    {
      id: "1",
      name: "BNPL",
    },
  ];

  const navigation = useNavigation();
  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !delivery || !payments) {
      Alert.alert(
        "Empty or invalid",
        "Please select all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    if (selectedDate && selectedTime && delivery && payments) {
      navigation.replace("Cart", {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: delivery,
        paymentMode: payments,
      });
    }
  };

  return (
    <>
      <ScrollView>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginHorizontal: 10,
            marginTop: 60,
          }}
        >
          Enter your Address
        </Text>
        <TextInput
          style={{
            padding: 40,
            borderColor: "gray",
            borderWidth: 0.9,
            paddingVertical: 50,
            borderRadius: 9,
            margin: 10,
            marginBottom: 20,
            fontSize: 30,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          Pick Up Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-03-21")}
          endDate={new Date("2023-03-28")}
          initialSelectedDate={new Date("2023-02-22")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          Select Time
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 1,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          Delivery Date
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 1,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
              onPress={() => setDelivery(item.name)}
              key={i}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          Payment Mode
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {payment.map((item, i) => (
            <Pressable
              style={
                payments.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 1,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
              onPress={() => setPayment(item.name)}
              key={i}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            marginTop: "auto",
            padding: 10,
            marginBottom: 40,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | $ {total}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              Extra charges may apply
            </Text>
          </View>

          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});
