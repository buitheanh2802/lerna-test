import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Wrapper = styled.div`

`;

const style = css``;

const App = () => {
    useEffect(() => {}, []);

    return (
        <Wrapper css={{
            display: "flex"
        }}>
            <div>hello world</div>
        </Wrapper>
    );
};

export default App;
