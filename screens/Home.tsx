import * as React from "react";
import { Text, StyleSheet, View, Pressable, Modal, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [languageModalVisible, setLanguageModalVisible] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState("Languages");

  const toggleLanguageModal = () => {
    setLanguageModalVisible(!languageModalVisible);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setLanguageModalVisible(false);
  };

  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <Pressable style={styles.languageSelector} onPress={toggleLanguageModal}>
          <Text style={styles.languages}>{selectedLanguage}</Text>
          <Image
            style={styles.keyboardArrowDown}
            contentFit="cover"
            source={require("../assets/keyboard-arrow-down.png")}
          />
        </Pressable>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            contentFit="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={styles.kpiEdu}>
            <Text style={styles.kpi}>KPI</Text>
            <Text style={styles.edu}> Edu</Text>
          </Text>
        </View>
      </View>
      <Modal
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={toggleLanguageModal}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={toggleLanguageModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => selectLanguage("Vietnamese")}
            >
              <Text style={styles.modalOptionText}>Vietnamese</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => selectLanguage("English")}
            >
              <Text style={styles.modalOptionText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => selectLanguage("Japanese")}
            >
              <Text style={styles.modalOptionText}>Japanese</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={styles.body}>
        <Text style={styles.letsGetStarted}>Let’s get started by</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
        <Text style={styles.or}>or</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
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
  home: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Padding.p_base,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  languages: {
    fontSize: 12, // Set the desired font size in pixels
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "700", // Make the text bold
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
  body: {
    alignItems: "center",
  },
  letsGetStarted: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    marginBottom: 12,
  },
  or: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    marginVertical: 5,
  },
  button: {
    width: 343,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: FontSize.uI16Semi_size,
    color: Color.white,
    textAlign: "center",
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 200,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  modalOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalOptionText: {
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI14Semi,
    textAlign: "center",
  },
});

export default Home;
