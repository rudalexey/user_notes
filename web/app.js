import React, {Component} from 'react';
import NoteList from './note/NoteList'

class App extends Component {

    constructor(props) {
        super(props);
        this.searchEvent = this.searchEvent.bind(this);
        this.addOrEditEvent = this.addOrEditEvent.bind(this);
    }

    state = {
        filter: '',
        notes: []
    };

    componentDidMount() {
        fetch('find')
            .then(res => res.json())
            .then((data) => {
                this.setState({notes: data})
            })
            .catch(console.log)
    }

    render() {

        return (
            <main role="main" className="container">
                <div className="d-flex align-items-center p-3 my-3 bg-sber text-black-50 rounded">
                    <img className="mr-3" src="bootstrap-outline.svg"
                         alt="" width="48" height="48"/>
                    <div className="lh-100">
                        <h6 className="mb-0 text-dark lh-100">База личных заметок</h6>
                        <small>Copyright (c) 2019 The Bootstrap style</small>
                    </div>
                </div>
                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <form className="form-inline">
                            <button className="btn btn-outline-secondary mr-right-5" type="button"
                                    onClick={this.addOrEditEvent}>Добавить
                            </button>
                            <button className="btn btn-outline-secondary mr-right-5" disabled type="button"
                                    onClick={this.addOrEditEvent}>Редактировать
                            </button>
                            <button className="btn btn-sm btn-outline-warning" disabled type="button"
                                    onClick={this.deleteEvent}>Удалить
                            </button>
                        </form>
                        <div className="col"/>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" value={this.state.filter} type="search"
                                   onChange={this.searchEvent} placeholder="Поиск..."/>
                        </form>
                    </nav>
                </div>
                <NoteList notes={this.state.notes}/>

            </main>

        );
    }

    searchEvent(e) {
        this.setState({filter: e.target.value});
        fetch('find?filter=' + e.target.value)
            .then(res => res.json())
            .then((data) => {
                this.setState({notes: data});
            })
            .catch(console.log)
    }

    addOrEditEvent(e) {
        console.log("add", e);
        let note = {
            importance: "low",
            title: "Test",
            text: "test2222"
        };
        fetch('addOrEdit', {
            method: 'post',
            body: JSON.stringify(note),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then((data) => {
                let newData;
                if (note.id) {

                } else {
                    newData = this.state.notes.add(data);
                }
                this.setState({notes: newData});
            })
            .catch(console.log)
    }


    deleteEvent(e) {
        console.log("delete", e);
        fetch('delete', {method: 'DELETE', body: e.id})
            .then(res => res.json())
            .then((data) => {
                delete this.state.data[e.id]
                // this.setState({ notes: data });
            })
            .catch(console.log)
    }
}

export default App;
