import { useState } from "react";

function Todo() {
    // state value to store the input --> ""
    // state value to store the list of todos  --> []

    const [todoText, setTodoText] = useState("");
    const [todoList, setTodoList] = useState(["Walk the dogs"])

    const handleChange = (e) => {
        setTodoText(e.target.value)
    }

    console.log(todoText);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList((arr)=> [...arr, todoText])
        setTodoText("");
        console.log(todoList);
    }

    // add a delete button and an edit button 





    return (
        <div className="bg-dark vh-100">
            <div className="container">
                <h1 className="text-center text-white">Todo App</h1>
                <form onSubmit={handleSubmit}>
                    <label > What Do You Want To Do Today? </label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={todoText}
                            onChange={(e) => handleChange(e)}
                        />
                        <input type="submit" value="Submit" className="btn btn-light p-2 mx-2" />
                    </div>

                </form>
                <div className="my-3">
                    <ul className="list-group">
                        {
                            todoList.map((todo, index) => (
                                <li className="list-group-item list-group-item-dark" key={index}>{todo}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Todo; 