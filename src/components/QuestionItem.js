import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(event) {
    fetch(`http://localhost:4000/questions/${event.target.id}`, {
      method: "DELETE"
    })
    .then(respo => respo.json())
    .then((question) => console.log(question))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button id={id} onClick={handleDelete} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
