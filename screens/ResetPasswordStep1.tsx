import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ResetPasswordStep1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.resetPasswordstep2}>
      <View style={styles.pageHeader}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.logIn}>Reset your password</Text>
        <Image
          style={[styles.iconx, styles.iconxLayout]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={[styles.right, styles.textTypo]}>Right</Text>
      </View>
      <View style={[styles.termParent, styles.rightPosition]}>
        <Text style={[styles.term, styles.termTypo]}>Term</Text>
        <Text style={[styles.introduce, styles.helpTypo]}>Introduce</Text>
        <Text style={[styles.privacy, styles.helpTypo]}>Privacy</Text>
        <Text style={[styles.help, styles.helpTypo]}>Help</Text>
        <Text style={[styles.name2024, styles.termTypo]}>Name © 2024</Text>
      </View>
      <View style={styles.resetPasswordstep2Child} />
      <View style={styles.logo}>
        <Image
          style={[styles.logoChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <Text style={[styles.kpiEdu, styles.kpiTypo]}>
          <Text style={styles.kpi}>KPI</Text>
          <Text style={styles.edu}> Edu</Text>
        </Text>
      </View>
      <View style={[styles.border, styles.rightPosition]} />
      <Pressable
        style={[styles.backToLoginContainer, styles.rightPosition]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={[styles.backToLogin, styles.textTypo]}>Back to Login</Text>
      </Pressable>
      <View style={styles.messagereceiveParent}>
        <View style={styles.messagereceive}>
          <Image
            style={[styles.bgIcon, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/frame-496071.png")}
          />
          <Text style={styles.loremIpsumDolor}>
            Create a new and strong password that you don't use for other
            websites.
          </Text>
        </View>
        <Image
          style={[styles.groupChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
        <Text style={[styles.kpiEdu1, styles.kpiTypo]}>
          <Text style={styles.kpi}>KPI</Text>
          <Text style={styles.edu}> Edu</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("ResetPasswordStep")}
      >
        <View style={styles.backWrapper}>
          <Text style={[styles.back, styles.backFlexBox]}>Back</Text>
        </View>
      </Pressable>
      <View style={[styles.button1, styles.buttonLayout]}>
        <View style={styles.backWrapper}>
          <Text style={[styles.submit, styles.backFlexBox]}>Submit</Text>
        </View>
      </View>
      <View style={[styles.textField, styles.inputsPosition]}>
        <View style={styles.labelParent}>
          <Text style={[styles.label, styles.labelTypo]}>New password</Text>
          <View style={styles.passwordHideSee}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
            <Text style={styles.hide}>Hide</Text>
          </View>
        </View>
        <View style={[styles.textField1, styles.textBorder]}>
          <View style={[styles.inputs, styles.inputsPosition]}>
            <Text style={[styles.text, styles.textTypo]}>
              Enter your password
            </Text>
            <View style={styles.inputsChild} />
          </View>
          <Image
            style={[styles.icons, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icons.png")}
          />
        </View>
      </View>
      <Text
        style={[styles.errorMessage, styles.labelTypo]}
      >{`Use 8 or more characters with a mix of letters, numbers & symbols`}</Text>
      <View style={[styles.textField2, styles.iconxLayout]}>
        <View style={styles.labelGroup}>
          <Text style={[styles.label1, styles.labelTypo]}>
            Confirm your password
          </Text>
          <View style={styles.passwordHideSee}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
            <Text style={styles.hide}>Hide</Text>
          </View>
        </View>
        <View style={[styles.textField3, styles.textBorder]}>
          <View style={[styles.inputs, styles.inputsPosition]}>
            <Text style={[styles.text, styles.textTypo]}>
              Enter your password
            </Text>
            <View style={styles.inputsChild} />
          </View>
          <Image
            style={[styles.icons, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icons.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconxLayout: {
    height: 23,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
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
  buttonLayout: {
    height: 41,
    borderRadius: Border.br_13xl,
    top: 639,
    position: "absolute",
    overflow: "hidden",
  },
  backFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  inputsPosition: {
    left: 24,
    position: "absolute",
  },
  labelTypo: {
    color: Color.gray04,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  textBorder: {
    marginTop: 4,
    height: 56,
    borderWidth: 1,
    borderColor: Color.colorDimgray_400,
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    overflow: "hidden",
  },
  login: {
    top: 8,
    display: "none",
    textAlign: "right",
    right: 0,
    color: Color.greenPrimary,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
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
    left: 0,
    display: "none",
  },
  right: {
    marginTop: -10,
    top: "50%",
    position: "absolute",
    left: 0,
    display: "none",
    color: Color.greenPrimary,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
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
  resetPasswordstep2Child: {
    marginLeft: -158,
    top: 701,
    borderColor: Color.colorRoyalblue_100,
    borderTopWidth: 1,
    width: 317,
    height: 1,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
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
  backToLogin: {
    marginTop: -388,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    textAlign: "left",
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
    height: "17.73%",
    width: "10.32%",
    top: "78.45%",
    right: "89.68%",
    bottom: "3.81%",
  },
  kpiEdu1: {
    top: 147,
    left: 45,
    fontSize: FontSize.size_xl,
    width: 129,
    height: 34,
  },
  messagereceiveParent: {
    top: 212,
    left: 31,
    width: 310,
    height: 181,
    position: "absolute",
  },
  back: {
    width: 87,
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    display: "flex",
    fontSize: FontSize.h1_size,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "500",
  },
  backWrapper: {
    marginTop: -12.5,
    marginLeft: -190.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 381,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  button: {
    left: 49,
    backgroundColor: Color.colorDarkgray_200,
    width: 113,
  },
  submit: {
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    display: "flex",
    fontSize: FontSize.h1_size,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "500",
    width: 381,
  },
  button1: {
    left: 218,
    backgroundColor: Color.colorRoyalblue_100,
    width: 109,
  },
  label: {
    top: 2,
    left: 0,
    fontSize: FontSize.uI16Semi_size,
    color: Color.gray04,
  },
  icon: {
    top: 3,
    right: 49,
    height: 24,
  },
  hide: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.h1_size,
    top: 0,
    textAlign: "right",
    right: 0,
    position: "absolute",
  },
  passwordHideSee: {
    right: 9,
    width: 73,
    height: 27,
    top: 0,
    position: "absolute",
  },
  labelParent: {
    height: 27,
    width: 327,
  },
  text: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsRegular,
  },
  inputsChild: {
    backgroundColor: Color.colorGray_400,
    width: 1,
    height: 24,
    display: "none",
  },
  inputs: {
    alignItems: "center",
    flexDirection: "row",
    left: 24,
    top: 15,
  },
  icons: {
    top: 40,
    right: 24,
    height: 24,
    display: "none",
  },
  textField1: {
    alignSelf: "stretch",
  },
  textField: {
    top: 406,
    width: 327,
  },
  errorMessage: {
    top: 490,
    left: 29,
    fontSize: FontSize.size_4xs,
    width: 333,
    height: 33,
    display: "flex",
    alignItems: "center",
  },
  label1: {
    left: 0,
    top: 0,
    fontSize: FontSize.uI16Semi_size,
    color: Color.gray04,
  },
  labelGroup: {
    alignSelf: "stretch",
    height: 27,
  },
  textField3: {
    width: 328,
  },
  textField2: {
    top: 530,
    left: 22,
    width: 328,
  },
  resetPasswordstep2: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ResetPasswordStep1;
