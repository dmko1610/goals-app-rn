import React, {useState} from "react";
import {View, Button, FlatList, StyleSheet} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { ADD_NEW } from "./constants/TextConstants";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalName) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalName,
      },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId),
    );
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title={ADD_NEW} onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
