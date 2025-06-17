// constants
const inspirationalQuotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { quote: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
  { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { quote: "Dream bigger. Do bigger.", author: "Unknown" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { quote: "Little things make big days.", author: "Isabel Marant" },
  { quote: "It’s going to be hard, but hard does not mean impossible.", author: "Art Williams" },
  { quote: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
  { quote: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { quote: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { quote: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { quote: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { quote: "Try not to become a man of success, but rather try to become a man of value.", author: "Albert Einstein" },
  { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { quote: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { quote: "I would rather die of passion than of boredom.", author: "Vincent van Gogh" },
  { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { quote: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
  { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Limit your 'always' and your 'nevers.'", author: "Amy Poehler" }
];

// REACT
    // main body declaration
    const MainBody = function() {
        return (
            <div className="container-fluid">
              <Header />
               <QuoteFrame />
              <Footer />
            </div>
        )
    }
    
    // header declaration
    const Header = function() {
      return (
      <div className="row">
          <span className="col-xs-3"></span><h1 className="header col-xs-6">Random Quote Generator</h1><span className="col-xs-3"></span>
      </div>)
    }

    // quote window
    class QuoteFrame extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                currentQuote: inspirationalQuotes[getRandomIndex()].quote,
              currentAuthor: inspirationalQuotes[getRandomIndex()].author
            }
          
          this.handleClick = this.handleClick.bind(this);
        }
    
      
      handleClick() {
        const newIndex = getRandomIndex();
        this.setState({currentQuote: inspirationalQuotes[newIndex].quote,
                     currentAuthor: inspirationalQuotes[newIndex].author})
      }

        render() {
            return (
              <div className="quote-window"><div className="quote-block well"><p>{this.state.currentQuote}</p>
                <p>{this.state.currentAuthor}</p></div>
                <Button handleClick={this.handleClick} />
                </div> // here to inject the <p></p> with the quote, will have to figure it out later
            )
        }
    }

    class Button extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (<div className="row">
                <span className="col-xs-3"/>
                <button className="col-xs-6 btn btn-default btn-primary" onClick={this.props.handleClick}>New Quote!</button>
                <span className="col-xs-3" />
            </div>)
        }
    }

  // footer - with copyright

const Footer = function() {
    return (
      <div className="row">
        <span className="col-xs-3"/>
        <p className="footer col-xs-6">&#169; 2025 kemprze</p>
        <span className="col-xs-3"/>
        </div>
    )
}

const getRandomIndex = () =>  Math.floor(Math.random() * inspirationalQuotes.length);

// logic
// picks a random index between 0 and 49

// REDUX

// LINKING REACT WITH REDUX

// RENDERING
          
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded, starting React render");
  ReactDOM.render(<MainBody />, document.querySelector(".react-elements"));
});

