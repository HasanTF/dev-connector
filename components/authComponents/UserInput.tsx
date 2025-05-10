import React from "react";
import { Text, TextInput, View } from "react-native";

interface InputProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: any;
}
export default function UserInput({
  title,
  placeholder,
  value,
  onChangeText,
}: InputProps) {
  return (
    <View className="flex-1 my-2 mx-2">
      <Text className="text-xl text-black font-bold pl-2 mb-2">{title}</Text>
      <View className="bg-black/5 rounded-full pl-2">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="rgba(0, 0, 0, 0.35)"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}
