$.ajax({

    url : 'http://localhost:3013/test',
    type : 'GET',
    success : function(data){
        var tab = data[0]
        console.log(tab)
        $('#infos').append('<td class="tab-border">' + tab.name + '</td> ' +'<td class="tab-border"> ' + tab.genre+ '</td> ')

    }

 });