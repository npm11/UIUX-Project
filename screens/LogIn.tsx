import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.logIn}>
      <View style={[styles.pageHeader, styles.logPosition]}>
        <Text style={[styles.login, styles.showClr]}>Login</Text>
        <Text style={[styles.logIn1, styles.logIn1Typo]}>Log In</Text>
        <Image
          style={[styles.iconx, styles.iconxPosition]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={[styles.right, styles.iconxPosition]}>Right</Text>
      </View>
      <View style={[styles.inputtext, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
        <Text style={styles.email}>Email</Text>
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext1, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
        <Text style={styles.email}>Password</Text>
        <Text style={[styles.show1, styles.showPosition]}>Show</Text>
      </View>
      <Pressable
        style={[styles.buttonprimary, styles.buttonprimaryPosition]}
        onPress={() => navigation.navigate("Activities")}
      >
        <Text style={styles.logIn2}>Log In</Text>
      </Pressable>
      <View style={[styles.termParent, styles.logPosition]}>
        <Text style={[styles.term, styles.termTypo]}>Term</Text>
        <Text style={[styles.introduce, styles.termTypo]}>Introduce</Text>
        <Text style={[styles.privacy, styles.termTypo]}>Privacy</Text>
        <Text style={[styles.help, styles.termTypo]}>Help</Text>
        <Text style={[styles.name2024, styles.termTypo]}>Name © 2024</Text>
      </View>
      <View style={[styles.logInChild, styles.logPosition]} />
      <View style={styles.logo}>
        <Image
          style={[styles.logoChild, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <Text style={styles.kpiEdu}>
          <Text style={styles.kpi}>KPI</Text>
          <Text style={styles.edu}> Edu</Text>
        </Text>
      </View>
      <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
      <Pressable
        style={[styles.buttonprimary1, styles.buttonprimaryPosition]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.logIn2}>Sign Up</Text>
      </Pressable>
      <Text style={[styles.orLogIn, styles.termTypo]}>Or Log In With</Text>
      <Image
        style={[styles.facebookIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/facebookicon.png")}
      />
      <Image
        style={[styles.googleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/googleicon.png")}
      />
      <View style={styles.checkBox}>
        <Image
          style={styles.checkBoxIcon}
          contentFit="cover"
          source={require("../assets/check-box.png")}
        />
        <Text style={[styles.iWantTo, styles.iWantToTypo]}>Remember me</Text>
      </View>
      <Pressable
        style={styles.forgetYourPasswordContainer}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={[styles.forgetYourPassword, styles.iWantToTypo]}>
          Forget your password
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logPosition: {
    left: "50%",
    position: "absolute",
  },
  showClr: {
    display: "none",
    color: Color.greenPrimary,
  },
  logIn1Typo: {
    color: Color.black,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  iconxPosition: {
    left: 0,
    display: "none",
    position: "absolute",
  },
  inputtextPosition: {
    height: 50,
    left: 18,
    right: 16,
    position: "absolute",
  },
  bgIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  showPosition: {
    marginTop: -9,
    right: 16,
    top: "50%",
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    position: "absolute",
  },
  buttonprimaryPosition: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    alignItems: "center",
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_81xl,
    left: 16,
    right: 16,
    position: "absolute",
  },
  termTypo: {
    fontSize: FontSize.bodyTextRegular_size,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 48,
    width: 48,
    top: 512,
    position: "absolute",
    overflow: "hidden",
  },
  iWantToTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.uI16Semi_size,
  },
  login: {
    top: 8,
    right: 0,
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium,
    fontSize: FontSize.uI16Semi_size,
    display: "none",
    fontWeight: "500",
    position: "absolute",
  },
  logIn1: {
    marginLeft: -42.5,
    top: 0,
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  iconx: {
    top: 5,
    width: 23,
    height: 23,
  },
  right: {
    marginTop: -10,
    textAlign: "left",
    top: "50%",
    color: Color.greenPrimary,
    left: 0,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  pageHeader: {
    marginLeft: -170.5,
    top: 102,
    width: 343,
    height: 36,
  },
  bgIcon: {
    right: "0%",
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  email: {
    color: Color.gray03,
    left: 16,
    marginTop: -9,
    textAlign: "left",
    top: "50%",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    position: "absolute",
  },
  show: {
    display: "none",
    color: Color.greenPrimary,
  },
  inputtext: {
    top: 191,
  },
  show1: {
    color: Color.colorDimgray_100,
  },
  inputtext1: {
    top: 261,
  },
  logIn2: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    fontSize: FontSize.uI16Semi_size,
  },
  buttonprimary: {
    bottom: 348,
  },
  term: {
    marginLeft: -33.5,
    color: Color.greenPrimary1,
    marginTop: -23.5,
    fontSize: FontSize.bodyTextRegular_size,
    top: "50%",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  introduce: {
    marginLeft: -111.5,
    marginTop: -23.5,
    fontSize: FontSize.bodyTextRegular_size,
    top: "50%",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    color: Color.colorDimgray_100,
  },
  privacy: {
    marginLeft: 18.5,
    marginTop: -23.5,
    fontSize: FontSize.bodyTextRegular_size,
    top: "50%",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    color: Color.colorDimgray_100,
  },
  help: {
    marginLeft: 84.5,
    marginTop: -23.5,
    fontSize: FontSize.bodyTextRegular_size,
    top: "50%",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    color: Color.colorDimgray_100,
  },
  name2024: {
    marginTop: 8.5,
    marginLeft: -43.5,
    top: "50%",
    color: Color.black,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  termParent: {
    marginTop: 324,
    marginLeft: -110.5,
    width: 223,
    height: 47,
    top: "50%",
  },
  logInChild: {
    marginLeft: -158,
    top: 701,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_100,
    borderTopWidth: 1,
    width: 317,
    height: 1,
  },
  logoChild: {
    width: "23.95%",
    right: "76.05%",
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
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    width: 123,
    height: 38,
    textAlign: "left",
    position: "absolute",
  },
  logo: {
    height: "6.29%",
    width: "48.77%",
    top: "4.56%",
    right: "25.63%",
    bottom: "89.15%",
    left: "25.6%",
    position: "absolute",
  },
  dontHaveAn: {
    top: 582,
    left: 37,
    fontSize: FontSize.h1_size,
    fontFamily: FontFamily.poppinsMedium,
    width: 307,
    height: 24,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
  },
  buttonprimary1: {
    bottom: 144,
  },
  orLogIn: {
    marginLeft: -36.5,
    top: 475,
    lineHeight: 16,
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorGray_300,
  },
  facebookIcon: {
    left: 227,
  },
  googleIcon: {
    left: 109,
  },
  checkBoxIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iWantTo: {
    marginLeft: 8,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  checkBox: {
    top: 361,
    left: 23,
    width: 152,
    height: 29,
    flexDirection: "row",
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    position: "absolute",
  },
  forgetYourPassword: {
    textDecoration: "underline",
    color: Color.colorGray_400,
    width: 184,
    height: 15,
    textAlign: "right",
  },
  forgetYourPasswordContainer: {
    left: 175,
    top: 324,
    position: "absolute",
  },
  logIn: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LogIn;
