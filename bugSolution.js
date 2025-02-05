```javascript
const query = { name: 'John Doe' };

// Correct usage using the equality operator
db.collection('users').find({ name: 'John Doe' }).toArray((err, result) => {
  console.log(result);
});
```