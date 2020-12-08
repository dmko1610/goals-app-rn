import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import PropTypes from "prop-types";
import { COURSE_GOAL, CANCEL, ADD } from "./../constants/TextConstants";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={COURSE_GOAL}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={CANCEL} color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title={ADD} onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

GoalInput.propTypes = {
  onCancel: PropTypes.func,
  onAddGoal: PropTypes.func,
  visible: PropTypes.bool,
};

export default GoalInput;
