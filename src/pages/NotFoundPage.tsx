import {useEffect, memo} from 'react';
import {useNavigate} from 'react-router-dom';

const NotFoundPage = memo(() => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1400);
  }, []);

  return (
    <div>
      <h4>404</h4>
      <h1>This page does not exist</h1>
    </div>
  );
});

export default NotFoundPage;
