//Imports
import { StyleSheet, View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';
import React from 'react'
import { useTranslation } from 'react-i18next';


const ExercisesDetails = ({ route }) => {

    const { t, i18n } = useTranslation();

    //Doorgestuurde variables ophalen
    const { title, description_NL, description_ENG } = route.params;

    //Het detail scherm
    if (i18n.language == 'nl') {
        return (
            <View>
                <Card style={styles.card}>
                    <Card.Title title={title} />
                    <Card.Content>
                        <Paragraph>{description_NL}</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        );
    } else {
        return (
            <View>
                <Card style={styles.card}>
                    <Card.Title title={title} />
                    <Card.Content>
                        <Paragraph>{description_ENG}</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        );
    }
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