import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useTranslation } from 'react-i18next';

export default function QrScanner({ navigation }) {
    const { t } = useTranslation();

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState(t('not scanned yet'))

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
        navigation.navigate('QrDetails', {
            title: t('qr exercise'),
            description_NL: '',
            description_ENG: data,
        });
    };

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>{t('requesting camera permission')}</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>{t('no access to camera')}</Text>
                <Button title={t('allow Camera')} onPress={() => askForCameraPermission()} />
            </View>)
    }

    // Return the View
    return (
        <View style={styles.container}>
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 400, width: 400 }} />
            </View>
            <Text style={styles.maintext}>{text}</Text>

            {scanned && <Button title={t('scan again')} onPress={() => setScanned(false)} color='tomato' />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    }
});