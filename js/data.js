function sendOperation(operation, type, data, operationInfoName) {
  if( !operationInfoName) {operationInfoName = ''}
  let url = `http://localhost:33492/${type}`;
  switch (operation) {
    case "GET":
    case "PUT":
    case "DELETE":
      data ? url += `/${data.Id}` : "";
      break;
  }
  console.log("URL",url);  
  console.log(operation,JSON.stringify(data));
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: operation,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(data),
      success: function(data, textStatus, jqXHR) {
        console.log("success", data);
        console.log(jqXHR, textStatus);
        toastr["success"](`Sucesso ao executar a operaçáo: ${operationInfoName}`)
        
        resolve(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("error", errorThrown);
        console.log(jqXHR, textStatus);
        toastr["error"](`Erro ao executar  a operaçáo: ${operationInfoName}`)
        reject(errorThrown);
      }
    });
  });
}

var UserModel = {
  Id: "0",
  Email: "",
  NickName: ""
};

var PlayerModel = {
  Name: "",
  Chronicles: [],
  GameCharacters: [],
  Id: "0"
};

var ChronicleModel = {
  Name: "",
  Players: [{Name: "", Chronicles: Array(0), GameCharacters: Array(0), Id: "1"}],
  GameType: 0,
  GameMaster: {},
  Id: 0
}

var GameTypes = [];
GameTypes.push({Name: "World Of Darknes", Value: 0})
GameTypes.push({Name: "teste", Value: 1})

