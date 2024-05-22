import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.resetPassword}>
      <View style={[styles.bottom, styles.bottomPosition]}>
        <Text style={[styles.term, styles.termFlexBox]}>Term</Text>
        <Text style={[styles.introduce, styles.helpTypo]}>Introduce</Text>
        <Text style={[styles.privacy, styles.helpTypo]}>Privacy</Text>
        <Text style={[styles.help, styles.helpTypo]}>Help</Text>
        <Text style={[styles.name2024, styles.termFlexBox]}>Name © 2024</Text>
      </View>
      <View style={[styles.textFieldParent, styles.textLayout]}>
        <View style={[styles.textField, styles.textLayout]} />
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Email address</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.framePosition]}>
        <Image
          style={[styles.frameChild, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <View style={[styles.kpiEduWrapper, styles.kpiPosition]}>
          <Text style={[styles.kpiEdu, styles.kpiPosition]}>
            <Text style={styles.kpi}>KPI</Text>
            <Text style={styles.edu}> Edu</Text>
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.backToLoginWrapper, styles.bottomPosition]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={[styles.backToLogin, styles.backToLoginTypo]}>
          Back to Login
        </Text>
      </Pressable>
      <View style={styles.frameGroup}>
        <Image
          style={styles.frameItemPosition}
          contentFit="cover"
          source={require("../assets/frame-496071.png")}
        />
        <View style={[styles.messagereceive, styles.frameItemPosition]}>
          <Text style={[styles.loremIpsumDolor, styles.buttonPosition]}>
            Enter your user account's verified email address and we will send
            you a password reset link.
          </Text>
        </View>
      </View>
      <Image
        style={[styles.resetPasswordChild, styles.textFieldParentPosition]}
        contentFit="cover"
        source={require("../assets/frame-496063.png")}
      />
      <View style={[styles.button, styles.buttonPosition]}>
        <Text style={[styles.sendPasswordReset, styles.backToLoginTypo]}>
          Send password reset email
        </Text>
      </View>
      <Image
        style={[styles.resetPasswordItem, styles.bottomPosition]}
        contentFit="cover"
        source={require("../assets/frame-496076.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  termFlexBox: {
    textAlign: "center",
    left: "50%",
  },
  helpTypo: {
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    fontSize: FontSize.bodyTextRegular_size,
    marginTop: -23.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textLayout: {
    width: 309,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    height: 51,
    marginLeft: -91.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  kpiPosition: {
    height: 38,
    width: 123,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  backToLoginTypo: {
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    top: "50%",
    position: "absolute",
  },
  frameItemPosition: {
    marginLeft: -136.5,
    marginTop: -65.5,
    height: 131,
    width: 273,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonPosition: {
    width: 241,
    marginLeft: -120.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textFieldParentPosition: {
    marginLeft: -156.5,
    left: "50%",
    top: "50%",
  },
  term: {
    marginLeft: -33.5,
    color: Color.greenPrimary1,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    fontSize: FontSize.bodyTextRegular_size,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    marginTop: -23.5,
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
    color: Color.black,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    fontSize: FontSize.bodyTextRegular_size,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  bottom: {
    marginTop: 324,
    marginLeft: -110.5,
    width: 223,
    height: 47,
    overflow: "hidden",
  },
  textField: {
    top: 34,
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 1,
    height: 55,
    left: 0,
  },
  label: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray04,
    textAlign: "left",
    fontSize: FontSize.uI16Semi_size,
    top: 0,
    left: 0,
    position: "absolute",
  },
  labelWrapper: {
    width: 113,
    height: 27,
    top: 0,
    left: 0,
    position: "absolute",
  },
  textFieldParent: {
    marginTop: 3,
    height: 89,
    marginLeft: -156.5,
    left: "50%",
    top: "50%",
  },
  frameChild: {
    marginTop: -25.55,
    width: 44,
  },
  kpi: {
    color: Color.colorOrange,
  },
  edu: {
    color: Color.colorDodgerblue_100,
  },
  kpiEdu: {
    marginTop: -19,
    marginLeft: -61.5,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    textAlign: "left",
  },
  kpiEduWrapper: {
    marginTop: -18.55,
    marginLeft: -31.5,
  },
  frameParent: {
    marginTop: -332,
    width: 183,
  },
  backToLogin: {
    marginTop: -9.5,
    fontFamily: FontFamily.uI16Medium,
    color: Color.colorRoyalblue_100,
    textAlign: "left",
    left: 0,
  },
  backToLoginWrapper: {
    marginTop: -388,
    marginLeft: -173.5,
    width: 104,
    height: 19,
    overflow: "hidden",
  },
  loremIpsumDolor: {
    marginTop: -50.5,
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.uI14Regular,
    height: 72,
    textAlign: "left",
    color: Color.black,
  },
  messagereceive: {
    borderRadius: Border.br_3xs,
  },
  frameGroup: {
    marginTop: -201,
    marginLeft: -127.5,
    height: 131,
    width: 273,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  resetPasswordChild: {
    marginTop: -55,
    width: 122,
    height: 39,
    position: "absolute",
    marginLeft: -156.5,
    overflow: "hidden",
  },
  sendPasswordReset: {
    marginTop: -12,
    marginLeft: -109.5,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 219,
    textAlign: "center",
    left: "50%",
  },
  button: {
    marginTop: 119,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorRoyalblue_100,
    height: 42,
    overflow: "hidden",
  },
  resetPasswordItem: {
    marginTop: 295,
    marginLeft: -157.5,
    maxHeight: "100%",
    width: 316,
  },
  resetPassword: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ResetPassword;
