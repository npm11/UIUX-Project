import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Messages = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.messages}>
      <View style={styles.pageHeader}>
        <Text style={styles.new}>Next</Text>
        <Text style={styles.expenses}>Messages</Text>
        <Image
          style={[styles.iconx, styles.iconxLayout]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={styles.back}>Back</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.frame}>
          <Text style={[styles.imHappyThis, styles.thanksDudeTypo]}>
            I‘m happy this anime has such grea...
          </Text>
          <Text style={[styles.yesterday, styles.yesterdayPosition]}>
            Yesterday
          </Text>
          <Text style={[styles.albertBell, styles.personalTypo]}>
            Albert Bell
          </Text>
          <View style={[styles.group, styles.imageIconLayout]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse.png")}
            />
          </View>
        </View>
        <View style={[styles.frame1, styles.frameLayout]}>
          <View style={styles.group1}>
            <Image
              style={[styles.frameIcon, styles.yesterdayPosition]}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
            <Text style={[styles.thanksDude, styles.thanksDudeTypo]}>
              Thanks dude 😉
            </Text>
          </View>
          <Text style={[styles.yesterday1, styles.textTypo]}>Yesterday</Text>
          <Text style={[styles.albertBell, styles.personalTypo]}>
            Ronald Mccoy
          </Text>
          <View style={[styles.group, styles.imageIconLayout]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image1.png")}
            />
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse.png")}
            />
          </View>
        </View>
        <View style={[styles.frame2, styles.frameLayout]}>
          <Text
            style={[styles.imHappyThis, styles.thanksDudeTypo]}
          >{`Yes, that’s gonna work, hopefully. `}</Text>
          <Text style={[styles.text, styles.textTypo]}>06.12</Text>
          <Text style={[styles.albertBell, styles.personalTypo]}>
            Lee Williamson
          </Text>
          <View style={[styles.group, styles.imageIconLayout]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image2.png")}
            />
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse1.png")}
            />
          </View>
        </View>
        <View style={[styles.frame3, styles.frameLayout]}>
          <Text style={[styles.imHappyThis, styles.thanksDudeTypo]}>
            Hello guys, we have discussed about ...
          </Text>
          <Text style={[styles.text, styles.textTypo]}>16.04</Text>
          <Text style={[styles.albertBell, styles.personalTypo]}>
            Fullsnack Designers
          </Text>
          <View style={[styles.group, styles.imageIconLayout]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image2.png")}
            />
            <Image
              style={[styles.imageIcon4, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image3.png")}
            />
          </View>
        </View>
        <View style={[styles.frame4, styles.frameLayout]}>
          <View style={styles.rectangle} />
          <Text style={[styles.imHappyThis, styles.thanksDudeTypo]}>
            Pls take a look at the images.
          </Text>
          <View style={styles.frame5}>
            <Text style={[styles.text2, styles.text2Typo]}>5</Text>
          </View>
          <Text style={[styles.text3, styles.textTypo]}>18.31</Text>
          <Text style={[styles.albertBell, styles.personalTypo]}>
            Darlene Steward
          </Text>
          <View style={[styles.group, styles.imageIconLayout]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image4.png")}
            />
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse2.png")}
            />
          </View>
        </View>
        <View style={styles.frame6}>
          <View style={styles.frame7}>
            <Text style={[styles.allChats, styles.text2Typo]}>All chats</Text>
          </View>
          <View style={styles.frameShadowBox}>
            <Text style={[styles.personal, styles.personalTypo]}>Personal</Text>
          </View>
          <View style={styles.frameShadowBox}>
            <Text style={[styles.personal, styles.personalTypo]}>Work</Text>
          </View>
          <View style={styles.frameShadowBox}>
            <Text style={[styles.personal, styles.personalTypo]}>Groups</Text>
          </View>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frame}>
          <Text style={[styles.imHappyThis, styles.thanksDudeTypo]}>
            I‘m happy this anime has such grea...
          </Text>
          <Text style={[styles.yesterday, styles.yesterdayPosition]}>
            Yesterday
          </Text>
          <Text style={[styles.albertBell, styles.personalTypo]}>
            Albert Bell
          </Text>
          <View style={[styles.group, styles.imageIconLayout]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse.png")}
            />
          </View>
        </View>
        <View style={[styles.frame1, styles.frameLayout]}>
          <View style={styles.group1}>
            <Image
              style={[styles.frameIcon, styles.yesterdayPosition]}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
            <Text style={[styles.thanksDude, styles.thanksDudeTypo]}>
              Thanks dude 😉
            </Text>
          </View>
          <Text style={[styles.yesterday1, styles.textTypo]}>Yesterday</Text>
          <Text style={[styles.albertBell, styles.personalTypo]}>
            Ronald Mccoy
          </Text>
          <View style={[styles.group, styles.imageIconLayout]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image1.png")}
            />
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse.png")}
            />
          </View>
        </View>
        <View style={[styles.frame2, styles.frameLayout]}>
          <Text
            style={[styles.imHappyThis, styles.thanksDudeTypo]}
          >{`Yes, that’s gonna work, hopefully. `}</Text>
          <Text style={[styles.text, styles.textTypo]}>06.12</Text>
          <Text style={[styles.albertBell, styles.personalTypo]}>
            Lee Williamson
          </Text>
          <View style={[styles.group, styles.imageIconLayout]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image2.png")}
            />
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse1.png")}
            />
          </View>
        </View>
        <View style={[styles.frame3, styles.frameLayout]}>
          <Text style={[styles.imHappyThis, styles.thanksDudeTypo]}>
            Hello guys, we have discussed about ...
          </Text>
          <Text style={[styles.text, styles.textTypo]}>16.04</Text>
          <Text style={[styles.albertBell, styles.personalTypo]}>
            Fullsnack Designers
          </Text>
          <View style={[styles.group, styles.imageIconLayout]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image2.png")}
            />
            <Image
              style={[styles.imageIcon4, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image3.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.frame4, styles.frameLayout]}
          onPress={() => navigation.navigate("MassageWith")}
        >
          <View style={styles.rectangle} />
          <Text style={[styles.imHappyThis, styles.thanksDudeTypo]}>
            Pls take a look at the images.
          </Text>
          <View style={styles.frame5}>
            <Text style={[styles.text2, styles.text2Typo]}>5</Text>
          </View>
          <Text style={[styles.text3, styles.textTypo]}>18.31</Text>
          <Text style={[styles.albertBell, styles.personalTypo]}>
            Darlene Steward
          </Text>
          <View style={[styles.group, styles.imageIconLayout]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image4.png")}
            />
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse2.png")}
            />
          </View>
        </Pressable>
        <View style={styles.frame6}>
          <View style={styles.frame7}>
            <Text style={[styles.allChats, styles.text2Typo]}>All chats</Text>
          </View>
          <View style={styles.frameShadowBox}>
            <Text style={[styles.personal, styles.personalTypo]}>Personal</Text>
          </View>
          <View style={styles.frameShadowBox}>
            <Text style={[styles.personal, styles.personalTypo]}>Work</Text>
          </View>
          <View style={styles.frameShadowBox}>
            <Text style={[styles.personal, styles.personalTypo]}>Groups</Text>
          </View>
        </View>
      </View>
      <View style={[styles.group12, styles.iconxLayout]}>
        <Text style={[styles.recentChats, styles.personalTypo]}>
          Recent Chats
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <View style={[styles.group12, styles.iconxLayout]}>
        <Text style={[styles.recentChats, styles.personalTypo]}>
          Recent Chats
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <Image
        style={[styles.iosbottomBar5Tabs, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconxLayout: {
    height: 23,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  thanksDudeTypo: {
    color: Color.textSecondary,
    fontFamily: FontFamily.h1,
    lineHeight: 18,
    fontSize: FontSize.bodyTextRegular_size,
    textAlign: "left",
    position: "absolute",
  },
  yesterdayPosition: {
    opacity: 0.6,
    position: "absolute",
  },
  personalTypo: {
    color: Color.textPrimary,
    fontFamily: FontFamily.h1,
    textAlign: "left",
  },
  imageIconLayout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  frameLayout: {
    width: 375,
    height: 64,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    top: 10,
    opacity: 0.6,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.h1,
    fontSize: FontSize.bodyTextRegular_size,
    textAlign: "right",
    position: "absolute",
  },
  text2Typo: {
    color: Color.white,
    fontFamily: FontFamily.h1,
    fontSize: FontSize.bodyTextRegular_size,
    textAlign: "left",
  },
  new: {
    right: 0,
    display: "none",
    textAlign: "right",
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.uI16Medium,
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "500",
    top: 8,
    position: "absolute",
  },
  expenses: {
    marginLeft: -72.5,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI14Semi,
    color: Color.black,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  iconx: {
    top: 5,
    width: 23,
    left: 0,
    display: "none",
  },
  back: {
    marginTop: -10,
    top: "50%",
    textAlign: "left",
    left: 0,
    display: "none",
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    position: "absolute",
  },
  pageHeader: {
    top: 60,
    right: 16,
    height: 36,
    left: 16,
    position: "absolute",
  },
  groupIcon: {
    top: 641,
    right: 17,
    left: 302,
    height: 56,
  },
  imHappyThis: {
    left: 80,
    top: 34,
  },
  yesterday: {
    top: 9,
    color: Color.colorDarkslategray_100,
    opacity: 0.6,
    left: 303,
    fontFamily: FontFamily.h1,
    fontSize: FontSize.bodyTextRegular_size,
    textAlign: "right",
  },
  albertBell: {
    fontSize: FontSize.uI14Regular_size,
    left: 80,
    color: Color.textPrimary,
    fontWeight: "500",
    position: "absolute",
    top: 8,
  },
  imageIcon: {
    borderRadius: Border.br_8xl,
    left: 0,
    top: 0,
  },
  ellipseIcon: {
    top: 36,
    left: 36,
    width: 12,
    height: 12,
    position: "absolute",
  },
  group: {
    top: 8,
    left: 16,
  },
  frame: {
    top: 354,
    height: 64,
    width: 376,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    top: 1,
    width: 16,
    height: 16,
    left: 0,
    overflow: "hidden",
  },
  thanksDude: {
    left: 20,
    top: 0,
  },
  group1: {
    left: 81,
    width: 104,
    height: 18,
    top: 34,
    position: "absolute",
  },
  yesterday1: {
    left: 303,
    top: 10,
  },
  frame1: {
    top: 278,
  },
  text: {
    left: 327,
  },
  frame2: {
    top: 202,
  },
  imageIcon4: {
    borderRadius: Border.br_193xl_5,
    left: 0,
    top: 0,
  },
  frame3: {
    top: 126,
  },
  rectangle: {
    left: 8,
    borderRadius: Border.br_5xs,
    width: 359,
    opacity: 0.1,
    backgroundColor: Color.blue1,
    height: 64,
    top: 0,
    position: "absolute",
  },
  text2: {
    letterSpacing: -0.2,
    fontWeight: "700",
  },
  frame5: {
    top: 32,
    left: 335,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.blue1,
    position: "absolute",
    overflow: "hidden",
  },
  text3: {
    left: 329,
  },
  frame4: {
    top: 50,
  },
  allChats: {
    lineHeight: 18,
  },
  frame7: {
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.blue1,
    overflow: "hidden",
  },
  personal: {
    opacity: 0.5,
    lineHeight: 18,
    fontSize: FontSize.bodyTextRegular_size,
    color: Color.textPrimary,
  },
  frameShadowBox: {
    marginLeft: 24,
    shadowOpacity: 1,
    elevation: 32,
    shadowRadius: 32,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(70, 96, 135, 0.1)",
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  frame6: {
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    top: 0,
    left: 16,
    position: "absolute",
  },
  frameParent: {
    top: 186,
    height: 418,
    width: 376,
    left: 0,
    position: "absolute",
  },
  recentChats: {
    fontSize: FontSize.h1_size,
    left: 0,
    top: 0,
    color: Color.textPrimary,
    fontWeight: "500",
    position: "absolute",
  },
  vectorIcon: {
    height: "81.3%",
    width: "5.5%",
    top: "4.35%",
    right: "0%",
    bottom: "14.35%",
    left: "94.5%",
    maxHeight: "100%",
  },
  group12: {
    top: 117,
    width: 340,
    left: 16,
  },
  iosbottomBar5Tabs: {
    right: 2,
    bottom: -5,
    left: -2,
    height: 84,
  },
  messages: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Messages;
