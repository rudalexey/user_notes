import React, {Component} from 'react';
import NoteList from './note/NoteList'
import {isEmpty} from "./main";
import {Button, Modal} from "react-bootstrap";

class App extends Component {

    constructor(props) {
        super(props);
        this.searchEvent = this.searchEvent.bind(this);
        this.addOrEditEvent = this.addOrEditEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.setShow = this.setShow.bind(this);
    }

    state = {
        filter: '',
        notes: [],
        selectNote: {},
        editNote:{},
        modal:{
            show:false,
            add: true
        }
    };

    componentDidMount() {
        this.searchEvent()
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
                                    onClick={()=>this.setShow(true,true)}>Добавить
                            </button>
                            <button
                                className="btn btn-outline-secondary mr-right-5" {...isEmpty(this.state.selectNote) ? {disabled: true} : {}}
                                type="button"
                                onClick={()=>this.setShow(true,false)}>Редактировать
                            </button>
                            <button
                                className="btn btn-sm btn-outline-warning" {...isEmpty(this.state.selectNote) ? {disabled: true} : {}}
                                type="button"
                                onClick={this.deleteEvent}>Удалить
                            </button>
                            <Modal show={this.state.modal.show} onHide={()=>this.setShow(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{this.state.modal.add?'Добавить':"Редактировать" } заметку</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form id="formNoteId">
                                        <div className="form-group">
                                            <label htmlFor="formTitleID">Заголовок</label>
                                            <input type="text" value={this.state.editNote.title} required className="form-control" id="formTitleID"
                                                   onChange={e => {
                                                       this.state.editNote.title=e.target.value;
                                                       this.setState({ editNote:this.state.editNote});
                                                   }}
                                                   placeholder="краткое описание заметки"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formControlSelect1">Важность</label>
                                            <select value={this.state.editNote.importance}
                                                    onChange={e => {
                                                        this.state.editNote.importance=e.target.value;
                                                        this.setState({ editNote:this.state.editNote});
                                                    }}
                                                    required className="form-control" id="formControlSelect1">
                                                <option selected value="low">Низкая</option>
                                                <option value="medium">Средняя</option>
                                                <option value="high">Высокая</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formTextId">Описание заметки</label>
                                            <textarea value={this.state.editNote.text}
                                                      onChange={e => {
                                                          this.state.editNote.text=e.target.value;
                                                          this.setState({ editNote:this.state.editNote});
                                                      }}
                                                      required className="form-control" id="formTextId"
                                                      rows="3"/>
                                        </div>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={()=>this.setShow(false)}>
                                        Закрыть
                                    </Button>
                                    <Button variant="primary" onClick={this.addOrEditEvent}>
                                        Сохранить
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </form>
                        <div className="col"/>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" value={this.state.filter} type="search"
                                   onChange={this.searchEvent} placeholder="Поиск..."/>
                        </form>
                    </nav>
                </div>
                <NoteList notes={this.state.notes} updateData={() => {
                    this.updateData()
                }} select={(note) => {
                    this.setState({selectNote: note})
                }}/>
            </main>

        );
    }

    searchEvent(e) {
        let value = e ? e.target.value : '';
        this.setState({filter: value}, () => this.updateData())

    }

    addOrEditEvent(e) {
        if(isEmpty(this.state.editNote)) return;
        if(isEmpty(this.state.editNote.importance))this.state.editNote.importance='low';
        fetch('addOrEdit', {
            method: 'post',
            body: JSON.stringify(this.state.editNote),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then((data) => {
                let newData=this.state.notes;
                if (this.state.editNote.id) {
                } else {
                    newData.push(data);
                }
                this.setState({notes: newData},()=>this.setShow(false,false));
            })
            .catch(console.log)
    }


    deleteEvent() {
        let id = this.state.selectNote.id;
        console.log("delete", id);
        fetch('delete', {method: 'DELETE', body: id})
            .then(() => {
                this.setState(this.state.notes = this.state.notes.filter((value) => {
                    return value.id !== id;
                }))
            })
            .catch(console.log)
    }

    updateData() {
        fetch('find?filter=' + this.state.filter)
            .then(res => res.json())
            .then((data) => {
                this.setState({notes: data});
            })
            .catch(console.log)
    }

    setShow(show,add) {
        this.state.modal.show=show;
        this.state.modal.add=add;
        if(this.state.modal.add){
            this.setState({modal:this.state.modal,editNote:{}});
        } else {
            this.setState({modal:this.state.modal,editNote:this.state.selectNote});
        }
    }
}

export default App;
