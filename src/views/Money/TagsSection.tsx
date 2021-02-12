import { useState } from 'react';
import styled from 'styled-components';
import { ProgressPlugin } from 'webpack';
import { useTags } from '../../useTags';
const Wrapper = styled.section`
background:#FFFFFF;
flex-grow:1;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-end;
padding:12px 16px;
 > ul{
    margin:0 -12px;
    
  > li{
    background:#D9D9D9;
    border-radius:18px;
    display:inline-block;
    padding:3px 18px;
    font-size:14px;
    margin:8px 12px;
    &.selected{
        background:#f90;
    }
};
};
 > button{
    background:none;
    border:none;
    padding:2px 4px;
    border-bottom:1px solid #333;
    color:#666;
    margin-top:8px;
}
`;
type Props = {
    value: number[];
    onChange:(selected:number[])=>void
}
const TagsSection: React.FC<Props> = (props) => {
    const{tags,setTags} = useTags()
    const selectedTagIds = props.value;
        const AddTag = () => {
        const TagName = window.prompt('新添加的标签为')
        if (TagName !== null) {
            setTags([...tags, { id:Math.random(),name:TagName}])
        }
    }
    const toggleTag = (tagId:number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t=>t!=tagId))
        } else {
            props.onChange([...selectedTagIds,tagId])
        }
    }
    const getClass = (tagId:number) => 
        selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
   
    return (
        <Wrapper>
            <ul>
              
                {tags.map(tag => <li key={tag.id} onClick={()=>toggleTag(tag.id)} className={getClass(tag.id)}>{tag.name}</li>)}
                 
                  </ul>
              <button onClick={AddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSection}