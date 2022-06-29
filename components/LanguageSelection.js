import { StyleSheet, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import '../assets/lang/i18n';
import React, { useState } from 'react'
import {useTranslation} from 'react-i18next';

const LanguageSelection = () => {
    const {t, i18n} = useTranslation();

    const languages = [
        { label: t('english'), value: 'en' },
        { label: t('dutch'), value: 'nl' },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                data={languages}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select language"
                value={selectedLanguage}
                onChange={(item) => {
                    i18n
                    .changeLanguage(item.value)
                    .then(() => setSelectedLanguage(item.value))
                    .catch(err => console.log(err));
                    }
                }
            />    
        </View>
    )
}

export default LanguageSelection

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    dropdown: {
        marginTop: 20,
        height: 50,
        backgroundColor: '#E3E3E3',
        borderRadius: 12,
        padding: 12,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 5,
      }
})