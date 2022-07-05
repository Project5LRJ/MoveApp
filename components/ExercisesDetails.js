//Imports
import { StyleSheet, ScrollView } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';
import React from 'react'
import { useTranslation } from 'react-i18next';

const ExercisesDetails = ({ route }) => {
    const { t, i18n } = useTranslation();

    //Doorgestuurde variables ophalen
    const { title_NL, title_ENG, description_NL, description_ENG } = route.params;

    //Het detail scherm
    if (i18n.language == 'nl') {
        return (
            <ScrollView>
                <Card style={styles.card}>
                    <Card.Title title={title_NL} />
                    <Card.Content>
                        <Paragraph>{description_NL}</Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
        );
    } else {
        return (
            <ScrollView>
                <Card style={styles.card}>
                    <Card.Title title={title_ENG} />
                    <Card.Content>
                        <Paragraph>{description_ENG}</Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
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