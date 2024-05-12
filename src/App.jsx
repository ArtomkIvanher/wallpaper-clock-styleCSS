import "./App.css";

function App() {
  return (
    <div className="box">
      <div className="box__content">
        <p className="main">
          <span className="comp"> let</span> clock
          <span className="comp"> =</span>
          <span className="bracket"> &#123;</span>
        </p>
        <p>
          hour:
          <span className="num"> 2</span>,
        </p>
        <p>
          minute:
          <span className="num"> 14</span>,
        </p>
        <p>
          second:
          <span className="num"> 21</span>,
        </p>
        <p>
          period: <span className="str"> "AM"</span>,
        </p>
        <p>
          day:
          <span className="num"> 9</span>,
        </p>
        <p>
          month:
          <span className="str"> "May"</span>,
        </p>
        <p>
          year:
          <span className="num"> 2024</span>
        </p>
        <p className="main">
          <span className="bracket"> &#125;</span>;
        </p>
      </div>
    </div>
  );
}

export default App;
