import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const KPICompletionProgress1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.kpiCompletionProgress}>
      <Pressable
        style={styles.pageHeader}
        onPress={() => navigation.navigate("Activities")}
      >
        <Text style={styles.new}>Next</Text>
        <Text style={styles.expenses}>KPI</Text>
        <Image
          style={[styles.iconx, styles.iconxPosition]}
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
        source={require("../assets/iosbottom-bar5-tabs13.png")}
      />
      <View style={styles.lifeCont}>
        <Text style={[styles.task1, styles.task1Typo]}>{`Task 1 `}</Text>
        <Text style={[styles.chapter3, styles.chapterClr]}>Chapter 3</Text>
      </View>
      <Text style={[styles.kpiCompletionProgress1, styles.kpiPosition]}>
        KPI Completion Progress
      </Text>
      <View style={[styles.scroll, styles.scrollLayout]}>
        <View style={[styles.scrollChild, styles.scrollLayout]} />
        <View style={[styles.scrollItem, styles.scrollItemLayout]} />
      </View>
      <View style={[styles.socialIns, styles.socialChildLayout]}>
        <Text style={[styles.task2, styles.taskTypo]}>Task 2</Text>
        <Text style={[styles.chapter31, styles.taskTypo]}>Chapter 3</Text>
        <View style={[styles.socialInsChild, styles.childLayout]} />
        <View style={[styles.profile, styles.profileLayout3]}>
          <View style={[styles.profileChild, styles.profileChildLayout]} />
          <View style={[styles.profileItem, styles.profileChildLayout]} />
          <View
            style={[styles.inProgressWrapper, styles.progressWrapperLayout]}
          >
            <Text style={[styles.inProgress, styles.progressTypo]}>
              In Progress
            </Text>
          </View>
          <View style={[styles.iconChevronLeft, styles.iconPosition1]} />
          <Image
            style={[styles.profileInner, styles.scrollItemLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-59.png")}
          />
        </View>
      </View>
      <View style={[styles.advancedMaths, styles.socialChildLayout]}>
        <Text style={[styles.task3, styles.taskTypo]}>Task 3</Text>
        <Text style={[styles.module2Module, styles.chapter5Typo]}>
          Module 2, Module 3, Module 4
        </Text>
        <View style={[styles.advancedMathsChild, styles.childLayout]} />
        <View style={[styles.profile1, styles.profileLayout3]}>
          <View style={[styles.profileChild, styles.profileChildLayout]} />
          <View style={[styles.profileChild1, styles.profileChildLayout]} />
          <View style={[styles.doneWrapper, styles.progressWrapperLayout]}>
            <Text style={[styles.inProgress, styles.progressTypo]}>{`Done
`}</Text>
          </View>
          <View style={styles.iconPosition} />
          <Image
            style={[styles.profileInner, styles.scrollItemLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-591.png")}
          />
        </View>
      </View>
      <View style={[styles.pension, styles.pensionLayout]}>
        <Text style={[styles.task4, styles.taskTypo]}>Task 4</Text>
        <Text style={[styles.chapter5, styles.chapter5Typo]}>Chapter 5</Text>
        <View style={[styles.pensionChild, styles.pensionLayout]} />
      </View>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.searchLayout]} />
        <View style={styles.searchTaskDocumentsActiviParent}>
          <Text
            style={styles.searchTaskDocuments}
          >{`Search Task, Documents, Activities... `}</Text>
          <Image
            style={[
              styles.iconlylightOutlinesearch,
              styles.vector2StrokeLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconlylight-outlinesearch.png")}
          />
        </View>
      </View>
      <View style={[styles.kpiCompletionProgressChild, styles.kpiPosition]} />
      <View style={[styles.kpiCompletionProgressItem, styles.pensionLayout]} />
      <View style={[styles.profile2, styles.profileLayout2]}>
        <View style={[styles.profileChild2, styles.profileChildPosition]} />
        <View style={[styles.dayWrapper, styles.dayLayout]}>
          <Text style={[styles.day, styles.dayLayout]}>Day</Text>
        </View>
        <Image
          style={[styles.iconChevronLeft2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--chevron-left.png")}
        />
      </View>
      <View style={[styles.profile3, styles.profileLayout1]}>
        <View style={[styles.profileChild3, styles.profileLayout1]} />
        <View style={[styles.mostRecentWrapper, styles.mostLayout]}>
          <Text style={[styles.mostRecent, styles.mostLayout]}>
            Most Recent
          </Text>
        </View>
        <Image
          style={[styles.iconChevronLeft3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--chevron-left1.png")}
        />
      </View>
      <View style={[styles.profile4, styles.profileLayout]}>
        <View style={[styles.profileChild4, styles.profileLayout]} />
        <View style={styles.inProgressParent}>
          <Text style={[styles.inProgress1, styles.dayLayout]}>
            In Progress
          </Text>
          <Image
            style={[styles.vector2Stroke, styles.vector2StrokeLayout]}
            contentFit="cover"
            source={require("../assets/vector-2-stroke.png")}
          />
        </View>
        <View style={[styles.iconChevronLeft4, styles.iconLayout]} />
      </View>
      <View style={[styles.profile5, styles.profileLayout3]}>
        <View style={[styles.profileChild, styles.profileChildLayout]} />
        <View style={[styles.profileChild, styles.profileChildLayout]} />
        <View style={[styles.inProgressWrapper, styles.progressWrapperLayout]}>
          <Text style={[styles.notStarted, styles.progressTypo]}>
            Not Started
          </Text>
        </View>
        <View style={[styles.iconChevronLeft5, styles.iconPosition1]} />
        <Image
          style={[styles.profileInner, styles.scrollItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-592.png")}
        />
      </View>
      <View style={[styles.profile6, styles.profileLayout3]}>
        <View style={[styles.profileChild, styles.profileChildLayout]} />
        <View style={[styles.profileChild1, styles.profileChildLayout]} />
        <View style={[styles.doneWrapper, styles.progressWrapperLayout]}>
          <Text style={[styles.inProgress, styles.progressTypo]}>{`Done
`}</Text>
        </View>
        <View style={styles.iconPosition} />
        <Image
          style={[styles.profileInner, styles.scrollItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-591.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconxPosition: {
    height: 23,
    left: 0,
    position: "absolute",
  },
  task1Typo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
  },
  chapterClr: {
    color: Color.colorGray_200,
    fontSize: FontSize.bodyTextRegular_size,
  },
  kpiPosition: {
    left: 24,
    position: "absolute",
  },
  scrollLayout: {
    height: 525,
    width: 4,
    position: "absolute",
  },
  scrollItemLayout: {
    width: 4,
    position: "absolute",
  },
  socialChildLayout: {
    width: 356,
    position: "absolute",
  },
  taskTypo: {
    left: 13,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_300,
  },
  profileLayout3: {
    height: 43,
    position: "absolute",
  },
  profileChildLayout: {
    borderRadius: Border.br_3xs,
    height: 43,
    width: 124,
    left: 0,
    top: 0,
    position: "absolute",
  },
  progressWrapperLayout: {
    height: 17,
    width: 92,
    position: "absolute",
  },
  progressTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  iconPosition1: {
    height: 9,
    width: 10,
    right: 60,
    top: 28,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  chapter5Typo: {
    top: 44,
    left: 13,
    color: Color.colorGray_200,
    fontSize: FontSize.bodyTextRegular_size,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  pensionLayout: {
    width: 357,
    position: "absolute",
  },
  searchLayout: {
    height: 53,
    width: 446,
    left: 0,
    position: "absolute",
  },
  vector2StrokeLayout: {
    maxHeight: "100%",
    bottom: "0%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profileLayout2: {
    height: 33,
    width: 123,
    position: "absolute",
  },
  profileChildPosition: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  dayLayout: {
    height: 13,
    position: "absolute",
  },
  iconLayout: {
    height: 8,
    position: "absolute",
  },
  profileLayout1: {
    width: 136,
    height: 33,
    position: "absolute",
  },
  mostLayout: {
    width: 94,
    height: 13,
    position: "absolute",
  },
  profileLayout: {
    height: 34,
    width: 107,
    position: "absolute",
  },
  new: {
    top: 8,
    textAlign: "right",
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    right: 0,
    fontSize: FontSize.uI16Semi_size,
    position: "absolute",
  },
  expenses: {
    marginLeft: -22.5,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    fontFamily: FontFamily.uI14Semi,
    color: Color.black,
    textAlign: "center",
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  iconx: {
    top: 5,
    width: 23,
    display: "none",
  },
  back1: {
    marginTop: -10,
    textAlign: "left",
    color: Color.colorRoyalblue_100,
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
    top: 60,
    right: 16,
    left: 16,
    height: 36,
    position: "absolute",
  },
  iosbottomBar5Tabs: {
    bottom: 1,
    height: 84,
    maxWidth: "100%",
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  task1: {
    color: Color.colorDarkslategray_100,
    width: 137,
    height: 23,
    left: 0,
    position: "absolute",
    top: 0,
    fontSize: FontSize.uI16Semi_size,
  },
  chapter3: {
    top: 27,
    width: 78,
    height: 15,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  lifeCont: {
    top: 349,
    left: 19,
    height: 42,
    width: 137,
    position: "absolute",
  },
  kpiCompletionProgress1: {
    top: 224,
    fontSize: FontSize.size_6xl,
    width: 317,
    height: 48,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
  },
  scrollChild: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  scrollItem: {
    top: 96,
    backgroundColor: Color.colorRoyalblue_100,
    height: 176,
    borderRadius: Border.br_31xl,
    left: 0,
  },
  scroll: {
    top: 218,
    left: 371,
  },
  task2: {
    top: 17,
    width: 191,
    height: 29,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.uI16Semi_size,
  },
  chapter31: {
    top: 43,
    width: 77,
    height: 20,
    color: Color.colorGray_200,
    fontSize: FontSize.bodyTextRegular_size,
  },
  socialInsChild: {
    backgroundColor: Color.colorGainsboro_300,
    height: 85,
    width: 356,
    position: "absolute",
    left: 0,
    top: 0,
  },
  profileChild: {
    backgroundColor: Color.colorGainsboro_100,
  },
  profileItem: {
    backgroundColor: "rgba(39, 139, 255, 0.73)",
  },
  inProgress: {
    color: Color.white,
    height: 17,
    width: 92,
    position: "absolute",
  },
  inProgressWrapper: {
    top: 13,
    left: 30,
  },
  iconChevronLeft: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  profileInner: {
    left: 14,
    height: 4,
    top: 22,
  },
  profile: {
    left: 213,
    width: 124,
    height: 43,
    top: 20,
  },
  socialIns: {
    top: 425,
    height: 85,
    left: 6,
  },
  task3: {
    top: 12,
    width: 198,
    height: 30,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.uI16Semi_size,
  },
  module2Module: {
    width: 214,
    height: 20,
  },
  advancedMathsChild: {
    height: 83,
    backgroundColor: Color.colorGainsboro_300,
    width: 356,
    position: "absolute",
    left: 0,
    top: 0,
  },
  profileChild1: {
    backgroundColor: Color.colorSeagreen,
  },
  doneWrapper: {
    left: 45,
    top: 14,
  },
  iconPosition: {
    right: 73,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    height: 9,
    width: 10,
    top: 28,
    position: "absolute",
  },
  profile1: {
    left: 212,
    top: 20,
    width: 137,
  },
  advancedMaths: {
    top: 525,
    height: 83,
    left: 6,
  },
  task4: {
    top: 15,
    width: 93,
    height: 18,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.uI16Semi_size,
  },
  chapter5: {
    width: 76,
    height: 19,
  },
  pensionChild: {
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_xl,
    height: 85,
    left: 0,
    top: 0,
  },
  pension: {
    top: 623,
    height: 85,
    left: 6,
  },
  searchChild: {
    borderRadius: Border.br_31xl,
    top: 0,
    backgroundColor: Color.white,
    height: 53,
    width: 446,
  },
  searchTaskDocuments: {
    top: 2,
    left: 35,
    fontFamily: FontFamily.openSansSemiBold,
    width: 269,
    height: 21,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_200,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  iconlylightOutlinesearch: {
    height: "100%",
    width: "8.04%",
    top: "0%",
    right: "91.96%",
    left: "0%",
  },
  searchTaskDocumentsActiviParent: {
    left: 38,
    width: 303,
    height: 26,
    top: 14,
    position: "absolute",
  },
  search: {
    top: 142,
  },
  kpiCompletionProgressChild: {
    top: 147,
    width: 329,
    height: 45,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_31xl,
  },
  kpiCompletionProgressItem: {
    top: 330,
    left: 5,
    height: 83,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_xl,
  },
  profileChild2: {
    height: 33,
    width: 123,
    position: "absolute",
  },
  day: {
    width: 73,
    height: 13,
    letterSpacing: -0.4,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    top: 0,
    color: Color.colorDarkslategray_100,
  },
  dayWrapper: {
    width: 73,
    height: 13,
    left: 12,
    top: 10,
  },
  iconChevronLeft2: {
    right: 8,
    width: 8,
    height: 8,
    top: 14,
  },
  profile2: {
    top: 273,
    left: 0,
  },
  profileChild3: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  mostRecent: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    top: 0,
    color: Color.colorDarkslategray_100,
  },
  mostRecentWrapper: {
    left: 12,
    top: 10,
  },
  iconChevronLeft3: {
    right: 9,
    width: 9,
    top: 14,
  },
  profile3: {
    left: 126,
    top: 272,
  },
  profileChild4: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  inProgress1: {
    width: 83,
    letterSpacing: -0.4,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    top: 0,
    color: Color.colorDarkslategray_100,
  },
  vector2Stroke: {
    height: "40.71%",
    width: "8.65%",
    top: "59.29%",
    right: "-0.11%",
    left: "91.46%",
  },
  inProgressParent: {
    top: 7,
    left: 7,
    height: 14,
    width: 92,
    position: "absolute",
  },
  iconChevronLeft4: {
    right: 55,
    width: 8,
    height: 8,
    top: 22,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  profile4: {
    left: 264,
    top: 272,
  },
  notStarted: {
    height: 17,
    width: 92,
    position: "absolute",
    color: Color.colorDarkslategray_100,
  },
  iconChevronLeft5: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  profile5: {
    top: 350,
    left: 219,
    width: 124,
    height: 43,
  },
  profile6: {
    top: 644,
    left: 218,
    width: 137,
  },
  kpiCompletionProgress: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default KPICompletionProgress1;
