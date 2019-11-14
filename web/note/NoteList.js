import React from 'react';
import Note from "./Note";

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.updateDate=this.updateDate.bind(this);
    }
    state = {
        selected:{}
    };
    render() {
        return (
            <div className="my-3 p-3 bg-white rounded box-shadow">
                <h6 className="border-bottom border-gray pb-2 mb-0">Список всех заметок</h6>
                {this.props.notes.map((value, index) => {
                    return (
                        <Note note={value} key={value.id} index={index}  />
                    )
                })}
                <small className="d-block text-right mt-3">
                    <a href="#" onClick={this.updateDate}>Обновить</a>
                </small>
            </div>
        );
    }

    updateDate(e) {
        console.log(this)
        console.log(e)
    }
}

export default NoteList;
