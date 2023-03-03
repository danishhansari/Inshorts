let categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology"
];
categories = categories.map(function(e){
    return e.charAt(0).toUpperCase() + e.slice(1);
})
export default categories;
