import React from "react";
import { useEffect, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/reducers";

interface IProps {
    open: boolean;
    onClose: any;
    children: React.ReactNode;
    className?: string;
    keepMounted?: boolean;
}

const Modal = ({ open, onClose, children, keepMounted, className }: IProps) => {
    const mouseDownRef = useRef(null);
    const ref = useRef(null);

    // Get Other modal
    const otherModel = useSelector(
        (state: RootReducer) => state.apperance.modals
    );

    const handleBackdrop = (e) => {
        if (ref.current && mouseDownRef.current) {
            if (ref.current === e.target && mouseDownRef.current === e.target) {
                onClose();
            }
        }

        mouseDownRef.current = null;
    };

    const handleMouseDown = (e) => {
        mouseDownRef.current = e.target;
    };

    useEffect(() => {
        if (open) disableBodyScroll(document.body);
        else {
            if (otherModel.length <= 0) {
                enableBodyScroll(document.body);
            }
        }
    }, [open]);

    if (open)
        return (
            <div
                ref={ref}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 2000,
                    overflow: "auto",
                    background: "rgba(0, 0, 0, 0.5)",
                }}
                onMouseUp={handleBackdrop}
                onMouseDown={handleMouseDown}
            >
                <div className={className}>{children}</div>
            </div>
        );
    return null;
};

export default Modal;
