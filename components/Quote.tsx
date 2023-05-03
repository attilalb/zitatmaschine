import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface Props {
  quote: string;
  author: string;
}

export default function Quote({ quote, author }: Props) {
  return (
    <div id="quote-text" className="p-3">
      <div className="block">
        <span className="icon">
          <FaQuoteLeft />
        </span>
        <h2
          id="text"
          className="has-text-centered has-text-weight-bold is-size-3 is-size-4-mobile"
        >
          {quote}
        </h2>
        <span className="icon is-pulled-right mb-3">
          <FaQuoteRight />
        </span>
      </div>
      <div className="block">
        <p id="author" className="has-text-right is-size-6 subtitle mt-6">
          &mdash; {author}
        </p>
      </div>
    </div>
  );
}
