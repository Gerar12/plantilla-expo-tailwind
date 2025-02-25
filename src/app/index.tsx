import { View, Text, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-black/90">
      <View className="flex-1 justify-center items-center">
        <Text className="text-center text-blue-200 text-4xl font-work-black">
          {"< G CODER />"}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
