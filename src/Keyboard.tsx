import style from "./Keyboard.module.css";

const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "z",
];

function Keyboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".2rem",
      }}
    >
      {keys.map((k) => (
        <button className={`${style.btn}`} key={k}>
          {k.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
