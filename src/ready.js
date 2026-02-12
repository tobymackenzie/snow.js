//-@ https://stackoverflow.com/a/7053197/1139122
export default function ready(_run){
	if(document.addEventListener && document.readyState === 'loading'){
		document.addEventListener('DOMContentLoaded', _run);
	}else{
		_run();
	}
};

