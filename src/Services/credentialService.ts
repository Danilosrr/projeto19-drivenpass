import { conflictError, forbiddenError, notFoundError } from "../Middlewares/errorHandler.js";
import { createCredential, CredentialRepository } from "../Repositories/credentialRepository.js";
import { decrypt, encrypt } from "../Utils/hashUtil.js";

async function createNewCredential(credential:createCredential) {
    const { userId, name, url, username } = credential;
    const password = await encrypt(credential.password);

    const usercredentialFound = await CredentialRepository.findByNameAndUser(name,userId);
    if (usercredentialFound) throw conflictError("name already exists");

    const create = await CredentialRepository.createCredential({ userId, name, url, username, password });
    return create;
}

async function findAllCredentials(userId:number){
    const credentials = await CredentialRepository.findAllByUser(userId);

    if (credentials.length>0){ 
        credentials.forEach(credential=>( 
            credential.password = decrypt(credential.password)
        ));
    };

    return credentials;
}

async function findOneCredential(userId:number,id){
    const credential = await CredentialRepository.findByIdAndUser(userId,id);
    if (!credential) throw notFoundError("credential not found");

    credential.password = decrypt(credential.password);

    return credential;
}

async function deleteCredential(userId:number,id){
    const deleteCredential = await CredentialRepository.deleteCredential(userId,id);
    if (!deleteCredential) throw forbiddenError("deleting request error");
    if (deleteCredential.count == 0) throw notFoundError("nothing to delete");

    return deleteCredential;
}

export const credentialService = {
    createNewCredential,
    findAllCredentials,
    findOneCredential,
    deleteCredential,
}