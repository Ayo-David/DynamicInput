import React from ‘react’

class BookSearch extends React.Component {

constructor(props){
 super(props);
const fields = ['authour', 'title', 'country', 'language', 'year'];

this.state = {
 fields: fields.reduce((a, e) =>{
	a[e] = '';
	return a;
}, {})
};
}

matchesBook(book){
const {fields} = this.state;

return Object.entries(book).some(([k,v])=>
 !fields[k] || v.toString().toLowerCase().includes(fields[k].trim().toLowerCase())
);

}