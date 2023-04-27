import React from 'react';
import './App.scss';

export const App = () => {
  const people: string[] = ['Kirill', 'Ruslan', 'Book', 'Sammy', 'Billy', 'Fill', 'Bob2'];

  return (
    <div>
      <h2 className="hello">Hello23</h2>
      <ul>
        {people.map((person, index) => {
          return <li key={index}>{person}</li>;
        })}
      </ul>
    </div>
  );
};
