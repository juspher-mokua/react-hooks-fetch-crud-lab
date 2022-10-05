import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then((questions) => {
      setQuestion(questions)
    })
    .catch((err) => console.log(err));
    
  },[questions]);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {
        questions.map((question) => <QuestionItem key={question.id} question={question} /> )
      }

      </ul>
    </section>
  );
}

export default QuestionList;
