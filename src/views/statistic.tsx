import Layout from '../layout';
import React, { ReactNode, useState } from 'react';
import { CategorySection } from './Money/CategorySection';
import day from 'dayjs'
import { RecordItem, useRecords } from '../hooks/useRecords';
import { useTags } from '../useTags';
import styled from 'styled-components';
const Item = styled.div`
display:flex;
justify-content:space-between;
background:white;
line-height:20px;
padding:10px 16px;
>.note{
    margin-right:auto;
    margin-left:16px;
    color:#999
}
`;
const Header = styled.h3`
font-size:18px;
line-height:20px;
padding:10px 16px;
`;
function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const { getName } = useTags()
    const hash: {[K:string]:RecordItem[]} = {}
    const selectedRecords = records.filter(r=>r.category===category)
    selectedRecords.map(r => {
        const Key = day(r.createdAt).format('YYYY-MM-DD')
        if (!(Key in hash)) {
            hash[Key] = []
        }
        hash[Key].push(r)
    });
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    })
  return (
      <Layout>
          
          <CategorySection value={category}
              onChange={value => setCategory(value)} />
          {array.map(([date,records]) => <div>
              <h3>
                  {date}
              </h3>
              <div>
                  {records.map(r => {
                  return <Item >
                      <div className="tags oneLine">
                          {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                              .reduce((result, span, index, array) =>
                                  result.concat(index<array.length -1 ?[span, '，']:[span]), [] as ReactNode[])}
                      </div>
                      {r.note && <div className="note">
                          {r.note}
                      </div>}
                      <div className="amount">
                      ￥{r.amount}
                      </div>
                      
                  </Item>
                  
              })}
              </div>
          </div>
            
            )}
          
          
             </Layout>
    );
}
export default Statistics;