function sendOperation(operation, type, data) {
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
        resolve(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("error", errorThrown);
        console.log(jqXHR, textStatus);
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
  Players: [],
  GameType: 0,
  GameMaster: {},
  Id: 0
}

var GameTypes = [];
GameTypes.push({Name: "World Of Darknes", Value: 0})
