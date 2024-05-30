import * as React from 'react';
import { Text, StyleSheet, View, Pressable, TextInput } from 'react-native';
import { Image } from 'expo-image';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontFamily, FontSize, Color, Border, Padding } from '../GlobalStyles';

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient colors={['#e0f7fa', '#80deea']} style={styles.gradient}>
      <View style={styles.signUp}>
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
          <Text style={styles.createAnAccount}>Create an account</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            style={styles.inputField}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.inputField}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Confirm your password"
            secureTextEntry={true}
            style={styles.inputField}
          />
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
            I agree to send your newsletter and other promotion information to my email.
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate("LogIn")}>
          <Text style={styles.alreadyHaveAnAccount}>
            Already have an account? <Text style={styles.logIn}>Log in</Text>
          </Text>
        </Pressable>
        <Pressable
          style={styles.signUpButton}
          onPress={() => navigation.navigate("Activities")}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </Pressable>

        <Text style={styles.orSignUpWith}>Or Sign Up With</Text>
        <View style={styles.socialIcons}>
          <Image
            style={[styles.socialIcon, styles.googleIcon]}
            contentFit="cover"
            source={require("../assets/googleicon.png")}
          />
          <Image
            style={[styles.socialIcon, styles.facebookIcon]}
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  signUp: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Padding.p_base,
  },
  inputField: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',  // Set the background color
    paddingHorizontal: Padding.p_base,
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI16Medium,
    marginBottom: 20,
    borderRadius: Border.br_5xs,
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -10,
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
  createAnAccount: {
    fontSize: FontSize.uI30Semi_size,
    color: Color.black,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 25,
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
    marginBottom: -10,
    marginTop:-7,
  },
  forgetPasswordText: {
    textDecorationLine: "underline",
    color: Color.colorGray_400,
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.uI16Medium,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -10,
    paddingHorizontal: 20,
  },
  checkbox: {
    marginRight: 11,
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
    marginBottom: -10,
  },
  signUpButton: {
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    width: "200%",
    maxWidth: 380,
    marginBottom: 10,
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
    marginBottom: 10,
    marginTop: 0,
  },
  logIn: {
    textDecorationLine: "underline",
    color: Color.colorGray_400,
  },
  orSignUpWith: {
    textAlign: "center",
    fontSize: FontSize.bodyTextRegular_size,
    fontFamily: FontFamily.uI14Regular, // Changed to regular font
    color: Color.colorGray_300,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialIcon: {
    width: 48,
    height: 48,
    marginHorizontal: 20, // Increased spacing between icons
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
  googleIcon: {
    marginRight: 30,
  },
  facebookIcon: {
    marginLeft: 30,
  },
});

export default SignUp;
