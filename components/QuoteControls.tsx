import TweetButton from './TweetButton';
import NewButton from './NewButton';

interface Props {
  getNewQuote: () => void;
  quote: string;
  author: string;
}

export default function QuoteControls({ getNewQuote, quote, author }: Props) {
  return (
    <div
      id="controls"
      className="is-flex is-justify-content-space-between my-3"
    >
      <TweetButton quote={quote} author={author} />
      <NewButton onClick={getNewQuote} />
    </div>
  );
}
