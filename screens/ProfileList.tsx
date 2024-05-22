import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ProfileList = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profilelist}>
      <View style={styles.profilelistChild} />
      <Image
        style={styles.profilelistItem}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={[styles.pageHeader, styles.pageHeaderPosition]}>
        <Pressable
          style={styles.logout}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.logout1, styles.logout1Typo]}>Logout</Text>
        </Pressable>
        <Text style={[styles.profile, styles.hustTypo]}>Profile</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={styles.settings}
          onPress={() => navigation.navigate("ProfilePhotos1")}
        >
          <Text style={[styles.settings1, styles.logout1Typo]}>Settings</Text>
        </Pressable>
      </View>
      <View style={styles.nameBio}>
        <Text style={[styles.soict, styles.hustTypo]}>SOICT</Text>
        <Text style={[styles.hust, styles.hustTypo]}>HUST</Text>
      </View>
      <View style={styles.profilelistInner} />
      <View style={[styles.segmentedControlleft, styles.contentBlockLayout]}>
        <View style={[styles.segmentedControlstructure, styles.bgIconPosition]}>
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bg2.png")}
          />
          <Text style={[styles.photos, styles.photosPosition]}>Photos</Text>
          <Text style={[styles.search, styles.photosPosition]}>Search</Text>
          <View style={[styles.leftSelected, styles.selectedPosition]}>
            <Image
              style={[styles.bgIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <Text style={[styles.posts, styles.postsPosition]}>List</Text>
          </View>
          <View style={[styles.rightSelected, styles.selectedPosition]}>
            <Image
              style={[styles.bgIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <Text style={[styles.search1, styles.postsPosition]}>Search</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.contentcontentBlocksmall, styles.contentcontentPosition]}
      >
        <View style={[styles.contentBlock, styles.contentBlockLayout]} />
        <Text style={styles.header}>Header</Text>
        <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
        <Text style={[styles.hellWantTo, styles.mAgoTypo]}>Description</Text>
        <View style={styles.dividerLine} />
      </View>
      <View
        style={[
          styles.contentcontentBlocksmall1,
          styles.contentcontentPosition,
        ]}
      >
        <View style={[styles.contentBlock, styles.contentBlockLayout]} />
        <Text style={styles.header}>Header</Text>
        <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
        <Text style={[styles.hellWantTo, styles.mAgoTypo]}>Description</Text>
        <View style={styles.dividerLine} />
      </View>
      <View
        style={[
          styles.contentcontentBlocksmall2,
          styles.contentcontentPosition,
        ]}
      >
        <View style={[styles.contentBlock, styles.contentBlockLayout]} />
        <Text style={styles.header}>Header</Text>
        <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
        <Text style={[styles.hellWantTo, styles.mAgoTypo]}>Description</Text>
        <View style={styles.dividerLine} />
      </View>
      <View
        style={[
          styles.contentcontentBlocksmall3,
          styles.contentcontentPosition,
        ]}
      >
        <View style={[styles.contentBlock, styles.contentBlockLayout]} />
        <Text style={styles.header}>Header</Text>
        <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
        <Text style={[styles.hellWantTo, styles.mAgoTypo]}>
          He'll want to use your yacht, and I don't want this thing smelling
          like fish.
        </Text>
        <View style={styles.dividerLine} />
      </View>
      <Image
        style={styles.iosbottomBar5Tabs}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageHeaderPosition: {
    left: 16,
    right: 16,
  },
  logout1Typo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    color: Color.white,
    fontSize: FontSize.uI16Semi_size,
  },
  hustTypo: {
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    position: "absolute",
  },
  contentBlockLayout: {
    height: 50,
    position: "absolute",
  },
  bgIconPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    borderRadius: Border.br_81xl,
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  photosPosition: {
    marginTop: -9,
    color: Color.gray03,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    left: "50%",
    position: "absolute",
  },
  selectedPosition: {
    bottom: "4%",
    top: "4%",
    height: "92%",
    position: "absolute",
  },
  postsPosition: {
    color: Color.greenPrimary,
    marginTop: -9,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    fontSize: FontSize.uI16Semi_size,
    left: "50%",
    position: "absolute",
  },
  contentcontentPosition: {
    height: 77,
    left: 16,
    right: 16,
    position: "absolute",
  },
  mAgoTypo: {
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI14Regular_size,
    position: "absolute",
  },
  profilelistChild: {
    backgroundColor: Color.colorRoyalblue_100,
    height: 245,
    left: -1,
    right: 0,
    top: 0,
    position: "absolute",
  },
  profilelistItem: {
    marginLeft: -79.5,
    top: 128,
    width: 158,
    height: 158,
    left: "50%",
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
    top: 0,
    color: Color.white,
    left: "50%",
  },
  iconx: {
    top: 5,
    width: 23,
    height: 23,
    display: "none",
    left: 0,
    position: "absolute",
  },
  settings1: {
    marginTop: -10,
    textAlign: "left",
    color: Color.white,
  },
  settings: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  pageHeader: {
    top: 60,
    height: 36,
    position: "absolute",
  },
  soict: {
    color: Color.black,
    left: 0,
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    top: 0,
  },
  hust: {
    top: 44,
    left: 25,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.uI16Semi_size,
  },
  nameBio: {
    top: 302,
    left: 141,
    width: 94,
    height: 63,
    position: "absolute",
  },
  profilelistInner: {
    top: 391,
    left: 186,
    backgroundColor: Color.colorGainsboro_400,
    width: 171,
    height: 46,
    position: "absolute",
  },
  bgIcon: {
    left: "0%",
    right: "0%",
    width: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_81xl,
  },
  photos: {
    marginLeft: 56.5,
    color: Color.gray03,
  },
  search: {
    marginLeft: -110.5,
    color: Color.gray03,
  },
  bgIcon1: {
    left: 0,
    right: 0,
  },
  posts: {
    marginLeft: -13.75,
  },
  leftSelected: {
    right: 170,
    left: 2,
  },
  search1: {
    marginLeft: -26.75,
  },
  rightSelected: {
    right: 3,
    left: 169,
    display: "none",
  },
  segmentedControlstructure: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  segmentedControlleft: {
    top: 389,
    left: 16,
    right: 16,
  },
  contentBlock: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 50,
    left: 0,
    top: 0,
    height: 50,
  },
  header: {
    left: 66,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    fontSize: FontSize.uI16Semi_size,
    top: 0,
    position: "absolute",
  },
  mAgo: {
    top: 2,
    color: Color.gray03,
    textAlign: "right",
    right: 0,
  },
  hellWantTo: {
    top: 27,
    width: 269,
    left: 66,
    color: Color.black,
    textAlign: "left",
  },
  dividerLine: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.gray02,
    borderTopWidth: 1,
    height: 1,
    left: 66,
    right: 0,
    position: "absolute",
  },
  contentcontentBlocksmall: {
    top: 455,
  },
  contentcontentBlocksmall1: {
    top: 548,
  },
  contentcontentBlocksmall2: {
    top: 641,
  },
  contentcontentBlocksmall3: {
    top: 734,
  },
  iosbottomBar5Tabs: {
    right: 1,
    bottom: 2,
    height: 84,
    maxWidth: "100%",
    left: -1,
    position: "absolute",
    overflow: "hidden",
  },
  profilelist: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfileList;
