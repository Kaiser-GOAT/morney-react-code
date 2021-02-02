import styled from 'styled-components'
const NotesSection = styled.section`
padding:0 16px;
background:#f5f5f5;
font-size:14px;
>label{
    display:flex;
    align-items:center;
    >span{
        margin-right:16px;
        white-space:nowrap;
    };
        input{
            display:block;
            width:100%;
            height:72px;
            background:none;
            border:none;
        
    }
}
`;
export {NotesSection}