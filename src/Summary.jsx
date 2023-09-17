const summaryData = [
  {
    id: 1,
    category: "Reaction",
    score: 80,
    icon: "icon-reaction.svg",
  },
  {
    id: 2,
    category: "Memory",
    score: 92,
    icon: "icon-memory.svg",
  },
  {
    id: 3,
    category: "Verbal",
    score: 61,
    icon: "icon-verbal.svg",
  },
  {
    id: 4,
    category: "Visual",
    score: 72,
    icon: "icon-visual.svg",
  },
];

function Summary() {
  return (
    <div className="summary">
      <h2 className="summary__heading">Summary</h2>

      <div className="summary__content">
        <ul className="summary__list">
          {summaryData.map((i) => (
            <li key={i.id} className={`summary__item summary__item--${i.id}`}>
              <img
                src={i.icon}
                alt="Summary Heading Icon"
                className="summary__item-img"
              />
              <h3 className="summary__item-heading">{i.category}</h3>
              <span className="summary__item-score">
                {i.score} &nbsp;
                <span className="summary__item-score-of">/ 100</span>
              </span>
            </li>
          ))}
        </ul>

        <button className="btn">Continue</button>
      </div>
    </div>
  );
}

export default Summary;
