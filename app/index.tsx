import { images } from "../constants/images";
import { Image, View } from "react-native";
import * as Updates from "expo-updates";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    async function checkForUpdates() {
      try {
        const update = await Updates.checkForUpdateAsync(); // Checks for an OTA update
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync(); // Downloads the update
          await Updates.reloadAsync(); // Reloads app with new update
        }
      } catch (e) {
        console.log("Update check failed:", e);
      }
    }

    checkForUpdates();
  }, []);
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={images.splash}
        resizeMode="cover"
        className="w-full h-full"
      />
    </View>
  );
}
