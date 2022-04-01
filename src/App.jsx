import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState(["fefe", "grr"]);
  const [completeTodo, setCompleteTodo] = useState(["jjj"]);
  const [giveupTodo, setGiveupTodo] = useState(["continue"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickCompleteButton = (index, todo) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
    const newCompleteTodo = [...completeTodo, todo];
    setCompleteTodo(newCompleteTodo);
  };

  const onClickDeleteButton = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
  };
  const onClickBackButton = (index, todo) => {
    const newTodo = [...completeTodo];
    newTodo.splice(index, 1);
    setCompleteTodo(newTodo);
    const newIncompleteTodo = [...incompleteTodo, todo];
    setIncompleteTodo(newIncompleteTodo);
  };
  const onClickgiveupButton = (index, todo) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
    const newGiveupTodo = [...giveupTodo, todo];
    setGiveupTodo(newGiveupTodo);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="todoAdd">
        <input
          placeholder="TODOを追加"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incompleteArea">
        <p>未完了のTODO</p>
        <ul>
          <li>
            {incompleteTodo.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickCompleteButton(index, todo)}>
                    完了
                  </button>
                  <button onClick={() => onClickDeleteButton(index, todo)}>
                    削除
                  </button>
                  <button
                    onClick={() => onClickgiveupButton(index, todo)}
                    className="giveupButton"
                  >
                    諦める
                  </button>
                </div>
              );
            })}
          </li>
        </ul>
      </div>

      <div className="complete-area">
        <p>完了したTODO</p>
        <ul>
          <li>
            {completeTodo.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickBackButton(index, todo)}>
                    戻す
                  </button>
                </div>
              );
            })}
          </li>
        </ul>
      </div>

      <div className="giveup-area">
        <p>諦めたwwwwww</p>
        <ul>
          <li>
            {giveupTodo.map((todo, index) => {
              return (
                <div className="list-row" key={todo}>
                  <li>{todo}</li>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
};
