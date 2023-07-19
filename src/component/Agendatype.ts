export interface IAgenda {
    id:string;
    title:string;
    description:string;
    status:string;
    datetime:string;
}


export enum pageEnum{
    list,
    add,
    update,
}