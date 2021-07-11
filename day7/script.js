function addListProperties(objectHere) {
    let x = "";
    for (i in objectHere) {
      x += i + ",";
    }
    return x;
  }
  
  console.log(
    addListProperties({ name: "David Rayy", sclass: "VI", rollno: 12 })
  );
  
  const deleteProperty = (objectHere, deleteThis) => {
    delete objectHere[deleteThis];
    return objectHere;
  };
  
  console.log(
    deleteProperty({ name: "David Rayy", sclass: "VI", rollno: 12 }, "rollno")
  );
  
  function lengthOfObject(objectHere) {
    return Object.keys(objectHere).length;
  }
  
  console.log(lengthOfObject({ name: "David Rayy", sclass: "VI", rollno: 12 }));
  
  function display(list) {
    for (i of list) {
      console.log(i.title);
      console.log("Author name is" + i.author);
      if (i.readingStatus == true) {
        console.log("Reading Status: True");
      }
    }
  }
  
  var library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];
  
  display(library);
  
  function volume(height, radius) {
    let volumeOfCylinder = 3.14 * radius * radius * height;
  
    try {
      let decimal = volumeOfCylinder.toString().split(".")[1].slice(0, 4);
      return volumeOfCylinder.toString().split(".")[0] + "." + decimal;
    } catch {
      return volumeOfCylinder;
    }
  }
  
  console.log(volume(10.45, 5.48));
  console.log(volume(10, 10));
  
  let sortArray = (a, b) => {
    return a.title.localeCompare(b.title);
  };
  
  var library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  
  library.sort(sortArray);