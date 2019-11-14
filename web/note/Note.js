import React from 'react'
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

const imp = {
    low: {
        text: "низкая",
        img: "low.svg",
        class: ""
    },
    medium: {
        text: "средняя",
        img: "medium.svg",
        class: ""
    },
    high: {
        text: "высокая",
        img: "high.svg",
        class: ""
    }
};

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }
    state= {
        isSelect:false
    }
    handleClick(e) {
        this.setState({isSelect:!this.state.isSelect})
    }

    render() {
        return (
            <div className="media text-muted pt-3 note" onClick={this.handleClick}>
                <img alt={this.props.note.importance} src={imp[this.props.note.importance].img}
                     title={imp[this.props.note.importance].text}
                     className="mr-2 rounded" style={{width: "32px", height: "32px"}}
                     data-holder-rendered="true"/>
                <div className="media-body pb-3 mb-0 small border-bottom">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <strong className="text-gray-dark">{this.props.note.title}</strong>
                        <OverlayTrigger trigger="hover" placement="left" overlay={(
                            <Popover id="popover-basic">
                                <Popover.Title as="h3">{this.props.note.title}</Popover.Title>
                                <Popover.Content>{this.props.note.text}</Popover.Content>
                            </Popover>
                        )}>
                            <Button variant="link">Подробнее</Button>
                        </OverlayTrigger>
                    </div>
                    <span className="d-block">{this.props.note.dateCreate}</span>
                </div>
            </div>
        )
    }
}

export default Note;
