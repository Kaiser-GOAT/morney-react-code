import styled from 'styled-components';
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";

import Icon from './icons';

const NavWrapper = styled.div`
box-shadow:0 0 3px rgba(0,0,0,0.25);
line-height:20px;
>ul{
  display:flex;
  justify-content:space-between;
  >li{
    width:33.3333%;
    text-align:center;
    >a{
    padding:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
     &.selected{
        color:red;
        .icon{
            fill:red;
        };
    };
    };
   
  };
  
}
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    
                    <NavLink to="/tags" activeClassName='selected'>
                        <Icon name = 'tag' />
                        <div>标签页</div>
                        </NavLink>
                </li>
                <li>
                    
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name = "money" />
                    <div>记账页</div>    
                    </NavLink>
                </li>
                <li>
                    
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name = 'statistic' />
                        <div>统计页</div>
                        </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;