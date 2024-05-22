import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.home}>
      <Pressable
        style={[styles.buttonprimary, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={styles.login}>Log In</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonprimary1, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.login}>Sign Up</Text>
      </Pressable>
      <Text style={[styles.letsGetStarted, styles.orTypo]}>
        Let’s get started by
      </Text>
      <Text style={[styles.or, styles.orTypo]}>or</Text>
      <View style={styles.keyboardArrowDownParent}>
        <Image
          style={[styles.keyboardArrowDown, styles.groupParentPosition]}
          contentFit="cover"
          source={require("../assets/keyboard-arrow-down.png")}
        />
        <Text style={styles.languages}>Languages</Text>
      </View>
      <View style={[styles.bottom, styles.bottomPosition]}>
        <Text style={[styles.term, styles.termTypo]}>Term</Text>
        <Text style={[styles.introduce, styles.helpTypo]}>Introduce</Text>
        <Text style={[styles.privacy, styles.helpTypo]}>Privacy</Text>
        <Text style={[styles.help, styles.helpTypo]}>Help</Text>
        <Text style={[styles.name2024, styles.termTypo]}>Name © 2024</Text>
      </View>
      <View style={[styles.homeChild, styles.bottomPosition]} />
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <Text style={styles.kpiEdu}>
          <Text style={styles.kpi}>KPI</Text>
          <Text style={styles.edu}> Edu</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonprimarySpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    width: 343,
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_81xl,
    marginLeft: -169.5,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  orTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  groupParentPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  bottomPosition: {
    left: "50%",
    position: "absolute",
  },
  termTypo: {
    fontSize: FontSize.bodyTextRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  helpTypo: {
    top: 0,
    fontSize: FontSize.bodyTextRegular_size,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    position: "absolute",
  },
  login: {
    fontSize: FontSize.uI16Semi_size,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  buttonprimary: {
    bottom: 433,
  },
  buttonprimary1: {
    bottom: 327,
  },
  letsGetStarted: {
    marginLeft: -110.5,
    top: 279,
    color: Color.black,
  },
  or: {
    marginLeft: -12.5,
    top: 392,
    color: Color.black,
  },
  keyboardArrowDown: {
    marginTop: -8,
    marginLeft: 20,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  languages: {
    marginTop: -6,
    marginLeft: -36,
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_100,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  keyboardArrowDownParent: {
    top: 14,
    left: 157,
    width: 72,
    height: 16,
    position: "absolute",
  },
  term: {
    marginLeft: -33.5,
    bottom: 32,
    color: Color.greenPrimary1,
  },
  introduce: {
    left: 0,
  },
  privacy: {
    left: 130,
  },
  help: {
    left: 196,
  },
  name2024: {
    marginLeft: -43.5,
    top: 32,
    color: Color.black,
  },
  bottom: {
    marginLeft: -111.5,
    bottom: 35,
    width: 223,
    height: 47,
  },
  homeChild: {
    marginLeft: -158,
    top: 701,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_100,
    borderTopWidth: 1,
    width: 317,
    height: 1,
  },
  frameChild: {
    width: 44,
    height: 51,
  },
  kpi: {
    color: Color.colorOrange,
  },
  edu: {
    color: Color.colorDodgerblue_100,
  },
  kpiEdu: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    textAlign: "left",
    width: 123,
    height: 38,
    marginLeft: 16,
  },
  groupParent: {
    marginTop: -369,
    marginLeft: -91.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
  },
  home: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Home;
