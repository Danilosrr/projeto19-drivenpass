import { conflictError, forbiddenError, notFoundError } from "../Middlewares/errorHandler.js";
import { cardRepository, createCard } from "../Repositories/cardRepository.js";
import { decrypt, encrypt } from "../Utils/hashUtil.js";

async function createNewCard(card:createCard) {
    const { number, userId, title, expirationDate, isVirtual, type } = card;
    const password = encrypt(card.password);
    const securityCode = encrypt(card.securityCode);

    const userCardFound = await cardRepository.findByTitleAndUser(title,userId);
    if (userCardFound) throw conflictError("card title already exists");

    const create = await cardRepository.createCard({ 
        number, userId, title, securityCode, expirationDate, password, isVirtual, type 
    });

    return create;
}

async function findAllCards(userId:number){
    const cards = await cardRepository.findAllByUser(userId);

    if (cards.length>0){ 
        cards.forEach(card=>{
            card.password = decrypt(card.password)
            card.securityCode = decrypt(card.securityCode)
        });
    };

    return cards;
}

async function findOneCard(userId:number,id){
    const card = await cardRepository.findByIdAndUser(id,userId);
    if (!card) throw notFoundError("card not found");

    card.password = decrypt(card.password);
    card.securityCode = decrypt(card.securityCode);

    return card;
}

async function deleteCard(userId:number,id){
    const deleteCredential = await cardRepository.deleteCard(userId,id);
    if (!deleteCredential) throw forbiddenError("deleting request error");
    if (deleteCredential.count == 0) throw notFoundError("nothing to delete");

    return deleteCredential;
}

export const cardService = {
    createNewCard,
    findAllCards,
    findOneCard,
    deleteCard,
}