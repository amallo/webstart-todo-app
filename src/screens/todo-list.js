import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AddTodoModal from "../components/add-todo-modal"
import Todo from "../components/todo"

// It's a good practise to declare this constants
const Status = {
    HIDDEN: 'hidden',
    VISIBLE: 'visible'
}

export default class TodoList extends Component {
    // This is the initial state of my todolist
    state = {
        todos: [],
        status: Status.HIDDEN // status can be 'hidden' or 'visible
    }
    requestAddTodo = () => {
        this.setState({
            status: Status.VISIBLE
        })
    }
    renderTodo = (todo, index) => {

        // Don't forget the "key" property !!

        const content = `${index + 1}-${todo}`
        return (
            <Todo todo={content} key={`todo${index}`} />
        )
    }
    submitTodo = (todo) => {
        this.setState({
            status: Status.HIDDEN,
            todos: [...this.state.todos, todo]
        })
    }
    cancelTodo = () => {
        this.setState({
            status: Status.HIDDEN
        })
    }
    render() {
        const { todos, status } = this.state
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.addTodo} onPress={this.requestAddTodo} >
                    <Text>Nouvelle tâche</Text>
                </TouchableOpacity>
                <ScrollView scrollEnabled={true} contentContainerStyle={styles.todoListContainer} style={styles.scrollView}>
                    {todos.map(this.renderTodo)}
                </ScrollView>
                <AddTodoModal visible={status === Status.VISIBLE} onSubmit={this.submitTodo} onCancel={this.cancelTodo} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    container: {
        flex: 1, backgroundColor: 'white', padding: 16
    },
    todoListContainer: {
        marginTop: 16,
        flexGrow: 1, backgroundColor: 'white'
    },
    addTodo: { borderColor: 'gray', borderWidth: 1, alignItems: 'center', padding: 16, justifyContent: 'center', backgroundColor: 'white' }
})