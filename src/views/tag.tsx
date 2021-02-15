import { parse } from "@babel/core"
import { useParams } from "react-router-dom"
import { useTags } from "../useTags"
import Layout from '../layout'
import Icon from "../icons"
import { Button } from "../Button"
import styled from "styled-components"
import { Input } from "../Input"
import { Center } from "./Center"
import { Space } from "./Space"

const Topbar = styled.header`
display:flex;
justify-content:space-between;
line-height:20px;
padding:14px;
background:white;
align-items:center;
`;
const InputWrapper = styled.div`
background:white;
padding:0 16px;
margin-top:8px;
`;
type Params = {
    id : string
}
const Tag: React.FC = (props) => {
    const { findTag } = useTags()
    let { id } = useParams<Params>();
    const tag =findTag(parseInt(id))
    return (
        <Layout>
            <Topbar>
            <Icon name="left" />
                <span>编辑标签</span>
                <Icon />
            </Topbar>
            
               <InputWrapper>
                <Input label='标签名' type='text' placeholder='标签名' />
                </InputWrapper>
            <Center>
                <Space />
                <Space />
                <Space />
                    <Button>删除标签</Button>
                </Center>
            
    </Layout>
    )
}

export { Tag}