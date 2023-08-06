import IOwner from "./IOwner";

interface IData {
    id: string;
    name: string;
    owner: IOwner;
    url: string;
    language: string;
}

export default IData;