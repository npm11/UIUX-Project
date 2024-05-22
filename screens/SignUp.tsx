import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUp}>
      <View style={styles.pageHeader}>
        <Text style={styles.createAnAccount}>Create an account</Text>
        <Text style={[styles.right, styles.rightPosition]}>Right</Text>
      </View>
      <View style={[styles.inputtext, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={styles.name}>Name</Text>
        <Text style={[styles.show, styles.showTypo1]}>Show</Text>
      </View>
      <View style={[styles.inputtext1, styles.inputtext1Position]}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={styles.name}>Email</Text>
        <Text style={[styles.show, styles.showTypo1]}>Show</Text>
      </View>
      <View style={[styles.inputtext2, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={styles.name}>Password</Text>
        <Text style={[styles.show2, styles.showTypo1]}>Show</Text>
      </View>
      <Text style={[styles.show3, styles.showTypo]}>Show</Text>
      <View style={[styles.inputtext3, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={styles.name}>Confirm your password</Text>
        <Text style={[styles.show2, styles.showTypo1]}>Show</Text>
      </View>
      <Text style={[styles.show5, styles.showTypo]}>Show</Text>
      <View style={[styles.checkboxOptionempty, styles.inputtext1Position]}>
        <View style={styles.checkboxempty}>
          <View style={[styles.bg, styles.bgBorder]} />
          <Image
            style={[styles.iconcheckmark, styles.rightPosition]}
            contentFit="cover"
            source={require("../assets/iconcheckmark.png")}
          />
        </View>
        <Text style={styles.iWouldLike}>
          I would like to receive your newsletter and other promotional
          information.
        </Text>
      </View>
      <Pressable
        style={[styles.buttonprimary, styles.inputtext1Position]}
        onPress={() => navigation.navigate("Activities")}
      >
        <Text style={styles.signUp1}>Sign Up</Text>
      </Pressable>
      <View style={styles.bottom}>
        <Text style={[styles.term, styles.termTypo]}>Term</Text>
        <Text style={[styles.introduce, styles.termTypo]}>Introduce</Text>
        <Text style={[styles.privacy, styles.termTypo]}>Privacy</Text>
        <Text style={[styles.help, styles.termTypo]}>Help</Text>
        <Text style={[styles.name2024, styles.termTypo]}>Name © 2024</Text>
      </View>
      <View style={[styles.signUpChild, styles.bgBorder]} />
      <Text style={[styles.orSignUp, styles.termTypo]}>Or Sign Up With</Text>
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
      <View style={styles.logoWrapper}>
        <View style={[styles.logo, styles.bgPosition]}>
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
      </View>
      <Text style={styles.alreadyHaveAnContainer}>
        <Text style={styles.alreadyHaveAn}>Already have an ccount?</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.logIn}>Log in</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rightPosition: {
    display: "none",
    position: "absolute",
  },
  inputtextPosition: {
    left: 17,
    right: 15,
    height: 50,
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
  showTypo1: {
    textAlign: "right",
    right: 16,
    marginTop: -9,
    display: "none",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    top: "50%",
    position: "absolute",
  },
  inputtext1Position: {
    right: 16,
    left: 16,
    position: "absolute",
  },
  showTypo: {
    right: 29,
    color: Color.colorDimgray_100,
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    top: "50%",
    position: "absolute",
  },
  bgBorder: {
    borderStyle: "solid",
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
    position: "absolute",
    overflow: "hidden",
  },
  bgPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  createAnAccount: {
    marginLeft: -140.5,
    top: -3,
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  right: {
    marginTop: -10,
    textAlign: "left",
    color: Color.greenPrimary,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    display: "none",
    fontSize: FontSize.uI16Semi_size,
    left: 0,
    top: "50%",
  },
  pageHeader: {
    top: 102,
    right: 13,
    left: 19,
    height: 36,
    position: "absolute",
  },
  bgIcon: {
    borderRadius: Border.br_5xs,
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  name: {
    color: Color.gray03,
    left: 16,
    marginTop: -9,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    top: "50%",
    position: "absolute",
  },
  show: {
    color: Color.greenPrimary,
  },
  inputtext: {
    top: 184,
    height: 50,
  },
  inputtext1: {
    top: 254,
    height: 50,
  },
  show2: {
    color: Color.colorRoyalblue_100,
  },
  inputtext2: {
    top: 324,
    height: 50,
  },
  show3: {
    marginTop: -66,
    color: Color.colorDimgray_100,
  },
  inputtext3: {
    top: 394,
    height: 50,
  },
  show5: {
    marginTop: 4,
    color: Color.colorDimgray_100,
  },
  bg: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.gray02,
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  iconcheckmark: {
    top: 4,
    left: 4,
    width: 8,
    height: 7,
  },
  checkboxempty: {
    top: 1,
    width: 16,
    height: 16,
    left: 0,
    position: "absolute",
  },
  iWouldLike: {
    top: 0,
    left: 24,
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.uI14Regular,
    width: 320,
    color: Color.gray04,
    textAlign: "left",
    position: "absolute",
  },
  checkboxOptionempty: {
    top: 461,
    height: 17,
  },
  signUp1: {
    color: Color.white,
    fontSize: FontSize.uI16Semi_size,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  buttonprimary: {
    bottom: 215,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorRoyalblue_100,
    alignItems: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
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
    marginTop: -23.5,
    fontSize: FontSize.bodyTextRegular_size,
    top: "50%",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    marginLeft: -111.5,
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
    fontSize: FontSize.bodyTextRegular_size,
  },
  bottom: {
    marginTop: 324,
    width: 223,
    height: 47,
    marginLeft: -111.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  signUpChild: {
    marginLeft: -158,
    top: 701,
    borderColor: Color.colorRoyalblue_100,
    borderTopWidth: 1,
    width: 317,
    height: 1,
    left: "50%",
  },
  orSignUp: {
    marginLeft: -40.5,
    top: 608,
    lineHeight: 16,
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorGray_300,
  },
  facebookIcon: {
    top: 638,
    left: 224,
  },
  googleIcon: {
    top: 639,
    left: 109,
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
    position: "absolute",
  },
  logoWrapper: {
    top: 37,
    left: 96,
    width: 183,
    height: 51,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.colorDarkslategray_100,
  },
  text: {
    color: Color.gray04,
  },
  logIn: {
    textDecoration: "underline",
    color: Color.colorGray_400,
  },
  alreadyHaveAnContainer: {
    top: "63.05%",
    left: "22.67%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  signUp: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp;
