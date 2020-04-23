import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <body>
      <QuoteBox />
    </body>
  );
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listQuotes: [
        "Get busy living or get busy dying.",
        "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
        "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
        "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
        "Those who dare to fail miserably can achieve greatly.",
        "I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
        "It is hard to fail, but it is worse never to have tried to succeed.",
      ],
      listAuthor: [
        "– Stephen King",
        "– Mark Caine",
        "– Mark Twain",
        "– Helen Keller",
        "– Audre Lorde",
        "– Eleanor Roosevelt",
        "– David Brinkley",
        "– John F. Kennedy",
        "-Herbert Bayard Swope",
        "– Theodore Roosevelt",
      ],
      randomNumber: Math.floor(Math.random() * 10),
    };
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    this.setState((state) => ({
      randomNumber: Math.floor(Math.random() * 10),
    }));
  }

  render() {
    const randomColor = [
      "lightblue",
      "lightgreen",
      "lightcoral",
      "lightpink",
      "lightgoldenrodyellow",
    ];
    const randomColorDark = [
      "darkblue",
      "darkgreen",
      "coral",
      "pink",
      "goldenrodyellow",
    ];
    const styles1 = {
      "background-color": randomColor[this.state.randomNumber % 5],
    };
    const styles2 = {
      "background-color": randomColorDark[this.state.randomNumber % 5],
    };
    return (
      <div id="quote-box" className="entire-box" style={styles1}>
        <div>
          <div id="text" className="text-div" style={styles2}>
            {this.state.listQuotes[this.state.randomNumber]}
          </div>
          <div id="author" className="author-div" style={styles2}>
            {this.state.listAuthor[this.state.randomNumber]}
          </div>
          <div id="new-quote-div" className="submit-div" style={styles2}>
            <button
              id="new-quote"
              onClick={this.newQuote}
              className="submit-button"
            >
              Click to change
            </button>
          </div>
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            className="tweet-anchor"
          >
            click here to tweet
          </a>
        </div>
      </div>
    );
  }
}

export default App;
