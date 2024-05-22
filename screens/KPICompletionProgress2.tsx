import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const KPICompletionProgress2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.kpiCompletionProgress, styles.groupParentBg]}>
      <View style={styles.pageHeader}>
        <Text style={[styles.new, styles.newTypo]}>Next</Text>
        <Text style={styles.expenses}>KPI</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={[styles.back, styles.backPosition]}
          onPress={() => navigation.navigate("Activities")}
        >
          <Text style={[styles.back1, styles.newTypo]}>Back</Text>
        </Pressable>
      </View>
      <Image
        style={styles.iosbottomBar5Tabs}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs15.png")}
      />
      <Text style={[styles.kpiCompletionProgress1, styles.lifeContingencyTypo]}>
        KPI Completion Progress
      </Text>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.childLayout]} />
        <View style={styles.searchTaskDocumentsActiviParent}>
          <Text
            style={styles.searchTaskDocuments}
          >{`Search Task, Documents, Activities... `}</Text>
          <Image
            style={[
              styles.iconlylightOutlinesearch,
              styles.iconinterfacescalendarLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconlylight-outlinesearch1.png")}
          />
        </View>
      </View>
      <View style={[styles.kpiCompletionProgressChild, styles.childLayout]} />
      <Image
        style={styles.chart3Icon}
        contentFit="cover"
        source={require("../assets/chart-3.png")}
      />
      <View style={[styles.lifeCont, styles.lifeLayout]}>
        <Text
          style={[styles.lifeContingency, styles.lifeLayout]}
        >{`Life Contingency `}</Text>
      </View>
      <View style={[styles.groupParent, styles.groupParentBg]}>
        <View style={[styles.fromWrapper, styles.toParentPosition]}>
          <Text style={[styles.from, styles.toTypo]}>From</Text>
        </View>
        <View style={[styles.groupContainer, styles.groupPosition2]}>
          <View style={[styles.rectangleParent, styles.groupPosition1]}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Text style={[styles.text, styles.textTypo]}>30</Text>
            <Image
              style={[styles.caretdownIcon, styles.caretdownIconLayout]}
              contentFit="cover"
              source={require("../assets/caretdown.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.groupPosition1]}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Text style={[styles.text, styles.textTypo]}>April</Text>
            <Image
              style={[styles.caretdownIcon1, styles.caretdownIconLayout]}
              contentFit="cover"
              source={require("../assets/caretdown1.png")}
            />
          </View>
          <View style={[styles.rectangleContainer, styles.groupPosition]}>
            <View style={[styles.groupInner, styles.groupChildBorder]} />
            <Text style={[styles.text1, styles.textTypo]}>2024</Text>
            <Image
              style={[styles.caretdownIcon2, styles.caretdownIconLayout]}
              contentFit="cover"
              source={require("../assets/caretdown2.png")}
            />
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
          <Text style={[styles.text, styles.textTypo]}>20h</Text>
          <Image
            style={[styles.caretdownIcon, styles.caretdownIconLayout]}
            contentFit="cover"
            source={require("../assets/caretdown3.png")}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
          <Text style={[styles.text, styles.textTypo]}>30p</Text>
          <Image
            style={[styles.caretdownIcon, styles.caretdownIconLayout]}
            contentFit="cover"
            source={require("../assets/caretdown3.png")}
          />
        </View>
        <Image
          style={[
            styles.iconinterfacescalendar,
            styles.iconinterfacescalendarLayout,
          ]}
          contentFit="cover"
          source={require("../assets/iconinterfacescalendar.png")}
        />
        <View style={[styles.groupParent1, styles.groupPosition2]}>
          <View style={[styles.rectangleParent, styles.groupPosition1]}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Text style={[styles.text, styles.textTypo]}>30</Text>
            <Image
              style={[styles.caretdownIcon, styles.caretdownIconLayout]}
              contentFit="cover"
              source={require("../assets/caretdown3.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.groupPosition1]}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Text style={[styles.text, styles.textTypo]}>April</Text>
            <Image
              style={[styles.caretdownIcon1, styles.caretdownIconLayout]}
              contentFit="cover"
              source={require("../assets/caretdown4.png")}
            />
          </View>
          <View style={[styles.rectangleContainer, styles.groupPosition]}>
            <View style={[styles.groupInner, styles.groupChildBorder]} />
            <Text style={[styles.text1, styles.textTypo]}>2024</Text>
            <Image
              style={[styles.caretdownIcon2, styles.caretdownIconLayout]}
              contentFit="cover"
              source={require("../assets/caretdown2.png")}
            />
          </View>
        </View>
        <View style={[styles.toParent, styles.toParentPosition]}>
          <Text style={[styles.to, styles.toTypo]}>To</Text>
          <View
            style={[styles.rectangleParent5, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Text style={[styles.text, styles.textTypo]}>20h</Text>
            <Image
              style={[styles.caretdownIcon, styles.caretdownIconLayout]}
              contentFit="cover"
              source={require("../assets/caretdown3.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent6, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Text style={[styles.text, styles.textTypo]}>30p</Text>
            <Image
              style={[styles.caretdownIcon, styles.caretdownIconLayout]}
              contentFit="cover"
              source={require("../assets/caretdown3.png")}
            />
          </View>
          <Image
            style={[
              styles.iconinterfacescalendar1,
              styles.iconinterfacescalendarLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconinterfacescalendar.png")}
          />
        </View>
        <Text style={[styles.description, styles.toTypo]}>Description</Text>
        <View style={[styles.groupParent2, styles.groupLayout]}>
          <View style={[styles.rectangleWrapper, styles.groupLayout]}>
            <View style={[styles.groupChild7, styles.groupLayout]} />
          </View>
          <Text style={[styles.pleaseEnterDescription, styles.textTypo]}>
            Please enter description (/250)
          </Text>
        </View>
        <View style={[styles.profile, styles.profileLayout]}>
          <View style={[styles.profileChild, styles.profilePosition]} />
          <View style={[styles.profileItem, styles.profilePosition]} />
          <View style={styles.iconPosition} />
        </View>
        <View style={[styles.profile1, styles.profileLayout]}>
          <View style={[styles.profileChild, styles.profilePosition]} />
          <View style={[styles.profileItem, styles.profilePosition]} />
          <View style={styles.iconPosition} />
        </View>
        <Pressable
          style={[styles.ok, styles.okPosition]}
          onPress={() => navigation.navigate("Activities")}
        >
          <Text style={styles.ok1Typo}>OK</Text>
        </Pressable>
        <Text style={[styles.cancel, styles.ok1Typo]}>Cancel</Text>
        <Image
          style={[styles.iconTrashBin, styles.iconinterfacescalendarLayout]}
          contentFit="cover"
          source={require("../assets/-icon-trash-bin.png")}
        />
      </View>
      <View style={[styles.titleParent, styles.backPosition]}>
        <Text style={styles.title}>Title</Text>
        <View
          style={[styles.icpc2024TournamentWrapper, styles.groupChildBorder]}
        >
          <Text style={styles.icpc2024Tournament}>ICPC 2024 Tournament|</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentBg: {
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  newTypo: {
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  backPosition: {
    top: "50%",
    position: "absolute",
  },
  lifeContingencyTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
  },
  searchLayout: {
    height: 53,
    width: 446,
    left: 0,
  },
  childLayout: {
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  iconinterfacescalendarLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lifeLayout: {
    height: 50,
    width: 312,
    position: "absolute",
  },
  toParentPosition: {
    left: "1.48%",
    width: "120.33%",
  },
  toTypo: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupPosition2: {
    right: "48.52%",
    width: "50%",
    height: "6.48%",
    left: "1.48%",
    position: "absolute",
  },
  groupPosition1: {
    bottom: "1.86%",
    top: "9.3%",
    height: "88.84%",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
  },
  textTypo: {
    color: Color.black03,
    fontFamily: FontFamily.notoSansItalic,
    fontStyle: "italic",
    lineHeight: 24,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    position: "absolute",
  },
  caretdownIconLayout: {
    height: 4,
    width: 6,
    position: "absolute",
  },
  groupPosition: {
    right: "0%",
    position: "absolute",
  },
  groupViewPosition: {
    bottom: "68.34%",
    top: "25.9%",
    width: "15.09%",
    height: "5.75%",
    position: "absolute",
  },
  rectangleParentPosition: {
    top: "54.63%",
    width: "12.54%",
    height: "45.37%",
    bottom: "0%",
    position: "absolute",
  },
  groupLayout: {
    height: 98,
    width: 295,
    position: "absolute",
  },
  profileLayout: {
    height: 22,
    top: 297,
    width: 64,
    position: "absolute",
  },
  profilePosition: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  okPosition: {
    top: 302,
    position: "absolute",
  },
  ok1Typo: {
    height: 17,
    width: 92,
    letterSpacing: -0.3,
    fontSize: FontSize.size_4xs,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
  },
  new: {
    top: 8,
    textAlign: "right",
    right: 0,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    position: "absolute",
  },
  expenses: {
    marginLeft: -22.5,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    fontFamily: FontFamily.uI14Semi,
    textAlign: "center",
    color: Color.black,
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
  },
  back: {
    left: 0,
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
  kpiCompletionProgress1: {
    top: 224,
    fontSize: FontSize.size_6xl,
    width: 317,
    height: 48,
    left: 24,
    position: "absolute",
  },
  searchChild: {
    height: 53,
    width: 446,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    borderRadius: Border.br_31xl,
  },
  searchTaskDocuments: {
    top: 2,
    left: 35,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorGray_200,
    width: 269,
    height: 21,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  iconlylightOutlinesearch: {
    width: "8.04%",
    right: "91.96%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  searchTaskDocumentsActiviParent: {
    top: 14,
    width: 303,
    height: 26,
    left: 38,
    position: "absolute",
  },
  search: {
    top: 142,
    position: "absolute",
  },
  kpiCompletionProgressChild: {
    top: 147,
    backgroundColor: Color.colorGainsboro_300,
    width: 329,
    height: 45,
    left: 24,
  },
  chart3Icon: {
    top: 311,
    left: 28,
    width: 130,
    height: 131,
    position: "absolute",
  },
  lifeContingency: {
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  lifeCont: {
    left: 151,
    top: 371,
  },
  from: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  fromWrapper: {
    top: "19.58%",
    bottom: "74.16%",
    right: "-21.8%",
    left: "1.48%",
    width: "120.33%",
    position: "absolute",
    height: "6.27%",
  },
  groupChild: {
    right: "0%",
    position: "absolute",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  text: {
    height: "54.97%",
    width: "43.33%",
    top: "22.51%",
    left: "13.14%",
  },
  caretdownIcon: {
    top: 7,
    height: 4,
    width: 6,
    left: 38,
  },
  rectangleParent: {
    right: "69.82%",
    width: "30.18%",
    left: "0%",
    position: "absolute",
  },
  caretdownIcon1: {
    left: 41,
    top: 7,
    height: 4,
    width: 6,
  },
  rectangleGroup: {
    right: "36.09%",
    left: "33.73%",
    width: "30.18%",
    position: "absolute",
  },
  groupInner: {
    right: "0%",
    position: "absolute",
    bottom: "1.86%",
    top: "9.3%",
    height: "88.84%",
    left: "0%",
    width: "100%",
  },
  text1: {
    width: "64.12%",
    left: "11.76%",
    top: "0%",
    height: "100%",
  },
  caretdownIcon2: {
    top: 9,
    left: 39,
  },
  rectangleContainer: {
    left: "69.82%",
    width: "30.18%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupContainer: {
    top: "25.24%",
    bottom: "68.28%",
  },
  groupView: {
    right: "27.51%",
    left: "57.4%",
  },
  rectangleParent1: {
    right: "11.24%",
    left: "73.67%",
  },
  iconinterfacescalendar: {
    height: "4.22%",
    width: "4.73%",
    top: "26.2%",
    right: "4.14%",
    bottom: "69.58%",
    left: "91.12%",
  },
  groupParent1: {
    top: "40.96%",
    bottom: "52.56%",
  },
  to: {
    height: "49.41%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  rectangleParent5: {
    right: "40.99%",
    left: "46.47%",
  },
  rectangleParent6: {
    right: "27.46%",
    left: "60%",
  },
  iconinterfacescalendar1: {
    height: "33.25%",
    width: "3.93%",
    top: "61.76%",
    right: "21.56%",
    bottom: "4.99%",
    left: "74.5%",
  },
  toParent: {
    height: "12.68%",
    top: "34.64%",
    bottom: "52.68%",
    right: "-21.8%",
    left: "1.48%",
    width: "120.33%",
    position: "absolute",
  },
  description: {
    left: "1.48%",
    width: "120.33%",
    display: "flex",
    height: "6.27%",
    top: "50%",
  },
  groupChild7: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
  },
  pleaseEnterDescription: {
    height: "13.52%",
    width: "45.56%",
    top: "10.37%",
    left: "1.8%",
  },
  groupParent2: {
    top: 187,
    left: 5,
  },
  profileChild: {
    width: 64,
    borderRadius: Border.br_3xs,
  },
  profileItem: {
    width: 47,
  },
  iconPosition: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    width: 5,
    right: 28,
    top: 15,
    height: 4,
    position: "absolute",
  },
  profile: {
    left: 85,
  },
  profile1: {
    left: 162,
  },
  ok: {
    left: 186,
  },
  cancel: {
    left: 102,
    top: 302,
    position: "absolute",
  },
  iconTrashBin: {
    height: "5.39%",
    width: "5.92%",
    top: "94.58%",
    right: "3.85%",
    bottom: "0.03%",
    left: "90.24%",
  },
  groupParent: {
    left: 14,
    width: 338,
    height: 332,
    top: 371,
    position: "absolute",
  },
  title: {
    fontFamily: FontFamily.notoSansBold,
    lineHeight: 20,
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
  },
  icpc2024Tournament: {
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    color: Color.black,
    flex: 1,
  },
  icpc2024TournamentWrapper: {
    width: 127,
    height: 35,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_3xs,
    marginTop: 8,
  },
  titleParent: {
    marginTop: -33,
    width: "114.13%",
    right: "-19.2%",
    left: "5.07%",
    height: 66,
  },
  kpiCompletionProgress: {
    height: 812,
    width: "100%",
    flex: 1,
    overflow: "hidden",
  },
});

export default KPICompletionProgress2;
