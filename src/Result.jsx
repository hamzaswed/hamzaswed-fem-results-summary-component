export default function Result() {
  return (
    <div className="result">
      <h2 className="result__heading">Your Result</h2>
      <div className="result__circle">
        <span className="result__number">76</span>
        <span className="result__of-number">of 100</span>
      </div>
      <h1 className="result__result-heading">Great</h1>
      <p className="result__result-text">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
