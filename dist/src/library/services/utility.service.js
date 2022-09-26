"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
let UtilityService = class UtilityService {
    constructor() { }
    getInfoFields(info) {
        var _a;
        const fields = ['id', 'createdAt', 'updatedAt', 'roqIdentifier'];
        const selections = (_a = info.fieldNodes[0].selectionSet) === null || _a === void 0 ? void 0 : _a.selections;
        const dataSelection = selections.find((selection) => selection.name.value === 'data');
        if (dataSelection) {
            if ('selectionSet' in dataSelection) {
                dataSelection.selectionSet.selections.forEach((selection) => {
                    if (!selection.selectionSet) {
                        fields.push(`${selection.name.value}`);
                    }
                    if (selection.selectionSet &&
                        !selection.selectionSet.selections.find((s) => s.name.value === 'data')) {
                        fields.push(`${selection.name.value}Id`);
                    }
                });
            }
        }
        else {
            selections.forEach((selection) => {
                if (!selection.selectionSet) {
                    fields.push(`${selection.name.value}`);
                }
                if (selection.selectionSet &&
                    !selection.selectionSet.selections.find((s) => s.name.value === 'data')) {
                    fields.push(`${selection.name.value}Id`);
                }
            });
        }
        return fields;
    }
};
UtilityService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], UtilityService);
exports.UtilityService = UtilityService;
