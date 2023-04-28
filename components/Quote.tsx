interface Props {
  quote: string;
  author: string;
}

export default function Quote({ quote, author }: Props) {
  return (
    <div id="quote-text" className="p-6">
      <h2
        id="text"
        className="has-text-centered has-text-weight-bold is-size-2 is-size-4-mobile"
      >
        &ldquo;{quote}&rdquo;
      </h2>
      <p id="author" className="has-text-right is-family-secondary subtitle">
        &mdash; {author}
      </p>
    </div>
  );
}
