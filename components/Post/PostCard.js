import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {HeartSvg, CommentSvg, EyeSvg} from "../../assets/SvgIcons"

export default function PostCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatar}>
          <Image
            source={require("../../assets/avatar.gif")}
            style={styles.avatarImage}
          />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>
            Sayantan Chandra
          </Text>
          <Text style={styles.lastSeen}>1 hour ago</Text>
        </View>
      </View>

      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.postImage}
      />

      <View style={styles.captionContainer}>
        <Text style={styles.description}>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem {"\n"}ipsum has been the industry's standard {"\n"}
          dummy text ever since...
          <Text style={styles.innerText}>Continue reading</Text>
        </Text>
      </View>
      <View style={{height: 1, backgroundColor: "#eaeaea", marginHorizontal: 14}}></View>

      <View style={[styles.row, styles.iconsContainer, {paddingTop: 0}]}>

        <View style={styles.row}>
          <HeartSvg color="#E31B23" size={20}/>
          <Text
            style={{
              fontFamily: "poppins-regular",
              color: "#E31B23",
              marginLeft: 4,
            }}
          >
          1
          </Text>
        </View>
        <View style={styles.row}>
          <CommentSvg color="#BDBDBD" size={18}/>
          <Text style={styles.count}>0</Text>
        </View>
        <View style={{ flexGrow: 1 }} />
        
        <View style={styles.row}>
          <EyeSvg color="#BDBDBD" size={22}/>
          <Text style={styles.count}>Views (10)</Text>
        </View>
      </View>
    </View>
  );
}

const spacing = 4;
const avatarSize = 40;
const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eaeaea",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing,
    paddingTop: 10,
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    overflow: "hidden",
    marginHorizontal: 6,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  userInfoContainer: {
    paddingLeft: spacing,
    flexGrow: 1,
  },
  userName: {
    fontSize: 18,
    fontFamily: "poppins-medium",
    marginBottom: -4,
    color: "#0890D4",
  },
  lastSeen: {
    fontSize: 14,
    color: "#aaa",
    fontFamily: "poppins-medium",
  },
  description: {
    fontSize: 14,
    color: "#7B7C7C",
    fontFamily: "poppins-medium",
    padding: 10,
  },
  innerText: {
    fontSize: 14,
    color: "#e6492d",
    fontFamily: "poppins-medium",
  },
  postImage: {
    width: "100%",
    height: 270,
    marginTop: 8,
  },

  captionContainer: {
    padding: spacing,
  },

  iconsContainer: {
    paddingHorizontal: 10
  },

  count: {
    marginRight: spacing,
    color: "#aaa",
    fontFamily: "poppins-medium",
    marginLeft: 4,
    fontSize: 15
  },
});
