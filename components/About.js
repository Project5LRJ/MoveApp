//Imports
import { StyleSheet, View, Text } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';
import React from 'react'
import { useTranslation } from 'react-i18next';


const About = () => {
    const { t } = useTranslation();
    return (
       // waarin een korte uitleg staat van de app, versienummer en een verwijzing voor help.

       
       <View style={styles.container}>
        <Card style={styles.card}>
                <Card.Content>
                    <Paragraph>
                      <Text>{t('aboutp1')}
                      </Text>
                    </Paragraph>
                    
                    <Paragraph>
                    <Text style={[styles.H1, styles.Size]}>{t('version')}</Text> {"\n"}
                      <Text style={styles.H1}>0.5.1.5</Text>{"\n"}

                      <Text>{t('aboutp2')}</Text> {"\n"}
                      <Text style={[styles.H1, styles.margintop]}>© 2022 Project5LRJ {"\n"}
                            ® Project5LRJ</Text>
                    </Paragraph>
                </Card.Content>
        </Card>
      </View>
       
    );

  }

  const styles = StyleSheet.create({
    card: {
      elevation: 4,
      marginBottom: 20,
      marginTop: 20,
      marginHorizontal: 20
  },
    Text: {
      textAlign: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    H1: {
      fontWeight: "bold",
      textAlign: 'center',
    },
    Size:{
      fontSize: 20,
    },
})
  
export default About;