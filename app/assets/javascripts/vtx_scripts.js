
function switch_content(type,id,count)
{
		for(i=1;i<=count;i++){
		
		document.getElementById(type+'_'+i).style.background = '';			
		}
		document.getElementById(type+'_'+id).style.background = '';
		
		for(i=1;i<=count;i++){
		document.getElementById(type+i).style.display='none';			
		}
		document.getElementById(type+id).style.display='block';			
}

//--------------------------------------------------------------------//

