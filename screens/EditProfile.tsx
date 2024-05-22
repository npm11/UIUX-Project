import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const EditProfile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.editProfile}>
      <View style={[styles.editProfileChild, styles.rectangleParentPosition]} />
      <View style={styles.pageHeader}>
        <Pressable
          style={styles.logout}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.logout1}>Logout</Text>
        </Pressable>
        <Text style={styles.profile}>Profile</Text>
        <Image
          style={[styles.iconx, styles.iconxLayout]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={styles.settings}>Back</Text>
      </View>
      <View style={styles.contentcontentBlocklarge}>
        <View style={styles.contentBlock} />
        <Text style={[styles.header, styles.soictClr]}>Header</Text>
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
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.changePassword, styles.row4FlexBox]}>
          Change password
        </Text>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <View style={[styles.soictParent, styles.soictParentPosition]}>
            <Text style={[styles.soict, styles.soictClr]}>SOICT</Text>
            <Image
              style={[styles.maskGroupIcon, styles.soictParentPosition]}
              contentFit="cover"
              source={require("../assets/mask-group1.png")}
            />
          </View>
          <View style={[styles.groupItem, styles.groupBorder]} />
          <View style={[styles.groupInner, styles.groupBorder]} />
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
        <View style={styles.name}>
          <Text style={[styles.firstName, styles.nameTypo]}>First Name</Text>
          <View style={[styles.nameField, styles.nameLayout]} />
          <Text style={[styles.egAlaa, styles.egAlaaTypo]}>eg. Alaa</Text>
          <View style={[styles.lastNameParent, styles.nameParentLayout]}>
            <Text style={[styles.lastName, styles.nameTypo]}>Last Name</Text>
            <View style={[styles.nameField1, styles.nameLayout]} />
            <Text style={[styles.egMohamed, styles.egAlaaTypo]}>
              eg. Mohamed
            </Text>
          </View>
          <View style={[styles.userNameParent, styles.nameParentLayout]}>
            <Text style={[styles.firstName, styles.nameTypo]}>User Name</Text>
            <View style={[styles.nameField1, styles.nameLayout]} />
            <Text style={[styles.egAlaamohamed, styles.egAlaaTypo]}>
              eg. alaa.mohamed
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.row4, styles.row4FlexBox]}>
        <View style={styles.uploadPhoto}>
          <Pressable onPress={() => navigation.navigate("EditProfile1")}>
            <Text style={styles.edit}>{`Edit `}</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.iosbottomBar5Tabs1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    left: -1,
    position: "absolute",
  },
  iconxLayout: {
    height: 23,
    position: "absolute",
  },
  soictClr: {
    color: Color.black,
    textAlign: "left",
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
  groupLayout: {
    width: 379,
    position: "absolute",
  },
  row4FlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  soictParentPosition: {
    height: 45,
    top: 0,
    position: "absolute",
  },
  groupBorder: {
    borderTopWidth: 0.5,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    height: 1,
    position: "absolute",
  },
  rectangleLayout: {
    height: 35,
    width: 107,
    top: 583,
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
  nameTypo: {
    height: 15,
    width: 121,
    fontFamily: FontFamily.montserratBold,
    color: Color.peakPrimary,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.uI16Semi_size,
    top: 0,
    position: "absolute",
  },
  nameLayout: {
    height: 40,
    borderColor: Color.colorLightgray_100,
    borderWidth: 1,
    width: 333,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
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
  editProfileChild: {
    height: 208,
    backgroundColor: Color.colorRoyalblue_100,
    right: 0,
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
    display: "none",
    left: 0,
  },
  settings: {
    marginTop: -10,
    top: "50%",
    textAlign: "left",
    left: 0,
    color: Color.white,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
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
    height: 743,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  changePassword: {
    top: "14.27%",
    fontSize: FontSize.size_5xl,
    lineHeight: 20,
    fontFamily: FontFamily.latoBold,
    display: "flex",
    width: 228,
    color: Color.peakPrimary,
    fontWeight: "700",
    alignItems: "center",
    left: 3,
    textAlign: "left",
  },
  soict: {
    top: 11,
    left: 52,
    fontSize: FontSize.h1_size,
    fontFamily: FontFamily.rubikRegular,
    width: 51,
    height: 23,
    position: "absolute",
  },
  maskGroupIcon: {
    width: 40,
    left: 0,
  },
  soictParent: {
    left: 25,
    width: 103,
  },
  groupItem: {
    top: 71,
    width: 380,
    left: 0,
  },
  groupInner: {
    top: 111,
    width: 373,
    left: 3,
    borderTopWidth: 0.5,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
  },
  groupParent: {
    top: 23,
    left: 1,
    height: 111,
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
    left: 209,
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
    left: 66,
  },
  firstName: {
    left: 2,
  },
  nameField: {
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
    top: 28,
  },
  egMohamed: {
    left: 23,
    width: 113,
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
    top: 165,
    left: 22,
    height: 227,
    width: 333,
    position: "absolute",
  },
  rectangleParent: {
    top: 81,
    height: 743,
    width: 380,
  },
  edit: {
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.white,
  },
  uploadPhoto: {
    backgroundColor: Color.peakPrimary,
    borderColor: Color.peakPrimary,
    width: 95,
    height: 62,
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  row4: {
    height: "4.24%",
    width: "25.33%",
    top: "14.16%",
    right: "4.27%",
    bottom: "81.6%",
    left: "70.4%",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  iosbottomBar5Tabs1: {
    bottom: 1,
    height: 84,
    left: 0,
    right: 0,
  },
  editProfile: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default EditProfile;
