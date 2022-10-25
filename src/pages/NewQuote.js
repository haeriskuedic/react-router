import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.replace("/quotes") // .push() for not allowing user to go back
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
