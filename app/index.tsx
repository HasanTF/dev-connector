import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <TouchableOpacity onPress={() => router.push("/(auth)/signin")}>
        <Text>START</Text>
      </TouchableOpacity>
    </View>
  );
}
