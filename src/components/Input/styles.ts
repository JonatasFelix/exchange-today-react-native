import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 26,
        marginBottom: 20,
    },

    text: {
        fontSize: 20,
        color: "#FFF",
        position: "absolute",
        left: 0,
        right: 0,
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
        letterSpacing: 2,
    }
});