const head = (
  <div
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const body = (
  <div
    style={{
      height: "90px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);

const leftArm = (
  <div
    style={{
      height: "10px",
      width: "70px",
      background: "black",
      position: "absolute",
      top: "130px",
      right: "-5px",
      transform: "rotate(45deg)",
    }}
  />
);
const rightArm = (
  <div
    style={{
      height: "10px",
      width: "70px",
      background: "black",
      position: "absolute",
      top: "130px",
      right: "-55px",
      transform: "rotate(-45deg)",
    }}
  />
);
const leftLeg = (
  <div
    style={{
      height: "10px",
      width: "75px",
      background: "black",
      position: "absolute",
      top: "228px",
      right: "-60px",
      transform: "rotate(45deg)",
    }}
  />
);
const rightLeg = (
  <div
    style={{
      height: "10px",
      width: "75px",
      background: "black",
      position: "absolute",
      top: "228px",
      right: "-5px",
      transform: "rotate(-45deg)",
    }}
  />
);

const bodyParts = [head, body, leftArm, rightArm, leftLeg, rightLeg];

interface HandManDrawingProps {
  numberOfGuesses: number;
}

function HangManDrawing({ numberOfGuesses }: HandManDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {bodyParts.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
          position: "absolute",
          top: "0px",
          right: "0px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "180px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "350px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}

export default HangManDrawing;
