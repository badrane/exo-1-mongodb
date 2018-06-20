$.ajax({

    url : 'http://localhost:3013/test',
    type : 'GET',
    success : function(data){
        var tab = data
        console.log(tab)
        tab.forEach(function(liste){
            
            $('#infos').append('<tr> <td class="tab-border">' + liste.name + '</td> ' +'<td class="tab-border"> ' + liste.genre+ '</td> </tr>' )
        
        });

    }

 });
