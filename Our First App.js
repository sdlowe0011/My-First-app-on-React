import "./styles.css";
import React, {useState} from "react";
// These are the components
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

export default function App() {
  const [language, setLanguage] = useState('ru');
  const [text, setText] = useState('');
  return (
    <div>
      <Field label ="Enter English" onChange={setText} value={text}/>
      <Languages language={language} onLanguageChange={setLanguage}/>
      {/* this puts in the line btwn languafe and output */}
      <hr />
      <Translate text={text} language={language}/>
    </div>
  );
}