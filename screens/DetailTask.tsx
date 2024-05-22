import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const DetailTask = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.detailTask}>
      <View style={styles.detailTaskChild} />
      <View style={[styles.detailTaskItem, styles.detailShadowBox]} />
      <View style={[styles.detailTaskInner, styles.detailShadowBox]} />
      <Pressable
        style={styles.pageHeader}
        onPress={() => navigation.navigate("Activities")}
      >
        <Text style={styles.filter} />
        <Text style={styles.content}>Tasks</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("Activities")}
        >
          <Text style={styles.back1}>Back</Text>
        </Pressable>
      </Pressable>
      <Image
        style={styles.iosbottomBar5Tabs}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs8.png")}
      />
      <Text style={styles.work1}>Work 1</Text>
      <View style={[styles.contentBlock, styles.contentLayout]} />
      <View style={[styles.contentBlock1, styles.contentLayout]} />
      <View style={[styles.contentBlock2, styles.contentLayout]} />
      <Text style={[styles.detail, styles.timeTypo]}>Detail</Text>
      <Text style={[styles.time, styles.timeTypo]}>Time</Text>
      <Text style={[styles.jobs, styles.timeTypo]}>Jobs</Text>
      <Text style={[styles.note1, styles.noteTypo]}>note 1</Text>
      <Text style={[styles.note2, styles.noteTypo]}>note 2</Text>
      <Text style={[styles.note3, styles.noteTypo]}>note 3</Text>
      <Text style={[styles.dateApril8, styles.noteTypo]}>
        Date: April 8, 2024
      </Text>
      <Text style={[styles.time1400, styles.noteTypo]}>
        Time: 14:00 - 17:00
      </Text>
      <View style={[styles.checkboxParent, styles.checkboxPosition]}>
        <View style={styles.checkboxShadowBox} />
        <Text style={[styles.job1, styles.job1Typo]}>Job 1</Text>
        <Text style={[styles.description1, styles.job1Typo]}>{`Description 1
`}</Text>
      </View>
      <View style={[styles.checkboxGroup, styles.checkboxPosition]}>
        <View style={styles.checkboxShadowBox} />
        <Text style={[styles.job1, styles.job1Typo]}>Job 2</Text>
        <Text style={[styles.description1, styles.job1Typo]}>{`Description 2
`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailShadowBox: {
    height: 736,
    width: 376,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(75, 75, 75, 0.15)",
    position: "absolute",
    backgroundColor: Color.white,
  },
  contentLayout: {
    height: 130,
    width: 334,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  timeTypo: {
    width: 269,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  noteTypo: {
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI14Regular_size,
    width: 269,
    left: 38,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  checkboxPosition: {
    paddingRight: Padding.p_31xl,
    paddingLeft: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    height: 21,
    width: 335,
    left: 24,
    position: "absolute",
  },
  job1Typo: {
    marginLeft: 27,
    height: 19,
    color: Color.gray900,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontSize: FontSize.uI14Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
  },
  detailTaskChild: {
    right: -1,
    left: -4,
    backgroundColor: Color.colorRoyalblue_100,
    height: 208,
    top: 0,
    position: "absolute",
  },
  detailTaskItem: {
    top: 76,
    left: 0,
  },
  detailTaskInner: {
    top: 79,
    left: -2,
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
    marginLeft: -40.5,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
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
  back1: {
    marginTop: -10,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  back: {
    top: "50%",
    left: 0,
    position: "absolute",
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
    maxWidth: "100%",
    height: 84,
    right: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  work1: {
    top: 114,
    left: 39,
    fontSize: FontSize.size_13xl,
    width: 127,
    height: 35,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    position: "absolute",
  },
  contentBlock: {
    top: 170,
    left: 20,
  },
  contentBlock1: {
    top: 315,
    left: 20,
  },
  contentBlock2: {
    top: 462,
    left: 19,
  },
  detail: {
    top: 178,
    left: 38,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  time: {
    top: 332,
    left: 38,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  jobs: {
    top: 475,
    left: 34,
  },
  note1: {
    top: 218,
  },
  note2: {
    top: 235,
  },
  note3: {
    top: 252,
  },
  dateApril8: {
    top: 368,
  },
  time1400: {
    top: 392,
  },
  checkboxShadowBox: {
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    elevation: 1,
    shadowRadius: 1,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  job1: {
    width: 46,
  },
  description1: {
    width: 113,
  },
  checkboxParent: {
    top: 520,
  },
  checkboxGroup: {
    top: 548,
  },
  detailTask: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default DetailTask;
