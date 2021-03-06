import { ChangeEventHandler } from 'react';
import styled from 'styled-components'
import { Input } from '../../Input';
const Wrapper = styled.section`
padding:14px 16px;
background:#f5f5f5;
font-size:14px;

`;
type Props = {
  value: string;
  onChange: (value: string) => void;
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onChange}
      placeholder="请填写备注"/>
    </Wrapper>
    
    );
    console.log(Input)
};

export {NoteSection}