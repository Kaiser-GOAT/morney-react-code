import { useState } from 'react';
import styled from 'styled-components';
import { ProgressPlugin } from 'webpack';
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
const TagsSection: React.FC = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    const [selectedTag,setSelectedTag] =useState<string[]>([])
    const AddTag = () => {
        const TagName = window.prompt('新添加的标签为')
        if (TagName !== null) {
            setTags([...tags,TagName])
        }
    }
    const toggleTag = (tag:string) => {
        const index = selectedTag.indexOf(tag);
        if (index >= 0) {
            setSelectedTag(selectedTag.filter(t=>t!=tag))
        } else {
            setSelectedTag([...selectedTag,tag])
        }
    }
    const x = (tag:string) => 
        selectedTag.indexOf(tag) >= 0 ? 'selected' : '';
   
    return (
        <Wrapper>
            <ul>
              
                {tags.map(tag => <li key={tag} onClick={()=>toggleTag(tag)} className={x(tag)}>{tag}</li>)}
                 
                  </ul>
              <button onClick={AddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSection}