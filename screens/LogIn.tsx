import * as React from "react";
import { Text, StyleSheet, View, Pressable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [rememberMe, setRememberMe] = React.useState(false);

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={styles.logIn}>
      <View style={styles.header}>
        <View style={styles.languageSelector}>
          <Text style={styles.languages}>Languages</Text>
          <Image
            style={styles.keyboardArrowDown}
            contentFit="cover"
            source={require("../assets/keyboard-arrow-down.png")}
          />
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            contentFit="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={styles.kpiEdu}>
            <Text style={styles.kpi}>KPI</Text>
            <Text style={styles.edu}> Edu</Text>
          </Text>
        </View>
        <Text style={styles.logInText}>Log In</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputText}>
          <Image
            style={styles.bgIcon}
            contentFit="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={styles.inputLabel}>Email</Text>
        </View>
        <View style={styles.inputText}>
          <Image
            style={styles.bgIcon}
            contentFit="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={styles.inputLabel}>Password</Text>
          <Text style={styles.show}>Show</Text>
        </View>
        <Pressable
          style={styles.forgetPassword}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={styles.forgetPasswordText}>Forget your password?</Text>
        </Pressable>
      </View>
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleRememberMe}>
      </TouchableOpacity>
      <Pressable
        style={styles.logInButton}
        onPress={() => navigation.navigate("Activities")}
      >
        <Text style={styles.logInButtonText}>Log In</Text>
      </Pressable>
      <Text style={styles.orLogInWith}>Or Log In With</Text>
      <View style={styles.socialIcons}>
        <Image
          style={styles.socialIcon}
          contentFit="cover"
          source={require("../assets/googleicon.png")}
        />
        <Image
          style={styles.socialIcon}
          contentFit="cover"
          source={require("../assets/facebookicon.png")}
        />
      </View>
      <View style={styles.dontHaveAnAccountContainer}>
        <Text style={styles.dontHaveAnAccount}>Don’t have an account?</Text>
        <Pressable
          style={styles.signUpButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLine} />
        <View style={styles.footerLinks}>
          <Text style={styles.footerText}>Introduce</Text>
          <Text style={styles.footerText}>Term</Text>
          <Text style={styles.footerText}>Privacy</Text>
          <Text style={styles.footerText}>Help</Text>
        </View>
        <Text style={styles.footerCopyright}>Name © 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Padding.p_base,
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  languages: {
    fontSize: 12, // Set the desired font size in pixels
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "700", // Make the text bold
    marginRight: 0,
    marginLeft: 15,
  },
  keyboardArrowDown: {
    width: 16,
    height: 16,
  },
  logIn: {
    flex: 1,
    backgroundColor: Color.white,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginTop: 30,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 44,
    height: 51,
  },
  kpiEdu: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    textAlign: "left",
    marginLeft: 16,
  },
  kpi: {
    color: Color.colorOrange,
  },
  edu: {
    color: Color.colorDodgerblue_100,
  },
  logInText: {
    fontSize: FontSize.uI30Semi_size,
    color: Color.black,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  inputContainer: {
    marginBottom: 0,
  },
  inputText: {
    marginBottom: 20,
    position: "relative",
  },
  bgIcon: {
    width: "100%",
    height: 50,
    borderRadius: Border.br_5xs,
  },
  inputLabel: {
    position: "absolute",
    left: 16,
    top: "50%",
    marginTop: -9,
    color: Color.gray03,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  show: {
    position: "absolute",
    right: 16,
    top: "50%",
    marginTop: -9,
    color: Color.greenPrimary,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  forgetPassword: {
    alignSelf: "flex-end",
    marginBottom: -20,
    marginTop: -10,
  },
  forgetPasswordText: {
    textDecorationLine: "underline",
    color: Color.colorGray_400,
    fontSize: FontSize.uI14Regular_size, // Tăng kích thước phông chữ
    fontFamily: FontFamily.uI16Medium, // Thay đổi phông chữ
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  checkboxIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  logInButton: {
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    marginBottom: -30,
    marginTop: -35,
  },
  logInButtonText: {
    color: Color.white,
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  orLogInWith: {
    textAlign: "center",
    fontSize: FontSize.bodyTextRegular_size,
    fontFamily: FontFamily.uI14Regular,
    color: Color.colorGray_300,
    marginBottom: -30,
    marginTop: 0,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialIcon: {
    width: 48,
    height: 48,
    marginHorizontal: 30,
  },
  dontHaveAnAccountContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: -30,
  },
  dontHaveAnAccount: {
    fontSize: FontSize.size_xl,
    color: Color.black,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },
  signUpButton: {
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    width: "100%", // Điều chỉnh kích thước theo nhu cầu
  },
  signUpButtonText: {
    color: Color.white,
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  signUp: {
    textDecorationLine: "underline",
    color: Color.colorGray_400,
  },
  footer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
  },
  footerLine: {
    width: "80%",
    height: 1.5,
    backgroundColor: Color.colorRoyalblue_100,
    marginBottom: 25,
  },
  footerLinks: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 10,
  },
  footerText: {
    fontSize: FontSize.bodyTextRegular_size,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  footerCopyright: {
    fontSize: FontSize.bodyTextRegular_size,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    marginTop: 10,
  },
});

export default LogIn;
