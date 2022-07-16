import { createDocument } from "../Controllers/docController.js";
import { conflictError, forbiddenError, notFoundError } from "../Middlewares/errorHandler.js";
import { createDoc, documentRepository } from "../Repositories/docRepository.js";

async function createNewDoc(document:createDoc) {
    const { userId, title } = document;

    const userTitleFound = await documentRepository.findByTitleAndUser(title,userId);
    if (userTitleFound) throw conflictError("doc title already exists");

    const create = await documentRepository.createDoc(document);
    return create;
}

async function findAllDocuments(userId:number){
    const documents = await documentRepository.findAllByUser(userId);

    return documents;
}

async function findOneDocument(userId:number,id){
    const document = await documentRepository.findByIdAndUser(id,userId);
    if (!document) throw notFoundError("credential not found");

    return document;
}

async function deleteDocument(userId:number,id){
    const deleteCredential = await documentRepository.deleteDoc(userId,id);
    if (!deleteCredential) throw forbiddenError("deleting request error");
    if (deleteCredential.count == 0) throw notFoundError("nothing to delete");

    return deleteCredential;
}

export const documentService = {
    createNewDoc,
    findAllDocuments,
    findOneDocument,
    deleteDocument
} 