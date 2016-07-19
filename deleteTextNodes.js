function deleteTextNodes(element){
		var childNodes = element.childNodes;

			for(var i = 0; i < childNodes.length; i++){
				var node = childNodes[i]

				if(node.nodeType === 3){
					element.removeChild(node)
				}
			}
		}
		
	var menu = document.getElementById("menu");
		
	deleteTextNodes(menu)

module.exports = deleteTextNodes
