import { FaTwitter } from 'react-icons/fa';

interface Props {
  quote: string;
  author: string;
}

export default function TweetButton({ quote, author }: Props) {
  const tweetText = `${quote} - ${author}`;

  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText
      )}`}
      className="button is-info"
      id="tweet-quote"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon">
        <FaTwitter />
      </span>
      <span>Tweet</span>
    </a>
  );
}
