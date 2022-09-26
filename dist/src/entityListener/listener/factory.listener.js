"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryListener = void 0;
const listener_1 = require("../../entityListener/listener");
class FactoryListener extends listener_1.EntityListener {
    constructor(entityClass, className, connection, platformClientEventService, configService, excludedFields) {
        super(platformClientEventService, configService.get('application.entityListener.eventName'), excludedFields);
        this.entityClass = entityClass;
        this.className = className;
        this.connection = connection;
        connection.subscribers.push(this);
    }
    listenTo() {
        return this.entityClass;
    }
}
exports.FactoryListener = FactoryListener;
