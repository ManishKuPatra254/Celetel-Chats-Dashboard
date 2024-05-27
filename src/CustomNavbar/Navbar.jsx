import { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import main_logo from '../assets/main_logo.svg';
import { Link } from "react-router-dom";
import { BsFillChatSquareFill } from "react-icons/bs";

export function Navbar() {
    const [isSidebar, setSidebar] = useState(false);

    function handleToggleSidebar() {
        setSidebar(!isSidebar);
    }

    function handleCloseSidebar() {
        setSidebar(false);
    }

    return (
        <Fragment>
            <div className="main_nav">
                <p onClick={handleToggleSidebar} className="">
                    <MenuIcon onClick={handleToggleSidebar} sx={{ fontSize: "30px", cursor: "pointer" }} />
                </p>
                <Drawer anchor="left" open={isSidebar} onClose={handleToggleSidebar}
                    sx={{ '& .MuiDrawer-paper': { width: '400px', padding: "20px" } }} >
                    <img src={main_logo} alt="" className="drawer_img" />
                    <List sx={{ mt: "30px" }}>
                        <ListItem sx={{
                            backgroundColor: '#F6F5F2',
                            marginBottom: '15px',
                            padding: '10px',
                            cursor: "pointer",
                            '&:hover': {
                                backgroundColor: '#E0E0E0'
                            }
                        }}>
                            <Link to={'/'} onClick={handleCloseSidebar} style={{
                                textDecoration: 'none',
                                display: "flex",
                                alignItems: "center",
                                gap: "15px",
                                color: 'inherit',
                                fontWeight: "600",
                            }}><BsFillChatSquareFill /> Chats</Link>
                        </ListItem>
                        <ListItem sx={{
                            backgroundColor: '#F6F5F2',
                            marginBottom: '15px',
                            padding: '10px',
                            cursor: "pointer",
                            '&:hover': {
                                backgroundColor: '#E0E0E0'
                            }
                        }}>
                            <Link to={'/messages'} onClick={handleCloseSidebar}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: "600",
                                }}>Messages</Link>
                        </ListItem>
                        <ListItem sx={{
                            backgroundColor: '#F6F5F2',
                            marginBottom: '15px',
                            padding: '10px',
                            cursor: "pointer",
                            '&:hover': {
                                backgroundColor: '#E0E0E0'
                            }
                        }}>
                            <Link to={'/contact'} onClick={handleCloseSidebar}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: "600",
                                    cursor: "pointer"
                                }}>Contact</Link>
                        </ListItem>
                    </List>
                </Drawer>
                <div className="">
                    <img src={main_logo} alt="" />
                </div>
            </div>
        </Fragment>
    );
}
