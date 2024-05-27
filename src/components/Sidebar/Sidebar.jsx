import { Fragment, useState } from 'react'
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { SidebarMenu } from './SidebarMenu';
import { BiSearch } from 'react-icons/bi';
import main_logo from '../../assets/main_logo.svg'

const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaHome />,
    },
    {
        path: "/users",
        name: "Users",
        icon: <FaUser />,
    },
    {
        path: "/messages",
        name: "Messages",
        icon: <MdMessage />,
    },


]

// eslint-disable-next-line react/prop-types
export function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };


    return (
        <Fragment>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "200px" : "45px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >
                                    <img src={main_logo} alt="" />
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    <div className="search">
                        <div className="search_icon">
                            <BiSearch />
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.input
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    variants={inputAnimation}
                                    type="text"
                                    placeholder="Search"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                    <section className="routes">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="link"
                                    activeClassName="active"
                                >
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main>{children}</main>
            </div>
        </Fragment>
    )
}
