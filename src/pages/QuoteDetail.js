import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Haris Gee", text: "Learning react is fun" },
  { id: "q2", author: "Peter Müller", text: "Learning react is great!" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        {/* path={`/quotes/${params.quoteId}`} */}
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            {/* to={`/quotes/${params.quoteId}/comments`} */}
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        {/* path={`/quotes/${params.quoteId}/comments`} */}
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
