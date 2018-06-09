import { serializeAs, deserializeAs, inheritSerialization, Serialize, Deserialize, GenericDeserialize } from "cerialize";
export class TypedSerializerCreator {
    ToJSON(obj, format = false) {
        return JSON.stringify(Serialize(obj), null, format ? "  " : 0);
    }
    // tslint:disable-next-line:ban-types
    FromJSON(json, type) {
        return !type ?
            Deserialize(JSON.parse(json)) :
            GenericDeserialize(JSON.parse(json), type);
    }
    ToObject(obj, format = false) {
        return Serialize(obj);
    }
    // tslint:disable-next-line:ban-types
    FromObject(json, type) {
        return !type ?
            Deserialize(json) :
            GenericDeserialize(json, type);
    }
}
/** Bonbons built-in static type contract serialization tool (based on cerialize) */
export const TypedSerializer = new TypedSerializerCreator();
export { serializeAs as Serialize, deserializeAs as Deserialize, inheritSerialization as Extends };
//# sourceMappingURL=typed-serializer.js.map