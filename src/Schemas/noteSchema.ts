import joi from "joi"
import { bodyNote } from "../Repositories/noteRepository.js";

export const noteSchema = joi.object<bodyNote>({
    title: joi.string().max(50).required(),
    note: joi.string().max(1000).required()
});