import { FC } from "react";
import { useLocation } from "react-router";
import { AiFillHome } from "react-icons/ai";
import { FaNewspaper, FaFileContract, FaBook } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { GrOrganization, GrUserSettings } from "react-icons/gr";
import { GiKing } from "react-icons/gi";
import Pagination2 from "../Pagination/Pagination2";
import { CgOrganisation } from "react-icons/cg";
import { SiGnuprivacyguard } from "react-icons/si";
import { StartWorking } from "./StartWorking";
import styled from "styled-components";
interface IStat {
    icon: any;
    workspace: string;
    from: string;
}
const Wrapper = styled.div`
    width: 100%;
`;
const WorkspaceWrapper = styled.div`
    margin-top: 10px;
    height: 50vh;
    background-color: #fff;
    border-radius: 20px;
`;
const PhotoWorkspace = styled.img`
    display: block;
    width: 100%;
    max-height: none;
    height: 50%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50%;
    width: 100%;
    border-bottom-left-radius: 20px;

    border-bottom-right-radius: 20px;
`;
const Icon = styled.div`
    padding: 10px;
    margin-left: 20px;
    font-size: 40px;
`;
const TextInside = styled.div`
    display: flex;
    margin: 20px;
    text-align: left;
    flex-direction: column;
`;
const InsideHeader = styled.div`
    font-size: 20px;
    margin-bottom: 12px;
    font-weight: bold;
`;
const Workspaces: FC<IStat> = (props: any) => {
    const location: any = useLocation();
    function SetIcon() {
        if (location.state.icon === "<AiFillHome />") return <AiFillHome />;
        else if (location.state.icon === "<FaFileContract />")
            return <FaFileContract />;
        else if (location.state.icon === "<CgOrganisation />")
            return <CgOrganisation />;
        else if (location.state.icon === "<FaBook />") return <FaBook />;
        else if (location.state.icon === "<FaNewspaper />")
            return <FaNewspaper />;
    }
    const TrueIcon = SetIcon();
    // console.log(location.state.icon);
    return (
        <Wrapper>
            <WorkspaceWrapper>
                {console.log(location.state.icon)}
                <PhotoWorkspace src={location.state.url} alt="" />
                {/* {Icon} {location.state.workspace} */}
                <TextWrapper>
                    <Icon>{TrueIcon}</Icon>
                    <TextInside>
                        <InsideHeader>{location.state.workspace}</InsideHeader>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ab inventore nihil laborum maiores eligendi, rem
                        maxime quod! Ut voluptatem atque cumque eligendi
                        mollitia incidunt nobis tenetur assumenda, corporis sunt
                        .
                    </TextInside>
                </TextWrapper>
            </WorkspaceWrapper>
            <StartWorking />
            <Pagination2
                publications="/publications"
                people="/people"
                entities="/entities"
                administration="/administration"
                clientContract="/clientContract"
                supplierContract="/supplierContract"
                corporate="/corporate"
                groupNorms="/groupNorms"
                realEstateContracts="/realEstateContracts"
                number={Math.floor(Math.random() * 10)}
            />
        </Wrapper>
    );
};
export default Workspaces;
