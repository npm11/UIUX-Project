import * as React from 'react';
import { Text, StyleSheet, View, Pressable, TouchableOpacity, TextInput } from 'react-native';
import { Image } from 'expo-image';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize, Padding, Border } from '../GlobalStyles';

const LogIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient colors={['#e0f7fa', '#80deea']} style={styles.gradient}>
      <View style={styles.logIn}>
        <View style={styles.header}>
          <View style={styles.languageSelector}>
            <Text style={styles.languages}>Languages</Text>
            <Image style={styles.keyboardArrowDown} contentFit="cover" source={require("../assets/keyboard-arrow-down.png")} />
          </View>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} contentFit="cover" source={require("../assets/logo2.png")} />
            <Text style={styles.kpiEdu}>
              <Text style={styles.kpi}>KPI</Text>
              <Text style={styles.edu}> Edu</Text>
            </Text>
          </View>
          <Text style={styles.logInText}>Log In</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputText}>
            <TextInput
              placeholder="Email"
              style={[styles.inputField, {backgroundColor: '#f1f1f1'}]}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputText}>
            <TextInput
              placeholder="Password"
              style={[styles.inputField, {backgroundColor: '#f1f1f1'}]}
              secureTextEntry={true}
            />
            <Text style={styles.show}>Show</Text>
          </View>
          <Pressable style={styles.forgetPassword} onPress={() => navigation.navigate("ResetPassword")}>
            <Text style={styles.forgetPasswordText}>Forget your password?</Text>
          </Pressable>
        </View>
        <Pressable style={styles.logInButton} onPress={() => navigation.navigate("Activities")}>
          <Text style={styles.logInButtonText}>Log In</Text>
        </Pressable>
        <Text style={styles.orLogInWith}>Or Log In With</Text>
        <View style={styles.socialIcons}>
          <Image style={styles.socialIcon} contentFit="cover" source={require("../assets/googleicon.png")} />
          <Image style={styles.socialIcon} contentFit="cover" source={require("../assets/facebookicon.png")} />
        </View>
        <View style={styles.dontHaveAnAccountContainer}>
          <Text style={styles.dontHaveAnAccount}>Don’t have an account?</Text>
        </View>
        <Pressable style={styles.signUpButton} onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  logIn: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Padding.p_base,
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -10,
  },
  languages: {
    fontSize: 12,
    color: Color.peakPrimary,
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
  logInText: {
    fontSize: FontSize.uI30Semi_size,
    color: Color.black,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 0,
    marginTop: 5,
  },
  inputContainer: {
    marginBottom: 0,
    width: "92%",
  },
  inputText: {
    marginBottom: 20,
    position: "relative",
    width: "100%",
  },
  inputField: {
    width: '100%',
    height: 50,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: '500',
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
    marginBottom: -10,
    marginTop:-7,
  },
  forgetPasswordText: {
    textDecorationLine: "underline",
    color: Color.colorGray_400,
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.uI16Medium,
  },
  logInButton: {
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    marginTop:-10,
    width: "92%",
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
    marginTop: -30,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: -3,
  },
  socialIcon: {
    width: 48,
    height: 48,
    marginHorizontal: 30,
  },
  dontHaveAnAccountContainer: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: -20
  },
  dontHaveAnAccount: {
    fontSize: FontSize.size_xl,
    color: Color.black,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: -40,
    marginTop: -5,
  },
  signUpButton: {
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    width: "92%",
    marginTop: -50,
  },
  signUpButtonText: {
    color: Color.white,
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
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
    color: Color.peakPrimary,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
  },
  footerCopyright: {
    fontSize: FontSize.bodyTextRegular_size,
    color: Color.peakPrimary,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    marginTop: 10,
  },
});

export default LogIn;
