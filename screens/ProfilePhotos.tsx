import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfilePhotos = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profilephotos}>
      <View style={styles.profilephotosChild} />
      <Image
        style={[styles.profilephotosItem, styles.profilephotosItemLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={[styles.pageHeader, styles.contentcontentPosition]}>
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
      <View
        style={[
          styles.segmentedControlright,
          styles.profilephotosInnerPosition,
        ]}
      >
        <View style={[styles.segmentedControlstructure, styles.bgIconPosition]}>
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bg2.png")}
          />
          <Text style={[styles.search, styles.postsPosition]}>Search</Text>
          <Text style={[styles.posts, styles.postsPosition]}>List</Text>
          <View style={[styles.leftSelected, styles.selectedPosition]}>
            <Image
              style={[styles.bgIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <Text style={[styles.search1, styles.photosPosition]}>Search</Text>
          </View>
          <View style={[styles.rightSelected, styles.selectedPosition]}>
            <Image
              style={[styles.bgIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <Text style={[styles.photos, styles.photosPosition]}>Photos</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.contentcontentBlocklarge, styles.contentcontentPosition]}
      >
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
      <View
        style={[
          styles.contentcontentBlocklarge1,
          styles.contentcontentPosition,
        ]}
      >
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
      <View
        style={[styles.profilephotosInner, styles.profilephotosInnerPosition]}
      />
      <Image
        style={[styles.iosbottomBar5Tabs, styles.profilephotosItemLayout]}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profilephotosItemLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  contentcontentPosition: {
    left: 16,
    right: 16,
  },
  logout1Typo: {
    color: Color.white,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  hustTypo: {
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    position: "absolute",
  },
  profilephotosInnerPosition: {
    top: 389,
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
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  postsPosition: {
    marginTop: -9,
    color: Color.gray03,
    top: "50%",
    textAlign: "center",
    left: "50%",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    position: "absolute",
  },
  selectedPosition: {
    bottom: "4%",
    top: "4%",
    height: "92%",
    position: "absolute",
  },
  photosPosition: {
    marginLeft: -26.75,
    marginTop: -9,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    left: "50%",
    fontSize: FontSize.uI16Semi_size,
    position: "absolute",
  },
  mAgoTypo: {
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI14Regular_size,
  },
  profilephotosChild: {
    left: -1,
    backgroundColor: Color.colorRoyalblue_100,
    height: 245,
    right: 0,
    top: 0,
    position: "absolute",
  },
  profilephotosItem: {
    width: "42.13%",
    top: 128,
    right: "29.07%",
    left: "28.8%",
    height: 158,
  },
  logout1: {
    textAlign: "right",
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
    left: "50%",
    color: Color.white,
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
  bgIcon: {
    left: "0%",
    right: "0%",
    width: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_81xl,
  },
  search: {
    marginLeft: 56.5,
    color: Color.gray03,
  },
  posts: {
    marginLeft: -97.5,
    color: Color.gray03,
  },
  bgIcon1: {
    left: 0,
    right: 0,
  },
  search1: {
    color: Color.gray03,
  },
  leftSelected: {
    right: 170,
    left: 2,
    display: "none",
  },
  photos: {
    color: Color.greenPrimary,
  },
  rightSelected: {
    right: 3,
    left: 169,
  },
  segmentedControlstructure: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  segmentedControlright: {
    height: 50,
    left: 16,
    right: 16,
  },
  contentBlock: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 240,
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
    alignSelf: "stretch",
    color: Color.black,
    textAlign: "left",
  },
  mAgo: {
    marginTop: 8,
    color: Color.gray03,
    textAlign: "right",
  },
  paginationIcon: {
    width: 40,
    height: 8,
    marginTop: 8,
  },
  textTime: {
    marginTop: 8,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  contentcontentBlocklarge: {
    top: 455,
    position: "absolute",
  },
  contentcontentBlocklarge1: {
    top: 821,
    position: "absolute",
  },
  profilephotosInner: {
    left: 19,
    backgroundColor: Color.colorGainsboro_400,
    width: 164,
    height: 48,
  },
  iosbottomBar5Tabs: {
    bottom: 1,
    height: 84,
    left: 0,
    right: 0,
  },
  profilephotos: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfilePhotos;
