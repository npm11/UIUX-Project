import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import ResetPassword from "./screens/ResetPassword";
import ResetPasswordStep from "./screens/ResetPasswordStep";
import ResetPasswordStep1 from "./screens/ResetPasswordStep1";
import Calendar from "./screens/Calendar";
import ProfileList from "./screens/ProfileList";
import ProfilePhotos from "./screens/ProfilePhotos";
import ProfilePhotos1 from "./screens/ProfilePhotos1";
import EditProfile from "./screens/EditProfile";
import EditProfile1 from "./screens/EditProfile1";
import KPICompletionProgress from "./screens/KPICompletionProgress";
import Messages from "./screens/Messages";
import DetailTask from "./screens/DetailTask";
import MassageWith from "./screens/MassageWith";
import Activities from "./screens/Activities";
import ActivityDelete from "./screens/ActivityDelete";
import DoneTasks from "./screens/DoneTasks";
import KPICompletionProgress1 from "./screens/KPICompletionProgress1";
import Notification1 from "./screens/Notification1";
import KPICompletionProgress2 from "./screens/KPICompletionProgress2";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-LightItalic": require("./assets/fonts/Montserrat-LightItalic.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "PlusJakartaSans-Regular": require("./assets/fonts/PlusJakartaSans-Regular.otf"),
    "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
    "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
    "NotoSans-LightItalic": require("./assets/fonts/NotoSans-LightItalic.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
          <Stack.Screen name="ResetPasswordStep" component={ResetPasswordStep} options={{ headerShown: false }} />
          <Stack.Screen name="ResetPasswordStep1" component={ResetPasswordStep1} options={{ headerShown: false }} />
          <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
          <Stack.Screen name="ProfileList" component={ProfileList} options={{ headerShown: false }} />
          <Stack.Screen name="ProfilePhotos" component={ProfilePhotos} options={{ headerShown: false }} />
          <Stack.Screen name="ProfilePhotos1" component={ProfilePhotos1} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile1" component={EditProfile1} options={{ headerShown: false }} />
          <Stack.Screen name="KPICompletionProgress" component={KPICompletionProgress} options={{ headerShown: false }} />
          <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
          <Stack.Screen name="DetailTask" component={DetailTask} options={{ headerShown: false }} />
          <Stack.Screen name="MassageWith" component={MassageWith} options={{ headerShown: false }} />
          <Stack.Screen name="Activities" component={Activities} options={{ headerShown: false }} />
          <Stack.Screen name="ActivityDelete" component={ActivityDelete} options={{ headerShown: false }} />
          <Stack.Screen name="DoneTasks" component={DoneTasks} options={{ headerShown: false }} />
          <Stack.Screen name="KPICompletionProgress1" component={KPICompletionProgress1} options={{ headerShown: false }} />
          <Stack.Screen name="Notification1" component={Notification1} options={{ headerShown: false }} />
          <Stack.Screen name="KPICompletionProgress2" component={KPICompletionProgress2} options={{ headerShown: false }} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
