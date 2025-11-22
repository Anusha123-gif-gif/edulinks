// seed.js
require("./db");

const Department = require("./models/Department");
const Subject = require("./models/Subject");
const Topic = require("./models/Topic");

async function seed() {
    try {
        await Department.deleteMany({});
        await Subject.deleteMany({});
        await Topic.deleteMany({});

        await Department.insertMany([
            { Dept_ID: 10, Dept_Name: 'CS' },
            { Dept_ID: 20, Dept_Name: 'CS-IOT AND CYBERSECURITY' },
            { Dept_ID: 30, Dept_Name: 'CS DS' }
        ]);

        await Subject.insertMany([
            { Subject_ID: 1, Subject_Name: 'OOPS', Dept_ID: 10 },
            { Subject_ID: 2, Subject_Name: 'DATA STRUCTURES', Dept_ID: 10 },
            { Subject_ID: 3, Subject_Name: 'DBMS', Dept_ID: 10 },
            { Subject_ID: 4, Subject_Name: 'EMBEDDED SYSTEMS', Dept_ID: 20 },
            { Subject_ID: 5, Subject_Name: 'FULL STACK WEB DEVELOPMENT', Dept_ID: 20 }
        ]);

        await Topic.insertMany([
            { Topic_name: 'Inheritance', Links: 'https://www.geeksforgeeks.org/inheritance-in-c/', Subject_ID: 1 },
            { Topic_name: 'Object overloading', Links: 'https://www.programiz.com/cpp-programming/operator-overloading', Subject_ID: 1 },
            { Topic_name: 'Classes and objects', Links: 'https://www.javatpoint.com/cpp-object-and-class', Subject_ID: 1 },
            { Topic_name: 'Linked list', Links: 'https://www.simplilearn.com/tutorials/c-tutorial/singly-linked-list-in-c', Subject_ID: 2 },
            { Topic_name: 'Stacks and Queues', Links: 'https://data-flair.training/blogs/stacks-and-queues-in-c/', Subject_ID: 2 },
            { Topic_name: 'MySQL', Links: 'https://www.youtube.com/watch?v=5OdVJbNCSso', Subject_ID: 3 },
            { Topic_name: 'Normalization', Links: 'https://www.simplilearn.com/tutorials/sql-tutorial/what-isnormalization-in-sql', Subject_ID: 3 },
            { Topic_name: 'IoT', Links: 'https://aws.amazon.com/whatis/iot/', Subject_ID: 4 },
            { Topic_name: 'Sensors and Actuators', Links: 'https://byjus.com/gate/difference-between-sensor-and-actuator/', Subject_ID: 4 },
            { Topic_name: 'Arduino', Links: 'https://learn.sparkfun.com/tutorials/what-is-an-arduino/all', Subject_ID: 4 },
            { Topic_name: 'Raspberry Pi', Links: 'https://www.raspberrypi.org/', Subject_ID: 4 },
            { Topic_name: 'JavaScript', Links: 'https://www.codewithharry.com/tutorial/js/', Subject_ID: 5 },
            { Topic_name: 'HTML', Links: 'https://www.w3schools.com/html/', Subject_ID: 5 },
            { Topic_name: 'React.JS', Links: 'https://react.dev/learn', Subject_ID: 5 }
        ]);

        console.log('Seeding complete');
        process.exit(0);
    } catch (err) {
        console.error('Seed error', err);
        process.exit(1);
    }
}

seed();
