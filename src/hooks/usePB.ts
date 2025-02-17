import PocketBase from 'pocketbase';

let pb: PocketBase | undefined = undefined

export default function usePB(): PocketBase {
    if (!pb) {
        pb = new PocketBase('https://pocket.bimarznet.com');
    }
    return pb;
}