import { useAppSelector } from '../../hooks';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  if (error) {
    return <div className="error-message">{error}</div>;
  } else {
    return null;
  }
}

export default ErrorMessage;
