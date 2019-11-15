import React from 'react';
import Note from "./Note";

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.selectNote = this.selectNote.bind(this);
    }

    state = {
        selected: {}
    };

    render() {
        return (
            <div className="my-3 p-3 bg-white rounded box-shadow">
                <h6 className="border-bottom border-gray pb-2 mb-0">Список всех заметок</h6>
                {this.props.notes.map((value, index) => {
                    return (
                        <Note note={value} key={value.id} index={index} isSelect={this.state.selected&&value.id === this.state.selected.id}
                              selectNote={this.selectNote}/>
                    )
                })}
                <small className="d-block text-right mt-3">
                    <a href="#" onClick={this.props.updateData}>Обновить</a>
                </small>
            </div>
        );
    }

    selectNote(note) {
        if (note.id === this.state.selected.id) {
            this.setState({selected: {}});
            this.props.select({});
        } else {
            this.setState({selected: note});
            this.props.select(note);
        }
    }

}

export default NoteList;
