import { FcLike } from 'react-icons/fc';

const Footer = () => {
  return (
    <div>
      <footer className="level">
        <p className="is-size-7 has-text-centered mt-0 pt-0 level-item">
          Made with{' '}
          <span className="icon">
            <FcLike />
          </span>{' '}
          by
          <span className="ml-1">
            <a href="https://github.com/attilalb/">Attila</a>.
          </span>
        </p>{' '}
      </footer>
    </div>
  );
};

export default Footer;
