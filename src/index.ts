/* 
    Component created by capivara-cli https://capivarajs.github.io/
*/
import capivara from 'capivarajs';
import template from './component/many-to-one.template.html';
import style from './component/many-to-one.style.scss';
import { CapivaraManytoone } from './component/many-to-one.component';

const Component = {
    /**
     * @name template
     * @description Applies the visual part of the component
     */
    template  : template,
    /**
     * @name style
     * @description Import component style
     */
    style     : style,
    /**
     * @name constants
     * @description Declares the constants that will be accepted by component. See https://capivarajs.github.io/components.html#constants
     */
    constants: ['title','fieldSource'],
    /**
     * @name functions
     * @description Declares the functions that will be accepted by component. See https://capivarajs.github.io/components.html#functions
     */
    functions: ['search'],
    /**
     * @name bindings
     * @description Declares the variables that will be accepted by component. See https://capivarajs.github.io/components.html#bindings
     */
    bindings: [],
    /**
     * @name controller
     * @description Sets the scope of the component
     */
    controller: CapivaraManytoone
};

export default capivara.component('cp-many-to-one', Component);