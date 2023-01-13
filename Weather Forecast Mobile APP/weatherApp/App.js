import React, {
    useState,
    useCallback,
    useEffect
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TextInput,
    ActivityIndicator,
    Image
} from 'react-native'

// import Footer from './Components/Footer'
import axios from 'axios'
import img1 from './Components/Images/sun.png'
import img2 from './Components/Images/rainy.png'

export default function App() {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState();
    // const [weather, setWeather] = useState();

    const api = {
        key: 'db8e19b1c79a9a901d442dbe6006ed46',
        baseUrl: 'http://api.openweathermap.org/data/2.5/'


    }

    const fetchDataHandler = useCallback(() => {
        setLoading(true);
        setInput('');
        axios({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`
        })
            .then(res => {
                // console.log(res.data)
                setData(res.data);
            })
            .catch(e => console.dir(e))
            .finally(() => setLoading(false));
    }, [api.key, input]);
    var weather
    const checkSwitch = (x) => {

        if (x > 18) {
            weather = 'Sunny'
        }
        else if (x < 18 && x > 12) {
            weather = 'Rainy'
        }

        else {
            weather = 'Storm'
        }

        console.log(weather)
    }


    return (
        <View style={weather === 'Sunny' ? styles.sun : styles.rain}>



            <ImageBackground  >

                <Text style={{
                    color: 'white',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: 60,
                    marginTop: 60,
                    fontWeight: 'bold'


                }}>Weather</Text>
                <View>
                    <TextInput
                        placeholder='Enter City Name'
                        onChangeText={text => setInput(text)}
                        value={input}
                        placeholderTextColor={'#000'}
                        style={styles.textInput}
                        onSubmitEditing={fetchDataHandler} />

                </View>

                {data && <View style={
                    styles.infoView
                }>


                    <Text style={
                        styles.cityCountryText
                    } > {
                            `${data.name}, ${data.sys.country} `
                        } </Text>

                    <Text style={
                        styles.dateText
                    } > {
                            new Date().toLocaleString()
                        } </Text>

                    <Text style={
                        styles.temp
                    } > {`${Math.round(data.main.temp)}°C`} </Text>
                    <Text style={styles.minMaxText}>{`${Math.round(data.main.temp_min)}/${Math.round(data.main.temp_max)}°C`}
                        {checkSwitch(Math.round(data.main.temp))}
                    </Text>

                    <Image source={weather === 'Sunny' ? img1 : img2} style={{ height: 70, width: 70, marginTop: 15 }} />


                    <Text style={{ color: 'white', fontSize: 20, marginTop: 20 }}>
                        {weather}
                    </Text>


                </View >}

            </ImageBackground >

        </View >
    )

}
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    sun: {
        flex: 1,
        backgroundColor: 'orange'

    },
    rain: {
        flex: 1,
        backgroundColor: '#C4D3DF'

    },



    textInput: {
        borderBottomWidth: 3,
        padding: 5,
        paddingVertical: 20,
        marginVertical: 40,
        marginHorizontal: 10,
        backgroundColor: 'white',
        fontSize: 20,
        borderRadius: 16,
        borderBottomColor: 'df8e00',

    },
    infoView: {
        alignItems: 'center',
    },
    cityCountryText: {
        color: 'fff',
        fontSize: 40,
        fontWeight: 'bold',
    },
    dateText: {
        color: 'white',
        fontSize: 22,
        marginVertical: 10,
    },
    temp: {
        fontSize: 45,
        color: '#fff',
        marginVertical: 10,
    },
    minMaxText: {
        fontSize: 22,
        color: 'white',
        marginVertical: 10,
        fontWeight: '500',
    }
})