"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSoilAi = useSoilAi;
exports.SoilAi = SoilAi;
const react_1 = require("react");
const soilai_1 = require("soilai");
function useSoilAi() {
    (0, react_1.useEffect)(() => {
        if (location.hostname.includes("localhost")) {
            const remove = (0, soilai_1.initializeSoilAi)("react");
            return () => {
                remove();
            };
        }
    }, []);
}
function SoilAi() {
    useSoilAi();
    return null;
}
