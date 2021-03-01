import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, AppRegistry } from 'react-native'
import {registerRootComponent} from "expo"
import * as Font from 'expo-font'
import * as shape from 'd3-shape'
import { LineChart, Path } from 'react-native-svg-charts'
import { Line } from 'react-native-svg'

import { Block, Text } from './components'
import * as theme from './theme'
import * as mocks from './mocks'

class App extends Component {
    state = {
        fontsLoaded: false,
    }

    async loadFonts() {
       await Font.loadAsync({
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf')
    })
       this.setState({ fontsLoaded: true })
    }

    

    async componentDidMount() {
        this.loadFonts()
    }

    renderChart() {
        const { chart } = this.props
        const LineShadow = ({ line }) => (
            <Path
                d={line}
                fill='none'
                stroke={theme.colors.primary}
                strokeWidth={7}
                strokeOpacity={0.1}
            />
        )

        return (
            <LineChart
                yMin={0}
                yMax={10}
                curve={shape.curveMonotoneX}
                style={{ flex: 1 }}
                data={chart}
                svg={{
                    stroke: theme.colors.primary,
                    strokeWidth: 1.25
                }}
                contentInset={{ left: theme.sizes.base, right: theme.sizes.base }}
            >
                <LineShadow belowChart={true} />
                <Line
                    key='zero-axis'
                    x1='0%'
                    x2='100%'
                    y1='50%'
                    y2='50%'
                    belowChart={true}
                    stroke={theme.colors.gray}
                    strokeDasharray={[2, 10]}
                    strokeWidth={1}
                />
            </LineChart>
        )
    }

    renderHeader() {
        const { user } = this.props
        return (
            <Block flex={0.5} column style={{ paddingHorizontal: 15 }}>
                <Block flex={false} row style={{ paddingVertical: 15, marginTop: 15 }}>
                    <Block center>
                        {/* Avatar width + margin */}
                        <Text h3 white style={{ marginRight: -(25 + 5) }}>Blood Requests</Text>
                    </Block>
                    <Image style={styles.avatar} source={user.avatar} />
                </Block >
                <Block card shadow color='white' style={styles.headerChart}>
                    <Block row space='between' style={{ paddingHorizontal: 30 }}>
                        <Block flex={false} row center>
                            <Text h1>291</Text>
                            <Text caption bold tertiary style={{ paddingHorizontal: 10 }}>-12%</Text>
                        </Block>
                        <Block flex={false} row center>
                            <Text caption bold primary style={{ paddingHorizontal: 10 }}>+49%</Text>
                            <Text h1>481</Text>
                        </Block>
                    </Block>
                    <Block flex={0.5} row space='between' style={{ paddingHorizontal: 30 }}>
                        <Text caption light>Available</Text>
                        <Text caption light>Requets</Text>
                    </Block>
                    <Block flex={1}>
                        {this.renderChart()}
                    </Block>
                </Block>
            </Block>
        )
    }

    renderRequest(request) {
        return (
            <Block row card shadow color='white' style={styles.request}>
                <Block flex={0.25} card column color='secondary' style={styles.requestStatus}>
                    <Block flex={0.25} middle center color='primary'>
                        <Text small bold white style={{ textTransform: 'uppercase' }}>{request.priority}</Text>
                    </Block>
                    <Block flex={0.7} center middle>
                        <Text h1 white>{request.bloodType}</Text>
                    </Block>
                </Block>
                <Block flex={0.75} column middle>
                    <Text h3 style={{ paddingVertical: 8 }}>{request.name}</Text>
                    <Text caption semibold>
                        {request.age}  •  {request.gender}  •  {request.distance}km  •  {request.time}hrs
                    </Text>
                </Block>
            </Block>
        )

    }

    renderRequests() {
        const { requests } = this.props
        return (
            <Block flex={0.8} column color='gray2' style={styles.requests}>
                <Block flex={false} row space='between' style={styles.requestsHeader}>
                    <Text light>Recent Updates</Text>
                    <TouchableOpacity activeOpacity={0.8} >
                        <Text semibold>View All</Text>
                    </TouchableOpacity>
                </Block>
                <ScrollView >
                    {requests.map(request => (
                        <TouchableOpacity activeOpacity={0.8} key={request.id}>
                            {this.renderRequest(request)}
                        </TouchableOpacity>)
                    )}
                </ScrollView>
            </Block>
        )
    }

    render() {
        if (!this.state.fontsLoaded) {
            console.log("Checking")
            console.log(this.state.fontsLoaded)
            return (
                <Block center middle>
                    {/* <Text>Loading...</Text> */}
                    <ActivityIndicator size="large" color="#D61B1F" />
                </Block>
            )
        }
        return (
            <SafeAreaView style={styles.safe}>
                {this.renderHeader()}
                {this.renderRequests()}
            </SafeAreaView>
        )
    }
}

App.defaultProps = {
    user: mocks.user,
    requests: mocks.requests,
    chart: mocks.chart
}

AppRegistry.registerComponent('main', () => App)

// registerRootComponent(App)
export default App

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    headerChart: {
        paddingTop: 30,
        paddingBottom: 30,
        zIndex: 1
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        marginRight: 5
    },
    requests: {
        marginTop: -55,
        paddingTop: 55 + 20,
        paddingHorizontal: 15,
        zIndex: -1
    },
    requestsHeader: {
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    request: {
        padding: 20,
        marginBottom: 15
    },
    requestStatus: {
        marginRight: 20,
        overflow: 'hidden',
        height: 90,
    },

});
