import TweetButton from './TweetButton';
import NewButton, { NewButtonProps } from './NewButton';

interface Props extends NewButtonProps {
  getNewQuote: () => void;
}

export default function QuoteControls({ getNewQuote, ...rest }: Props) {
  return (
    <div
      id="controls"
      className="is-flex is-justify-content-space-between my-3"
    >
      <TweetButton quote={rest.quote} author={rest.author} />
      <NewButton onClick={getNewQuote} />
    </div>
  );
}
