import AuthHeader from "@/components/authComponents/AuthHeader";
import UserInput from "@/components/authComponents/UserInput";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SignUp() {
  const router = useRouter();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      {/* Header */}
      <AuthHeader greeting={"Create Your Account"} action={"Sign Up"} />

      {/* Form Container */}
      <View className="flex-1 justify-around px-8 py-20">
        {/* UserName Container */}
        <View className="flex-row">
          <UserInput
            title="First Name"
            placeholder="Firt Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <UserInput
            title="Last Name"
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <UserInput
          title="Email Adress"
          placeholder="Enter Email Adress"
          value={email}
          onChangeText={setEmail}
        />
        <UserInput
          title="Phone Number (Optional)"
          placeholder="Enter Your Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <UserInput
          title="Password"
          placeholder="Enter Your Passwrod"
          value={password}
          onChangeText={setPassword}
        />
        <UserInput
          title="Confirm Passwrod"
          placeholder="Confirm Your Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity className="bg-blue-950 rounded-full p-4 mt-12">
          <Text className="text-white text-center font-bold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
