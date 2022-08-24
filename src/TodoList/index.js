import React from "react";

import '../TodoCounter/TodoCounter.css';

function TodoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
