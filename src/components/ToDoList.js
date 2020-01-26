import React from 'react';
import styled from "styled-components";

const ButtonAction = styled.span`
    margin-left: 15px;

    :hover {
        color: red;
        text-decoration: underline;
    }
`;

class ToDolist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: '',
            itemEdit: '',
            toDoList: [],
            status: 'add'
        }
    }

    handleChange = (e) => {
        this.setState({ item: e.target.value })
    }

    addItem = () => {
        const { toDoList, item, itemEdit ,status } = this.state;
        // let newLists = [];
        if (item !== "" && item !== null) {
            if (status === 'add') {
                // newLists = toDoList.concat(item);
                this.setState({
                    // toDoList: [...newLists],
                    toDoList: [...toDoList, item],
                    item: ''
                })
            }
            if (status === 'edit') {
                const res = toDoList.filter(i => i !== itemEdit);
                this.setState({ 
                    toDoList: [...res, item], 
                    item: '', 
                    status : 'add' 
                });
            }
        }
    }

    deleteItem = (itemDelete) => {
        const { toDoList } = this.state;
        const res = toDoList.filter(item => item !== itemDelete);
        this.setState({ toDoList: res })
    }

    editItem = (value) => {
        this.setState({ 
            item: value, 
            itemEdit: value, 
            status: 'edit' 
        })
    }

    render() {
        return (
            <div>
                <h3>Todo Lists</h3>
                <div>
                    <input onChange={this.handleChange} value={this.state.item} />
                    <button onClick={this.addItem}>Add</button>
                </div>
                <div>
                    <ul>
                        {this.state.toDoList.length > 0
                            ? this.state.toDoList.map((item, index) => (
                                <li key={index}>
                                    <span>{item}</span>
                                    <ButtonAction onClick={() => this.editItem(item)}>Edit</ButtonAction>
                                    <ButtonAction onClick={() => this.deleteItem(item)}>Delete</ButtonAction>
                                </li>
                            ))
                            : null}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDolist;