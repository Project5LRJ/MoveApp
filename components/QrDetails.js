//Imports
import { StyleSheet, View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';
import React from 'react'

const QrDetails = ({ route }) => {

    //Doorgestuurde variables ophalen
    const { id, title, description_NL, description_ENG } = route.params;

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

export default QrDetails

//Styling
const styles = StyleSheet.create({
    card: {
        elevation: 4,
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 20
    },
})