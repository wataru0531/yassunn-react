import styled from 'styled-components';
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { List } from "./List";
import { Form } from './Form';
import { getLanguage } from './const/languages';
import { widthLoading } from './hoc/widthLoading';
import { Modal } from './components/modal';
import { Header } from './Header';
import { ThemeContext } from './contexts/ThemeContext';

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`

function App( { data } ) {
  const [tab, setTab] = useState('list');
  const [langs , setLangs] = useState(data);

  const [theme] = useContext(ThemeContext);

  const addLang = (lang) => {
    // langにはフォームの値が入る
    // langsの配列にlangを追加する
    setLangs([...langs, lang]);
    // 表示をlistに切り替える
    setTab('list');
  };

  return (
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab} />

      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }

    </Container>
  );
}

export default App;