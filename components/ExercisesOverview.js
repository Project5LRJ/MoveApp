//Imports
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Card, Button } from 'react-native-paper';
import { AppStateContext } from "../AppStateContext";

const ExercisesOverview = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [exercises, setExercises] = useState();

    const appContext = useContext(AppStateContext);

    //Alle Exercises ophalen
    const fetchExercises = async () => {
        try {
            setIsLoading(true);

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
        finally {
            setIsLoading(false);
        }
    }

    //Het item wat per exercies word laten zien
    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Title title={item.title} />
            <Card.Actions>
                <Button style={styles.cardbutton} mode="outlined" onPress={() => navigation.navigate('ExercisesDetails', {
                    //Variables van de exercise doorsturen naar het details scherm
                    id: item.id, title: item.title, description: item.description, description_NL: item.description_NL, description_ENG: item.description_ENG,
                })}>Details</Button>
            </Card.Actions>
        </Card>
    );

    useEffect(() => {
        fetchExercises();
    }, []);

    //Lijst met alle exercises
    return (
        <View>
            <FlatList
                style={{marginTop: 20}}
                data={exercises}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={fetchExercises}
                    />
                }
            />
        </View>
    )
}

export default ExercisesOverview

//Styling
const styles = StyleSheet.create({
    card: {
        elevation: 4,
        marginBottom: 20,
        marginHorizontal: 20
    },
    cardbutton: {
        margin: 5,
        backgroundColor: '#EFEFEF'
    },
})