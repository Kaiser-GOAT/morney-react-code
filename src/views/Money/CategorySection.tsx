import { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
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
type Props = {
    value: '-'|'+';
    onChange:(value:'-'|'+')=>void
}
const CategorySection: React.FC<Props> = (props) => {
    const categoryMap = { '-': '支出', '+': '收入' }
    type Keys = keyof typeof categoryMap;
    const category = props.value;
    const [categoryList] = useState<Keys[]>(['-', '+']);
    
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li key={c}
                        className={category === c ? 'selected' : ''}
                onClick={()=>props.onChange(c)}
                    >{categoryMap[c]}</li>
                    )}
                
                            </ul>
        </Wrapper>
    )
}
export {CategorySection};