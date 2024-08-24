import QuestionTime from "./QuestionTime";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <>
      <Header
        company={"Pepsales"}
        subheading={"First Call"}
        questionNo={7}
        totalQuestion={10}
      />
      <Header
        company={"Confluence"}
        subheading={"Demo Call"}
        questionNo={3}
        totalQuestion={12}
      />
      <QuestionTime inTime={1} dangerTime={1} />
    </>
  );
}

export default App;
