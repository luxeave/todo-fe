// src/components/Layout.js
import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const LeftPanel = styled.div`
  flex: 3;
  margin-right: 20px;
`;

const RightPanel = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => {
  const [leftContent, rightContent] = React.Children.toArray(children);
  
  return (
    <AppWrapper>
      <h1>To-Do App</h1>
      <ContentWrapper>
        <LeftPanel>{leftContent}</LeftPanel>
        <RightPanel>{rightContent}</RightPanel>
      </ContentWrapper>
    </AppWrapper>
  );
};

export default Layout;