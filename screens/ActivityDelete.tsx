import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, Padding, FontSize } from "../GlobalStyles";

const ActivityDelete = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.activityDelete}>
      <View style={styles.activityDeleteChild} />
      <View style={styles.activityDeleteItem} />
      <View style={styles.pageHeader}>
        <Text style={[styles.filter, styles.tasksTypo]} />
        <Text style={styles.toDoLists}>To-do Lists</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
      </View>
      <Image
        style={[styles.iosbottomBar5Tabs, styles.cocoboldaddIconLayout]}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs11.png")}
      />
      <Text style={[styles.tasks, styles.nameFlexBox]}>4 Tasks</Text>
      <View style={[styles.button, styles.buttonShadowBox]}>
        <Image
          style={[styles.trashFilledIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/trashfilled.png")}
        />
      </View>
      <View style={[styles.checkboxParent, styles.checkboxParentPosition]}>
        <View style={[styles.checkbox, styles.checkboxShadowBox]}>
          <View style={styles.checkboxChild} />
        </View>
        <View style={[styles.columnHeader, styles.columnSpaceBlock]}>
          <Text style={[styles.name, styles.nameFlexBox]}>name</Text>
          <Image
            style={[styles.columnSortingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/columnsorting.png")}
          />
        </View>
        <View style={[styles.columnHeader1, styles.columnSpaceBlock]}>
          <Text style={[styles.name, styles.nameFlexBox]}>description</Text>
        </View>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={[styles.name, styles.nameFlexBox]}>Time</Text>
          <Image
            style={[styles.columnSortingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/columnsorting.png")}
          />
        </View>
      </View>
      <View style={[styles.checkboxGroup, styles.frameViewPosition]}>
        <View style={[styles.checkbox1, styles.checkboxShadowBox]} />
        <Text style={[styles.task1, styles.task1Typo]}>{`Task 1
`}</Text>
        <Text style={[styles.description1, styles.task1Typo]}>
          Description 1
        </Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={styles.april82024}>April 8, 2024 14:00 - 17:00</Text>
        </View>
      </View>
      <View style={[styles.checkboxContainer, styles.checkboxParentPosition]}>
        <View style={[styles.checkbox2, styles.checkboxShadowBox]} />
        <Text style={[styles.task1, styles.task1Typo]}>{`Task 2
`}</Text>
        <Text
          style={[styles.description1, styles.task1Typo]}
        >{`Description2 `}</Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={styles.april82024}>April 8, 2024 14:50 - 15:10</Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View style={[styles.checkbox3, styles.checkboxShadowBox]} />
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
        <View style={[styles.checkbox4, styles.checkboxShadowBox]} />
        <Text style={[styles.task1, styles.task1Typo]}>{`Task 4
`}</Text>
        <Text
          style={[styles.description1, styles.task1Typo]}
        >{`Description4 `}</Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={styles.april82024}>April 8, 2024 18:00 - 19:00</Text>
        </View>
      </View>
      <Image
        style={styles.activityDeleteInner}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Pressable
        style={[styles.button1, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("DoneTasks")}
      >
        <Image
          style={[styles.addIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/add.png")}
        />
        <Text style={styles.doneTasks}>Done tasks</Text>
      </Pressable>
      <Image
        style={[styles.cocoboldaddIcon, styles.cocoboldaddIconLayout]}
        contentFit="cover"
        source={require("../assets/cocoboldadd.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tasksTypo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  cocoboldaddIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nameFlexBox: {
    textAlign: "left",
    color: Color.gray700,
    letterSpacing: 0.4,
  },
  buttonShadowBox: {
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_7xs,
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  checkboxParentPosition: {
    paddingRight: Padding.p_31xl,
    paddingLeft: Padding.p_3xs,
    height: 49,
    width: 373,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  checkboxShadowBox: {
    borderRadius: Border.br_9xs,
    height: 16,
    width: 16,
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: "hidden",
  },
  columnSpaceBlock: {
    marginLeft: 25,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  frameViewPosition: {
    left: -1,
    paddingRight: Padding.p_31xl,
    paddingLeft: Padding.p_3xs,
    height: 49,
    width: 373,
    alignItems: "center",
    flexDirection: "row",
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
  activityDeleteChild: {
    right: -1,
    left: -4,
    backgroundColor: Color.colorRoyalblue_100,
    height: 94,
    top: 0,
    position: "absolute",
  },
  activityDeleteItem: {
    top: 76,
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
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  filter: {
    top: 8,
    fontSize: FontSize.uI16Semi_size,
    color: Color.greenPrimary1,
    textAlign: "right",
    right: 0,
  },
  toDoLists: {
    marginLeft: -80.5,
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
  pageHeader: {
    top: 27,
    right: 12,
    left: 20,
    height: 36,
    position: "absolute",
  },
  iosbottomBar5Tabs: {
    bottom: 1,
    height: 84,
    right: 0,
    left: 0,
  },
  tasks: {
    top: 122,
    left: 14,
    fontSize: FontSize.bodyTextRegular_size,
    lineHeight: 18,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  trashFilledIcon: {
    overflow: "hidden",
  },
  button: {
    top: 312,
    left: 9,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
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
    shadowColor: "rgba(0, 0, 0, 0.14)",
  },
  name: {
    fontSize: FontSize.overline_size,
    lineHeight: 16,
    textTransform: "uppercase",
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    color: Color.gray700,
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
    top: 184,
    left: 0,
  },
  checkbox1: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
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
    color: Color.black,
    display: "flex",
    width: 93,
    fontSize: FontSize.uI14Regular_size,
    alignItems: "center",
    textAlign: "left",
  },
  checkboxGroup: {
    top: 241,
  },
  checkbox2: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
  },
  checkboxContainer: {
    top: 302,
    left: 58,
  },
  checkbox3: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
  },
  frameView: {
    top: 363,
  },
  checkbox4: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
  },
  checkboxParent1: {
    top: 424,
    left: 0,
  },
  activityDeleteInner: {
    top: 115,
    left: 306,
    width: 31,
    height: 31,
    position: "absolute",
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
  button1: {
    top: 675,
    right: 13,
    backgroundColor: Color.colorRoyalblue_300,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_7xs,
    shadowColor: "rgba(0, 0, 0, 0.14)",
  },
  cocoboldaddIcon: {
    height: "6.03%",
    width: "12.8%",
    top: "13.05%",
    right: "4.53%",
    bottom: "80.91%",
    left: "82.67%",
    maxHeight: "100%",
  },
  activityDelete: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ActivityDelete;
