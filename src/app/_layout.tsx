import "@/styles/tailwind.css";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("@/assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("@/assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("@/assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;

  return <Slot />;
};

export default RootLayout;
