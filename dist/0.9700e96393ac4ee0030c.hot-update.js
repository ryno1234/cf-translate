webpackHotUpdate(0,{

/***/ 45:
/* exports provided: ACTIONS */
/* exports used: ACTIONS */
/*!*********************************!*\
  !*** ./client/store/actions.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(/*! axios */ 22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promise_polyfill__ = __webpack_require__(/*! ../promise-polyfill */ 44);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ACTIONS; });\n\n\n\nvar timeout = 30000;\n\nvar localAPI = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({\n\tbaseURL: CF_TRANS_ADMIN.data.api.root,\n\ttimeout: timeout,\n\theaders: { 'X-WP-Nonce': CF_TRANS_ADMIN.data.rest_nonce }\n});\n\nvar _forms = {};\nvar saveForm = function saveForm(ID, r, context) {\n\t_forms[ID] = r.data.form;\n\tcontext.commit('form', r.data.form);\n};\nvar ACTIONS = {\n\taddLanguage: function addLanguage(context, payload) {\n\t\treturn localAPI.post('/language', {\n\t\t\tform_id: payload.form,\n\t\t\tlanguage: payload.language\n\n\t\t}).then(function (r) {\n\t\t\treturn saveForm(payload.form, r, context);\n\t\t}).catch(function (error) {\n\t\t\treturn error;\n\t\t});\n\t},\n\tform: function form(context, ID) {\n\t\tif (!_forms.hasOwnProperty(ID)) {\n\t\t\tlocalAPI.get('/form', {\n\t\t\t\tparams: {\n\t\t\t\t\tform_id: ID\n\t\t\t\t}\n\t\t\t}).then(function (r) {\n\t\t\t\tcontext.commit('saving', false);\n\t\t\t\tsaveForm(ID, r, context);\n\t\t\t}).catch(function (error) {\n\t\t\t\tconsole.log(error);\n\t\t\t});\n\t\t} else {\n\t\t\tcontext.commit('form', _forms[ID]);\n\t\t}\n\t},\n\tsave: function save(context) {\n\t\tvar data = {\n\t\t\tform_id: context.getters.formId,\n\t\t\tlanguage: context.getters.language,\n\t\t\tfields: context.getters.fields\n\t\t};\n\t\treturn localAPI.post('/', data).then(function (r) {\n\t\t\tconsole.log(r.data);\n\t\t}).catch(function (error) {\n\t\t\treturn error;\n\t\t});\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbInRpbWVvdXQiLCJsb2NhbEFQSSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIkNGX1RSQU5TX0FETUlOIiwiZGF0YSIsImFwaSIsInJvb3QiLCJoZWFkZXJzIiwicmVzdF9ub25jZSIsIl9mb3JtcyIsInNhdmVGb3JtIiwiSUQiLCJyIiwiY29udGV4dCIsImZvcm0iLCJjb21taXQiLCJBQ1RJT05TIiwiYWRkTGFuZ3VhZ2UiLCJwYXlsb2FkIiwicG9zdCIsImZvcm1faWQiLCJsYW5ndWFnZSIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiaGFzT3duUHJvcGVydHkiLCJnZXQiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwic2F2ZSIsImdldHRlcnMiLCJmb3JtSWQiLCJmaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsS0FBaEI7O0FBRUEsSUFBTUMsV0FBWSw2Q0FBQUMsQ0FBTUMsTUFBTixDQUFhO0FBQzlCQyxVQUFTQyxlQUFlQyxJQUFmLENBQW9CQyxHQUFwQixDQUF3QkMsSUFESDtBQUU5QlIsVUFBU0EsT0FGcUI7QUFHOUJTLFVBQVMsRUFBQyxjQUFjSixlQUFlQyxJQUFmLENBQW9CSSxVQUFuQztBQUhxQixDQUFiLENBQWxCOztBQVFBLElBQUlDLFNBQVMsRUFBYjtBQUNBLElBQUlDLFdBQVcsU0FBWEEsUUFBVyxDQUFVQyxFQUFWLEVBQWNDLENBQWQsRUFBaUJDLE9BQWpCLEVBQTBCO0FBQ3hDSixRQUFPRSxFQUFQLElBQWFDLEVBQUVSLElBQUYsQ0FBT1UsSUFBcEI7QUFDQUQsU0FBUUUsTUFBUixDQUFlLE1BQWYsRUFBdUJILEVBQUVSLElBQUYsQ0FBT1UsSUFBOUI7QUFDQSxDQUhEO0FBSU8sSUFBTUUsVUFBVTtBQUN0QkMsWUFEc0IsdUJBQ1ZKLE9BRFUsRUFDREssT0FEQyxFQUNRO0FBQzdCLFNBQU9uQixTQUFTb0IsSUFBVCxDQUFjLFdBQWQsRUFBMkI7QUFDakNDLFlBQVNGLFFBQVFKLElBRGdCO0FBRWpDTyxhQUFVSCxRQUFRRzs7QUFGZSxHQUEzQixFQUtMQyxJQUxLLENBS0EsYUFBTTtBQUNYLFVBQU9aLFNBQVNRLFFBQVFKLElBQWpCLEVBQXVCRixDQUF2QixFQUEwQkMsT0FBMUIsQ0FBUDtBQUNBLEdBUEssRUFRTFUsS0FSSyxDQVFFLGlCQUFTO0FBQ2hCLFVBQU9DLEtBQVA7QUFDQSxHQVZLLENBQVA7QUFXQSxFQWJxQjtBQWN0QlYsS0Fkc0IsZ0JBY2pCRCxPQWRpQixFQWNSRixFQWRRLEVBY0w7QUFDaEIsTUFBSSxDQUFFRixPQUFPZ0IsY0FBUCxDQUFzQmQsRUFBdEIsQ0FBTixFQUFpQztBQUNoQ1osWUFBUzJCLEdBQVQsQ0FBYSxPQUFiLEVBQXNCO0FBQ3JCQyxZQUFRO0FBQ1BQLGNBQVNUO0FBREY7QUFEYSxJQUF0QixFQUtDVyxJQUxELENBS00sYUFBTTtBQUNYVCxZQUFRRSxNQUFSLENBQWUsUUFBZixFQUF5QixLQUF6QjtBQUNBTCxhQUFTQyxFQUFULEVBQWFDLENBQWIsRUFBZ0JDLE9BQWhCO0FBQ0EsSUFSRCxFQVNDVSxLQVRELENBU1EsaUJBQVM7QUFDaEJLLFlBQVFDLEdBQVIsQ0FBWUwsS0FBWjtBQUNBLElBWEQ7QUFhQSxHQWRELE1BY0s7QUFDSlgsV0FBUUUsTUFBUixDQUFnQixNQUFoQixFQUF3Qk4sT0FBT0UsRUFBUCxDQUF4QjtBQUNBO0FBRUQsRUFqQ3FCO0FBa0N0Qm1CLEtBbENzQixnQkFrQ2hCakIsT0FsQ2dCLEVBa0NQO0FBQ2QsTUFBSVQsT0FBTztBQUNWZ0IsWUFBU1AsUUFBUWtCLE9BQVIsQ0FBZ0JDLE1BRGY7QUFFVlgsYUFBVVIsUUFBUWtCLE9BQVIsQ0FBZ0JWLFFBRmhCO0FBR1ZZLFdBQVFwQixRQUFRa0IsT0FBUixDQUFnQkU7QUFIZCxHQUFYO0FBS0EsU0FBT2xDLFNBQVNvQixJQUFULENBQWMsR0FBZCxFQUFtQmYsSUFBbkIsRUFDTGtCLElBREssQ0FDQSxhQUFNO0FBQ1hNLFdBQVFDLEdBQVIsQ0FBWWpCLEVBQUVSLElBQWQ7QUFDQSxHQUhLLEVBSUxtQixLQUpLLENBSUUsaUJBQVM7QUFDaEIsVUFBT0MsS0FBUDtBQUNBLEdBTkssQ0FBUDtBQU9BO0FBL0NxQixDQUFoQiIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQcm9taXNlIGZyb20gJy4uL3Byb21pc2UtcG9seWZpbGwnO1xuY29uc3QgdGltZW91dCA9IDMwMDAwO1xuXG5jb25zdCBsb2NhbEFQSSAgPSBheGlvcy5jcmVhdGUoe1xuXHRiYXNlVVJMOiBDRl9UUkFOU19BRE1JTi5kYXRhLmFwaS5yb290LFxuXHR0aW1lb3V0OiB0aW1lb3V0LFxuXHRoZWFkZXJzOiB7J1gtV1AtTm9uY2UnOiBDRl9UUkFOU19BRE1JTi5kYXRhLnJlc3Rfbm9uY2V9XG59KTtcblxuXG5cbnZhciBfZm9ybXMgPSB7fTtcbnZhciBzYXZlRm9ybSA9IGZ1bmN0aW9uIChJRCwgciwgY29udGV4dCkge1xuXHRfZm9ybXNbSURdID0gci5kYXRhLmZvcm07XG5cdGNvbnRleHQuY29tbWl0KCdmb3JtJywgci5kYXRhLmZvcm0pO1xufTtcbmV4cG9ydCBjb25zdCBBQ1RJT05TID0ge1xuXHRhZGRMYW5ndWFnZShjb250ZXh0LCBwYXlsb2FkICl7XG5cdFx0cmV0dXJuIGxvY2FsQVBJLnBvc3QoJy9sYW5ndWFnZScsIHtcblx0XHRcdGZvcm1faWQ6IHBheWxvYWQuZm9ybSxcblx0XHRcdGxhbmd1YWdlOiBwYXlsb2FkLmxhbmd1YWdlXG5cblx0XHR9KVxuXHRcdFx0LnRoZW4ociA9PiAge1xuXHRcdFx0XHRyZXR1cm4gc2F2ZUZvcm0ocGF5bG9hZC5mb3JtLCByLCBjb250ZXh0KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGZvcm0oY29udGV4dCwgSUQpe1xuXHRcdGlmKCAhIF9mb3Jtcy5oYXNPd25Qcm9wZXJ0eShJRCkgKXtcblx0XHRcdGxvY2FsQVBJLmdldCgnL2Zvcm0nLCB7XG5cdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdGZvcm1faWQ6IElEXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQudGhlbihyID0+ICB7XG5cdFx0XHRcdGNvbnRleHQuY29tbWl0KCdzYXZpbmcnLCBmYWxzZSApO1xuXHRcdFx0XHRzYXZlRm9ybShJRCwgciwgY29udGV4dCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdH0pO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRjb250ZXh0LmNvbW1pdCggJ2Zvcm0nLCBfZm9ybXNbSURdICk7XG5cdFx0fVxuXG5cdH0sXG5cdHNhdmUgKGNvbnRleHQpIHtcblx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdGZvcm1faWQ6IGNvbnRleHQuZ2V0dGVycy5mb3JtSWQsXG5cdFx0XHRsYW5ndWFnZTogY29udGV4dC5nZXR0ZXJzLmxhbmd1YWdlLFxuXHRcdFx0ZmllbGRzOiBjb250ZXh0LmdldHRlcnMuZmllbGRzLFxuXHRcdH07XG5cdFx0cmV0dXJuIGxvY2FsQVBJLnBvc3QoJy8nLCBkYXRhKVxuXHRcdFx0LnRoZW4ociA9PiAge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyLmRhdGEgKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0fSk7XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmUvYWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})