import { atom } from "recoil";

export const todoListSore = atom({
    key: "todoItemsState",
    default: [
        {
            id: 1,
            title: "Ayam Bakar",
            counter: 0
        },
        {
            id: 2,
            title: "Ayam Goreng",
            counter: 0
        },
        {
            id: 3,
            title: "Sate Ayam",
            counter: 0
        }
    ]
})