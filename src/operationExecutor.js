'use strict';

class OperationExecutor {
    constructor() {
        this.state = {
            0: this.firstTaskExecute.bind(this),
            1: this.secondTaskExecute.bind(this),
            2: this.thirdTaskExecute.bind(this),
            3: this.fourthTaskExecute.bind(this),
            4: this.fifthTaskExecute.bind(this),
            5: this.sixthTaskExecute.bind(this),
            6: this.seventhTaskExecute.bind(this),
            7: this.eighthTaskExecute.bind(this),
            8: this.ninthTaskExecute.bind(this),
            9: this.tenthTaskExecute.bind(this),
        };
    }

    /**
     * Execute some transformation of incoming arg
     * @param actionType – type of transformation
     * @param arg – incoming arg
     * @returns object with result
     */
    execute(actionType, arg) {
        return this.state[actionType](arg);
    }

    /**
     * First task of homework
     * @param arg – object with value that you should clone
     * arg = { obj1: { ... } }
     * @returns object that contains source object and his modified clone
     */
    firstTaskExecute(arg) {
        let obj = Object.assign(arg);

        //====================1=================
        // let cloneObj = JSON.parse(JSON.stringify(obj));

        //====================2=================
        // let cloneObj.obj1 = Object.assign({}, arg.obj1);

        //====================3=================
        let cloneObj = jQuery.extend(true, {}, obj);

        cloneObj.obj1.firstName = 'Misha';
        return {obj, cloneObj};
    }

    /**
     * Second task of homework
     * @param arg – object with values that you should combine
     * arg = { obj1: { ... }, obj2: { ... } }
     * @returns object that contains source objects and their combined and modified clone
     */
    secondTaskExecute(arg) {
        let res = {};

        res.obj0 = {...arg.obj1, ...arg.obj2};
        res.obj0.a = "4:19";
        res.obj0.b = "4:20";

        return res;
    }

    /**
     * Third task of homework
     * @param arg – object with value that you should modify
     * arg = { obj1: { ... } }
     * @returns object that contains modified source object
     */
    thirdTaskExecute(arg) {
        arg.obj1.relatives.forEach(relative => {
            relative.gender = relative.lastName === "Ivanov" ? "male" : "female";
        });
        return arg;
    }

    /**
     * Fourth task of homework
     * @param arg – object with value that contains relatives
     * arg = { obj1: { ... relatives: [ ... ] ... } }
     * @returns object that contains array of string with female relatives
     */
    fourthTaskExecute(arg) {
        return arg.obj1.relatives.reduce((text, relative) => {
            return relative.gender === "female" ? [...text, `Hello, ${relative.firstName} relative of Vasya Ivanova`] : text;
        }, []);
    }

    /**
     * Fifth task of homework
     * @param arg – object which contains new color of the button and the class of it
     * arg = { color: '...', className: '...' }
     * @returns string which contains the class of the button and current color
     */
    fifthTaskExecute(arg) {
        const elem = document.getElementsByClassName(arg.className)[0];
        elem.style.background = arg.color;
        return `${elem.className} ${elem.style.background}`;
    }

    /**
     * Sixth task of homework
     * @param arg – object with values that you should handle
     * arg = { obj1: { ... } }
     * @returns object that contains array of items that match the hostname on which the application is running
     */
    sixthTaskExecute(arg) {
        //====================1=================
        // return arg.hostNames.filter(function (host) {
        //     return document.location.host.indexOf(host) !== -1;
        // });

        //====================2=================
        // return arg.hostNames.filter(function (host) {
        //     return document.location.hostname === host;
        // });

        //====================3=================
        return arg.hostNames.filter((host) => document.location.hostname === host);
    }

    /**
     * Seventh task of homework
     * @param arg – object which contains simple key-value pairs
     * arg = { obj1: { key: value } }
     * @returns obj that contains swap pairs ('value: key')
     */
    seventhTaskExecute(arg) {
        const object = {};

        for (let key in arg) {
            let value = arg[key];
            object[value] = key;
        }

        return object;
    }

    /**
     * Eighth task of homework
     * @param arg – object which contains two array
     * arg = { obj1: { ... } }
     * @returns obj that built using array's values
     */
    eighthTaskExecute(arg) {
        const cutArr = [...arg.arr1, ...arg.arr2];
        const obj = {};

        for (let i = 0; i <= cutArr.length; i += 2) {
            obj[cutArr[i]] = cutArr[i + 1] !== undefined ? cutArr[i + 1] : null;
        }

        return obj;
    }

    /**
     * Ninth task of homework
     * @param arg – object which contains array of users
     * arg = { obj1: { users: [...] } }
     * @returns obj that contains pairs id: obj with this id
     */
    ninthTaskExecute(arg) {
        const res = {};

        arg.users.forEach(user => {
            res[user.id] = user;
        });

        return res;
    }

    /**
     * Tenth task of homework
     * @param arg – object which contains class of item and empty array
     * arg = { obj1: { ... } }
     * @returns obj that contains the array with info about children of the node
     */
    tenthTaskExecute(arg) {
        let nodes = document.getElementsByClassName(arg.className)[0].children;
        const childrenInfo = [];

        [].forEach.call(nodes, function (node) {
            childrenInfo.push(`${node.className} : ${node.tagName}`);
        });

        return childrenInfo;
    }
}

export default OperationExecutor;
