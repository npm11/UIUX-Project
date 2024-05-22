import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Padding, FontSize, Border } from "../GlobalStyles";

const DoneTasks = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.doneTasks}>
      <View style={styles.doneTasksChild} />
      <View style={[styles.doneTasksItem, styles.checkboxShadowBox]} />
      <Pressable
        style={styles.pageHeader}
        onPress={() => navigation.navigate("Activities")}
      >
        <Text style={[styles.filter, styles.filterTypo]} />
        <Text style={styles.toDoLists}>To-do Lists</Text>
        <Image
          style={[styles.iconx, styles.backPosition]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={[styles.back, styles.backPosition]}
          onPress={() => navigation.navigate("Activities")}
        >
          <Text style={styles.back1}>Back</Text>
        </Pressable>
      </Pressable>
      <Image
        style={styles.iosbottomBar5Tabs}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs12.png")}
      />
      <Text style={[styles.doneTask, styles.nameClr]}>2 Done Task</Text>
      <View style={[styles.checkboxParent, styles.checkboxParentPosition]}>
        <View style={[styles.checkbox, styles.checkboxIconLayout]}>
          <View style={styles.checkboxChild} />
        </View>
        <View style={[styles.columnHeader, styles.columnSpaceBlock]}>
          <Text style={[styles.name, styles.nameClr]}>name</Text>
          <Image
            style={[styles.columnSortingIcon, styles.checkboxIconLayout]}
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
            style={[styles.columnSortingIcon, styles.checkboxIconLayout]}
            contentFit="cover"
            source={require("../assets/columnsorting.png")}
          />
        </View>
      </View>
      <View style={[styles.checkboxGroup, styles.checkboxPosition]}>
        <Image
          style={[styles.checkboxIcon, styles.checkboxIconLayout]}
          contentFit="cover"
          source={require("../assets/checkbox.png")}
        />
        <Text style={[styles.task4, styles.task4Typo]}>{`Task 4
`}</Text>
        <Text style={[styles.description4, styles.task4Typo]}>
          Description 4
        </Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={[styles.april82024, styles.april82024Typo]}>
            April 8, 2024 14:00 - 17:00
          </Text>
        </View>
      </View>
      <View style={[styles.checkboxContainer, styles.checkboxPosition]}>
        <Image
          style={[styles.checkboxIcon, styles.checkboxIconLayout]}
          contentFit="cover"
          source={require("../assets/checkbox.png")}
        />
        <Text style={[styles.task4, styles.task4Typo]}>{`Task 5
`}</Text>
        <Text
          style={[styles.description4, styles.task4Typo]}
        >{`Description 5 `}</Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={[styles.april82024, styles.april82024Typo]}>
            April 8, 2024 14:50 - 15:10
          </Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.checkboxPosition]}>
        <Image
          style={[styles.checkboxIcon, styles.checkboxIconLayout]}
          contentFit="cover"
          source={require("../assets/checkbox.png")}
        />
        <Text style={[styles.task4, styles.task4Typo]}>Task 6</Text>
        <Text
          style={[styles.description4, styles.task4Typo]}
        >{`Description 6 `}</Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={[styles.april82024, styles.april82024Typo]}>
            April 8, 2024 15:30 - 15:40
          </Text>
        </View>
      </View>
      <View style={[styles.checkboxParent1, styles.checkboxParentPosition]}>
        <Image
          style={[styles.checkboxIcon, styles.checkboxIconLayout]}
          contentFit="cover"
          source={require("../assets/checkbox.png")}
        />
        <Text style={[styles.task4, styles.task4Typo]}>{`Task 7
`}</Text>
        <Text
          style={[styles.description4, styles.task4Typo]}
        >{`Description 7 `}</Text>
        <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
          <Text style={[styles.april82024, styles.april82024Typo]}>
            April 8, 2024 18:00 - 19:00
          </Text>
        </View>
      </View>
      <Text
        style={[styles.errorMessage, styles.april82024Typo]}
      >{`Use 8 or more characters with a mix of letters, numbers & symbols`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  filterTypo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  backPosition: {
    left: 0,
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
    left: 0,
    position: "absolute",
  },
  checkboxIconLayout: {
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
    left: -1,
    paddingRight: Padding.p_31xl,
    paddingLeft: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    height: 49,
    width: 373,
    position: "absolute",
  },
  task4Typo: {
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
  april82024Typo: {
    display: "flex",
    fontSize: FontSize.uI14Regular_size,
    alignItems: "center",
    textAlign: "left",
  },
  doneTasksChild: {
    right: -1,
    left: -4,
    backgroundColor: Color.colorRoyalblue_100,
    height: 208,
    top: 0,
    position: "absolute",
  },
  doneTasksItem: {
    top: 76,
    shadowColor: "rgba(75, 75, 75, 0.15)",
    shadowRadius: 16,
    elevation: 16,
    borderRadius: Border.br_base,
    width: 376,
    height: 736,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  filter: {
    top: 8,
    color: Color.greenPrimary1,
    textAlign: "right",
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
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
    maxWidth: "100%",
    height: 84,
    right: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  doneTask: {
    top: 122,
    left: 14,
    fontSize: FontSize.bodyTextRegular_size,
    lineHeight: 18,
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
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_9xs,
    width: 16,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  name: {
    fontSize: FontSize.overline_size,
    lineHeight: 16,
    textTransform: "uppercase",
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
    top: 184,
  },
  checkboxIcon: {
    borderRadius: Border.br_9xs,
    width: 16,
    overflow: "hidden",
  },
  task4: {
    width: 56,
  },
  description4: {
    width: 113,
  },
  april82024: {
    fontFamily: FontFamily.uI14Regular,
    color: Color.black,
    width: 93,
  },
  checkboxGroup: {
    top: 241,
  },
  checkboxContainer: {
    top: 302,
  },
  frameView: {
    top: 363,
  },
  checkboxParent1: {
    top: 424,
  },
  errorMessage: {
    top: 463,
    left: -405,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray04,
    width: 295,
    height: 43,
    position: "absolute",
  },
  doneTasks: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default DoneTasks;
