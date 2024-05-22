import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const EditProfile1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.editProfile}>
      <View style={styles.editProfileChild} />
      <Pressable
        style={styles.pageHeader}
        onPress={() => navigation.navigate("ProfilePhotos1")}
      >
        <Pressable
          style={styles.logout}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.logout1, styles.logout1Typo]}>Logout</Text>
        </Pressable>
        <Text style={styles.profile}>Profile</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={[styles.settings, styles.logout1Typo]}>Back</Text>
      </Pressable>
      <View style={styles.contentcontentBlocklarge}>
        <View style={styles.contentBlock} />
        <Text style={styles.header}>Header</Text>
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
      <View style={[styles.iosbottomBar5Tabs, styles.iosbottomPosition]}>
        <View style={styles.iphoneUi}>
          <View style={[styles.background, styles.backgroundPosition]} />
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
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.editProfileItem} />
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildLayout1]} />
        <View style={styles.groupParent}>
          <View style={styles.soictParent}>
            <Text style={[styles.soict, styles.iconLayout]}>SOICT</Text>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group2.png")}
            />
          </View>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Pressable
            style={[styles.save, styles.savePosition]}
            onPress={() => navigation.navigate("ProfilePhotos1")}
          >
            <Text style={[styles.save1, styles.save1Typo]}>Save</Text>
          </Pressable>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Pressable
            style={[styles.cancel, styles.savePosition]}
            onPress={() => navigation.navigate("ProfilePhotos1")}
          >
            <Text style={[styles.cancel1, styles.save1Typo]}>Cancel</Text>
          </Pressable>
        </View>
        <View style={styles.row3}>
          <View style={[styles.uploadPhoto, styles.deleteBorder]}>
            <Text style={[styles.editPhoto, styles.photoTypo]}>
              Upload Photo
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.iosbottomBar5Tabs1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs5.png")}
      />
      <View style={[styles.delete, styles.deleteBorder]}>
        <Text style={[styles.deletePhoto, styles.photoTypo]}>Delete Photo</Text>
      </View>
      <View style={styles.name}>
        <Text style={[styles.firstName, styles.nameTypo]}>First Name</Text>
        <View style={[styles.nameField, styles.nameLayout]} />
        <Text style={[styles.egAlaa, styles.egAlaaTypo]}>eg. Alaa</Text>
        <View style={[styles.lastNameParent, styles.nameParentLayout]}>
          <Text style={[styles.lastName, styles.nameTypo]}>Last Name</Text>
          <View style={[styles.nameField1, styles.fieldBorder]} />
          <Text style={[styles.egMohamed, styles.egAlaaTypo]}>eg. Mohamed</Text>
        </View>
        <View style={[styles.userNameParent, styles.nameParentLayout]}>
          <Text style={[styles.firstName, styles.nameTypo]}>User Name</Text>
          <View style={[styles.nameField1, styles.fieldBorder]} />
          <Text style={[styles.egAlaamohamed, styles.egAlaaTypo]}>
            eg. alaa.mohamed
          </Text>
        </View>
      </View>
      <View style={[styles.emailPhone, styles.emailLayout]}>
        <View style={[styles.addressParent, styles.emailLayout]}>
          <Text style={[styles.address, styles.addressTypo]}>Address</Text>
          <View style={[styles.emailField, styles.emailLayout]} />
          <Image
            style={[styles.mailIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mail.png")}
          />
        </View>
        <Text
          style={[styles.officeAddress, styles.addressTypo]}
        >{`Office Address `}</Text>
        <View style={[styles.phoneField, styles.emailLayout]} />
        <Image
          style={[styles.phoneIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/phone.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logout1Typo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    color: Color.white,
  },
  mAgoTypo: {
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI14Regular_size,
  },
  iosbottomPosition: {
    height: 84,
    left: 0,
    right: 0,
  },
  backgroundPosition: {
    bottom: 0,
    position: "absolute",
  },
  tabsChildLayout: {
    width: 32,
    height: 32,
    borderRadius: Border.br_81xl,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout1: {
    height: 743,
    width: 379,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 22,
    position: "absolute",
  },
  groupLayout: {
    width: 380,
    borderTopWidth: 0.5,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    height: 1,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 35,
    width: 107,
    top: 587,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_3xs,
    height: 35,
    width: 107,
    left: 0,
    top: 0,
    position: "absolute",
  },
  savePosition: {
    top: 9,
    position: "absolute",
  },
  save1Typo: {
    height: 18,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.uI14Regular_size,
    textAlign: "left",
    color: Color.white,
  },
  deleteBorder: {
    justifyContent: "center",
    width: 95,
    borderWidth: 1,
    borderColor: Color.peakPrimary,
    alignItems: "center",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  photoTypo: {
    fontFamily: FontFamily.montserratBold,
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    textAlign: "center",
  },
  nameTypo: {
    height: 15,
    width: 121,
    color: Color.peakPrimary,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.uI16Semi_size,
    top: 0,
    position: "absolute",
  },
  nameLayout: {
    height: 40,
    width: 333,
    position: "absolute",
  },
  egAlaaTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.montserratItalic,
    fontStyle: "italic",
    top: 40,
    height: 15,
    textAlign: "left",
    fontSize: FontSize.uI16Semi_size,
    position: "absolute",
  },
  nameParentLayout: {
    height: 68,
    width: 333,
    left: 0,
    position: "absolute",
  },
  fieldBorder: {
    top: 28,
    borderColor: Color.colorLightgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 0,
    backgroundColor: Color.white,
  },
  emailLayout: {
    width: 331,
    position: "absolute",
  },
  addressTypo: {
    height: 16,
    color: Color.peakPrimary,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.uI16Semi_size,
    position: "absolute",
  },
  editProfileChild: {
    left: -1,
    height: 208,
    backgroundColor: Color.colorRoyalblue_100,
    right: 0,
    top: 0,
    position: "absolute",
  },
  logout1: {
    textAlign: "right",
    color: Color.white,
  },
  logout: {
    top: 8,
    right: 0,
    position: "absolute",
  },
  profile: {
    marginLeft: -45.5,
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
  settings: {
    marginTop: -10,
    top: "50%",
    textAlign: "left",
    left: 0,
    color: Color.white,
    position: "absolute",
  },
  pageHeader: {
    right: 17,
    left: 15,
    height: 36,
    top: 27,
    position: "absolute",
  },
  contentBlock: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 240,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  header: {
    marginTop: 8,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    fontSize: FontSize.uI16Semi_size,
  },
  hellWantTo: {
    color: Color.black,
    alignSelf: "stretch",
    textAlign: "left",
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
    right: 16,
    left: 16,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.colorGray_100,
    left: 0,
    right: 0,
    top: 0,
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
    bottom: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.97%",
    width: "4.27%",
    top: "92.61%",
    right: "9.87%",
    bottom: "5.42%",
    left: "85.87%",
    maxHeight: "100%",
  },
  editProfileItem: {
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
  soict: {
    top: 10,
    left: 52,
    fontSize: FontSize.h1_size,
    fontFamily: FontFamily.rubikRegular,
    width: 51,
    color: Color.black,
    textAlign: "left",
  },
  maskGroupIcon: {
    height: 41,
    width: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  soictParent: {
    width: 103,
    height: 41,
    left: 25,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 66,
  },
  groupInner: {
    top: 367,
  },
  groupParent: {
    height: 367,
    width: 379,
    left: 0,
    top: 27,
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.colorLimegreen,
  },
  save1: {
    width: 34,
  },
  save: {
    left: 37,
  },
  rectangleGroup: {
    left: 208,
  },
  groupChild2: {
    backgroundColor: Color.colorGold_100,
  },
  cancel1: {
    width: 48,
  },
  cancel: {
    left: 29,
  },
  rectangleContainer: {
    left: 65,
  },
  editPhoto: {
    color: Color.white,
  },
  uploadPhoto: {
    backgroundColor: Color.peakPrimary,
    height: 62,
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_7xs,
  },
  row3: {
    height: "4.63%",
    width: "25.07%",
    top: "4.48%",
    right: "35.36%",
    bottom: "90.89%",
    left: "39.58%",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 78,
  },
  iosbottomBar5Tabs1: {
    bottom: 1,
    height: 84,
    left: 0,
    right: 0,
  },
  deletePhoto: {
    color: Color.black,
  },
  delete: {
    top: 112,
    left: 267,
    backgroundColor: Color.colorAliceblue,
    height: 34,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    width: 95,
    borderWidth: 1,
    borderColor: Color.peakPrimary,
    position: "absolute",
  },
  firstName: {
    left: 2,
  },
  nameField: {
    borderColor: Color.colorLightgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 0,
    backgroundColor: Color.white,
    top: 27,
  },
  egAlaa: {
    width: 66,
    left: 19,
  },
  lastName: {
    left: 0,
  },
  nameField1: {
    height: 40,
    width: 333,
    position: "absolute",
  },
  egMohamed: {
    width: 113,
    left: 23,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.montserratItalic,
    fontStyle: "italic",
    top: 40,
  },
  lastNameParent: {
    top: 79,
  },
  egAlaamohamed: {
    left: 21,
    width: 155,
  },
  userNameParent: {
    top: 159,
  },
  name: {
    top: 200,
    height: 227,
    width: 333,
    left: 23,
    position: "absolute",
  },
  address: {
    left: 1,
    width: 151,
    top: 0,
  },
  emailField: {
    top: 28,
    borderColor: Color.colorLightgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 0,
    backgroundColor: Color.white,
    height: 41,
  },
  mailIcon: {
    top: 38,
    left: 13,
    width: 19,
    overflow: "hidden",
  },
  addressParent: {
    height: 69,
    left: 0,
    top: 0,
  },
  officeAddress: {
    top: 80,
    width: 131,
    left: 0,
  },
  phoneField: {
    top: 108,
    borderColor: Color.colorLightgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 0,
    backgroundColor: Color.white,
    height: 41,
  },
  phoneIcon: {
    top: 118,
    left: 8,
    width: 28,
    overflow: "hidden",
  },
  emailPhone: {
    top: 494,
    height: 149,
    left: 25,
  },
  editProfile: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default EditProfile1;
