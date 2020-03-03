import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'

/**
 * Display a line of todo
 */
export default class Todo extends Component {
    state = {
        finished: false
    }
    toggleFinish = () => {
        this.setState({
            finished: !this.state.finished
        })
    }
    render() {
        const { todo } = this.props
        const { finished } = this.state
        const textDecorationLine = finished ? 'line-through' : 'none'
        return (
            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 16 }} onPress={this.toggleFinish}>
                <Text style={{ color: '#2196F3', fontSize: 24, textDecorationLine }}>{todo}</Text>
            </TouchableOpacity>
        )
    }
}