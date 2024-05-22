import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.notification}>
      <Image
        style={[styles.iosbottomBar5Tabs, styles.frameItemLayout]}
        contentFit="cover"
        source={require("../assets/iosbottom-bar5-tabs14.png")}
      />
      <View style={styles.scroll}>
        <View style={[styles.scrollChild, styles.scrollLayout]} />
        <View style={[styles.scrollItem, styles.scrollLayout]} />
      </View>
      <Text style={[styles.notifications, styles.readLayout]}>
        Notifications
      </Text>
      <Pressable
        style={styles.ellipseParent}
        onPress={() => navigation.navigate("Activities")}
      >
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-60.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/group-22.png")}
        />
        <Text style={[styles.kpiEdu, styles.readTypo]}>KPI EDU</Text>
        <Text
          style={[styles.bnCLch, styles.lchTypo]}
        >{`Bạn có lịch hẹn lúc 8:00 12/04
Lịch dạy D9-401`}</Text>
        <Text style={[styles.pTrc, styles.trcPosition]}>2p trước</Text>
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/ellipse-33.png")}
        />
      </Pressable>
      <Text style={[styles.unread, styles.readTypo]}>Unread</Text>
      <Text style={[styles.read, styles.readTypo]}>Read</Text>
      <Pressable
        style={[styles.ellipseGroup, styles.ellipsePosition]}
        onPress={() => navigation.navigate("Activities")}
      >
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-60.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/group-22.png")}
        />
        <Text style={[styles.kpiEdu, styles.readTypo]}>KPI EDU</Text>
        <Text
          style={[styles.bnCLch1, styles.lchTypo]}
        >{`Bạn có lịch hẹn lúc 8:00 07/04
Lịch dạy D9-401`}</Text>
        <Text style={[styles.ngyTrc, styles.trcPosition]}>5 ngày trước</Text>
      </Pressable>
      <Pressable
        style={[styles.ellipseContainer, styles.ellipsePosition]}
        onPress={() => navigation.navigate("Activities")}
      >
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-60.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/group-22.png")}
        />
        <Text style={[styles.kpiEdu, styles.readTypo]}>KPI EDU</Text>
        <Text
          style={[styles.bnCLch1, styles.lchTypo]}
        >{`Bạn có lịch hẹn lúc 8:00 06/04
Lịch dạy D9-401`}</Text>
        <Text style={[styles.ngyTrc, styles.trcPosition]}>6 ngày trước</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameItemLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  scrollLayout: {
    borderRadius: Border.br_31xl,
    width: 4,
    left: 0,
    position: "absolute",
  },
  readLayout: {
    height: 21,
    width: 154,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansBold,
  },
  readTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  lchTypo: {
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.size_3xs,
    top: "41.94%",
    height: "29.03%",
    textAlign: "left",
    left: "27.49%",
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  trcPosition: {
    top: "70.97%",
    width: "38.67%",
    height: "13.98%",
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    left: "27.49%",
    position: "absolute",
  },
  ellipsePosition: {
    left: 21,
    height: 93,
    width: 331,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  iosbottomBar5Tabs: {
    right: 0,
    bottom: 1,
    height: 84,
    left: 0,
    maxWidth: "100%",
  },
  scrollChild: {
    top: 0,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 525,
  },
  scrollItem: {
    top: 96,
    backgroundColor: Color.colorRoyalblue_100,
    height: 176,
  },
  scroll: {
    top: 240,
    left: 371,
    height: 525,
    width: 4,
    position: "absolute",
  },
  notifications: {
    top: 59,
    left: 101,
    textAlign: "center",
    justifyContent: "center",
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    width: 154,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansBold,
    position: "absolute",
  },
  frameChild: {
    top: 13,
    left: 13,
    width: 66,
    height: 66,
    position: "absolute",
  },
  frameItem: {
    height: "37.53%",
    width: "9.03%",
    top: "31.18%",
    right: "81.6%",
    bottom: "31.29%",
    left: "9.37%",
    maxHeight: "100%",
  },
  kpiEdu: {
    height: "23.66%",
    width: "38.55%",
    top: "12.9%",
    fontFamily: FontFamily.interBold,
    left: "27.49%",
    textAlign: "left",
  },
  bnCLch: {
    width: "59.82%",
  },
  pTrc: {
    color: "#3475ff",
  },
  frameInner: {
    top: 39,
    left: 297,
    width: 9,
    height: 9,
    position: "absolute",
  },
  ellipseParent: {
    top: 158,
    left: 22,
    height: 93,
    width: 331,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  unread: {
    top: 121,
    left: 33,
    height: 21,
    width: 154,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansBold,
    textAlign: "left",
  },
  read: {
    top: 273,
    left: 35,
    height: 21,
    width: 154,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansBold,
    textAlign: "left",
  },
  bnCLch1: {
    width: "56.5%",
  },
  ngyTrc: {
    color: Color.gray03,
  },
  ellipseGroup: {
    top: 317,
  },
  ellipseContainer: {
    top: 419,
  },
  notification: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Notification1;
