import { StyleSheet, View, Text } from 'react-native'
import React, { useState, useEffect, useContext } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { AppStateContext } from "../AppStateContext";

const AchievementsEdit = ({ route }) => {
  const [title, setTitle] = useState(route.params.title);
  const [description, setDescription] = useState(route.params.description);
  const [exerciseId, setExerciseId] = useState(route.params.exercise_id);
  const [exercises, setExercises] = useState();
  const [isFocus, setIsFocus] = useState(false);

  const appContext = useContext(AppStateContext);

  //Alle Exercises ophalen
  const fetchExercises = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/api/exercises', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      })
      const json = await response.json();
      setExercises(json);
    }
    catch (error) {
      console.error(error);
    }
  }

  const saveAchievement = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:8000/api/achievements/${route.params.id}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          Authorization: appContext.appState.accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          description: description,
          exercise_id: exerciseId
        })
      })
      const json = await response.json();
      setTitle(json.title);
      setDescription(json.description);
      setExerciseId(json.exercise_id);
    }
    catch (error) {
      console.error(error);
    }
  } 

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={(value) => { setTitle(value) }} />
      <TextInput style={styles.inputmultiline} placeholder="Description" value={description} multiline={true} numberOfLines={5} onChangeText={(value) => { setDescription(value) }} />
      <Dropdown
        style={styles.dropdown}
        data={exercises}
        maxHeight={300}
        labelField="title"
        valueField="id"
        placeholder="Select exercises"
        search
        searchPlaceholder="Search..."
        value={exerciseId}
        onChange={item => {
          setExerciseId(item.id);
        }}
      />

      <Button mode="contained" style={styles.button} onPress={() => saveAchievement()}>
        Save
      </Button>
    </View>
  )
}

export default AchievementsEdit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 45,
    margin: 10,
  },
  inputmultiline: {
    width: '90%',
    margin: 10,
    textAlignVertical: 'top'
  },
  button: {
    margin: 10,
    width: '90%'
  },
  dropdown: {
    height: 50,
    backgroundColor: '#E3E3E3',
    borderRadius: 12,
    padding: 12,
    margin: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },  
})