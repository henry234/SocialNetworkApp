import React, { Component } from 'react'
import { Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Icon } from 'react-native-elements'

import styles from '../../styles'

export default class Home extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        topVideos: [
            {
                id: 1,
                title: 'The Future of Agriculture',
                user: 'Trade and Agriculture',
                avatar: 'https://yt3.ggpht.com/a-/AN66SAycF28zsHICy6RIDZgJXylEwqVB1NWrruv_xg=s288-mo-c-c0xffffffff-rj-k-no',
                image: 'https://img.youtube.com/vi/uAM4Si_WhDk/maxresdefault.jpg'
            },
            {
                id: 2,
                title: 'A Trip Around the World Travel Film',
                user: 'North Designs',
                avatar: 'https://yt3.ggpht.com/a-/AN66SAwSzQ1ERhZs1djs4txrg1ruvF_OCN3yH_Ee8Q=s176-mo-c-c0xffffffff-rj-k-no',
                image: 'https://img.youtube.com/vi/RcmrbNRK-jY/maxresdefault.jpg'
            }
        ],
        topArticles: [
            {
                id: 1,
                title: 'Sweet & Chili Peppers',
                user: 'Trade and Agriculture',
                avatar: 'https://yt3.ggpht.com/a-/AN66SAycF28zsHICy6RIDZgJXylEwqVB1NWrruv_xg=s288-mo-c-c0xffffffff-rj-k-no',
                image: 'https://img.youtube.com/vi/B3U5oYgXUIc/mqdefault.jpg'
            },
            {
                id: 2,
                title: 'Smart Farming - Agriculture in the Desert',
                user: 'Trade and Agriculture',
                avatar: 'https://yt3.ggpht.com/a-/AN66SAycF28zsHICy6RIDZgJXylEwqVB1NWrruv_xg=s288-mo-c-c0xffffffff-rj-k-no',
                image: 'https://img.youtube.com/vi/GjJv0IFENv4/mqdefault.jpg'
            },
            {
                id: 3,
                title: 'This Farm of the Future Uses No Soil and 95% Less Water',
                user: 'Trade and Agriculture',
                avatar: 'https://yt3.ggpht.com/a-/AN66SAycF28zsHICy6RIDZgJXylEwqVB1NWrruv_xg=s288-mo-c-c0xffffffff-rj-k-no',
                image: 'https://img.youtube.com/vi/-_tvJtUHnmU/maxresdefault.jpg'
            },
            {
                id: 4,
                title: 'Agricultural Wonder Drone',
                user: 'Trade and Agriculture',
                avatar: 'https://yt3.ggpht.com/a-/AN66SAycF28zsHICy6RIDZgJXylEwqVB1NWrruv_xg=s288-mo-c-c0xffffffff-rj-k-no',
                image: 'https://img.youtube.com/vi/P2YPG8PO9JU/maxresdefault.jpg'
            },
            {
                id: 5,
                title: 'Grow Hydroponic Tomatoes',
                user: 'Trade and Agriculture',
                avatar: 'https://yt3.ggpht.com/a-/AN66SAycF28zsHICy6RIDZgJXylEwqVB1NWrruv_xg=s288-mo-c-c0xffffffff-rj-k-no',
                image: 'https://img.youtube.com/vi/jhEZpT2T-DQ/mqdefault.jpg'
            },
            {
                id: 6,
                title: 'Nepali Agriculture Training Program in Israel',
                user: 'Trade and Agriculture',
                avatar: 'https://yt3.ggpht.com/a-/AN66SAycF28zsHICy6RIDZgJXylEwqVB1NWrruv_xg=s288-mo-c-c0xffffffff-rj-k-no',
                image: 'https://img.youtube.com/vi/heMt_JJxR6k/mqdefault.jpg'
            }
        ]
    }

    goDetail = (item) => () => {
        this.props.navigation.navigate('Detail', { item })
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={this.goDetail(item)} style={{ flex: 1, borderRadius: 8, backgroundColor: '#eee', marginHorizontal: 8, marginBottom: 16 }}>
                <Image source={{ uri: item.image }} style={{ height: 120, borderRadius: 8 }} />
                <View style={{ padding: 16 }}>
                    <Text style={styles.subhead} numberOfLines={1}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const { topVideos, topArticles } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                        <Text style={styles.title1}>Feed</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="plus" type="feather" size={25} containerStyle={{ marginHorizontal: 8 }} />
                            <Icon name="search" type="feather" size={20} containerStyle={{ marginHorizontal: 8 }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 0.5, borderColor: '#d9d9d9' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.body}>Newest</Text>
                            <Icon name="ios-arrow-down" type="ionicon" size={18} containerStyle={{ marginLeft: 10 }} />
                        </View>
                        <Icon name="list" type="feather" size={25} containerStyle={{ marginHorizontal: 8 }} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, marginTop: 8 }}>
                        <Text style={styles.subhead}>Top videos</Text>
                        <Text style={[styles.subhead, { color: '#0B95DE' }]}>View all</Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: 260, paddingLeft: 16 }}>
                        {
                            topVideos.map(i => (
                                <TouchableOpacity key={i.id} onPress={this.goDetail(i)} style={{ borderRadius: 8, width: 250, backgroundColor: '#eee', marginRight: 16 }}>
                                    <Image source={{ uri: i.image }} style={{ width: 250, height: 170, borderRadius: 8 }} />
                                    <View style={{ padding: 16 }}>
                                        <Text style={styles.subhead} numberOfLines={1}>{i.title}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                            <Image source={{ uri: i.avatar }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                                            <Text style={[styles.footnote, { flex: 1, marginLeft: 10 }]}>{i.user}</Text>
                                            <Icon name="dots-vertical" type="material-community" size={18} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>

                    <View style={{ padding: 16, marginTop: 8 }}>
                        <Text style={styles.subhead}>Top article</Text>
                    </View>

                    <FlatList
                        style={{ flex: 1, paddingHorizontal: 8 }}
                        data={topArticles}
                        renderItem={this.renderItem}
                        keyExtractor={i => i.id}
                        numColumns={2}

                    />

                </ScrollView>

            </SafeAreaView>
        )
    }
}

