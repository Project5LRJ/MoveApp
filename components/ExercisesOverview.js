//Imports
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Card, Button } from 'react-native-paper';
import { AppStateContext } from "../AppStateContext";
import { useTranslation } from 'react-i18next';
import { apiGlobals } from '../globals';

const ExercisesOverview = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const { apiBase } = apiGlobals;

    const [isLoading, setIsLoading] = useState(true);
    const [exercises, setExercises] = useState();

    const appContext = useContext(AppStateContext);

    //Alle Exercises ophalen
    const fetchExercises = async () => {
        try {
            setIsLoading(true);

            const response = await fetch(`${apiBase}exercises`, {
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
    const renderItem = ({ item }) => {
        if (i18n.language == 'nl') {
            return (
                <Card style={styles.card}>
                    <Card.Title title={item.title_NL} />
                    <Card.Actions>
                        <Button style={styles.cardbutton} mode="outlined" onPress={() => navigation.navigate('ExercisesDetails', {
                            //Variables van de exercise doorsturen naar het details scherm
                            id: item.id, title_NL: item.title_NL, title_ENG: item.title_ENG, description_NL: item.description_NL, description_ENG: item.description_ENG,
                        })}>Details</Button>
                    </Card.Actions>
                </Card>
            )
        } else {
            return (
                <Card style={styles.card}>
                    <Card.Title title={item.title_ENG} />
                    <Card.Actions>
                        <Button style={styles.cardbutton} mode="outlined" onPress={() => navigation.navigate('ExercisesDetails', {
                            //Variables van de exercise doorsturen naar het details scherm
                            id: item.id, title_NL: item.title_NL, title_ENG: item.title_ENG, description_NL: item.description_NL, description_ENG: item.description_ENG,
                        })}>Details</Button>
                    </Card.Actions>
                </Card>
            )
        }
    };

    useEffect(() => {
        fetchExercises();
    }, []);

    //Lijst met alle exercises
    return (
        <View>
            <FlatList
                style={{ marginTop: 20 }}
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