import React from 'react';

const LANGUAGES = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go',
];

export const List = () => {
  return (
    <div>
      {
        LANGUAGES.map((lang, index)=>{
          // JSX記法ではkey(一意)を書く必要がある
          return <div key={index}>{ lang }</div>
        })

      }
    </div>
  )
}

