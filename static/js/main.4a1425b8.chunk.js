(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Lenovo_Desktop_cfc_lecture_12_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_logo_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)("0"),_useState2=Object(C_Users_Lenovo_Desktop_cfc_lecture_12_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),oldexpression=_useState2[0],setOldExpression=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(" "),_useState4=Object(C_Users_Lenovo_Desktop_cfc_lecture_12_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),expression=_useState4[0],setExpression=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)("ANS"),_useState6=Object(C_Users_Lenovo_Desktop_cfc_lecture_12_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),prev=_useState6[0],setPrev=_useState6[1],numerics=new Set("0123456789"),operators=new Set("+-*/%"),buttons=["(",")","%","AC","7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"],evalEx=function evalEx(){var evalution=eval(expression);setOldExpression(" ans ="+expression),setExpression(String(evalution)),setPrev("ANS")},putNumerics=function(e){"ANS"==prev?(setOldExpression(expression),setExpression(e)):setExpression(expression+e),setPrev("NUM")},putDelete=function(e){expression.length>=1&&(setExpression(expression.slice(-1,0)),setOldExpression(oldexpression.slice(-1,0))),setPrev("DEL")},putOperator=function(e){"OP"!=prev&&setExpression(expression+e),setPrev("OP")},handleKeyUp=function(e){console.log(e.key),"Backspace"===e.key?putDelete(e.key):numerics.has(e.key)?putNumerics(e.key):operators.has(e.key)?putOperator(e.key):"Enter"===e.key&&evalEx()};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"App",tabIndex:0,onKeyUp:handleKeyUp,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{width:"400px",height:"200px",background:"#ffffff",display:"flex",flexDirection:"column",alignItems:"flex-end",padding:"20px",borderRadius:"10px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6",{children:oldexpression}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1",{children:expression})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{width:"400px",height:"200px",margin:"5px",background:"#ffffff",display:"flex",flexDirection:"row",alignItems:"flex-end",padding:"20px",borderRadius:"10px",flexWrap:"wrap"},children:buttons.map((function(e,_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{style:{width:"90px",padding:"10px",marginLeft:"8px"},onClick:function(){"="===e?evalEx():"AC"===e?putDelete():numerics.has(e)?putNumerics(e):operators.has(e)&&putOperator(e)},children:e})}))})]})}__webpack_exports__.a=App},,,,,function(e,_,t){},function(e,_,t){"use strict";t.p},function(e,_,t){},,function(e,_,t){"use strict";t.r(_);var s=t(1),r=t.n(s),n=t(4),a=t.n(n),c=(t(10),t(5)),o=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(_){var t=_.getCLS,s=_.getFID,r=_.getFCP,n=_.getLCP,a=_.getTTFB;t(e),s(e),r(e),n(e),a(e)}))},p=t(0);a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(c.a,{})}),document.getElementById("root")),o()}],[[14,1,2]]]);
//# sourceMappingURL=main.4a1425b8.chunk.js.map