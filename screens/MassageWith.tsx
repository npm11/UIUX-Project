import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const MassageWith = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.massageWith}>
      <View style={[styles.massageWithChild, styles.contentPosition]} />
      <View style={[styles.massageWithItem, styles.backPosition]} />
      <View style={styles.pageHeader}>
        <Text style={styles.filter} />
        <Text style={[styles.content, styles.contentPosition]}>Newton</Text>
        <Image
          style={[styles.iconx, styles.backPosition]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={[styles.back, styles.backPosition]}
          onPress={() => navigation.navigate("Messages")}
        >
          <Text style={[styles.back1, styles.back1Typo]}>Back</Text>
        </Pressable>
      </View>
      <Image
        style={styles.iosbottomBar5Tabs}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs9.png")}
      />
      <View style={[styles.messagereceive, styles.messagereceiveLayout]}>
        <Image
          style={styles.iconPosition}
          contentFit="cover"
          source={require("../assets/bg4.png")}
        />
        <Text
          style={[styles.loremIpsumDolor, styles.loremTypo]}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. `}</Text>
      </View>
      <View style={[styles.messagereceive1, styles.messagereceiveLayout]}>
        <Image
          style={styles.iconPosition}
          contentFit="cover"
          source={require("../assets/bg4.png")}
        />
        <Text
          style={[styles.loremIpsumDolor, styles.loremTypo]}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. `}</Text>
      </View>
      <View style={[styles.messagesend, styles.messagesendLayout]}>
        <Image
          style={styles.iconPosition}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Text
          style={[styles.loremIpsumDolor2, styles.loremTypo]}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</Text>
      </View>
      <View style={[styles.messagesend1, styles.messagesendLayout]}>
        <Image
          style={styles.iconPosition}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Text
          style={[styles.loremIpsumDolor2, styles.loremTypo]}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</Text>
      </View>
      <View style={[styles.inputsearch, styles.inputsearchPosition]}>
        <Image
          style={[styles.bgIcon2, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bg2.png")}
        />
        <Text style={[styles.messageHere, styles.inputsearchPosition]}>
          Message here...
        </Text>
        <Image
          style={styles.iconsend}
          contentFit="cover"
          source={require("../assets/iconsend.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    top: 0,
    position: "absolute",
  },
  backPosition: {
    left: 0,
    position: "absolute",
  },
  back1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  messagereceiveLayout: {
    height: 126,
    width: 235,
    left: 20,
    position: "absolute",
  },
  loremTypo: {
    width: 203,
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI14Regular_size,
    top: 15,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  messagesendLayout: {
    height: 86,
    width: 235,
    position: "absolute",
  },
  inputsearchPosition: {
    left: 16,
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  massageWithChild: {
    right: -1,
    left: -4,
    backgroundColor: Color.colorRoyalblue_100,
    height: 208,
  },
  massageWithItem: {
    top: 76,
    shadowColor: "rgba(75, 75, 75, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    width: 376,
    height: 736,
    backgroundColor: Color.white,
    left: 0,
  },
  filter: {
    top: 8,
    color: Color.greenPrimary1,
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    right: 0,
    position: "absolute",
  },
  content: {
    marginLeft: -54.5,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI14Semi,
    textAlign: "center",
    color: Color.white,
  },
  iconx: {
    top: 5,
    width: 23,
    height: 23,
    display: "none",
  },
  back1: {
    marginTop: -10,
    color: Color.white,
  },
  back: {
    top: "50%",
  },
  pageHeader: {
    top: 27,
    right: 12,
    height: 36,
    left: 20,
    position: "absolute",
  },
  iosbottomBar5Tabs: {
    bottom: 1,
    height: 84,
    maxWidth: "100%",
    right: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  loremIpsumDolor: {
    color: Color.black,
    height: 72,
  },
  messagereceive: {
    top: 121,
  },
  messagereceive1: {
    top: 467,
  },
  loremIpsumDolor2: {
    color: Color.white,
  },
  messagesend: {
    top: 263,
    right: 15,
  },
  messagesend1: {
    top: 365,
    right: 14,
  },
  bgIcon2: {
    borderRadius: Border.br_81xl,
  },
  messageHere: {
    marginTop: -9,
    color: Color.gray03,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    top: "50%",
  },
  iconsend: {
    marginTop: -17,
    right: 8,
    width: 34,
    height: 34,
    top: "50%",
    position: "absolute",
  },
  inputsearch: {
    right: 16,
    bottom: 101,
    height: 50,
  },
  massageWith: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MassageWith;
