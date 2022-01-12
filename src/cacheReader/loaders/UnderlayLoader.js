export class UnderlayDefinition {

}
export default class UnderlayLoader {

    load(bytes, id) {
        let def = new UnderlayDefinition();
        def.id = id;
        let dataview = new DataView(bytes.buffer);
        do {
            var opcode = dataview.readUint8();
            this.handleOpcode(def, opcode, dataview);
        } while (opcode != 0);

        return def;
    }

    handleOpcode(def, opcode, dataview) {
        if (opcode == 0) {
            return;
        }
        if (opcode == 1)
        {
            def.color = dataview.readInt24();
        }
    }
}