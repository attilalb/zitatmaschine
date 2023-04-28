import './style.css';
import Wrapper from './components/Wrapper';
import { useState } from 'react';
import { FcLike } from 'react-icons/fc';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] = useState('');

  return (
    <div className="p-6 content">
      <h1 className="has-text-centered mb-5">QuoteMachine</h1>
      <Wrapper
        isLoading={isLoading}
        onLoad={setIsLoading}
        quote={quote}
        author={author}
        setQuote={setQuote}
        setAuthor={setAuthor}
      />
      <footer className="level">
        <p className="is-size-7 has-text-centered mt-0 pt-0">
          Made with{' '}
          <span class="icon">
            <FcLike />
          </span>{' '}
          by <a href="https://github.com/attilalb/">Attila</a>.
        </p>
      </footer>
    </div>
  );
}
