import { makeObservable, action, observable } from "mobx";

class Model {
    props = ['id'];
    model = null;

    constructor(newModel) {
        this.model = newModel;

        makeObservable(this, {
            props: observable,
            model: observable,
            setProps: action,
            setModel: action
        });
    }

    _doesModelEnsurePropsCorrect(newModel) {
        // TODO: написать проверку на свойства.
        // написать проверку на null и undefined.
        // проверить на кол-во свойств. Object.keys(newModel) - возвращает ключи в виде массива.
        // проверить на вхождение всех свойств. props.includes() если хоть одно не входит в массив, выбросить исключение.
        // при не прохождении проверок выбрасывать исключения.
        // throw new Error('описание').
    }

    _getIncorrectModelProps(newModel) {
        // TODO: взять некорректные свойства модели.
    }

    setProps(newProps = ['id']) {
        // если в props нет свойства id, выбросить исключение.
        // заменить текущий props новым.
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