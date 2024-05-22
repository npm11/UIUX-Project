import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Activities = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.activities}>
      <View style={styles.activitiesChild} />
      <Pressable
        style={styles.activitiesItem}
        onPress={() => navigation.navigate("ActivityDelete")}
      />
      <Image
        style={styles.cocoboldaddIcon}
        contentFit="cover"
        source={require("../assets/cocoboldadd.png")}
      />
      <View style={[styles.pageHeader, styles.pageLayout]}>
        <Text style={[styles.filter, styles.newPosition]} />
        <Text style={[styles.toDoLists, styles.expensesTypo]}>To-do Lists</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
      </View>
      <Image
        style={styles.iosbottomBar5Tabs}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs10.png")}
      />
      <Text style={[styles.tasks, styles.nameClr]}>4 Tasks</Text>
      <View style={[styles.checkboxParent, styles.checkboxParentPosition]}>
        <View style={[styles.checkbox, styles.iconLayout]}>
          <View style={styles.checkboxChild} />
        </View>
        <View style={[styles.columnHeader, styles.columnSpaceBlock]}>
          <Text style={[styles.name, styles.nameClr]}>name</Text>
          <Image
            style={[styles.columnSortingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/columnsorting.png")}
          />
        </View>
        <View style={[styles.columnHeader1, styles.columnSpaceBlock]}>
          <Text style={[styles.name, styles.nameClr]}>description</Text>
        </View>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={[styles.name, styles.nameClr]}>Time</Text>
          <Image
            style={[styles.columnSortingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/columnsorting.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.checkboxGroup, styles.checkboxPosition]}
        onPress={() => navigation.navigate("DetailTask")}
      >
        <View style={styles.checkboxShadowBox} />
        <Text style={[styles.task1, styles.task1Typo]}>{`Task 1
`}</Text>
        <Text style={[styles.description1, styles.task1Typo]}>
          Description 1
        </Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={styles.april82024}>April 8, 2024 14:00 - 17:00</Text>
        </View>
      </Pressable>
      <View style={[styles.checkboxContainer, styles.checkboxPosition]}>
        <View style={styles.checkboxShadowBox} />
        <Text style={[styles.task1, styles.task1Typo]}>{`Task 2
`}</Text>
        <Text
          style={[styles.description1, styles.task1Typo]}
        >{`Description2 `}</Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={styles.april82024}>April 8, 2024 14:50 - 15:10</Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.checkboxPosition]}>
        <View style={styles.checkboxShadowBox} />
        <Text style={[styles.task1, styles.task1Typo]}>{`Task 3
`}</Text>
        <Text
          style={[styles.description1, styles.task1Typo]}
        >{`Description3 `}</Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={styles.april82024}>April 8, 2024 15:30 - 15:40</Text>
        </View>
      </View>
      <View style={[styles.checkboxParent1, styles.checkboxParentPosition]}>
        <View style={styles.checkboxShadowBox} />
        <Text style={[styles.task1, styles.task1Typo]}>{`Task 4
`}</Text>
        <Text
          style={[styles.description1, styles.task1Typo]}
        >{`Description4 `}</Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={styles.april82024}>April 8, 2024 18:00 - 19:00</Text>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("DoneTasks")}
      >
        <Image
          style={[styles.addIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/add.png")}
        />
        <Text style={styles.doneTasks}>Done tasks</Text>
      </Pressable>
      <Pressable
        style={[styles.pageHeader1, styles.pageLayout]}
        onPress={() => navigation.navigate("KPICompletionProgress2")}
      >
        <Text style={[styles.new, styles.newTypo]}>Next</Text>
        <Text style={[styles.expenses, styles.expensesTypo]}>Today</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={[styles.back, styles.newTypo]}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pageLayout: {
    height: 36,
    position: "absolute",
  },
  newPosition: {
    textAlign: "right",
    top: 8,
    right: 0,
  },
  expensesTypo: {
    textAlign: "center",
    fontSize: FontSize.uI30Semi_size,
    left: "50%",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  nameClr: {
    color: Color.gray700,
    letterSpacing: 0.4,
    textAlign: "left",
  },
  checkboxParentPosition: {
    paddingRight: Padding.p_31xl,
    paddingLeft: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    height: 49,
    width: 373,
    left: 7,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  columnSpaceBlock: {
    marginLeft: 25,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  checkboxPosition: {
    left: 6,
    paddingRight: Padding.p_31xl,
    paddingLeft: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    height: 49,
    width: 373,
    position: "absolute",
  },
  task1Typo: {
    height: 19,
    color: Color.gray900,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontSize: FontSize.uI14Regular_size,
    marginLeft: 25,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
  },
  newTypo: {
    color: Color.colorRoyalblue_100,
    display: "none",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    position: "absolute",
  },
  activitiesChild: {
    right: -1,
    left: -4,
    backgroundColor: Color.colorRoyalblue_100,
    height: 208,
    top: 0,
    position: "absolute",
  },
  activitiesItem: {
    top: 76,
    left: 1,
    shadowColor: "rgba(75, 75, 75, 0.15)",
    shadowRadius: 16,
    elevation: 16,
    borderRadius: Border.br_base,
    width: 376,
    height: 736,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  cocoboldaddIcon: {
    height: "6.03%",
    width: "12.8%",
    top: "13.18%",
    right: "4.53%",
    bottom: "80.79%",
    left: "82.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  filter: {
    color: Color.greenPrimary1,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
    fontSize: FontSize.uI16Semi_size,
    textAlign: "right",
    top: 8,
  },
  toDoLists: {
    marginLeft: -80.5,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.uI30Semi_size,
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
  pageHeader: {
    top: 27,
    right: 12,
    left: 20,
  },
  iosbottomBar5Tabs: {
    bottom: 1,
    height: 84,
    left: 0,
    right: 0,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tasks: {
    top: 122,
    left: 14,
    fontSize: FontSize.bodyTextRegular_size,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  checkboxChild: {
    height: "12.5%",
    width: "62.5%",
    top: "43.75%",
    right: "18.75%",
    bottom: "43.75%",
    left: "18.75%",
    borderRadius: Border.br_12xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  checkbox: {
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_9xs,
    width: 16,
    elevation: 1,
    shadowRadius: 1,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: "hidden",
  },
  name: {
    fontSize: FontSize.overline_size,
    lineHeight: 16,
    textTransform: "uppercase",
    textAlign: "left",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    letterSpacing: 0.4,
  },
  columnSortingIcon: {
    marginLeft: 2,
  },
  columnHeader: {
    height: 33,
    width: 56,
  },
  columnHeader1: {
    height: 37,
    width: 113,
  },
  columnHeader2: {
    width: 45,
  },
  checkboxParent: {
    top: 185,
  },
  checkboxShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  task1: {
    width: 56,
  },
  description1: {
    width: 113,
  },
  april82024: {
    fontFamily: FontFamily.uI14Regular,
    display: "flex",
    width: 93,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    alignItems: "center",
    textAlign: "left",
  },
  checkboxGroup: {
    top: 242,
  },
  checkboxContainer: {
    top: 303,
  },
  frameView: {
    top: 364,
  },
  checkboxParent1: {
    top: 425,
  },
  addIcon: {
    display: "none",
    overflow: "hidden",
  },
  doneTasks: {
    marginLeft: 8,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontSize: FontSize.uI14Regular_size,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
  },
  button: {
    top: 678,
    right: 16,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorRoyalblue_300,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_7xs,
    elevation: 1,
    shadowRadius: 1,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
    overflow: "hidden",
  },
  new: {
    textAlign: "right",
    top: 8,
    right: 0,
    color: Color.colorRoyalblue_100,
  },
  expenses: {
    marginLeft: -42.5,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.uI30Semi_size,
    left: "50%",
  },
  back: {
    marginTop: -10,
    top: "50%",
    textAlign: "left",
    left: 0,
  },
  pageHeader1: {
    top: 113,
    right: 19,
    left: 13,
  },
  activities: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Activities;
