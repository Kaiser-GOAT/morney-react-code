import styled from 'styled-components';
const CategorySection = styled.section`
font-size:24px;
>ul{
    display:flex;
    background:#c4c4c4;
    >li{
        text-align:center;
        width:50%;
        padding:16px;
        position:relative;
        &.selected::after{
            content:'';
            display:block;
            height:3px;
            background:#333;
            position:absolute;
            bottom:0;
            width:100%;
            left:0;
        }
    }
}
`;
export {CategorySection};