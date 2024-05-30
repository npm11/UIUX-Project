import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.resetPassword}>
      <Pressable
        style={styles.backButtonWrapper}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Image
          style={styles.backButtonIcon}
          source={require("../assets/back-arrow.png")}
        />
      </Pressable>
      <View style={styles.header}>
        <View style={styles.languageSelector}>
          <Text style={styles.languages}>Languages</Text>
          <Image
            style={styles.keyboardArrowDown}
            source={require("../assets/keyboard-arrow-down.png")}
          />
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo2.png")}
          />
          <Text style={styles.kpiEdu}>
            <Text style={styles.kpi}>KPI</Text>
            <Text style={styles.edu}> Edu</Text>
          </Text>
        </View>
      </View>
      <View style={styles.messageWrapper}>
        <Text style={styles.messageText}>
          Enter your user account's verified email address and we will send you
          a password reset link.
        </Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Email address</Text>
        <TextInput 
          style={styles.inputField} 
          placeholder="Enter your email" 
          editable={false} 
        />
      </View>
      <Pressable
        style={styles.resetButton}
        onPress={() => {
          /* Handle password reset */
        }}
      >
        <Text style={styles.resetButtonText}>Send password reset email</Text>
      </Pressable>
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
  resetPassword: {
    flex: 1,
    backgroundColor: Color.white,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  backButtonWrapper: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonIcon: {
    width: 26,
    height: 26,
  },
  header: {
    alignItems: "center",
    marginTop: 45,
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  languages: {
    fontSize: 12,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "700",
    marginRight: 0,
    marginLeft: 15,
  },
  keyboardArrowDown: {
    width: 16,
    height: 16,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 61.3,
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
  messageWrapper: {
    alignItems: "center",
    marginVertical: -20,
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  messageText: {
    fontSize: FontSize.uI16Semi_size,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.uI14Regular,
    textAlign: "center",
  },
  inputWrapper: {
    marginHorizontal: 16,
    marginBottom: -60,
  },
  inputLabel: {
    fontSize: FontSize.uI16Semi_size,
    color: Color.gray04,
    fontFamily: FontFamily.uI16Medium,
    marginBottom: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: Color.colorDimgray_400,
    borderRadius: Border.br_xs,
    padding: 10,
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI14Regular,
  },
  resetButton: {
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_81xl,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 100,
    marginTop: -20,
  },
  resetButtonText: {
    color: Color.white,
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
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

export default ResetPassword;
