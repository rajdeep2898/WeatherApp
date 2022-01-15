import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import {Picker} from '@react-native-picker/picker';

export default function UnitsPicker({unitSystem,setUnitsSystem}) {
    return (
        <View >
            <Picker style={styles.pickerBar}
                mode='dialog'
                itemStyle={{fontStyle:12}}
                selectedValue={unitSystem}
                onValueChange={(item) =>
                    setUnitsSystem(item)
                }
                >
                <Picker.Item label="C°" value="metric" />
                <Picker.Item label="F°" value="imperial" />
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    pickerBar: {
        // position:'absolute',
        ...Platform.select({
            ios: {
                top: -20
            },
            android: {
                top: -100
            }
        }),
        left: 20,
        height: 50,
        width: 100
    }

})