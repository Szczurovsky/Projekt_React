import React, { FC, useState, ChangeEvent, useCallback } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styled from "styled-components";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { FcSettings } from "react-icons/fc";
import { ImWindows8 } from "react-icons/im";
import { AiOutlineInsertRowLeft } from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";
import * as AllTypes from "react-icons";
import "./test.css";
const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #e6e6e6;
    /* ZMIEN TO */
    height: 100vh;
`;
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
`;
const a = 0;
const FirstLine = styled.div`
    margin: 15px 0 0 0;
    height: 5%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`;
const SecondLine = styled.div`
    margin: 15px 0 0 0;
    height: 5%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`;
const Text = styled.div`
    display: flex;
    font-size: 24px;
`;

const SwapView = styled.button`
    border: none;
    display: flex;
    background-color: #9ee4ff8f;
    height: 30px;
    justify-content: center;
    align-items: center;
    width: 94px;
    color: royalblue;
`;
const Margin = styled.span`
    margin-right: 10px;
`;
const Filter = styled.input`
    width: 40%;

    margin: 5% 10%;
    color: gray;
`;
const Elem = document.getElementById("flex");
export const Entities: FC = () => {
    const handle = useFullScreenHandle();
    const { photosList } = useSelector<IState, IPhotosReducer>(
        (globalState) => ({
            ...globalState.photos,
        })
    );
    const [mosaic, setMosaic] = useState<boolean>(true);
    const [inputText, setInputText] = useState<string>("");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };
    const data: any = [];
    for (let i: any = 0; i < 30; i++) {
        data.push(photosList?.[i]);
    }

    return (
        <FullScreen handle={handle}>
            <MainWrapper>
                <FirstLine>
                    <Text>
                        <Margin>Entities</Margin> <FcSettings />
                    </Text>
                    {mosaic ? (
                        <SwapView onClick={() => setMosaic(false)}>
                            <Margin>Mosaic </Margin>
                            <ImWindows8 />
                        </SwapView>
                    ) : (
                        <SwapView onClick={() => setMosaic(true)}>
                            <Margin>Row </Margin>
                            <AiOutlineInsertRowLeft />
                        </SwapView>
                    )}
                </FirstLine>
                <SecondLine>
                    <button onClick={handle.enter} className="buttonFull">
                        <BsArrowsFullscreen />
                    </button>
                    <Filter
                        type="text"
                        value={inputText}
                        onChange={inputHandler}
                        placeholder="wprowadz tekst"
                    />
                </SecondLine>

                {mosaic ? (
                    <>
                        {" "}
                        <div id="flexColumn">
                            {data.map((photo: any) => (
                                <div className="box">
                                    {photo.title.includes(inputText) && (
                                        <>
                                            <div className="photoEntities">
                                                <img
                                                    src={photo.url}
                                                    alt="zdjęcie"
                                                />
                                            </div>
                                            <div className="titleEntities">
                                                {photo.title}
                                                <p className="textEntities">
                                                    Caracas 1050, Distrito
                                                    Capital, Venezuela
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div id="flexRow">
                        {data.map((photo: any) => (
                            <div className="box">
                                {photo.title.includes(inputText) && (
                                    <>
                                        <div className="photoEntities">
                                            <img
                                                src={photo.url}
                                                alt="zdjęcie"
                                            />
                                        </div>
                                        <div className="titleEntities">
                                            {photo.title}
                                            <p className="textEntities">
                                                Caracas 1050, Distrito Capital,
                                                Venezuela
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </MainWrapper>
        </FullScreen>
    );
};

//  {/* <div id="a1 flex">
//                 {data.map((photo: any) => (
//                     // <div>
//                     //     <p>{photo.id}</p>
//                     //     <img src={photo.url} />
//                     // </div>
//                     <div>
//                         {photo.title.includes(inputText) && (
//                             <>
//                                 {photo.id}
//                                 {photo.title}
//                             </>
//                         )}
//                     </div>
//                 ))}
//             </div> */}
//                 {/* <div>
//                 {data.map((photo: any, x: any) => (
//                     <div key={x}>
//                         <p>{photo.id}</p>
//                         <p>{photo.url}</p>
//                     </div>
//                 ))}
//             </div> */}
//                 {/* {mosaic ? (
//                 <SwapView onClick={() => setMosaic(false)}>
//                     <Margin>Mosaic </Margin>
//                     <ImWindows8 />
//                 </SwapView>
//             ) : (
//                 <>
//                     <SwapView onClick={() => setMosaic(true)}>
//                         <Margin>Row </Margin>
//                         <AiOutlineInsertRowLeft />
//                     </SwapView>
//                     <SecondLine>
//                         <div id="a1 flex">
//                             {data.map((photo: any) => (
//                                 // <div>
//                                 //     <p>{photo.id}</p>
//                                 //     <img src={photo.url} />
//                                 // </div>
//                                 <div>
//                                     {photo.title.includes(inputText) && (
//                                         <>
//                                             {photo.id}
//                                             {photo.title}
//                                         </>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </SecondLine>
//                 </>
//             )} */}
