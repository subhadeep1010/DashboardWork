import React from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import {AudioSvg, PhotographSvg, VideoCameraSvg, GoogleDocsSvg, GoogleSheetsSvg} from "../assets/SvgIcons"

export default function CreatePost() {
  return (
    <View style={styles.createPostContainer}>
      <View style={styles.row}>
        <View style={styles.avatar}>
          <Image
            source={require("../assets/avatar.gif")}
            style={styles.avatarImage}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Create a new post"
            style={{
              fontFamily: "poppins-medium",
              marginLeft: 20,
              fontSize: 16,
              color: "#BDBDBD"
            }}
          />
        </View>
      </View>

      <View style={[styles.row, styles.iconsContainer]}>
        
        <PhotographSvg color="#3c3c3c" size={22}/>
        
        <VideoCameraSvg color="#3c3c3c" size={22} />
        
        <AudioSvg color="#5b5c5c" size={20}/>
        
        <GoogleDocsSvg color="#5b5c5c" size={20}/>
        
        <GoogleSheetsSvg color="#5b5c5c" size={20}/>
      </View>
    </View>
  );
}

const spacing = 4;
const avatarSize = 40;
const styles = StyleSheet.create({
  createPostContainer: {
    backgroundColor: "#f6f9fc",
    paddingVertical: 16,
    paddingHorizontal: spacing * 3,
    marginVertical: 16,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#EBEDf2',
    borderBottomWidth: 0,
    shadowColor: '#212121',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#EBEDf2",
    paddingTop: 10,
    paddingHorizontal: 4,
    justifyContent: "space-between"
  },
  inputContainer: {
    paddingLeft: spacing,
    flexGrow: 1,
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
});
