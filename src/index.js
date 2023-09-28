import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photo="./profile.jpg" photoName="Profile picture" />
      <div className="data">
        <Intro name="Seun Sarumi" info="Front-end web developer and Gamer" />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar " src={props.photo} alt={props.photoName} />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p> {props.info}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="Javascript" emoji="💪" color="yellow" />
      <Skill skill="Git and Github" emoji="💪" color="blue" />
      <Skill skill="React" emoji="💪" color="#123456" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill} {props.emoji}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
