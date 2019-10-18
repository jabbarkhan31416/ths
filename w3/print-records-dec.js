

const printRecords = function(recordIds) {
    return studentRecords
        .filter(function(n){return recordIds.indexOf(n.id) !== -1})
        .sort(function(a,b){
            return (
                a>b ? 1 :
                a<b ? -1 :
                0
            )
        })
}

​// ********************************

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

​console.log(printRecords(currentEnrollment))

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