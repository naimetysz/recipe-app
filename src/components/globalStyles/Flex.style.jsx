import styled from "styled-components"

const Flex=styled.div`
    
    display: flex;
    justify-content:${({justify})=>(justify ? justify : "center")};
    align-items: ${({align})=>(align ? align : "center")};
    flex-wrap:${({wrap})=> wrap && wrap}
    //? burada dinamik bir stillendirme ile kosullu ifadeler yaziyorum

`;
export default Flex;