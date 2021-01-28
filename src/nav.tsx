import styled from 'styled-components';
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import x from './icon/money.svg';
import y from './icon/statistic.svg';
import z from './icon/tag.svg';
console.log(x,y,z)
const NavWrapper = styled.div`
box-shadow:0 0 3px rgba(0,0,0,0.25);
line-height:20px;
>ul{
  display:flex;
  justify-content:space-between;
  >li{
    width:33.3333%;
    text-align:center;
    padding:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
}
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    
                    <Link to="/tags">
                        <svg className="icon">
                        <use xlinkHref = "#tag" />
                        </svg>
                        <div>标签页</div>
                        </Link>
                </li>
                <li>
                    
                    <Link to="/money">
                        <svg className="icon">
                        <use xlinkHref = "#money" />
                    </svg>
                    <div>记账页</div>    
                    </Link>
                </li>
                <li>
                    
                    <Link to="/statistics">
                        <svg className="icon">
                        <use xlinkHref = "#statistic" />
                        </svg>
                        <div>统计页</div>
                        </Link>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;