class Model {
    model = null;

    constructor(newModel) {
        this.model = newModel;
    }

    setModel(newModelRest) {
        this.model = {
            ...this.model,
            ...newModelRest
        };
    }

    getModel() {
        return { ...this.model };
    }
}

export default Model;