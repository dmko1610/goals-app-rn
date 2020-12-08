import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const GoalItem = (props) => (
  <TouchableOpacity onPress={() => props.onDelete(props.id)}>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 30,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
  },
});

GoalItem.propTypes = {
  title: PropTypes.title,
  onDelete: PropTypes.func,
  id: PropTypes.id,
};

export default GoalItem;
