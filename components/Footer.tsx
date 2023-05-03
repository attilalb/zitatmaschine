import { FcLike } from 'react-icons/fc';

const Footer = () => {
  return (
    <footer className="level">
      <p className="is-size-7 has-text-centered mt-0 pt-0 level-item">
        Made with{' '}
        <span className="icon">
          <FcLike />
        </span>{' '}
        by <a href="https://github.com/attilalb/">Attila</a>.
      </p>
    </footer>
  );
};

export default Footer;
