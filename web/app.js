import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    // #19bb4f
    render() {
        return (
            <main role="main" className="container">
                <div className="d-flex align-items-center p-3 my-3 bg-sber text-black-50 rounded" >
                    <img className="mr-3" src="bootstrap-outline.svg"
                         alt="" width="48" height="48" />
                        <div className="lh-100">
                            <h6 className="mb-0 text-dark lh-100" >База личных заметок</h6>
                            <small>Copyright (c) 2019 The Bootstrap style</small>
                        </div>
                </div>
                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <form className="form-inline">
                                <button className="btn btn-outline-secondary mr-right-5" type="button">Добавить</button>
                                <button className="btn btn-outline-secondary mr-right-5" type="button">Редактировать</button>
                                <button className="btn btn-sm btn-outline-warning" type="button">Удалить</button>
                            </form>
                            <div className="col"/>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Поиск..."/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Искать</button>
                            </form>
                    </nav>
                </div>
                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Список всех заметок</h6>
                    <div className="media text-muted pt-3">
                        <img alt="32x32" src="high.svg"
                             className="mr-2 rounded" style={{width: "32px", height: "32px"}}
                               data-holder-rendered="true"/>
                        <div className="media-body pb-3 mb-0 small border-bottom">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <strong className="text-gray-dark">Важное</strong>
                                <a href="#">Подробнее</a>
                            </div>
                            <span className="d-block">15 января 2019</span>
                        </div>
                    </div>
                    <small className="d-block text-right mt-3">
                        <a href="#">Обновить</a>
                    </small>
                </div>
            </main>

        );
    }
}

export default App;
