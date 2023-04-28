import { FaTwitter } from 'react-icons/fa';

export default function TweetButton({ quote, author }) {
  const tweet = `"${quote}" - ${author}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweet
  )}`;

  return (
    <a href={url} className="button is-info" id="tweet-quote" target="_blank">
      <span className="icon">
        <FaTwitter />
      </span>
      <span>Tweet</span>
    </a>
  );
}
