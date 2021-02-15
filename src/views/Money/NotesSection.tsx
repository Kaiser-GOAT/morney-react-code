import { ChangeEventHandler, useRef, useState } from 'react';
import styled from 'styled-components'
import { Input } from '../../Input';
const Wrapper = styled.section`
padding:14px 16px;
background:#f5f5f5;
font-size:14px;

`;
type Props = {
    value: string;
    onChange:(value:string)=>void
}
const NotesSection: React.FC<Props> = (props) => {
    const note = props.value;    
    const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value);
    };
    return(
    <Wrapper>
            <Input label='备注' type='text' value={note} onChange={onChange} />
        </Wrapper>
    )
}

export {NotesSection}