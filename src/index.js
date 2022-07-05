module.exports = function reverse (n) {
            let a = ((n.toString()).replace(/-/g, '')).split('') ;
       alert(a.reverse().join(''));
}
