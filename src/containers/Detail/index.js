import React, { Component } from 'react'
import { Text, TextInput, View, Image, Dimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Icon } from 'react-native-elements'

import styles from '../../styles'

const { width } = Dimensions.get('window')

export default class Detail extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const item = this.props.navigation.getParam('item')
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flex: 1 }}>
                    <Icon onPress={() => this.props.navigation.goBack()} name="ios-arrow-round-back" type="ionicon" size={30} color="#fff" containerStyle={{ zIndex: 1, position: 'absolute', top: 16, left: 16 }} />
                    <Icon name="ios-play" type="ionicon" size={60} color="#fff" containerStyle={{ zIndex: 1, position: 'absolute', top: width * 0.25, left: width * 0.45 }} />
                    <Image source={{ uri: item.image }} style={{ width, height: width * 0.7, resizeMode: 'stretch' }} />
                    <ScrollView style={{ padding: 16 }}>
                        <Text style={styles.subhead} numberOfLines={1}>{item.title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                            <Image source={{ uri: item.avatar }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                            <Text style={[styles.footnote, { flex: 1, marginLeft: 10 }]}>{item.user}</Text>
                            <Icon name="dots-vertical" type="material-community" size={18} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.caption1, { flex: 1, marginLeft: 10, color: 'grey' }]}>236.201 views</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="thumb-up" type="material" size={18} color='grey' containerStyle={{ marginHorizontal: 5 }} />
                                    <Text style={[styles.caption1, { color: 'grey' }]}>12k</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                    <Icon name="thumb-down" type="material" size={18} color='grey' containerStyle={{ marginHorizontal: 5 }} />
                                    <Text style={[styles.caption1, { color: 'grey' }]}>1k</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: 16 }}>
                            <Text style={styles.footnote}>A video prepared for the OECD Meeting of Agriculture Ministers 2016, highlighting some of the challenges and opportunities for the global agriculture sector in the future.</Text>
                        </View>

                        <View>
                            <TextInput
                                placeholder="Your comment"
                                underlineColorAndroid="transparent"
                                style={{ borderBottomWidth: 1, borderColor: '#d9d9d9', padding: 10 }}
                            />
                        </View>

                        <View style={{ marginVertical: 16 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <Image source={{ uri: 'https://yt3.ggpht.com/-qs-uVqWzpUg/AAAAAAAAAAI/AAAAAAAAAAA/qiwPK9mcZWY/s76-c-k-no-mo-rj-c0xffffff/photo.jpg' }} style={{ width: 24, height: 24, borderRadius: 12, marginHorizontal: 8 }} />
                                <View>
                                    <Text style={styles.subhead}>Yusuf ismail Bawas</Text>
                                    <Text style={styles.caption1}>I like farm</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <Image source={{ uri: 'https://yt3.ggpht.com/-rxE6J3JKlEI/AAAAAAAAAAI/AAAAAAAAAAA/vRcUgYJBssY/s76-c-k-no-mo-rj-c0xffffff/photo.jpg' }} style={{ width: 24, height: 24, borderRadius: 12, marginHorizontal: 8 }} />
                                <View>
                                    <Text style={styles.subhead}>Agro Progress</Text>
                                    <Text style={styles.caption1}>good job!</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <Image source={{ uri: 'https://yt3.ggpht.com/-w96zXLXC_Us/AAAAAAAAAAI/AAAAAAAAAAA/hVEWEq9GIy4/s76-c-k-no-mo-rj-c0xffffff/photo.jpg' }} style={{ width: 24, height: 24, borderRadius: 12, marginHorizontal: 8 }} />
                                <View>
                                    <Text style={styles.subhead}>M Noorist</Text>
                                    <Text style={styles.caption1}>I guess in the future we will only eat lettuce.</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <Image source={{ uri: 'https://yt3.ggpht.com/-Nk004AGjKeU/AAAAAAAAAAI/AAAAAAAAAAA/eHq19xgkoYc/s76-c-k-no-mo-rj-c0xffffff/photo.jpg' }} style={{ width: 24, height: 24, borderRadius: 12, marginHorizontal: 8 }} />
                                <View>
                                    <Text style={styles.subhead}>giulia Italy</Text>
                                    <Text style={styles.caption1}>Wowwwww</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <Image source={{ uri: 'https://yt3.ggpht.com/-qs-uVqWzpUg/AAAAAAAAAAI/AAAAAAAAAAA/qiwPK9mcZWY/s76-c-k-no-mo-rj-c0xffffff/photo.jpg' }} style={{ width: 24, height: 24, borderRadius: 12, marginHorizontal: 8 }} />
                                <View>
                                    <Text style={styles.subhead}>Kay</Text>
                                    <Text style={styles.caption1}>may be used in space satellite in the future.</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <Image source={{ uri: 'https://yt3.ggpht.com/-8PFk5osoaqs/AAAAAAAAAAI/AAAAAAAAAAA/CU2FbSRN8FM/s76-c-k-no-mo-rj-c0xffffff/photo.jpg' }} style={{ width: 24, height: 24, borderRadius: 12, marginHorizontal: 8 }} />
                                <View>
                                    <Text style={styles.subhead}>Johann Davel De Beer</Text>
                                    <Text style={styles.caption1}>I just hope after a few years of growing weak plants in bacteria free environments the pollen doesn't get out and kill normal strong outdoor varieties</Text>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </View>

            </SafeAreaView>
        )
    }
}
