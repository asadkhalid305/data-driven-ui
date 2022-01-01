export const utilService = (function () {
  function getInitialFormModel(metadata) {
    let formModel = {};
    metadata.forEach((data) => {
      if (!data.is_render_initial) {
        return;
      }
      switch (data.type) {
        case "text":
          formModel[data.key] = "";
          break;
        case "dropdown":
          formModel[data.key] = [];
          break;
        case "boolean":
          formModel[data.key] = false;
          break;
        default:
          break;
      }
    });
    return formModel;
  }

  return {
    getInitialFormModel,
  };
})();
