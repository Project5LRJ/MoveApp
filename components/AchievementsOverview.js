import { StyleSheet, View, FlatList, RefreshControl } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Card, Paragraph, Button } from 'react-native-paper';
import { AppStateContext } from "../AppStateContext";

const AchievementsOverview = ({ navigation, props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [achievements, setAchievements] = useState();

  const appContext = useContext(AppStateContext);

  const fetchAchievements = async () => {
    try {
      setIsLoading(true);
      //Doe login API call
      const response = await fetch('http://10.0.2.2:8000/api/user/achievements', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: appContext.appState.accessToken,
          'Content-Type': 'application/json'
        },
      })
      //Haal json op
      const json = await response.json();
      setAchievements(json);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false);
    }
  }

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title title={item.title} />
      <Card.Content>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button style={{ margin: 5 }} mode="contained">Edit</Button>
      </Card.Actions>
    </Card>
  );

  useEffect(() => {
    fetchAchievements();
  }, []);

  return (
    <View>
      <FlatList
        data={achievements}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{ marginTop: 20 }}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchAchievements}
          />
        }
      />
    </View>
  )
}

export default AchievementsOverview

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    marginHorizontal: 20
  }
})