function sendOperation(type,data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: ``,
      type: type,
      data: JSON.stringify(data),
      success: function(data, textStatus, jqXHR) {
        console.log("success", data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("error", errorThrown);
      }
    });
  });
}

var UserModel = {id: "", name: "", email: "", password: ""}

