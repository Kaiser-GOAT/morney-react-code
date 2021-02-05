import Layout from '../layout'
import React from 'react';
import styled from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import { NumberPadSection } from './Money/NumberPadSection';
import { NotesSection } from './Money/NotesSection';
import { CategorySection } from './Money/CategorySection';




const MyLayout = styled(Layout)`
display:flex;
flex-direction:column;
`;
function Money() {
  return (
    <MyLayout>
          <TagsSection />

          <NotesSection />
              
          
          <CategorySection />
              
         
          <NumberPadSection />
              
          
    </MyLayout>
  );
}
export default Money;