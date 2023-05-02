import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1500);
  }, []);

  return (
    <div>
      <h4>404</h4>
      <h1>This page does not exist</h1>
    </div>
  );
}
