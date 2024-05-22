import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const KPICompletionProgress = () => {
  return (
    <View style={styles.kpiCompletionProgress}>
      <Image
        style={styles.iosbottomBar5Tabs}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs6.png")}
      />
      <View style={[styles.lifeCont, styles.lifeContPosition]}>
        <Text
          style={[styles.salesWebsiteDesign, styles.text2Typo]}
        >{`Sales website design `}</Text>
        <Text style={[styles.plan1, styles.planClr]}>Plan 1</Text>
        <View style={[styles.groupParent, styles.groupPosition]}>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-18.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>75%</Text>
        </View>
        <Text style={[styles.view, styles.viewTypo1]}>view</Text>
      </View>
      <Text style={[styles.kpiCompletionProgress1, styles.kpiTypo]}>
        KPI Completion Progress
      </Text>
      <View style={[styles.scroll, styles.scrollLayout]}>
        <View style={[styles.scrollChild, styles.scrollLayout]} />
        <View style={styles.scrollItem} />
      </View>
      <View style={[styles.socialIns, styles.socialInsPosition]}>
        <Text style={[styles.graduationThesis, styles.kpiTypo]}>
          Graduation thesis
        </Text>
        <Text style={[styles.plan2, styles.planClr]}>Plan 2</Text>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-19.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>91%</Text>
        </View>
        <View style={[styles.socialInsChild, styles.advancedChildLayout]} />
      </View>
      <Text style={[styles.view1, styles.viewTypo1]}>view</Text>
      <View style={[styles.advancedMaths, styles.advancedChildLayout]}>
        <Text style={[styles.buildAPet, styles.kpiTypo]}>
          Build a pet management system
        </Text>
        <Text style={[styles.plan3, styles.planTypo]}>Plan 3</Text>
        <View style={[styles.groupView, styles.groupLayout1]}>
          <Image
            style={[styles.groupInner, styles.groupLayout1]}
            contentFit="cover"
            source={require("../assets/group-20.png")}
          />
          <Text style={[styles.text2, styles.text2Typo]}>25%</Text>
        </View>
        <Text style={[styles.view2, styles.view2Layout]}>view</Text>
        <View style={[styles.advancedMathsChild, styles.advancedChildLayout]} />
      </View>
      <View style={[styles.pension, styles.pensionLayout]}>
        <Text style={[styles.buildACheckers, styles.text3Typo]}>
          Build a checkers game
        </Text>
        <Text style={[styles.plan4, styles.planTypo]}>Plan 4</Text>
        <View style={[styles.groupParent1, styles.groupLayout]}>
          <Image
            style={[styles.groupIcon, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/group-21.png")}
          />
          <Text style={[styles.text3, styles.text3Typo]}>97%</Text>
        </View>
        <Text style={[styles.view3, styles.viewTypo]}>view</Text>
        <View style={[styles.pensionChild, styles.pensionLayout]} />
      </View>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.searchLayout]} />
        <View style={styles.searchTaskDocumentsActiviParent}>
          <Text
            style={[styles.searchTaskDocuments, styles.view2Layout]}
          >{`Search Task, Documents, Activities... `}</Text>
          <Image
            style={[styles.iconlylightOutlinesearch, styles.logoChildPosition]}
            contentFit="cover"
            source={require("../assets/iconlylight-outlinesearch.png")}
          />
        </View>
      </View>
      <View style={styles.kpiCompletionProgressChild} />
      <View style={[styles.kpiCompletionProgressItem, styles.pensionLayout]} />
      <View style={styles.logo}>
        <Image
          style={[styles.logoChild, styles.logoChildPosition]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <Text style={[styles.kpiEdu, styles.kpiTypo]}>
          <Text style={styles.kpi}>KPI</Text>
          <Text style={styles.edu}> Edu</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lifeContPosition: {
    top: 330,
    height: 83,
  },
  text2Typo: {
    height: 23,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  planClr: {
    color: Color.colorGray_200,
    textAlign: "left",
  },
  groupPosition: {
    width: 93,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    top: 32,
    height: 20,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  viewTypo1: {
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  kpiTypo: {
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  scrollLayout: {
    height: 525,
    width: 4,
    position: "absolute",
  },
  socialInsPosition: {
    left: 6,
    height: 85,
  },
  advancedChildLayout: {
    width: 356,
    position: "absolute",
  },
  planTypo: {
    top: 37,
    color: Color.colorGray_200,
    fontSize: FontSize.uI14Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: 13,
    position: "absolute",
  },
  groupLayout1: {
    height: 82,
    width: 89,
    position: "absolute",
  },
  view2Layout: {
    height: 21,
    position: "absolute",
  },
  pensionLayout: {
    width: 357,
    position: "absolute",
  },
  text3Typo: {
    height: 18,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 76,
    width: 86,
    position: "absolute",
  },
  viewTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  searchLayout: {
    height: 53,
    width: 446,
    left: 0,
    position: "absolute",
  },
  logoChildPosition: {
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iosbottomBar5Tabs: {
    right: 0,
    bottom: 1,
    height: 84,
    maxWidth: "100%",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  salesWebsiteDesign: {
    top: 18,
    width: 211,
    fontSize: FontSize.uI16Semi_size,
    left: 0,
  },
  plan1: {
    width: 78,
    height: 15,
    fontSize: FontSize.uI14Regular_size,
    top: 42,
    color: Color.colorGray_200,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
    left: 0,
  },
  groupChild: {
    height: 83,
    left: 0,
  },
  text: {
    left: 30,
    width: 33,
    height: 20,
    fontSize: FontSize.size_mini,
  },
  groupParent: {
    left: 256,
    height: 83,
  },
  view: {
    top: 60,
    left: 0,
  },
  lifeCont: {
    width: 349,
    height: 83,
    left: 13,
    position: "absolute",
  },
  kpiCompletionProgress1: {
    top: 224,
    fontSize: FontSize.size_6xl,
    width: 317,
    height: 48,
    left: 28,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.openSansBold,
    textAlign: "left",
    fontWeight: "700",
  },
  scrollChild: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_31xl,
    top: 0,
    left: 0,
  },
  scrollItem: {
    top: 96,
    backgroundColor: Color.colorRoyalblue_100,
    height: 176,
    borderRadius: Border.br_31xl,
    width: 4,
    left: 0,
    position: "absolute",
  },
  scroll: {
    top: 203,
    left: 371,
  },
  graduationThesis: {
    top: 17,
    width: 191,
    height: 29,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.openSansBold,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.uI16Semi_size,
    left: 13,
  },
  plan2: {
    width: 77,
    height: 20,
    fontSize: FontSize.uI14Regular_size,
    top: 42,
    color: Color.colorGray_200,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
    left: 13,
  },
  groupItem: {
    height: 85,
    left: 0,
  },
  text1: {
    left: 31,
    width: 34,
    height: 20,
    fontSize: FontSize.size_mini,
  },
  groupContainer: {
    left: 265,
    height: 85,
  },
  socialInsChild: {
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_xl,
    height: 85,
    top: 0,
    left: 0,
  },
  socialIns: {
    top: 425,
    width: 358,
    height: 85,
    position: "absolute",
  },
  view1: {
    top: 484,
    left: 19,
  },
  buildAPet: {
    top: 12,
    width: 276,
    height: 30,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.openSansBold,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.uI16Semi_size,
    left: 13,
  },
  plan3: {
    width: 214,
    height: 20,
  },
  groupInner: {
    top: 0,
    left: 0,
  },
  text2: {
    top: 30,
    left: 29,
    width: 36,
    fontSize: FontSize.size_mini,
  },
  groupView: {
    top: 4,
    left: 267,
  },
  view2: {
    top: 52,
    left: 8,
    width: 43,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  advancedMathsChild: {
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_xl,
    top: 0,
    height: 83,
    left: 0,
  },
  advancedMaths: {
    top: 525,
    height: 85,
    left: 6,
  },
  buildACheckers: {
    top: 15,
    width: 236,
    fontSize: FontSize.uI16Semi_size,
    left: 13,
  },
  plan4: {
    width: 76,
    height: 19,
  },
  groupIcon: {
    top: 0,
    left: 0,
  },
  text3: {
    top: 29,
    width: 31,
    left: 28,
    fontSize: FontSize.size_mini,
  },
  groupParent1: {
    top: 3,
    left: 263,
  },
  view3: {
    top: 56,
    left: 7,
    width: 46,
    height: 17,
    position: "absolute",
  },
  pensionChild: {
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_xl,
    height: 85,
    top: 0,
    left: 0,
  },
  pension: {
    top: 622,
    left: 5,
    width: 357,
    height: 85,
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
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    width: 269,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  iconlylightOutlinesearch: {
    width: "8.04%",
    right: "91.96%",
  },
  searchTaskDocumentsActiviParent: {
    top: 14,
    left: 38,
    width: 303,
    height: 26,
    position: "absolute",
  },
  search: {
    top: 142,
  },
  kpiCompletionProgressChild: {
    top: 147,
    left: 24,
    width: 329,
    height: 45,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  kpiCompletionProgressItem: {
    left: 5,
    width: 357,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_xl,
    height: 83,
    top: 330,
  },
  logoChild: {
    width: "23.95%",
    right: "76.05%",
  },
  kpi: {
    color: Color.colorOrange,
  },
  edu: {
    color: Color.colorDodgerblue_100,
  },
  kpiEdu: {
    top: 7,
    left: 60,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.ubuntuBold,
    width: 123,
    height: 38,
    textAlign: "left",
    fontWeight: "700",
  },
  logo: {
    height: "6.29%",
    width: "48.77%",
    top: "4.06%",
    right: "26.16%",
    bottom: "89.64%",
    left: "25.07%",
    position: "absolute",
  },
  kpiCompletionProgress: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default KPICompletionProgress;
