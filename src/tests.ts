import formSchemaFor from "./components/form-schema";
import graphqlJSONSchema from "../example/schema.json";
// import { Campos, Empresa } from "../models";

type entitys = "Campo" | "Tela" | "Model" | "View" | "Api" | "Modulo";
const entity: entitys[] = ["Campo", "Tela", "Model", "View", "Api", "Modulo"]

const testa_para_campo_Modulo = (entity: entitys) => console.log(
    entity, formSchemaFor(graphqlJSONSchema, entity, "create")
);

export default function tests() {
    return entity.map(testa_para_campo_Modulo)
    return false
}