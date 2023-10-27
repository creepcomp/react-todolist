import React from "react";

const App = () => {
    const [list, setList] = React.useState([]);
    const [input, setInput] = React.useState("");

    const insert = e => {
        const _list = [...list];
        _list.push(input);
        setList(_list);
    }

    const remove = index => {
        const _list = [...list];
        _list.splice(index, 1);
        setList(_list);
    }

    const changeHandler = e => {
        setInput(e.target.value);
    }

    return (
        <div className="bg-light rounded shadow col-lg-4 mx-lg-auto m-1 p-1">
            <h1 className="text-center p-4">React TodoList</h1>
            {list.map((item, index) => (
                <div className="d-flex bg-primary rounded m-1">
                    <span className="btn bg-light m-1">{index + 1}</span>
                    <span className="btn bg-light w-100 m-1">{item}</span>
                    <button className="btn btn-danger m-1" onClick={e => remove(index)}><i className="fa-solid fa-xmark"></i></button>
                </div>
            ))}
            <div className="d-flex">
                <input className="form-control m-1" type="text" placeholder="Add Item .." value={input} onChange={changeHandler} />
                <button className="btn btn-success m-1" onClick={insert}><i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )
}

export default App
