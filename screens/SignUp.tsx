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
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logoChild}
            contentFit="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={styles.kpiEdu}>
            <Text style={styles.kpi}>KPI</Text>
            <Text style={styles.edu}> Edu</Text>
          </Text>
        </View>
        <Text style={styles.createAnAccount}>Create an account</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputText}>
          <Image
            style={styles.bgIcon}
            contentFit="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={styles.inputLabel}>Name</Text>
        </View>
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
        <View style={styles.inputText}>
          <Image
            style={styles.bgIcon}
            contentFit="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={styles.inputLabel}>Confirm your password</Text>
          <Text style={styles.show}>Show</Text>
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <View style={styles.checkboxBg} />
          <Image
            style={styles.checkboxIcon}
            contentFit="cover"
            source={require("../assets/iconcheckmark.png")}
          />
        </View>
        <Text style={styles.checkboxLabel}>
          I would like to receive your newsletter and other promotional
          information.
        </Text>
      </View>
      <Pressable
        style={styles.signUpButton}
        onPress={() => navigation.navigate("Activities")}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </Pressable>
      <Text style={styles.alreadyHaveAnAccount}>
        Already have an account? <Text style={styles.logIn}>Log in</Text>
      </Text>
      <Text style={styles.orSignUpWith}>Or Sign Up With</Text>
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
  signUp: {
    flex: 1,
    backgroundColor: Color.white,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  pageHeader: {
    alignItems: "center",
    marginTop: 50,
  },
  logoWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoChild: {
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
  createAnAccount: {
    fontSize: FontSize.uI30Semi_size,
    color: Color.black,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputText: {
    marginBottom: 15,
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
    position: "relative",
  },
  checkboxBg: {
    width: 16,
    height: 16,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.gray02,
    borderWidth: 1,
    borderRadius: Border.br_9xs,
  },
  checkboxIcon: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 8,
    height: 7,
  },
  checkboxLabel: {
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.uI14Regular,
    color: Color.gray04,
  },
  signUpButton: {
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    marginBottom: 20,
  },
  signUpButtonText: {
    color: Color.white,
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  alreadyHaveAnAccount: {
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: 20,
  },
  logIn: {
    textDecorationLine: "underline",
    color: Color.colorGray_400,
  },
  orSignUpWith: {
    textAlign: "center",
    fontSize: FontSize.bodyTextRegular_size,
    fontFamily: FontFamily.uI14Semi,
    color: Color.colorGray_300,
    marginBottom: 20,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialIcon: {
    width: 48,
    height: 48,
    marginHorizontal: 10,
  },
  footer: {
    alignItems: "center",
    marginBottom: 20,
  },
  footerLine: {
    width: "80%",
    height: 1.5,
    backgroundColor: Color.colorRoyalblue_100,
    marginBottom: 15,
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
  },
});

export default SignUp;
