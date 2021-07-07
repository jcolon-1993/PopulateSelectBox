// Use iife
(function ()
{
  // Type select box
  type = document.getElementById("equipmentType");
  // Model select box
  model = document.getElementById("model");
  // Object stores cameras
  var cameras =
  {
    bolex: "Bolex Paillard H8",
    yashica: "Yashica 30",
    pathescape: "Pathescape Super-8 Relax",
    canon: "Canon 512"
  };
  // Store projectors
  var projectors =
  {
    kodak: "Kodak Instamatic M55",
    bolex: "Bolex Sound 715",
    eumig: "Eumig Mark S",
    sankyo: "Sankyo Dualux"
  };

  // Event listener for when the user changes the type select box
  addEvent(type, "change", function()
  {
    // No selection made
    if (this.value === "choose")
    {
      // Default message
      model.innerHTML = "<option>Please choose a type first</option>";
      // Exit function
      return;
    }
    // Selects the models based on the type user selected
    var models = getModels(this.value);

    // Loop through the options in the object to create options
    var options = "<option>Please choose a model</option>";
    // Loop through models
    for (var key in models)
    {
      options += "<option value='" + key + "'>" + models[key] + "</option>";
    }
    // update select box
    model.innerHTML = options;
  });

  // Function to get model of equipment type
  function getModels(equipmentType)
  {
    // If type is cameras
    if (equipmentType === cameras)
    {
      // Return cameras object
      return cameras
    }
    // Otherwise, return projectors object
    else
    {
      return projectors;
    }
  }
}());
