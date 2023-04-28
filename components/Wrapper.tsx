import Quote from './Quote';
import QuoteControls from './QuoteControls';
import { useEffect } from 'react';

export default function Wrapper({
  isLoading,
  onLoad,
  quote,
  author,
  setQuote,
  setAuthor,
}: {
  isLoading: boolean;
  onLoad: (isLoading: boolean) => void;
  quote: string;
  author: string;
  setQuote: (quote: string) => void;
  setAuthor: (author: string) => void;
}) {
  useEffect(() => {
    if (isLoading) {
      fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
          setQuote(data.content);
          setAuthor(data.author);
          onLoad(false);
        });
    }
  }, [isLoading, onLoad, setQuote, setAuthor]);

  const getNewQuote = () => {
    onLoad(true);
  };

  return (
    <div id="quote-box" className="box container content p-4 mg-md">
      <Quote quote={quote} author={author} />
      <QuoteControls getNewQuote={getNewQuote} quote={quote} author={author} />
    </div>
  );
}
