// components/LanguageSelector.tsx

import * as React from "react";
import { Text, StyleSheet, View, Pressable, Modal, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const LanguageSelector = () => {
    const [languageModalVisible, setLanguageModalVisible] = React.useState(false);
    const [selectedLanguage, setSelectedLanguage] = React.useState("Languages");

    const toggleLanguageModal = () => {
        setLanguageModalVisible(!languageModalVisible);
    };

    const selectLanguage = (language: string) => {
        setSelectedLanguage(language);
        setLanguageModalVisible(false);
    };

    return (
        <>
            <Pressable style={styles.languageSelector} onPress={toggleLanguageModal}>
                <Text style={styles.languages}>{selectedLanguage}</Text>
                <Image
                    style={styles.keyboardArrowDown}
                    contentFit="cover"
                    source={require("../assets/keyboard-arrow-down.png")}
                />
            </Pressable>
            <Modal
                transparent={true}
                visible={languageModalVisible}
                onRequestClose={toggleLanguageModal}
            >
                <TouchableOpacity style={styles.modalOverlay} onPress={toggleLanguageModal}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => selectLanguage("Vietnamese")}
                        >
                            <Text style={styles.modalOptionText}>Vietnamese</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => selectLanguage("English")}
                        >
                            <Text style={styles.modalOptionText}>English</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => selectLanguage("Japanese")}
                        >
                            <Text style={styles.modalOptionText}>Japanese</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    languageSelector: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    languages: {
        fontSize: 12,
        color: Color.colorDimgray_100,
        textAlign: "center",
        fontFamily: FontFamily.uI14Semi,
        fontWeight: "700",
        marginRight: 0,
        marginLeft: 15,
    },
    keyboardArrowDown: {
        width: 16,
        height: 16,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        width: 200,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
    },
    modalOption: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    modalOptionText: {
        fontSize: FontSize.uI16Semi_size,
        fontFamily: FontFamily.uI14Semi,
        textAlign: "center",
    },
});

export default LanguageSelector;
