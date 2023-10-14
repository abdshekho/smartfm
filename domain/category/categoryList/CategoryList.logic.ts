// Main
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_CATEGORIES } from "../category.sql";
import { ICategory } from "../category.types";

const useCategoryList = () => {
    const { data } = useQuery<{ getCategories: ICategory[] }>(GET_CATEGORIES);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (data) {
            if (!categories.length) {
                const tmpData: ICategory[] = data.getCategories.map(
                    (categ) => ({
                        ...categ,
                        children: [],
                        isSelected: false,
                    })
                );

                readCategories(tmpData);
            }
        }
    }, [data]);

    const populateChildren = (category: ICategory, data: ICategory[]) => {
        const tmpCategory = { ...category };
        const tmpChildren = data.filter((c) => c.parent?.id === category.id);
        let children: any = [];

        for (let i = 0; i < tmpChildren.length; i++) {
            const categ = populateChildren(tmpChildren[i], data);

            children.push(categ);
        }

        tmpCategory.children = children;

        return tmpCategory;
    };

    const readCategories = (data: ICategory[]) => {
        const tmpData: ICategory[] = [];

        for (let i = 0; i < data.length; i++) {
            if (!data[i].parent) {
                const categ = populateChildren(data[i], data);

                tmpData.push(categ);
            }
        }

        setCategories(tmpData);
    };

    const selectAndPopulate = (
        category: ICategory,
        id: string,
        currentLevelIds: string[],
        currentDepthSelectedId?: string
    ) => {
        const tmpCategory = { ...category };
        const tmpChildren = [];

        if (
            currentLevelIds.includes(id) &&
            currentDepthSelectedId === tmpCategory.id
        )
            tmpCategory.isSelected = false;
        else if (
            currentDepthSelectedId === tmpCategory.id &&
            tmpCategory.id === id
        )
            tmpCategory.isSelected = false;
        else if (tmpCategory.id === id) tmpCategory.isSelected = true;

        const selectedCategoryId = tmpCategory.children.find(
            (c) => c.isSelected
        );

        for (let i = 0; i < tmpCategory.children.length; i++) {
            const tmpChild = selectAndPopulate(
                tmpCategory.children[i],
                id,
                tmpCategory.children.map((c) => c.id),
                selectedCategoryId?.id
            );

            tmpChildren.push(tmpChild);
        }

        tmpCategory.children = tmpChildren;

        return tmpCategory;
    };

    const handleSelect = (id: string) => {
        const tmpData: ICategory[] = [];

        const selectedCategId = categories.find((c) => c.isSelected);

        for (let i = 0; i < categories.length; i++) {
            const categ = selectAndPopulate(
                categories[i],
                id,
                categories.map((c) => c.id),
                selectedCategId?.id
            );

            tmpData.push(categ);
        }

        setCategories(tmpData);
    };

    return {
        categories,
        handleSelect,
    };
};

export default useCategoryList;
