//Imports
import { StyleSheet, View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';
import React from 'react'

const ExercisesDetails = ({ route }) => {

    //Doorgestuurde variables ophalen
    const { title, description_NL, description_ENG } = route.params;

    //Het detail scherm
    return (
        <View>
            <Card style={styles.card}>
                <Card.Title title={title} />
                <Card.Content>
                    <Paragraph>{description_ENG}</Paragraph>
                </Card.Content>
            </Card>
        </View>
    )
}

export default ExercisesDetails

//Styling
const styles = StyleSheet.create({
    card: {
        elevation: 4,
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 20
    },
})