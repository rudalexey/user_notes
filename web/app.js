import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {

        return (
            <div>
                <h1>Note List</h1>
            </div>
        );
    }
}

export default App;
