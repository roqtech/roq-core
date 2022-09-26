"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewrelicTransport = exports.GoogleCloudTransport = exports.GkeGoogleCloudTransport = void 0;
var gke_google_cloud_transport_1 = require("../../logger/transports/gke-google-cloud.transport");
Object.defineProperty(exports, "GkeGoogleCloudTransport", { enumerable: true, get: function () { return gke_google_cloud_transport_1.GkeGoogleCloudTransport; } });
var google_cloud_transport_1 = require("../../logger/transports/google-cloud.transport");
Object.defineProperty(exports, "GoogleCloudTransport", { enumerable: true, get: function () { return google_cloud_transport_1.GoogleCloudTransport; } });
var newrelic_transport_1 = require("../../logger/transports/newrelic.transport");
Object.defineProperty(exports, "NewrelicTransport", { enumerable: true, get: function () { return newrelic_transport_1.NewrelicTransport; } });
