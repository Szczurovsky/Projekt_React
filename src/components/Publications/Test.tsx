import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
interface ITest {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
const Test: FC<ITest> = (props) => {
    return (
        <>
            {console.log(props.id)}
            <div>sssssss</div>
        </>
    );
};
export default Test;
