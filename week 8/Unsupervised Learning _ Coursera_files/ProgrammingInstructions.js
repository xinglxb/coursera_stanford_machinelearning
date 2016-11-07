define("bundles/confirmNavigation/nls/confirmNavigation",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/page/lib/nls/metatagsAddressBook",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/page",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/lib/nls/moment.lang",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/requirejs/plugins/lazy",["require","exports","module"],function(require,exports,module){var e={version:"0.0.1",load:function load(e,r,u,i){var n=function getModule(n){r([e],function(e){return n(e)})};return n.lazy={moduleId:e},u(n)}};module.exports=e});

define("bundles/programming/api/immediate/instructions",["require","exports","module","bundles/phoenix/lib/apiWrapper"],function(require,exports,module){var e=require("bundles/phoenix/lib/apiWrapper");module.exports=e("/api/onDemandProgrammingImmediateInstructions.v1/",{type:"rest"})});
define("bundles/programming/data/immediate/instructions",["require","exports","module","js/lib/stringKeyTuple","jsuri","bundles/programming/api/immediate/instructions"],function(require,exports,module){var i=require("js/lib/stringKeyTuple"),e=require("jsuri"),r=require("bundles/programming/api/immediate/instructions");module.exports=function(t){var n=t.courseId,s=t.itemId,u=i.tupleToStringKey([n,s]),m=new e(u);return r.get(m.toString())}});
define("bundles/programming/promises/immediate/instructions",["require","exports","module","q","bundles/naptime/handleResponse","bundles/phoenix/template/models/userIdentity","bundles/programming/data/immediate/instructions","bundles/programming/models/instructions"],function(require,exports,module){var e=require("q"),n=require("bundles/naptime/handleResponse"),t=require("bundles/phoenix/template/models/userIdentity"),s=require("bundles/programming/data/immediate/instructions"),i=require("bundles/programming/models/instructions");module.exports=function(r){return t.get("authenticated")?s(r).then(n).then(function(e){var n=e.elements[0];return new i(n,{parse:!0})}):e({})}});
define("js/lib/require.memoize",["module"],function(module){function argsToJsonHasher(){var r=Array.prototype.slice.call(arguments);return JSON.stringify(r)}function memoize(e,t){var n={};t=t||argsToJsonHasher;var r=function memoized(){var r=t.apply(this,arguments);return r in n||(n[r]=e.apply(this,arguments)),n[r]};return r.force=function(){return r.clear.apply(this,arguments),r.apply(this,arguments)},r.clear=function(){var r=t.apply(this,arguments);delete n[r]},r.reset=function(){n={}},r}var r={version:"0.0.1",load:function load(r,n,t,e){n([r],function(r){t(memoize(r))})}};return r});






define("bundles/phoenix/lib/eventDefinitions",["require","exports","module","underscore","bundles/phoenix/template/models/userIdentity"],function(require,exports,module){var _=require("underscore"),e=require("bundles/phoenix/template/models/userIdentity");module.exports={metadata:function metadata(t,e){return e=e||"itemMetadata",function(){return this[e].get(t)}},user:{id:function id(){return e.get("id")}}}});

define("nls/code-evaluator",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/cml",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});



define("nls/phoenix",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/ondemand",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/programming",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define("bundles/programming/api/gradedScriptTokens",["require","exports","module","bundles/phoenix/template/models/userIdentity","pages/open-course/common/naptimeItemClient"],function(require,exports,module){var n=require("bundles/phoenix/template/models/userIdentity"),e=require("pages/open-course/common/naptimeItemClient"),t="onDemandProgrammingGradedScriptTokens.v1";module.exports={get:function get(n){var r=new e(n);return r.getWithUserCourseItemId(t,{fields:["secret","issuedTo","issuedAt","expiresAt"]})},newToken:function newToken(r,i){var o=new e(r),s=null,d={courseId:r.get("course").get("id"),itemId:r.get("id"),learnerId:n.get("id"),verifiableId:i||null};return o.create(t,d,s,!1)}}});
define("bundles/programming/api/ungradedScriptTokens",["require","exports","module","bundles/phoenix/template/models/userIdentity","pages/open-course/common/naptimeItemClient"],function(require,exports,module){var t=require("bundles/phoenix/template/models/userIdentity"),e=require("pages/open-course/common/naptimeItemClient"),n="onDemandProgrammingUngradedScriptTokens.v1";module.exports={get:function get(t){var r=new e(t);return r.getWithUserCourseItemId(n,{fields:["secret","issuedTo","issuedAt","expiresAt"]})},newToken:function newToken(r,d){var i=new e(r),o=null,s={courseId:r.get("course").get("id"),itemId:r.get("id"),learnerId:t.get("id")};return i.create(n,s,o,!1)}}});

define('css!bundles/styleguide/learnerApp/cards',[],function(){})

define('css!bundles/programming/components/__styles__/ScriptTokenBox',[],function(){})
define("bundles/programming/components/ScriptTokenBox",["require","exports","module","moment","react","underscore","bundles/naptime/handleResponse","bundles/phoenix/components/Modal","bundles/phoenix/components/OrigamiRegion","bundles/phoenix/template/models/userIdentity","bundles/ondemand/components/assignments/HonorCodeAgreement","bundles/ondemand/utils/assignmentVerificationTest","js/lib/assert","js/lib/coursera.react-intl","i18n!nls/programming","bundles/programming/api/gradedScriptTokens","bundles/programming/api/ungradedScriptTokens","css!bundles/styleguide/learnerApp/cards.css","css!bundles/programming/components/__styles__/ScriptTokenBox.css"],function(require,exports,module){function _defaults(e,r){for(var i=Object.getOwnPropertyNames(r),t=0;t<i.length;t++){var n=i[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n,o,f=require("moment"),e=require("react"),_=require("underscore"),s=require("bundles/naptime/handleResponse"),l=require("bundles/phoenix/components/Modal"),T=require("bundles/phoenix/components/OrigamiRegion"),m=require("bundles/phoenix/template/models/userIdentity"),a=require("bundles/ondemand/components/assignments/HonorCodeAgreement"),r=require("bundles/ondemand/utils/assignmentVerificationTest"),p=r.fetchVerifiableId,u=r.verifyAssignment,d=require("js/lib/assert"),g=require("js/lib/coursera.react-intl"),i=g.FormattedMessage,t=require("i18n!nls/programming"),h=require("bundles/programming/api/gradedScriptTokens"),b=require("bundles/programming/api/ungradedScriptTokens");require("css!bundles/styleguide/learnerApp/cards.css"),require("css!bundles/programming/components/__styles__/ScriptTokenBox.css");var c={gradedProgramming:h,ungradedProgramming:b},y=(o=n=function(n){function ScriptTokenBox(){var o,e,r;_classCallCheck(this,ScriptTokenBox);for(var i=arguments.length,a=Array(i),t=0;i>t;t++)a[t]=arguments[t];return o=e=_possibleConstructorReturn(this,n.call.apply(n,[this].concat(a))),e.state={state:"ready",token:{},currentTime:Date.now(),agreementComplete:!1,generatingToken:!1},e.onSubmitHonorCodeAgreement=function(){e.setState({generatingToken:!0}),p().then(function(t){u(t,e.state.fullName).then(function(t){e.generateToken(t.get("id")),e.setState({isVerifying:!1,generatingToken:!1,agreementComplete:!1})})})},e.onVerificationComplete=function(t){t&&t.hasVerified===!0?e.generateToken(e.verificationViewModel.get("verifiableId")):e.generateToken(),e.setState({isVerifying:!1})},e.onTokenNotFound=function(){e.requiresVerification()?e.setState({state:"displaying"}):e.generateToken()},e.onTokenGenerated=function(){e.loadToken()},e.onFailedTokenGeneration=function(t){e.setState({state:"error",error:t})},e.onVerificationModalClose=function(){e.setState({isVerifying:!1})},e.onReceiveToken=function(t){e.setState({state:"displaying",token:t})},e.verifyAndGenerateToken=function(t){t&&t.preventDefault(),e.requiresVerification()?e.setState({isVerifying:!0}):e.generateToken()},e.updateCurrentTime=function(){e.setState({currentTime:Date.now()})},e.onHonorCodeAgreementComplete=function(t){e.setState({agreementComplete:!0,fullName:t})},e.onHonorCodeAgreementIncomplete=function(){e.setState({agreementComplete:!1})},r=o,_possibleConstructorReturn(e,r)}return _inherits(ScriptTokenBox,n),ScriptTokenBox.prototype.componentDidMount=function componentDidMount(){var e=this.props.itemMetadata.getTypeName();this.api=c[e],d(this.api,"Unknown assignment type: "+e),this.currentTimeInterval=setInterval(this.updateCurrentTime,1e3),this.loadToken()},ScriptTokenBox.prototype.componentWillUnmount=function componentWillUnmount(){clearInterval(this.currentTimeInterval)},ScriptTokenBox.prototype.isVerifiable=function isVerifiable(){return this.props.verificationDisplay.shouldPromptForVerification()},ScriptTokenBox.prototype.requiresVerification=function requiresVerification(){return this.isGraded()&&this.isVerifiable()},ScriptTokenBox.prototype.loadToken=function loadToken(){this.setState({state:"getting"}),this.api.get(this.props.itemMetadata).then(s).then(function(e){return e.elements[0]}).then(this.onReceiveToken,this.onTokenNotFound).done()},ScriptTokenBox.prototype.generateToken=function generateToken(e){this.setState({state:"generating"}),this.api.newToken(this.props.itemMetadata,e).then(this.onTokenGenerated,this.onFailedTokenGeneration)},ScriptTokenBox.prototype.isGraded=function isGraded(){return"gradedProgramming"===this.props.itemMetadata.getTypeName()},ScriptTokenBox.prototype.render=function render(){var o=this.state,r=o.state,n=o.token,c=o.currentTime,p=o.isVerifying,u=o.error,s=n&&n.expiresAt-c<=0;return e.createElement("div",{className:"rc-ScriptTokenBox well card-rich-interaction"},e.createElement("h3",{className:"head-2-text"},t("How to submit")),e.createElement("p",null,t("Copy the token below and run the submission script included in the assignment download.\n          When prompted, use your email address")," ",e.createElement("b",null,m.get("email_address")),"."),e.createElement("div",{className:"token-area bt3-text-center"},_(["getting","generating"]).contains(r)&&e.createElement("p",null,t("Loading token...")),_(["displaying"]).contains(r)&&e.createElement("div",null,n&&e.createElement("div",null,(!n.expiresAt||!s)&&e.createElement("h4",null,n.secret),n.expiresAt&&!s&&e.createElement("p",{className:"caption-text"},e.createElement(i,{message:t("This token expires in {expirationTime}"),expirationTime:f(n.expiresAt).fromNow(!0)})),n.expiresAt&&s&&e.createElement("p",{className:"caption-text"},t("Your token expired"))),e.createElement("p",null,e.createElement("button",{className:"button-link",onClick:this.verifyAndGenerateToken},t("Generate new token")))),_(["error"]).contains(r)&&e.createElement("div",null,e.createElement("p",null,e.createElement(i,{message:t("There was an error getting your token: {error}"),error:u})," ",e.createElement("button",{className:"button-link",onClick:this.verifyAndGenerateToken},"Click here to try to get it again")))),e.createElement("p",null,t("Your submission token is unique to you and should not be shared with anyone.\n          You may submit as many times as you like.")),p&&e.createElement(l,{className:"honor-code-modal",modalName:"Programming Assignment Token",handleClose:this.onVerificationModalClose},e.createElement("h2",{className:"head-2-text"},t("Honor Code")),e.createElement(a,{onAgreementComplete:this.onHonorCodeAgreementComplete,onAgreementIncomplete:this.onHonorCodeAgreementIncomplete,isShownInsideModal:!0}),e.createElement("div",{className:"align-right"},e.createElement("button",{className:"agreement-continue-button primary",disabled:!this.state.agreementComplete||this.state.generatingToken,onClick:this.onSubmitHonorCodeAgreement},t(this.state.generatingToken?"Loading...":"Continue")))))},ScriptTokenBox}(e.Component),n.propTypes={itemMetadata:e.PropTypes.object.isRequired,verificationDisplay:e.PropTypes.object.isRequired},n.contextTypes={fluxibleContext:e.PropTypes.object.isRequired},o);module.exports=y});
define("bundles/phoenix/lib/viewModel",["require","exports","module","backbone","bundles/phoenix/lib/mixin","js/lib/fsm"],function(require,exports,module){var Backbone=require("backbone"),i=require("bundles/phoenix/lib/mixin"),n=require("js/lib/fsm"),e=Backbone.Model.extend();i(e.prototype,n.FiniteStateMachine),module.exports=e});
define("bundles/programming/api/immediate/tokens",["require","exports","module","pages/open-course/common/naptimeItemClient"],function(require,exports,module){var e=require("pages/open-course/common/naptimeItemClient"),n="onDemandProgrammingTokens.v1";module.exports={get:function get(t){var o=new e(t);return o.getWithCourseItemId(n)},newToken:function newToken(t){var o=new e(t),r=null,i={courseId:t.get("course").get("id"),itemId:t.get("id")};return o.create(n,i,r,!1)}}});
define("bundles/programming/components/tokenBox/viewModels/tokenBox",["require","exports","module","underscore","bundles/phoenix/lib/viewModel","bundles/programming/api/immediate/tokens"],function(require,exports,module){var _=require("underscore"),t=require("bundles/phoenix/lib/viewModel"),e=require("bundles/programming/api/immediate/tokens"),n=t.extend({defaults:{state:"empty",secret:null},fsm:{states:["empty","getting","displaying","generating","error"],transitions:{displaying:["getting","generating"],generating:["getting","displaying"],error:["getting","generating"]}},initialize:function initialize(t,e){_(this).bindAll("onGenerateSuccess","onGenerateFailure","onGetSuccess","onGetFailure"),_(this).extend(_(e).pick("itemMetadata"))},_generateToken:function _generateToken(){return this.transition("generating"),e.newToken(this.itemMetadata).then(this.onGenerateSuccess,this.onGenerateFailure)},generateToken:function generateToken(){this._generateToken().done()},getToken:function getToken(){this.transition("getting"),e.get(this.itemMetadata).then(this.onGetSuccess,this.onGetFailure).done()},onGenerateSuccess:function onGenerateSuccess(t){var e=t.body.elements[0];this.transition("displaying",{secret:e.token||e.secret})},onGenerateFailure:function onGenerateFailure(e){throw this.transition("error"),e},onGetSuccess:function onGetSuccess(t){var e=t.elements[0];this.transition("displaying",{secret:e.token||e.secret})},onGetFailure:function onGetFailure(e){if(404===e.status)return this._generateToken();throw this.transition("error"),e}});module.exports=n});
!function(e){var n=function(e,t,a){var n=function template(i){var n=[],o={},t,a=i||{};return function(a){n.push('<div class="rc-TokenBox well"><h5 class="headline-2-text">How to submit</h5><p>Copy the token below and run the submission script included in the assignment download.\nWhen prompted, use your email address <b>'+e.escape(null==(t=a)?"":t)+'</b>.\n</p><div class="token-generator bt3-text-center"><div data-state="getting generating"><p>Loading token...</p></div><div data-state="displaying"><h5 data-js="secret" class="headline-2-text"></h5><p><a data-js="generate-token" href="#">Generate new token</a></p></div><div data-state="error"><p>There was an error getting your token:&nbsp;<a data-js="get-token" href="#">Click here to try to get it again</a></p></div></div><p>Your submission token is unique to you and should not be shared with anyone.\nYou may submit as many times as you like.</p></div>')}.call(this,"userEmail"in a?a.userEmail:"undefined"!=typeof userEmail?userEmail:void 0),n.join("")};return n};"function"==typeof define&&define.amd?define('bundles/programming/components/tokenBox/views/tokenBox.html',["js/vendor/jade"],function(e){var t,a;return n(e,t,a)}):e.jade.templates["bundles.programming.components.tokenBox.views.tokenBox"]=n(e.jade.helpers)}(window);

define('css!bundles/programming/components/tokenBox/styl/tokenBox',[],function(){})
define("bundles/programming/components/tokenBox/views/tokenBox",["require","exports","module","underscore","bundles/phoenix/lib/view","bundles/phoenix/template/models/userIdentity","bundles/programming/components/tokenBox/viewModels/tokenBox","bundles/programming/components/tokenBox/views/tokenBox.html","css!bundles/programming/components/tokenBox/styl/tokenBox.css"],function(require,exports,module){var _=require("underscore"),e=require("bundles/phoenix/lib/view"),t=require("bundles/phoenix/template/models/userIdentity"),n=require("bundles/programming/components/tokenBox/viewModels/tokenBox"),o=require("bundles/programming/components/tokenBox/views/tokenBox.html");require("css!bundles/programming/components/tokenBox/styl/tokenBox.css");var s=e.extend({template:o,stateModelProperty:"viewModel",events:{'click [data-js="generate-token"]':"generateToken",'click [data-js="get-token"]':"getToken"},templateOptions:function templateOptions(){return{userEmail:t.get("email_address")}},initialize:function initialize(e){_(this).extend(_(e).pick("itemMetadata")),this.viewModel=new n({},{itemMetadata:this.itemMetadata}),this.viewModel.getToken(),this.listenTo(this.viewModel,"change:secret",this.renderTokenValue)},postRender:function postRender(){this.renderTokenValue()},renderTokenValue:function renderTokenValue(){this.$$("secret").text(this.viewModel.get("secret"))},generateToken:function generateToken(e){e.preventDefault(),this.viewModel.generateToken()},getToken:function getToken(e){e.preventDefault(),this.viewModel.getToken()}});module.exports=s});
!function(i){var t=function(t,n,s){var i=function template(t){var i=[],n={},s;return i.push('<div class="c-programming-instructions bt3-row"><div class="bt3-col-md-8"><div data-js="instructions" class="c-programming-instructions-content"></div></div><div class="bt3-col-md-4"><div data-js="token-box"></div><div data-js="how-to-submit" class="bt3-hide well theme-light"><h3 class="c-title">How to submit</h3><p>When you\'re ready to submit, you can upload files for each part\nof the assignment on the "My submission" tab.</p></div></div></div>'),i.join("")};return i};"function"==typeof define&&define.amd?define('bundles/programming/views/instructions.html',["js/vendor/jade"],function(i){var n,s;return t(i,n,s)}):i.jade.templates["bundles.programming.views.instructions"]=t(i.jade.helpers)}(window);
define("bundles/programming/views/instructions",["require","exports","module","underscore","bundles/page/lib/metatagsAddressBook","bundles/phoenix/lib/eventDefinitions","bundles/phoenix/lib/renderContent","bundles/phoenix/lib/view","bundles/programming/components/ScriptTokenBox","bundles/programming/components/tokenBox/views/tokenBox","bundles/programming/views/instructions.html"],function(require,exports,module){var _=require("underscore"),t=require("bundles/page/lib/metatagsAddressBook"),e=require("bundles/phoenix/lib/eventDefinitions"),n=require("bundles/phoenix/lib/renderContent"),s=require("bundles/phoenix/lib/view"),o=require("bundles/programming/components/ScriptTokenBox"),i=require("bundles/programming/components/tokenBox/views/tokenBox"),a=require("bundles/programming/views/instructions.html"),r=s.extend({name:"body",template:a,multitracker:{namespace:"open_course_item.programing_instructions",baseValues:["open_course_id","module_id","lesson_id","item_id"],definitions:{open_course_id:e.metadata("course.id"),module_id:e.metadata("lesson.module.id"),lesson_id:e.metadata("lesson.id"),item_id:e.metadata("id")},events:{render:[]}},initialize:function initialize(e){_(this).extend(_(e).pick("instructions","itemMetadata","learnerAssignment","verificationDisplay")),t.setMetatags({pageName:"title-and-description",context:{title:this.itemMetadata.getName(),description:this.itemMetadata.get("lesson.module.description")}})},postRender:function postRender(){this.track("render")},renderSubviews:function renderSubviews(){switch(this.renderReactViews(),this.itemMetadata.getTypeName()){case"programming":this.region.append(i,{to:this.$$("token-box"),initialize:{itemMetadata:this.itemMetadata},module:i});break;case"gradedProgramming":case"ungradedProgramming":"script"===this.learnerAssignment.submissionBuilderSchema.get("typeName")?this.renderReactIntoElement(o,this.$$("token-box")[0],{itemMetadata:this.itemMetadata,verificationDisplay:this.verificationDisplay}):this.$$("how-to-submit").removeClass("bt3-hide")}},renderReactViews:function renderReactViews(){this.instructions&&n(this.instructions.get("assignmentInstructions"),this.$$("instructions"))}});module.exports=r});
define("bundles/ondemand/components/programming/ProgrammingInstructions",["require","exports","module","q","react","bundles/phoenix/components/OrigamiRegion","bundles/phoenix/lib/waitForStores","bundles/programming/promises/immediate/instructions","bundles/programming/promises/learnerAssignment","bundles/programming/views/instructions","bundles/verificationDisplay/models/verificationDisplay","pages/open-course/common/models/itemMetadata"],function(require,exports,module){function _defaults(e,r){for(var s=Object.getOwnPropertyNames(r),t=0;t<s.length;t++){var i=s[t],n=Object.getOwnPropertyDescriptor(r,i);n&&n.configurable&&void 0===e[i]&&Object.defineProperty(e,i,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,i,n=require("q"),e=require("react"),r=require("bundles/phoenix/components/OrigamiRegion"),s=require("bundles/phoenix/lib/waitForStores"),o=require("bundles/programming/promises/immediate/instructions"),a=require("bundles/programming/promises/learnerAssignment"),p=require("bundles/programming/views/instructions"),c=require("bundles/verificationDisplay/models/verificationDisplay"),m=require("pages/open-course/common/models/itemMetadata"),u=(i=t=function(t){function ProgrammingInstructions(){var n,i,r;_classCallCheck(this,ProgrammingInstructions);for(var s=arguments.length,o=Array(s),e=0;s>e;e++)o[e]=arguments[e];return n=i=_possibleConstructorReturn(this,t.call.apply(t,[this].concat(o))),i.state={instructions:null,learnerAssignment:null},r=n,_possibleConstructorReturn(i,r)}return _inherits(ProgrammingInstructions,t),ProgrammingInstructions.prototype.componentDidMount=function componentDidMount(){this.fetchData()},ProgrammingInstructions.prototype.fetchData=function fetchData(){var e=this;if("programming"===this.props.itemMetadata.getTypeName()){var t=o({itemMetadata:this.props.itemMetadata,courseId:this.props.itemMetadata.get("course.id"),itemId:this.props.itemMetadata.get("id")});n(t).then(function(t){e.setState({instructions:t})})}else{var i=a({itemMetadata:this.props.itemMetadata});n(i).then(function(t){e.setState({instructions:t.submissionLearnerSchema.get("instructions"),learnerAssignment:t})})}},ProgrammingInstructions.prototype.render=function render(){var t={itemMetadata:this.props.itemMetadata,instructions:this.state.instructions,learnerAssignment:this.state.learnerAssignment,verificationDisplay:this.props.verificationDisplay};return e.createElement("div",{className:"rc-ProgrammingInstructions"},this.state.instructions&&e.createElement(r,{viewOptions:t,ViewClass:p,renderOnce:!0}))},ProgrammingInstructions}(e.Component),t.propTypes={itemMetadata:e.PropTypes.instanceOf(m).isRequired,verificationDisplay:e.PropTypes.instanceOf(c).isRequired},i);module.exports=s(u,["VerificationStore"],function(e){var t=e.VerificationStore;return{verificationDisplay:t.getVerificationDisplay()}})});

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.card-no-action,.card-rich-interaction,.card-one-clicker,.card-one-clicker:hover,.modal.card-rich-interaction,.modal.card-one-clicker,.modal.card-one-clicker:hover,[class*=\'card-\'].selected{border:1px solid rgba(0,0,0,0.1);background-color:#fff}.card-rich-interaction:hover,.card-one-clicker:hover,.card-one-clicker:hover:hover,.modal.card-rich-interaction:hover,.modal.card-one-clicker:hover,.modal.card-one-clicker:hover:hover,[class*=\'card-\'].selected:hover{border:1px solid rgba(0,0,0,0.25)}.card-one-clicker:hover{-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,0.1);box-shadow:0 2px 10px 0 rgba(0,0,0,0.1)}.modal.card-rich-interaction,.modal.card-one-clicker{-webkit-box-shadow:0 4px 16px 0 rgba(0,0,0,0.1);box-shadow:0 4px 16px 0 rgba(0,0,0,0.1)}.modal.card-one-clicker:hover{-webkit-box-shadow:0 6px 20px 0 rgba(0,0,0,0.25);box-shadow:0 6px 20px 0 rgba(0,0,0,0.25)}.card-one-clicker{cursor:pointer;}[class*=\'card-\'].secondary{background-color:#f5f5f5;border:1px solid rgba(0,0,0,0.25);}[class*=\'card-\'].secondary:hover{border:1px solid rgba(0,0,0,0.4);}[class*=\'card-\'].secondary:hover.card-no-action{border:1px solid rgba(0,0,0,0.25)}[class*=\'card-\'].selected{border:1px solid rgba(160,126,70,0.7);}[class*=\'card-\'].selected:hover{border:1px solid #a07e46;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,0.1);box-shadow:0 2px 10px 0 rgba(0,0,0,0.1)}[class*=\'card-\'].luxury{padding:48px 48px}[class*=\'card-\'].comfy{padding:30px 30px}[class*=\'card-\'].cozy{padding:18px 18px}[class*=\'card-\'].compact{padding:18px 12px}[class*=\'card-\']{-webkit-transition:all 0.25s ease-in-out;-moz-transition:all 0.25s ease-in-out;-o-transition:all 0.25s ease-in-out;-ms-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out;}[class*=\'card-\']:hover{-webkit-transition:all 0.25s ease-in-out;-moz-transition:all 0.25s ease-in-out;-o-transition:all 0.25s ease-in-out;-ms-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out}.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.display-6-text,.display-5-text,.display-4-text,.display-3-text,.display-1-text,.headline-6-text,.headline-5-text,.headline-4-text,.headline-3-text,.headline-2-text,.headline-1-text{font-weight:normal}.display-6-text,.display-5-text,.display-4-text,.display-3-text,.headline-6-text,.headline-5-text{margin-top:10px;margin-bottom:10px}.headline-4-text,.headline-3-text,.headline-2-text{margin-bottom:10px}.display-6-text,.display-5-text,.display-3-text,.display-2-text{font-family:\'Merriweather-Light\',Georgia,serif}.display-4-text,.display-1-text{font-family:\'Merriweather\',Georgia,serif}.headline-6-text,.headline-5-text,.headline-2-text{font-family:\'OpenSans-Light\',Arial,sans-serif}.headline-4-text,.headline-3-text,.headline-1-text{font-family:\'OpenSans\',Arial,sans-serif}.display-6-text{font-size:54px;line-height:60px}.display-5-text{font-size:42px;line-height:54px}.display-4-text{font-size:32px;line-height:36px}.display-3-text{font-size:32px;line-height:36px}.display-2-text{font-size:24px;line-height:30px}.display-1-text{font-size:20px;line-height:24px}.headline-6-text{font-size:54px;line-height:60px}.headline-5-text{font-size:32px;line-height:36px}.headline-4-text{font-size:24px;line-height:30px}.headline-3-text{font-size:22px;line-height:24px}.headline-2-text{font-size:20px;line-height:24px}.headline-1-text{font-size:16px;line-height:24px}body,.body-1-text,.body-2-text,p{font-size:14px;line-height:21px;font-family:\'OpenSans\',Arial,sans-serif}.body-2-text{font-family:\'OpenSans\',Arial,sans-serif;font-weight:bold}h1,h2,h3,h4,h5,h6{margin:0;padding:0}.caption-text{font-size:12px;line-height:18px;font-family:\'OpenSans\',Arial,sans-serif}.label-text{font-size:12px;line-height:18px;font-family:\'OpenSans\',Arial,sans-serif;font-weight:bold;text-transform:uppercase}p{margin-bottom:10px}.rc-ScriptTokenBox .token-area{margin-bottom:10px}.rc-ScriptTokenBox .help-text{margin-top:-7px}.rc-ScriptTokenBox .c-modal-content{width:580px}.rc-ScriptTokenBox .rc-HonorCodeAgreement{margin-top:30px}.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.align-items-absolute-center{-webkit-box-pack:center;-moz-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-o-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.align-items-vertical-center{-webkit-box-align:center;-moz-box-align:center;-o-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.align-items-top{-webkit-box-align:start;-moz-box-align:start;-o-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start}.align-items-bottom,.align-items-bottom-right{-webkit-box-align:end;-moz-box-align:end;-o-box-align:end;-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end}.align-items-right,.align-items-bottom-right{-webkit-box-pack:end;-moz-box-pack:end;-o-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.align-self-start{-webkit-align-self:flex-start;align-self:flex-start;-ms-flex-item-align:start;}.align-self-end{-webkit-align-self:flex-end;align-self:flex-end;-ms-flex-item-align:end;}.align-self-stretch{-webkit-align-self:stretch;align-self:stretch;-ms-flex-item-align:stretch;}.align-self-center{-webkit-align-self:center;align-self:center;-ms-flex-item-align:center;}.horizontal-box{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:horizontal;-moz-box-orient:horizontal;-o-box-orient:horizontal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.vertical-box{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-moz-box-orient:vertical;-o-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.align-left{text-align:left}.align-horizontal-center,.content-placeholder{text-align:center}.align-right{text-align:right}.align-inherit{text-align:inherit}.flex-1{-webkit-box-flex:1;-moz-box-flex:1;-o-box-flex:1;box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flex-2{-webkit-box-flex:2;-moz-box-flex:2;-o-box-flex:2;box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2}.flex-3{-webkit-box-flex:3;-moz-box-flex:3;-o-box-flex:3;box-flex:3;-webkit-flex:3;-ms-flex:3;flex:3}.flex-4{-webkit-box-flex:4;-moz-box-flex:4;-o-box-flex:4;box-flex:4;-webkit-flex:4;-ms-flex:4;flex:4}.flex-5{-webkit-box-flex:5;-moz-box-flex:5;-o-box-flex:5;box-flex:5;-webkit-flex:5;-ms-flex:5;flex:5}.flex-6{-webkit-box-flex:6;-moz-box-flex:6;-o-box-flex:6;box-flex:6;-webkit-flex:6;-ms-flex:6;flex:6}.flex-7{-webkit-box-flex:7;-moz-box-flex:7;-o-box-flex:7;box-flex:7;-webkit-flex:7;-ms-flex:7;flex:7}.flex-8{-webkit-box-flex:8;-moz-box-flex:8;-o-box-flex:8;box-flex:8;-webkit-flex:8;-ms-flex:8;flex:8}.flex-9{-webkit-box-flex:9;-moz-box-flex:9;-o-box-flex:9;box-flex:9;-webkit-flex:9;-ms-flex:9;flex:9}.flex-10{-webkit-box-flex:10;-moz-box-flex:10;-o-box-flex:10;box-flex:10;-webkit-flex:10;-ms-flex:10;flex:10}.flex-11{-webkit-box-flex:11;-moz-box-flex:11;-o-box-flex:11;box-flex:11;-webkit-flex:11;-ms-flex:11;flex:11}.flex-12{-webkit-box-flex:12;-moz-box-flex:12;-o-box-flex:12;box-flex:12;-webkit-flex:12;-ms-flex:12;flex:12}.horizontal-box.align-items-spacebetween{-webkit-box-pack:justify;-moz-box-pack:justify;-o-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-moz-box-align:center;-o-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.horizontal-box.align-items-spacearound{-webkit-box-pack:distribute;-moz-box-pack:distribute;-o-box-pack:distribute;-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-moz-box-align:center;-o-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.horizontal-box.wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.success-back{background-color:#f4fbec}.error-back{background-color:#f9f0f0}.interactive-block:hover{background-color:#f1f7fd}.interactive-block.selected{background-color:#eef7ff}.container,.well{padding:25px;}.container *:first-child,.well *:first-child{margin-top:0}.container *:last-child,.well *:last-child{margin-bottom:0}.well{-webkit-border-radius:3px;border-radius:3px;margin-bottom:15px;}.well.light,.content-placeholder{background-color:#f8f8f8}.content-placeholder{color:#757575;font-size:18px;padding:50px;text-align:center;}.content-placeholder img{margin-bottom:15px}.content-placeholder.simple{background-color:transparent;color:#bbb}.rc-TokenBox{padding-top:5px;}.rc-TokenBox .headline-2-text{margin-bottom:5px}.rc-TokenBox .token-generator{margin:15px 0}');
