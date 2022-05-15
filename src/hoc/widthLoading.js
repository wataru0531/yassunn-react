import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const LoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`
// Higher-Order Component
// ...コンポーネントを受け取って、新しくコンポーネントを作成するコンポーネント。
export const widthLoading = (WrappedComponent, fetchData) => {
  return () => {
    const [data, setData] = useState(null);
    const [ theme ] = useContext(ThemeContext);

    useEffect(() => {
      fetch();
    }, []);

    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    };


    const Loading = (
      <LoadDiv theme={theme}>ロード中...</LoadDiv>
    );

    return data ? <WrappedComponent data={ data }/> : Loading;
  }
}
