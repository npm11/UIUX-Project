import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ProfilePhotos1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profilephotos}>
      <View style={styles.profilephotosChild} />
      <View style={[styles.profilephotosItem, styles.logoutPosition]} />
      <View style={[styles.pageHeader, styles.pageHeaderPosition]}>
        <Pressable
          style={[styles.logout, styles.logoutPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.logout1}>Logout</Text>
        </Pressable>
        <Text style={styles.profile}>Setting</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={styles.settings}
          onPress={() => navigation.navigate("ProfilePhotos")}
        >
          <Text style={styles.back}>Back</Text>
        </Pressable>
      </View>
      <View
        style={[styles.contentcontentBlocklarge, styles.pageHeaderPosition]}
      >
        <View style={styles.contentBlock} />
        <Text style={[styles.header, styles.headerClr]}>Header</Text>
        <View style={styles.textTime}>
          <Text style={[styles.hellWantTo, styles.mAgoTypo]}>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Text>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
          <Image
            style={styles.paginationIcon}
            contentFit="cover"
            source={require("../assets/pagination.png")}
          />
        </View>
      </View>
      <View style={styles.iosbottomBar5Tabs}>
        <View style={styles.iphoneUi}>
          <View style={styles.background} />
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
        <View style={styles.tabs}>
          <View style={[styles.tabsChild, styles.tabsChildLayout]} />
          <View style={[styles.tabsItem, styles.tabsChildLayout]} />
          <View style={[styles.tabsInner, styles.tabsChildLayout]} />
          <View style={[styles.rectangleView, styles.tabsChildLayout]} />
          <View style={[styles.tabsChild1, styles.tabsChildLayout]} />
        </View>
        <View style={styles.topDivider} />
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.profilephotosInner} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <View style={[styles.groupItem, styles.lineViewLayout]} />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.groupInnerPosition]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.securityCheck, styles.securityCheckTypo]}>
          Security check
        </Text>
        <Text
          style={[styles.loginWarning, styles.changeEmailTypo]}
        >{`Login warning
`}</Text>
        <Text
          style={[styles.sercurityCheck, styles.signInAndTypo]}
        >{`Sercurity check
`}</Text>
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <View style={styles.groupParent}>
          <View style={[styles.soictParent, styles.soictParentPosition]}>
            <Text style={[styles.soict, styles.soictTypo]}>SOICT</Text>
            <Image
              style={[styles.maskGroupIcon, styles.soictParentPosition]}
              contentFit="cover"
              source={require("../assets/mask-group.png")}
            />
          </View>
          <Text style={[styles.signInAnd, styles.signInAndTypo]}>
            Sign in and restore
          </Text>
          <Text
            style={[styles.changeEmail, styles.changeEmailTypo]}
          >{`Change email
`}</Text>
          <Image
            style={[styles.groupInner, styles.groupInnerPosition]}
            contentFit="cover"
            source={require("../assets/group-14.png")}
          />
          <Pressable
            style={styles.changePassword}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={[styles.changePassword1, styles.soictTypo]}>
              Change password
            </Text>
          </Pressable>
          <Text style={[styles.loginInfomationSaved, styles.securityCheckTypo]}>
            Login Infomation Saved
          </Text>
          <Pressable
            style={styles.whereYouLoginContainer}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.whereYouLogin}>Where you login</Text>
          </Pressable>
          <View style={[styles.lineView, styles.lineViewLayout]} />
        </View>
        <View style={styles.row4}>
          <View style={styles.uploadLayout}>
            <Pressable onPress={() => navigation.navigate("EditProfile1")}>
              <Text style={styles.editTypo}>{`Edit `}</Text>
            </Pressable>
          </View>
          <View style={[styles.uploadPhoto1, styles.uploadLayout]}>
            <Text style={styles.editTypo}>{`Edit `}</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.iosbottomBar5Tabs1}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoutPosition: {
    right: 0,
    position: "absolute",
  },
  pageHeaderPosition: {
    left: 16,
    right: 16,
    position: "absolute",
  },
  headerClr: {
    color: Color.black,
    textAlign: "left",
  },
  mAgoTypo: {
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI14Regular_size,
  },
  tabsChildLayout: {
    width: 32,
    height: 32,
    borderRadius: Border.br_81xl,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  vectorIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 730,
    width: 379,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    left: "87.34%",
    right: "10.71%",
    width: "1.95%",
    height: "1.68%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineViewLayout: {
    width: 380,
    borderTopWidth: 0.5,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    height: 1,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout1: {
    width: "1.95%",
    height: "1.68%",
  },
  groupInnerPosition: {
    left: "87.07%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  securityCheckTypo: {
    height: 47,
    width: 210,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.h1_size,
    left: 25,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  changeEmailTypo: {
    height: 24,
    width: 120,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.h1_size,
    left: 25,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  signInAndTypo: {
    height: 28,
    width: 158,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.latoBlack,
    fontWeight: "800",
    lineHeight: 20,
    fontSize: FontSize.h1_size,
    left: 19,
    textAlign: "left",
    position: "absolute",
  },
  soictParentPosition: {
    height: 41,
    top: 0,
    position: "absolute",
  },
  soictTypo: {
    height: 22,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.h1_size,
    color: Color.black,
    textAlign: "left",
  },
  uploadLayout: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_11xs,
    justifyContent: "center",
    height: 62,
    width: 95,
    borderWidth: 1,
    borderColor: Color.peakPrimary,
    backgroundColor: Color.peakPrimary,
    alignItems: "center",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  profilephotosChild: {
    top: 475,
    left: 24,
    backgroundColor: Color.colorAliceblue,
    width: 326,
    height: 216,
    position: "absolute",
  },
  profilephotosItem: {
    left: -1,
    height: 208,
    backgroundColor: Color.colorRoyalblue_100,
    top: 0,
  },
  logout1: {
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  logout: {
    top: 8,
  },
  profile: {
    marginLeft: -50.5,
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    left: "50%",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    color: Color.white,
    top: 0,
    position: "absolute",
  },
  iconx: {
    top: 5,
    width: 23,
    height: 23,
    display: "none",
    left: 0,
    position: "absolute",
  },
  back: {
    marginTop: -10,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  settings: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  pageHeader: {
    top: 26,
    height: 36,
  },
  contentBlock: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 240,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  header: {
    marginTop: 8,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    color: Color.black,
    fontSize: FontSize.uI16Semi_size,
  },
  hellWantTo: {
    color: Color.black,
    textAlign: "left",
    alignSelf: "stretch",
  },
  mAgo: {
    color: Color.gray03,
    marginTop: 8,
    textAlign: "right",
  },
  paginationIcon: {
    height: 8,
    width: 40,
    marginTop: 8,
  },
  textTime: {
    marginTop: 8,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  contentcontentBlocklarge: {
    top: 821,
  },
  background: {
    backgroundColor: Color.colorGray_100,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -67,
    backgroundColor: Color.black,
    borderRadius: Border.br_81xl,
    height: 5,
    width: 134,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67.5,
    bottom: 9,
    height: 5,
    width: 134,
    left: "50%",
    position: "absolute",
  },
  iphoneUi: {
    top: 1,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  tabsChild: {
    marginLeft: -160,
    backgroundColor: Color.gray02,
    width: 32,
  },
  tabsItem: {
    marginLeft: -88,
    backgroundColor: Color.gray02,
    width: 32,
  },
  tabsInner: {
    marginLeft: -16,
    backgroundColor: Color.gray02,
    width: 32,
  },
  rectangleView: {
    marginLeft: 56,
    backgroundColor: Color.gray02,
    width: 32,
  },
  tabsChild1: {
    marginLeft: 128,
    backgroundColor: Color.colorRoyalblue_100,
  },
  tabs: {
    marginLeft: -161.5,
    top: 15,
    width: 320,
    height: 32,
    left: "50%",
    position: "absolute",
  },
  topDivider: {
    backgroundColor: Color.colorSilver_100,
    height: 1,
    top: 1,
    left: 0,
    right: 0,
    position: "absolute",
  },
  iosbottomBar5Tabs: {
    height: 84,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.97%",
    width: "4.27%",
    top: "92.61%",
    right: "9.87%",
    bottom: "5.42%",
    left: "85.87%",
  },
  profilephotosInner: {
    top: 389,
    backgroundColor: Color.colorGainsboro_400,
    width: 164,
    height: 48,
    left: 19,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(75, 75, 75, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    top: 0,
    backgroundColor: Color.white,
  },
  vectorIcon1: {
    top: "65.21%",
    bottom: "33.11%",
  },
  groupItem: {
    top: 386,
  },
  vectorIcon2: {
    top: "37.12%",
    right: "9.92%",
    bottom: "61.19%",
    left: "88.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon3: {
    top: "72.74%",
    bottom: "25.58%",
  },
  vectorIcon4: {
    top: "80%",
    right: "10.98%",
    bottom: "18.32%",
    width: "1.95%",
    height: "1.68%",
  },
  securityCheck: {
    top: 579,
  },
  loginWarning: {
    top: 525,
  },
  sercurityCheck: {
    top: 417,
  },
  vectorIcon5: {
    top: "44.38%",
    right: "10.18%",
    bottom: "53.93%",
    left: "87.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  soict: {
    top: 10,
    left: 52,
    width: 51,
    position: "absolute",
  },
  maskGroupIcon: {
    width: 40,
    left: 0,
  },
  soictParent: {
    width: 103,
    left: 25,
  },
  signInAnd: {
    top: 130,
  },
  changeEmail: {
    top: 238,
  },
  groupInner: {
    height: "13.75%",
    width: "6.33%",
    top: "31.63%",
    right: "6.6%",
    bottom: "54.62%",
  },
  changePassword1: {
    width: 150,
  },
  changePassword: {
    top: 184,
    left: 25,
    position: "absolute",
  },
  loginInfomationSaved: {
    top: 292,
  },
  whereYouLogin: {
    width: 153,
    height: 11,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.h1_size,
    color: Color.black,
    textAlign: "left",
  },
  whereYouLoginContainer: {
    top: 444,
    left: 25,
    position: "absolute",
  },
  lineView: {
    top: 81,
  },
  groupParent: {
    top: 27,
    height: 455,
    width: 379,
    left: 0,
    position: "absolute",
  },
  editTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.white,
  },
  uploadPhoto1: {
    marginLeft: 56,
  },
  row4: {
    height: "4.71%",
    width: "25.07%",
    top: "4.66%",
    right: "4.75%",
    bottom: "90.63%",
    left: "70.18%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 83,
  },
  iosbottomBar5Tabs1: {
    bottom: 1,
    maxWidth: "100%",
    height: 84,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  profilephotos: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ProfilePhotos1;
