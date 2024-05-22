import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Calendar = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.calendar}>
      <Image
        style={styles.calendarChild}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <View style={[styles.calendarItem, styles.calendarLayout]} />
      <View style={[styles.calendarInner, styles.calendarLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.calendarChild1, styles.rectangleViewLayout]} />
      <View style={styles.calendar1}>
        <Image
          style={[styles.backgroundIcon, styles.backgroundIconLayout]}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <View style={[styles.daysOfWeek, styles.calendarrowLayout]}>
          <Text style={[styles.mo, styles.textTypo]}>Mo</Text>
          <Text style={[styles.tu, styles.textTypo]}>Tu</Text>
          <Text style={[styles.we, styles.textTypo]}>We</Text>
          <Text style={[styles.th, styles.textTypo]}>Th</Text>
          <Text style={[styles.fr, styles.textTypo]}>Fr</Text>
          <Text style={[styles.sa, styles.textTypo]}>Sa</Text>
          <Text style={[styles.su, styles.textTypo]}>Su</Text>
        </View>
        <View style={[styles.days, styles.daysPosition]}>
          <View style={[styles.calendarrow01, styles.calendarrowLayout]}>
            <Text style={[styles.text, styles.textTypo]}>29</Text>
            <Text style={[styles.text1, styles.textPosition3]}>30</Text>
            <Text style={[styles.text2, styles.textPosition2]}>31</Text>
            <Text style={[styles.text3, styles.textTypo]}>1</Text>
            <Text style={[styles.text4, styles.textTypo]}>2</Text>
            <Text style={[styles.text5, styles.textTypo]}>3</Text>
            <Text style={[styles.text6, styles.textTypo]}>4</Text>
          </View>
          <View style={[styles.calendarrow02, styles.calendarrowLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>5</Text>
            <Text style={[styles.text8, styles.textPosition3]}>6</Text>
            <Text style={[styles.text9, styles.text9Typo]}>7</Text>
            <Text style={[styles.text10, styles.textTypo]}>8</Text>
            <Pressable
              style={styles.text32Position}
              onPress={() => navigation.navigate("Activities")}
            >
              <Text style={[styles.text11, styles.textTypo]}>9</Text>
            </Pressable>
            <Text style={[styles.text12, styles.textTypo]}>10</Text>
            <Text style={[styles.text13, styles.textTypo]}>11</Text>
          </View>
          <View style={[styles.calendarrow03, styles.calendarrowLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>12</Text>
            <Text style={[styles.text15, styles.textPosition]}>13</Text>
            <Text style={[styles.text16, styles.textTypo]}>14</Text>
            <Text style={[styles.text17, styles.textTypo]}>15</Text>
            <Text style={[styles.text18, styles.textTypo]}>16</Text>
            <Text style={[styles.text19, styles.textTypo]}>17</Text>
            <Text style={[styles.text20, styles.textTypo]}>18</Text>
          </View>
          <View style={[styles.calendarrow04, styles.calendarrowLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>19</Text>
            <Text style={[styles.text22, styles.textPosition]}>20</Text>
            <Text style={[styles.text23, styles.textPosition2]}>21</Text>
            <Text style={[styles.text10, styles.textTypo]}>22</Text>
            <Text style={[styles.text18, styles.textTypo]}>23</Text>
            <Text style={[styles.text26, styles.textTypo]}>24</Text>
            <Text style={[styles.text27, styles.textTypo]}>25</Text>
          </View>
          <View style={[styles.calendarrow05, styles.calendarrowLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>26</Text>
            <Text style={[styles.text29, styles.textTypo]}>27</Text>
            <Text style={[styles.text30, styles.textPosition1]}>28</Text>
            <Text style={[styles.text10, styles.textTypo]}>29</Text>
            <Text style={[styles.text32, styles.text32Position]}>30</Text>
            <Text style={[styles.text33, styles.textTypo]}>31</Text>
            <Text style={[styles.text34, styles.textTypo]}>1</Text>
          </View>
        </View>
        <View style={[styles.calendarItems, styles.daysPosition]}>
          <View style={[styles.datagraphResult, styles.datagraphLayout]}>
            <Text style={[styles.item, styles.backTypo]}>Item</Text>
            <Text style={styles.min}>30min.</Text>
            <View style={styles.divider} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
          </View>
          <View style={[styles.datagraphResult1, styles.datagraphLayout]}>
            <Text style={[styles.item, styles.backTypo]}>Item</Text>
            <Text style={styles.min}>60min.</Text>
            <View style={styles.divider} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon2.png")}
            />
          </View>
          <View style={[styles.datagraphResult2, styles.datagraphLayout]}>
            <Text style={[styles.item, styles.backTypo]}>Item</Text>
            <Text style={styles.min}>30min.</Text>
            <View style={styles.divider} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon3.png")}
            />
          </View>
          <View style={[styles.datagraphResult3, styles.datagraphLayout]}>
            <Text style={[styles.item, styles.backTypo]}>Item</Text>
            <Text style={styles.min}>15min.</Text>
            <View style={styles.divider} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon4.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.month, styles.pageLayout]}>
        <View style={[styles.pageHeaderParent, styles.pageLayout]}>
          <View style={[styles.pageHeader, styles.pageLayout]}>
            <Text style={[styles.next, styles.nextPosition]}>Next</Text>
            <Text style={[styles.march, styles.text9Typo]}>April, 2024</Text>
            <Image
              style={styles.iconx}
              contentFit="cover"
              source={require("../assets/iconx.png")}
            />
            <Text style={[styles.back, styles.backPosition]}>Back</Text>
          </View>
          <Image
            style={[styles.keyboardArrowLeft, styles.pageLayout]}
            contentFit="cover"
            source={require("../assets/keyboard-arrow-left.png")}
          />
          <Image
            style={[styles.keyboardArrowRight, styles.backgroundIconLayout]}
            contentFit="cover"
            source={require("../assets/keyboard-arrow-right.png")}
          />
        </View>
      </View>
      <View style={styles.calendarParent}>
        <Text style={[styles.calendar2, styles.text9Typo]}>Calendar</Text>
        <View style={[styles.nextParent, styles.nextPosition]}>
          <Text style={[styles.next1, styles.nextTypo]}>Next</Text>
          <Pressable
            style={styles.backPosition}
            onPress={() => navigation.navigate("Activities")}
          >
            <Text style={[styles.back2, styles.backTypo]}>Back</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.iosbottomBar5Tabs, styles.backgroundIconLayout]}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarLayout: {
    borderRadius: Border.br_3xs,
    height: 44,
    width: 44,
    position: "absolute",
  },
  rectangleViewLayout: {
    left: 225,
    borderRadius: Border.br_3xs,
    height: 44,
    width: 44,
    position: "absolute",
  },
  backgroundIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  calendarrowLayout: {
    height: 17,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
  },
  daysPosition: {
    left: 16,
    position: "absolute",
  },
  textPosition3: {
    left: 60,
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  textPosition2: {
    left: 120,
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text9Typo: {
    fontFamily: FontFamily.uI14Semi,
    fontWeight: "600",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  textPosition: {
    left: 59,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  textPosition1: {
    left: 119,
    fontSize: FontSize.uI14Regular_size,
  },
  text32Position: {
    left: 222,
    top: 0,
    position: "absolute",
  },
  datagraphLayout: {
    height: 35,
    width: 343,
    left: 0,
    position: "absolute",
  },
  backTypo: {
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  pageLayout: {
    height: 24,
    position: "absolute",
  },
  nextPosition: {
    top: 8,
    right: 0,
    position: "absolute",
  },
  backPosition: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  nextTypo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    textAlign: "right",
  },
  calendarChild: {
    left: 63,
    height: 44,
    width: 44,
    top: 356,
    position: "absolute",
  },
  calendarItem: {
    top: 299,
    left: 122,
    backgroundColor: Color.greenPrimary1,
  },
  calendarInner: {
    left: 276,
    backgroundColor: "#4a92fc",
    top: 356,
  },
  rectangleView: {
    backgroundColor: "#ffc700",
    top: 356,
  },
  calendarChild1: {
    top: 242,
    backgroundColor: "#ff4949",
  },
  backgroundIcon: {
    height: 180,
    left: 0,
    right: 0,
    top: 0,
  },
  mo: {
    marginLeft: -171,
    color: Color.white,
    fontSize: FontSize.uI14Regular_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  tu: {
    marginLeft: -114,
    color: Color.white,
    fontSize: FontSize.uI14Regular_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  we: {
    marginLeft: -61,
    color: Color.white,
    fontSize: FontSize.uI14Regular_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  th: {
    marginLeft: -4,
    color: Color.white,
    fontSize: FontSize.uI14Regular_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  fr: {
    marginLeft: 50,
    color: Color.white,
    fontSize: FontSize.uI14Regular_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  sa: {
    marginLeft: 100,
    color: Color.white,
    fontSize: FontSize.uI14Regular_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  su: {
    marginLeft: 153,
    color: Color.white,
    fontSize: FontSize.uI14Regular_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  daysOfWeek: {
    marginLeft: -171.5,
    top: 149,
    width: 342,
    left: "50%",
  },
  text: {
    color: Color.gray03,
    fontSize: FontSize.uI14Regular_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    color: Color.gray03,
  },
  text2: {
    color: Color.gray03,
  },
  text3: {
    left: 178,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text4: {
    left: 227,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text5: {
    left: 278,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text6: {
    left: 329,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  calendarrow01: {
    width: 338,
    left: 0,
    top: 0,
  },
  text7: {
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text8: {
    color: Color.black,
  },
  text9: {
    color: Color.greenPrimary,
    left: 119,
    fontSize: FontSize.uI14Regular_size,
  },
  text10: {
    left: 172,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text11: {
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
  },
  text12: {
    left: 269,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text13: {
    left: 321,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  calendarrow02: {
    top: 57,
    left: 5,
    width: 335,
  },
  text15: {
    fontFamily: FontFamily.uI14Regular,
  },
  text16: {
    left: 118,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text17: {
    left: 171,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text18: {
    left: 221,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text19: {
    left: 273,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text20: {
    left: 323,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  calendarrow03: {
    top: 114,
    left: 2,
    width: 339,
  },
  text22: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
  },
  text23: {
    color: Color.black,
  },
  text26: {
    left: 272,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text27: {
    left: 324,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  calendarrow04: {
    top: 171,
    left: 1,
    width: 341,
  },
  text29: {
    left: 61,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text30: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
    top: 0,
    position: "absolute",
  },
  text32: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI14Regular_size,
  },
  text33: {
    left: 274,
    color: Color.black,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  text34: {
    left: 330,
    color: Color.gray03,
    fontSize: FontSize.uI14Regular_size,
    top: 0,
    position: "absolute",
  },
  calendarrow05: {
    top: 220,
    width: 337,
    left: 0,
  },
  days: {
    top: 198,
    height: 237,
    width: 342,
  },
  item: {
    left: 32,
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  min: {
    textAlign: "right",
    color: Color.black,
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI14Regular_size,
    right: 0,
    top: 0,
    position: "absolute",
  },
  divider: {
    top: 35,
    borderStyle: "solid",
    borderColor: Color.gray02,
    borderTopWidth: 1,
    height: 1,
    left: 0,
    right: 0,
    position: "absolute",
  },
  icon: {
    top: 2,
    width: 16,
    height: 16,
    left: 0,
    position: "absolute",
  },
  datagraphResult: {
    top: 0,
  },
  datagraphResult1: {
    top: 51,
  },
  datagraphResult2: {
    top: 102,
  },
  datagraphResult3: {
    top: 153,
  },
  calendarItems: {
    top: 462,
    height: 188,
    width: 343,
  },
  calendar1: {
    height: 650,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  next: {
    display: "none",
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    color: Color.greenPrimary,
  },
  march: {
    marginLeft: -51.5,
    fontSize: FontSize.size_xl,
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
  back: {
    marginTop: -10,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    color: Color.greenPrimary,
  },
  pageHeader: {
    marginLeft: -54.5,
    width: 103,
    left: "50%",
    top: 0,
  },
  keyboardArrowLeft: {
    width: 24,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  keyboardArrowRight: {
    height: "100%",
    width: "15.29%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "84.71%",
    maxHeight: "100%",
  },
  pageHeaderParent: {
    marginLeft: -78.5,
    width: 157,
    height: 24,
    left: "50%",
    top: 0,
  },
  month: {
    marginLeft: -77.5,
    top: 106,
    width: 157,
    height: 24,
    left: "50%",
  },
  calendar2: {
    marginLeft: -64.5,
    fontSize: FontSize.uI30Semi_size,
    color: Color.white,
    left: "50%",
  },
  next1: {
    textAlign: "right",
    color: Color.white,
    right: 0,
    top: 0,
    position: "absolute",
  },
  back2: {
    marginTop: -9.5,
    color: Color.white,
  },
  nextParent: {
    height: 19,
    width: 343,
  },
  calendarParent: {
    marginLeft: -172.5,
    top: 60,
    height: 36,
    width: 343,
    left: "50%",
    position: "absolute",
  },
  iosbottomBar5Tabs: {
    bottom: 1,
    height: 84,
    left: 0,
    right: 0,
  },
  calendar: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Calendar;
