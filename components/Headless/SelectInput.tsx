// Main
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

interface IProps {
    setState: any;
    state: any;
    types: any;
}

const SelectInput = ({ setState, state, types }: IProps) => {
    const router = useRouter();

    const handleFilter = (name: string) => {
        // router.push(`${router.asPath}&filter=${name}`);
    };

    return (
        <Listbox value={state} onChange={setState}>
            <div className="relative mt-1">
                <Listbox.Button className="relative w-full  py-2 pl-3 pr-10 text-left text-gray-600  border">
                    <span className="block truncate capitalize">
                        {state.name}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-10 py-1 mt-1 overflow-auto text-base bg-white border max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {types.map((type, typeIdx) => (
                            <Listbox.Option
                                key={typeIdx}
                                className={({ active }) =>
                                    `${
                                        active
                                            ? "text-amber-900 bg-amber-100"
                                            : "text-gray-900"
                                    }
                          cursor-default select-none relative capitalize py-2 pl-10 pr-4`
                                }
                                value={type}
                            >
                                {({ selected, active }) => (
                                    <>
                                        <span
                                            onClick={() =>
                                                handleFilter(type.name)
                                            }
                                            className={`${
                                                selected
                                                    ? "font-medium"
                                                    : "font-normal"
                                            } block truncate`}
                                        >
                                            {type.name}
                                        </span>
                                        {selected ? (
                                            <span
                                                className={`${
                                                    active
                                                        ? "text-amber-600"
                                                        : "text-amber-600"
                                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                            >
                                                <CheckIcon
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
};

export default SelectInput;
