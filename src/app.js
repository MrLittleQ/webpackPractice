import './css/common.css';
import Layer from "./components/layer/layer.js";
const App=function (){
	const dom=document.getElementById("app");
	const layer = new Layer();
	dom.innerHTML=layer.tpl({
		name:"xiaoQ",
		arr:["a","b","c"]
	});
   console.log(layer);
}

new App()