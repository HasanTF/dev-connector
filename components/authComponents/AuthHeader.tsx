import React from "react";
import { Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface HeaderProps {
  greeting: String;
  action: String;
}

export default function AuthHeader({ greeting, action }: HeaderProps) {
  return (
    <View
      style={{ height: hp(20), borderBottomRightRadius: hp(25) }}
      className="justify-center p-10 gap-2 bg-blue-950"
    >
      <Text className="text-white text-xl">{greeting}</Text>
      <Text className="text-white text-3xl font-bold">{action}</Text>
    </View>
  );
}
