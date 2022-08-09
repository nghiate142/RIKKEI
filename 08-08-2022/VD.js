//2 + 2.6
let learning = [
    {
      id: 1,
      name: "HTML",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 2,
      name: "CSS",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 3,
      name: "Basic of javascript",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 4,
      name: "Node package Manager (npm)",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 5,
      name: "Git",
      complete: "false",
      check: "[ ]",
    },
  ];
  
  //2.2 add new
  while (true) {
    let command = prompt("Enter your command(New, Delete, Update, Complete)");
    if (command == "new") {
      let taskInput = prompt("Enter new task:");
      learning.push({
        id: learning.length + 1,
        name: taskInput,
        complete: false,
        check: "[ ]",
      });
      console.clear();
  
      for (let key in learning) {
        console.log(
          learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("----------------------------");
  
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      } //2.3 update
    }
    if (command == "update") {
      let position = Number(prompt("Enter position "));
      let title = prompt("Enter new title");
      for (let key in learning) {
        if (position == learning[key].id) {
          learning[key].name = title;
          console.log(learning[key].name);
        }
      }
      console.clear();
      for (let key in learning) {
        console.log(
          learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("-------------------------------");
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      }
    }
    //2.4 complete
    if (command == "complete") {
      let position = Number(prompt("Nhập vị trí để hoàn thành"));
      for (let key in learning) {
        if (position == learning[key].id) {
          learning[key].complete = true;
          learning[key].check = "[x]";
        }
      }
      console.clear();
      for (let key in learning) {
        console.log(
          learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("----------------------------------------------------------");
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      }
    }
    if (command == "d") {
      let position = Number(prompt("Nhập vị trí muốn xóa"));
      for (let key in learning) {
        if (position == learning[key].id) {
          delete learning[key];
        }
      }
      console.clear();
      for (let key in learning) {
        console.log(
  learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("----------------------------------------------------------");
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      }
    } else if (command == "e") {
      break;
    }
  }