import './style.css';
import Wrapper from './components/Wrapper';
import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] = useState('');

  return (
    <div className="p-6 content">
      <h1 className="has-text-centered">QuoteMachine</h1>
      <Wrapper
        isLoading={isLoading}
        onLoad={setIsLoading}
        quote={quote}
        author={author}
        setQuote={setQuote}
        setAuthor={setAuthor}
      />
    </div>
  );
}
