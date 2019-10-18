

const printRecords = recordIds => (
    studentRecords
        .filter(n => recordIds.indexOf(n.id) !== -1)
        .sort((a,b) => (
                a.name>b.name ? 1 :
                a.name<b.name ? -1 :
                0
        ))
        .forEach(n => console.log(`${n.name} (${n.id}): ${n.paid ? "" : "Not"} Paid`,"\n"))
)

// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [

	{ id: 313, name: "Frank", paid: true, },

	{ id: 410, name: "Suzy", paid: true, },

	{ id: 709, name: "Brian", paid: false, },

	{ id: 105, name: "Henry", paid: false, },

	{ id: 502, name: "Mary", paid: true, },

	{ id: 664, name: "Bob", paid: false, },

	{ id: 250, name: "Peter", paid: true, },

	{ id: 375, name: "Sarah", paid: true, },

	{ id: 867, name: "Greg", paid: false, },

];

printRecords(currentEnrollment);

console.log("----");

//OUTPUT as below 

/*

	Bob (664): Not Paid

	Henry (105): Not Paid

	Sarah (375): Paid

	Suzy (410): Paid

    ----
*/