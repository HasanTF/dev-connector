import AuthHeader from "@/components/authComponents/AuthHeader";
import UserInput from "@/components/authComponents/UserInput";
import { signIn } from "@/lib/firebase/auth";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Pressable, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function SignIn() {
  const router = useRouter();

  const [login, setLogin] = useState<boolean>(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      if (!email || !password) {
        Alert.alert("Error", "Email and password are required");
        return;
      }

      await signIn({ email, password });
    } catch (error: any) {
      console.error("Login failed:", error);
      Alert.alert("Login Failed", error.message || "Something went wrong");
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      {/* Header */}
      <View>
        <AuthHeader greeting={"Welcome Back!"} action={"Sign In"} />
      </View>

      {/* Content Container */}
      <View className="flex-1 justify-around px-8 py-20">
        {/* Form Container */}
        <View>
          <UserInput
            title="Email Adress"
            placeholder="Enter Email Adress"
            value={email}
            onChangeText={setEmail}
          />
          <UserInput
            title="Password"
            placeholder="Enter Your Passwrod"
            value={password}
            onChangeText={setPassword}
          />
          {/* Resetting Password */}
          <View>
            <Pressable className="items-end">
              <Text className="font-semibold">Forgot Password?</Text>
            </Pressable>
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          onPress={() => handleLogin({ email, password })}
          className="bg-blue-950 rounded-full p-4"
        >
          <Text className="text-white text-center font-bold">Sign In</Text>
        </TouchableOpacity>

        {/* Splitter */}
        <View className="flex-row items-center">
          <View className="flex-1 h-[1px] bg-zinc-400" />
          <Text className="mx-2 text-zinc-400">Or</Text>
          <View className="flex-1 h-[1px] bg-zinc-400" />
        </View>

        {/* Signing in with Google */}
        <View className="justify-center">
          <TouchableOpacity className="flex-row justify-center items-center bg-black/5 rounded-full gap-2 p-4">
            <Ionicons name="logo-google" size={hp(2)} color={"black"} />
            <Text className="text-black text-center font-extrabold">
              Google
            </Text>
          </TouchableOpacity>
        </View>

        {/* Dont have an Account */}
        <View className="flex-row gap-2">
          <Text className="text-lg">Don't Have An Account?</Text>
          <Pressable onPress={() => router.push("/(auth)/signup")}>
            <Text className="text-lg font-extrabold text-blue-500">
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
