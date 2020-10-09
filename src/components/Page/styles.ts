import styled from 'styled-components';

export const Container = styled.div`
    .colored {
        background-size: cover !important;
        background-position: center !important;
    }
    .colored:nth-child(1) {
        background: url('https://images.hdqwalls.com/download/tesla-roadster-2020-3p-1920x1080.jpg');
    }
    .colored:nth-child(2) {
        background: url('https://images.hdqwalls.com/download/tesla-model-x-front-4k-5x-1920x1080.jpg');
    }
    .colored:nth-child(3) {
        background: url('https://www.wattson.pt/wp-content/uploads/2019/08/952152.jpg');
    }
    .colored:nth-child(4) {
        background: url('https://images.hdqwalls.com/download/2018-tesla-roadster-side-view-4k-e4-1920x1080.jpg');
    }
`;

export const Spacer = styled.div`
    height: 15vh;
    background: url('https://images.hdqwalls.com/download/2018-tesla-roadster-side-view-4k-e4-1920x1080.jpg');
    background-position: bottom;
`;