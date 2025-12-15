capitals.set("india", "New Delhi");
capitals.set("iran", "Tehran");
capitals.set(123,"Number Key")


console.log(capitals.get("india")); // Output: New Delhi
console.log(capitals.get("iran")); // Output: Tehran

capitals.delete("iran");

console.log(capitals);

capitals.get("india");



