import React, { Component } from 'react'
import { Modal, TextInput, View, Button, StyleSheet } from 'react-native'
import * as colors from "../assets/colors"

const styles = StyleSheet.create({
    content: { margin: 16 },
    footer: { flexDirection: 'row', marginTop: 4, justifyContent: 'space-between' }
})

/**
 * This is the modal to add a new todo
 */
export default class AddTodo extends Component {
    state = {
        todo: null
    }
    setTodo = (todo) => {
        this.setState({
            todo
        })
    }
    submit = () => {
        const { todo } = this.state
        const { onSubmit } = this.props
        if (onSubmit) {
            onSubmit(todo)
        }
    }
    cancel = () => {
        const { onCancel } = this.props
        if (onCancel) {
            onCancel()
        }
    }
    render() {
        const { visible } = this.props
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
                onRequestClose={() => { }}>
                <View style={styles.content}>
                    <TextInput
                        style={{ borderWidth: 0 }}
                        placeholder={'Entrez ici la description de votre tâche'}
                        onChangeText={this.setTodo}></TextInput>
                    <View style={styles.footer}>
                        <Button title={'Annuler'} onPress={this.cancel} color={colors.secondary} />
                        <Button title={'Valider'} onPress={this.submit} color={colors.primary} />
                    </View>
                </View>
            </Modal>
        )
    }
}
