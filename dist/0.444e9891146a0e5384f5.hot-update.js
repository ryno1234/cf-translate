webpackHotUpdate(0,{

/***/ 50:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tmethods: {\n\t\tchange: function change() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t\tthis.$store.commit('showLanguageChoice', true);\n\t\t\tthis.showChooser = false;\n\t\t},\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.$store.commit('showLanguageChoice', true);\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1DaG9vc2VyLnZ1ZT82NWRjZTUyMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7OzRCQUdBO3NCQUNBOzRDQUNBO3NCQUNBO0FBQ0E7O0FBQ0E7O2tEQUNBO3dCQUNBO3dCQUNBOzhDQUNBO3dCQUNBO0FBQ0E7QUFFQTs0Q0FDQTtzQkFDQTtBQUVBO0FBbEJBO0FBREEiLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiXG5cdFx0PlxuXHRcdFx0PGxhYmVsIGZvcj1cImNmLXRyYW5zbGF0aW9ucy1mb3JtXCI+XG5cdFx0XHRcdHt7c3RyaW5ncy5jaG9vc2VfZm9ybX19XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWZpZWxkXCI+XG5cdFx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0XHRjbGFzcz1cImJsb2NrLWlucHV0XCJcblx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0aW9ucy1mb3JtXCJcblx0XHRcdFx0XHR2LW1vZGVsPVwiZm9ybVwiXG5cdFx0XHRcdFx0QGNoYW5nZT1cImNoYW5nZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uPjwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb25cblx0XHRcdFx0XHRcdHYtZm9yPVwiZm9ybSBpbiBmb3Jtc1wiXG5cdFx0XHRcdFx0XHR2LWJpbmQ6dmFsdWU9XCJmb3JtLklEXCJcblxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt7Zm9ybS5uYW1lfX1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHQ8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cblx0ZXhwb3J0IGRlZmF1bHR7XG5cdFx0bWV0aG9kczp7XG5cdFx0XHRjaGFuZ2UoKXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93TGFuZ3VhZ2VDaG9pY2UnLCB0cnVlICk7XG5cdFx0XHRcdHRoaXMuc2hvd0Nob29zZXIgPSBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRzYXZlKCl7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCAnc2F2ZScgKS50aGVuKCByID0+IHtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzYXZpbmcnICk7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dMYW5ndWFnZUNob2ljZScsIHRydWUgKTtcblx0XHRcdFx0XHR0aGlzLnNob3dDaG9vc2VyID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRhZGRCdXR0b25DbGljaygpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93QWRkTGFuZ3VhZ2UnICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZm9ybUNob29zZXIudnVlPzY1ZGNlNTIwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 78:
/* unknown exports provided */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap&-autoprefixer!./~/vue-loader/lib/style-compiler?{"id":"data-v-a6d003c2","scoped":true,"hasInlineConfig":false}!./~/vue-loader/lib/selector.js?type=styles&index=0!./client/components/formSaver.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 54)();\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\", {\"version\":3,\"sources\":[],\"names\":[],\"mappings\":\"\",\"file\":\"formSaver.vue\",\"sourceRoot\":\"webpack://\"}]);\n\n// exports\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL2Zvcm1TYXZlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7O0FBR0E7QUFDQSwrR0FBZ0gsbUdBQW1HOztBQUVuTiIsImZpbGUiOiI3OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJmb3JtU2F2ZXIudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCYtYXV0b3ByZWZpeGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWE2ZDAwM2MyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2xpZW50L2NvbXBvbmVudHMvZm9ybVNhdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 79:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formSaver.vue ***!
  \*****************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\tshowChooser: true\n\t\t};\n\t},\n\n\tcomputed: {\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1TYXZlci52dWU/MTI0MmUwYTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO3VCQUVBOztnQkFHQTtBQUZBO0FBR0E7OztnQ0FFQTtrREFDQTtBQUVBO0FBSkE7QUFOQSIsImZpbGUiOiI3OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGNmLXRyYW5zbGF0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgIGlkPVwiY2YtdHJhbnNsYXRlLXNhdmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzYXZlXCJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJzYXZlVGV4dFwiXG4gICAgICAgID5cblxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8cFxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNmLXRyYW5zbGF0ZS1pbmZvLWJsb2NrIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3tzdHJpbmdzLnlvdV9hcmVfdHJhbnN9fSB7e2Zvcm0uaW5mby5uYW1lfX1cbiAgICAgICAgPC9wPlxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2hvd0Nob29zZXI6IHRydWUsXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0c2F2ZVRleHQoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc2F2aW5nID8gJ1NhdmluZycgOiAnU2F2ZSc7XG5cdFx0XHR9XG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZvcm1TYXZlci52dWU/MTI0MmUwYTQiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})