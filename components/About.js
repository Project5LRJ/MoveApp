//Imports
import { StyleSheet, View, Text } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';
import React from 'react'


const About = () => {
    return (
       // waarin een korte uitleg staat van de app, versienummer en een verwijzing voor help.

       
       <View style={styles.container}>
        <Card style={styles.card}>
                <Card.Content>
                    <Paragraph>
                      <Text>Thanks for using our app. {"\n"}
                        With this app you can do all sorts of exercises. {"\n"}
                        On the bottom of the screen you see four tabs. {"\n"}
                        The first one is for the exercises. {"\n"}
                        The second one is for achievements. {"\n"}
                        The third one is for scanning QR-Code scanner. {"\n"}
                        The last one is the about page.(the page your reading right now)
                      </Text>
                    </Paragraph>
                    
                    <Paragraph>
                    <Text style={[styles.H1, styles.Size]}>Version</Text> {"\n"}
                      <Text style={styles.H1}>0.5.1.5</Text>{"\n"}

                      <Text>For help you can send us an email at lau.kosters@gmail.com {"\n"}
                            For helping us out please leave a tip: paypal.me/laura16727</Text> {"\n"}
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