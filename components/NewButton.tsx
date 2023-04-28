interface NewButtonProps {
  onClick: () => void;
}

export default function NewButton({ onClick }: NewButtonProps) {
  return (
    <button
      type="button"
      className="button is-primary"
      id="new-quote"
      onClick={onClick}
    >
      New Quote
    </button>
  );
}
