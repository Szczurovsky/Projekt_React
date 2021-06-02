import { FC } from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./test.css";
const MainWrapper = styled.div`
    position: absolute;
    left: 350px;
    display: flex;
    padding: 10px;
    background-color: white;
    align-items: flex-start;
    border: 1px solid black;
    width: auto;
    height: auto;
    flex-direction: column;
`;
const TextWrapper = styled.div`
    display: flex;

    color: gray;
`;
const FunctionWrapper = styled.div`
    margin: 5px;
    display: flex;

    align-items: center;
    color: black;
`;
const Text = styled.span`
    margin-left: 5px;
    margin-right: 20px;
`;
const Add = styled.span`
    display: flex;
    align-items: center;
    color: royalblue;
    margin-right: 30px;
`;
export const Filterek: FC = () => {
    return (
        <MainWrapper id="cokolwiek">
            <TextWrapper>
                Rows are filtered by the following conditions starting from the
                top
            </TextWrapper>
            <FunctionWrapper>
                <ImCross /> <Text>Where</Text>
                <Text>
                    Company <AiFillCaretDown />
                </Text>
                <Text>
                    Contains <AiFillCaretDown />
                </Text>
                <input type="text" placeholder="Type ..." className="margin" />
            </FunctionWrapper>
            <FunctionWrapper>
                <ImCross /> <Text>Where</Text>
                <Text>
                    Status <AiFillCaretDown />
                </Text>
                <Text>
                    Is <AiFillCaretDown />
                </Text>
                <input type="text" placeholder="Type ..." className="margin" />
                <Text>
                    Ends before <AiFillCaretDown />
                </Text>
                <input type="text" placeholder="Type ..." className="margin" />
            </FunctionWrapper>
            <FunctionWrapper>
                <ImCross /> <Text>And</Text>
                <Text>
                    Status <AiFillCaretDown />
                </Text>
                <Text>
                    Ends before <AiFillCaretDown />
                </Text>
                <input type="text" placeholder="Type ..." className="margin" />
                <Text>
                    In <AiFillCaretDown />
                </Text>
                <input type="text" placeholder="Type ..." className="margin" />
            </FunctionWrapper>
            <FunctionWrapper>
                <Add>
                    {" "}
                    <AiOutlinePlus /> Add filter{" "}
                </Add>
                <Add>
                    Choose Property <AiFillCaretDown />
                </Add>
            </FunctionWrapper>
        </MainWrapper>
    );
};
