import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ResetPasswordStep = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
<LinearGradient
  colors={['#e0f7fa', '#80deea']} // Adjust these colors as needed
  style={styles.resetPasswordstep1}
>
  <View style={styles.pageHeader}>
    <Text style={styles.login}>Login</Text>
    <Text style={styles.logIn}>Reset your password</Text>
    <Image
      style={styles.iconx}
      resizeMode="cover"
      source={require("../assets/iconx.png")}
    />
    <Text style={[styles.right, styles.rightTypo]}>Right</Text>
  </View>
  <View style={[styles.termParent, styles.rightPosition]}>
    <Text style={[styles.term, styles.termTypo]}>Term</Text>
    <Text style={[styles.introduce, styles.helpTypo]}>Introduce</Text>
    <Text style={[styles.privacy, styles.helpTypo]}>Privacy</Text>
    <Text style={[styles.help, styles.helpTypo]}>Help</Text>
    <Text style={[styles.name2024, styles.termTypo]}>Name © 2024</Text>
  </View>
  <View style={[styles.resetPasswordstep1Child, styles.textFieldBorder]} />
  <View style={styles.logo}>
    <Image
      style={[styles.logoChild, styles.childLayout]}
      resizeMode="cover"
      source={require("../assets/logo2.png")}
    />
    <Text style={[styles.kpiEdu, styles.kpiTypo]}>
      <Text style={styles.kpi}>KPI</Text>
      <Text style={styles.edu}> Edu</Text>
    </Text>
  </View>
  <View style={[styles.textField, styles.textFieldBorder]}>
    <Image
      style={[styles.icons, styles.iconLayout]}
      resizeMode="cover"
      source={require("../assets/icons.png")}
    />
  </View>
  <View style={[styles.border, styles.rightPosition]} />
  <View style={[styles.labelParent, styles.labelParentLayout]}>
    <Text style={[styles.label, styles.textTypo]}>Enter your code</Text>
    <View style={[styles.passwordHideSee, styles.labelParentLayout]}>
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon.png")}
      />
      <Text style={styles.hide}>Hide</Text>
    </View>
  </View>
  <Pressable
    style={[styles.backToLoginContainer, styles.rightPosition]}
    onPress={() => navigation.navigate("LogIn")}
  >
    <Text style={[styles.backToLogin, styles.rightTypo]}>
      Back to Login
    </Text>
  </Pressable>
  <View style={styles.messagereceiveParent}>
    <View style={styles.messagereceive}>
      <Text style={styles.loremIpsumDolor}>
        We've just sent an email containing a verification code to your
        recovery email address. Please check this email for the code and
        enter below.
      </Text>
    </View>
  </View>
  <Pressable
    style={[styles.button, styles.buttonLayout]}
    onPress={() => navigation.navigate("ResetPassword")}
  >
    <View style={styles.backWrapper}>
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
    </View>
  </Pressable>
  <Pressable
    style={[styles.button1, styles.buttonLayout]}
    onPress={() => navigation.navigate("ResetPasswordStep1")}
  >
    <View style={styles.backWrapper}>
      <Text style={[styles.submit, styles.backTypo]}>Submit</Text>
    </View>
  </Pressable>
</LinearGradient>

  );
};



const styles = StyleSheet.create({
  rightTypo: {
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  rightPosition: {
    top: "50%",
    position: "absolute",
  },
  termTypo: {
    fontSize: FontSize.bodyTextRegular_size,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  helpTypo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.bodyTextRegular_size,
    marginTop: -23.5,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  textFieldBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  kpiTypo: {
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.uI16Semi_size,
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  labelParentLayout: {
    height: 27,
    position: "absolute",
  },
  buttonLayout: {
    height: 41,
    borderRadius: Border.br_13xl,
    position: "absolute",
    overflow: "hidden",
  },
  backTypo: {
    display: "flex",
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    justifyContent: "center",
    fontSize: FontSize.h1_size,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "500",
  },
  login: {
    top: 8,
    display: "none",
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    right: 0,
    color: Color.greenPrimary,
    position: "absolute",
  },
  logIn: {
    marginLeft: -150.5,
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    color: Color.black,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  iconx: {
    top: 5,
    width: 23,
    height: 23,
    left: 0,
    display: "none",
    position: "absolute",
  },
  right: {
    marginTop: -10,
    top: "50%",
    position: "absolute",
    left: 0,
    display: "none",
    color: Color.greenPrimary,
    textAlign: "left",
  },
  pageHeader: {
    marginLeft: -173.5,
    top: 138,
    width: 343,
    height: 36,
    left: "50%",
    position: "absolute",
  },
  term: {
    marginLeft: -33.5,
    color: Color.greenPrimary1,
    marginTop: -23.5,
    fontSize: FontSize.bodyTextRegular_size,
  },
  introduce: {
    marginLeft: -111.5,
  },
  privacy: {
    marginLeft: 18.5,
  },
  help: {
    marginLeft: 84.5,
  },
  name2024: {
    marginTop: 8.5,
    marginLeft: -43.5,
    fontSize: FontSize.bodyTextRegular_size,
    color: Color.black,
  },
  termParent: {
    marginTop: 324,
    marginLeft: -110.5,
    width: 223,
    height: 47,
    left: "50%",
  },
  resetPasswordstep1Child: {
    marginLeft: -158,
    top: 701,
    borderColor: Color.colorRoyalblue_100,
    borderTopWidth: 1,
    width: 317,
    height: 1,
    left: "50%",
  },
  logoChild: {
    width: "23.95%",
    right: "76.05%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    left: "0%",
  },
  kpi: {
    color: Color.colorOrange,
  },
  edu: {
    color: Color.colorDodgerblue_100,
  },
  kpiEdu: {
    top: 7,
    left: 60,
    fontSize: FontSize.size_13xl,
    width: 123,
    height: 38,
  },
  logo: {
    height: "6.29%",
    width: "48.77%",
    top: "8.74%",
    right: "26.43%",
    bottom: "84.96%",
    left: "24.8%",
    position: "absolute",
  },
  text: {
    color: Color.colorDimgray_200,
  },
  inputsChild: {
    backgroundColor: Color.colorGray_400,
    width: 1,
    height: 24,
    display: "none",
  },
  inputs: {
    left: 24,
    alignItems: "center",
    flexDirection: "row",
    top: 15,
    display: "none",
    position: "absolute",
  },
  icons: {
    top: 40,
    right: 24,
    display: "none",
  },
  textField: {
    top: 440,
    borderRadius: Border.br_xs,
    borderColor: Color.colorDimgray_400,
    borderWidth: 1,
    width: 325,
    height: 55,
    left: 25,
    overflow: "hidden",
  },
  border: {
    marginTop: -225,
    marginLeft: -179.5,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorDarkolivegreen,
    width: 356,
    height: 162,
    left: "50%",
  },
  label: {
    color: Color.gray04,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    top: 3,
    right: 49,
  },
  hide: {
    color: Color.colorDimgray_300,
    fontSize: FontSize.h1_size,
    fontFamily: FontFamily.poppinsRegular,
    top: 0,
    textAlign: "right",
    right: 0,
    position: "absolute",
  },
  passwordHideSee: {
    right: 9,
    width: 73,
    top: 0,
    display: "none",
  },
  labelParent: {
    top: 406,
    width: 293,
    left: 25,
  },
  backToLogin: {
    marginTop: -388,
    color: Color.colorRoyalblue_100,
  },
  backToLoginContainer: {
    left: 14,
  },
  bgIcon: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    left: "0%",
    width: "100%",
  },
  loremIpsumDolor: {
    left: 16,
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.uI14Regular,
    width: 241,
    height: 72,
    top: 15,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  messagereceive: {
    left: 37,
    width: 273,
    height: 131,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: "17.54%",
    width: "10.32%",
    top: "78.69%",
    right: "89.68%",
    bottom: "3.77%",
  },
  kpiEdu1: {
    top: 149,
    left: 45,
    fontSize: FontSize.size_xl,
    width: 129,
    height: 34,
  },
  messagereceiveParent: {
    top: 205,
    left: 35,
    width: 310,
    height: 183,
    position: "absolute",
  },
  back: {
    width: 87,
  },
  backWrapper: {
    marginTop: -12.5,
    marginLeft: -190.5,
    justifyContent: "center",
    width: 381,
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  button: {
    top: 522,
    left: 53,
    backgroundColor: Color.colorDarkgray_200,
    width: 113,
  },
  submit: {
    width: 381,
    display: "flex",
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
  },
  button1: {
    top: 524,
    left: 209,
    backgroundColor: Color.colorRoyalblue_100,
    width: 109,
  },
  resetPasswordstep1: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ResetPasswordStep;
