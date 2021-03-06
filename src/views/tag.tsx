
import { useParams , useHistory } from "react-router-dom"
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
    const { findTag,updateTag,deleteTag } = useTags()
    let { id:idString } = useParams<Params>();
    const tag = findTag(parseInt(idString))
    const tagContent = (tag: { id: number; name: string }) => (
        <div>
            <InputWrapper>
                <Input label='标签名' type='text' placeholder='标签名'
                    value={tag.name}
                    onChange={(e) => {
                        updateTag(tag.id, { name: e.target.value });
                    }}
                />
            </InputWrapper>
            <Center>
                <Space />
                <Space />
                <Space />
                <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
            </Center>
        </div>
    );
    const history = useHistory();
    const onClickBack = () => {
        history.goBack()
    }
    return (
        <Layout>
            <Topbar>
                <Icon name="left" onClick={onClickBack}/>
                <span>编辑标签</span>
                <Icon />
            </Topbar>
            {tag ? tagContent(tag)
            :<div>Tag 不存在</div>
        }
            
    </Layout>
    )
}

export { Tag}