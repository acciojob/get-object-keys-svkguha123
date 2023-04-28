//your JS code here. If required.
const student = {
  name: "Rahul Sharma"
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
}

// Test getKeys() method on student object
console.log(student.getKeys()); // Output: ["name"]