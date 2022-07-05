module.exports = function reverse (n) {
            let a = ((n.toString()).replace(/-/g, '')).split('') ;
       return (a.reverse().join(''));
}
