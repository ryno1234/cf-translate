webpackHotUpdate(0,{

/***/ 78:
/* unknown exports provided */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap&-autoprefixer!./~/vue-loader/lib/style-compiler?{"id":"data-v-a6d003c2","scoped":true,"hasInlineConfig":false}!./~/vue-loader/lib/selector.js?type=styles&index=0!./client/components/formSaver.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 54)();\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\", {\"version\":3,\"sources\":[],\"names\":[],\"mappings\":\"\",\"file\":\"formSaver.vue\",\"sourceRoot\":\"webpack://\"}]);\n\n// exports\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL2Zvcm1TYXZlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7O0FBR0E7QUFDQSx5SUFBMEksbUdBQW1HOztBQUU3TyIsImZpbGUiOiI3OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJmb3JtU2F2ZXIudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCYtYXV0b3ByZWZpeGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWE2ZDAwM2MyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2xpZW50L2NvbXBvbmVudHMvZm9ybVNhdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 79:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formSaver.vue ***!
  \*****************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\tshowChooser: true\n\t\t};\n\t},\n\n\tcomputed: {\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.$store.commit('showLanguageChoice', true);\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1TYXZlci52dWU/MTFjM2ZlYjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTs7O3VCQUVBOztnQkFHQTtBQUZBO0FBR0E7OztnQ0FFQTtrREFDQTtBQUVBO0FBSkE7OztBQU1BOztrREFDQTt3QkFDQTt3QkFDQTs4Q0FDQTt3QkFDQTtBQUNBO0FBQ0E7NENBQ0E7c0JBQ0E7QUFFQTtBQVpBO0FBWEEiLCJmaWxlIjoiNzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBjZi10cmFuc2xhdGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpZD1cImNmLXRyYW5zbGF0ZS1zYXZlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic2F2ZVwiXG4gICAgICAgICAgICAgICAgdi1odG1sPVwic2F2ZVRleHRcIlxuICAgICAgICA+XG5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjZi10cmFuc2xhdGUtaW5mby1ibG9jayBkZXNjcmlwdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHt7c3RyaW5ncy55b3VfYXJlX3RyYW5zfX0ge3tmb3JtLmluZm8ubmFtZX19XG4gICAgICAgIDwvcD5cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHNob3dDaG9vc2VyOiB0cnVlLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHNhdmVUZXh0KCl7XG5cdFx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnNhdmluZyA/ICdTYXZpbmcnIDogJ1NhdmUnO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczp7XG5cdFx0XHRzYXZlKCl7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCAnc2F2ZScgKS50aGVuKCByID0+IHtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzYXZpbmcnICk7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dMYW5ndWFnZUNob2ljZScsIHRydWUgKTtcblx0XHRcdFx0XHR0aGlzLnNob3dDaG9vc2VyID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0YWRkQnV0dG9uQ2xpY2soKXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0fVxuICAgICAgICB9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmb3JtU2F2ZXIudnVlPzExYzNmZWI1Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})