/* eslint-disable react/prop-types */
import { Fragment, useState, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

const menuAnimation = {
    hidden: {
        opacity: 0,
        height: 0,
        padding: 0,
        transition: { duration: 0.3, when: "afterChildren" },
    },
    show: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            when: "beforeChildren",
        },
    },
};


// eslint-disable-next-line react/prop-types
export function SidebarMenu({ route, showAnimation, isOpen, setIsOpen }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsOpen(true);
    };

    useEffect(() => {
        if (!isOpen) {
            setIsMenuOpen(false);
        }
    }, [isOpen]);

    return (
        <Fragment>
            <div className="menu" onClick={toggleMenu}>
                <div className="menu_item">
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
                </div>
                {isOpen && (
                    <motion.div
                        animate={
                            isMenuOpen
                                ? {
                                    rotate: -90,
                                }
                                : { rotate: 0 }
                        }
                    >
                        <FaAngleDown />
                    </motion.div>
                )}
            </div>{" "}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="menu_container"
                    ></motion.div>
                )}{" "}
            </AnimatePresence>
        </Fragment>
    )
}
