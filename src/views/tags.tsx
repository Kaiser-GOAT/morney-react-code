import Layout from '../layout';
import React from 'react';
import { useTags } from '../useTags';
import styled from 'styled-components'
import Icon from '../icons';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Button } from '../Button';
import { Center } from './Center';
import { Space } from './Space';
const TagList = styled.ol`
    font-size:16px;
    background:white;
    
    >li{
        border-bottom:1px solid #d5d5d9;
        line-height:20px;
        margin-left:16px;
        
        
       >a{
        display:flex;
        flex-wrap:nowrap;
        justify-content:space-between;
        align-items:center;
       padding:12px 16px 12px 0;
       
       }
    }

`;



function Tags() {
    const { tags,addTag } = useTags();
  return (
      <Layout>
          <TagList>
          
              {tags.map(tag =>
                  <li key={tag.id}>
                      <Link to={'/tags/' + tag.id}>
                      <span className="oneLine">
                          {tag.name}
                          </span>
                    <Icon name="right" />
                      </Link>
                      
                  </li>
                )}
              
          </TagList>
          <Center>
              <Space />
              <Space />
              <Space />
              <Button onClick ={addTag}>新增标签</Button>
          </Center>
          
    </Layout>
  )
};

export default Tags;