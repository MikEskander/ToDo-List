import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [items, setItems] = useState([]);

  function addNote(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <TodoList onAdd={addNote} />
      {items.map((item, index) => {
        return (
          <TodoItem
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
