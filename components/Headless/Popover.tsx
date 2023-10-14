// Main
import React from "react";

// HeadlessUi
import { Popover as UlPopover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import MultiClass from "../Public/Classes/MultiClass";

// Types
interface IProps {
    buttonClass?: string;
    children?: React.ReactNode;
    panelClass?: string;
    Render?: any;
}

const Popover = ({ buttonClass, children, panelClass, Render }: IProps) => {
    return (
        <UlPopover className="relative">
            {({ open }) => (
                <>
                    <UlPopover.Button className={buttonClass}>
                        {children}
                    </UlPopover.Button>
                    <Transition
                        as={React.Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <UlPopover.Panel
                            className={MultiClass([
                                "absolute z-10  mt-4 transform -translate-x-1/2",
                                panelClass,
                            ])}
                        >
                            <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-white ring-opacity-5">
                                {Render && Render()}
                            </div>
                        </UlPopover.Panel>
                    </Transition>
                </>
            )}
        </UlPopover>
    );
};

export default Popover;
