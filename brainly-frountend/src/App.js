"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = require("./components/Button");
const PlusIcon_1 = require("./icons/PlusIcon");
const App = () => {
    return (<div>
      
      <Button_1.Button variant='primary' text='share' size='sm'/>
      <Button_1.Button startIcon={<PlusIcon_1.PlusIcon />} variant='secondary' text='hello' size='md'/>
      
    </div>);
};
exports.default = App;
