import React from "react";
import './bookstyle.css'

class BookSearchs extends React.Component {
  constructor(props) {
    super(props);
    const fields = [
      "author", "title", "country", "language", "year"
    ];
    this.state = {
      fields: fields.reduce((a, e) => {
        a[e] = "";
        return a;
      }, {})
    };
  }

  matchesBooks(book) {
    const { fields } = this.state;
    console.log(`Each Book = `, fields)
    return Object.entries(book).some(([k, v]) =>
      !fields[k] || v.toString()
        .toLowerCase()
        .includes(fields[k].trim().toLowerCase())
    );
  }

  matchesBook(book) {
    const { fields } = this.state;

    //console.log(`Each Book = `, fields)

    return Object.entries(book).some(([k, v]) => {

      console.log(k, v)
      //return v.toLowerCase().indexOf(fields[k].toLowerCase()) > -1
      return v.toString().toLowerCase().includes(fields[k].toLowerCase())
    }
    );
  }

  handleChange(e, name) {
    //console.log(this.state)
    this.setState({
      ...this.state,
      fields: {
        ...this.state.fields,
        [name]: e.target.value

      }
    });
  }

  componentDidUpdate() {
    console.log(`input = `, this.state)
  }

  render() {

    return (

      <div className="book-search-container">
        <div className="search-box">
          {Object.keys(this.state.fields).map(field =>
            <label key={field}>
              {field}
              <input
                autoComplete="off"
                value={this.state.fields[field]}
                className={field}
                onChange={e => this.handleChange(e, field)}
              />
            </label>
          )}
        </div>
        <div className="books">
          {this.props.books
            .filter((e) => {
              //{ author, country, language, pages, title, year }
              //this.matchesBook(e)
              const { fields } = this.state;

              //console.log(`Each Book = `, fields)
              //console.log(`book = `, Object.entries(e))
              const some = Object.keys(e).some((k) => {

                //console.log(v)

                //const lower = v.toString().toLowerCase()
                // console.log(`lower = `, lower)
                //return v.toLowerCase().indexOf(fields[k].toLowerCase()) > -1

                //if (fields.author === 'author') {
                //if (fields.author !== '')
                // return author.toLowerCase().indexOf(fields.author.toLowerCase()) > -1

                const included = fields[k] === '' ? false : e[k].toString().toLowerCase().indexOf(fields[k]) > -1
                console.log(`foo = `, included)
                //const included = v.toString().toLowerCase().includes(fields[k].trim())
                //console.log(`${included ? fields[k] + ' is included in ' + v : fields[k] + ' is not included in ' + v}`,)
                return included
              })
              console.log(`Some = `, some)
              return some
            }



            )
            .map((e, i) => {

              //console.log(`foo = `, e)
              return < div key={e.title + i} className="book" >
                {
                  Object.entries(e).map((bk, i) => {
                    const [k, v] = bk
                    //console.log(`foo = `, i, bk)
                    return (

                      <div key={k} className="book-detail-row">
                        {/* <span className="book-detail-key">{i}</span> */}
                        <span className="book-detail-key">{k}</span>
                        <span className="book-detail-val">{v}</span>
                      </div>
                    )
                  }
                  )
                }
              </div>
            }
            )
          }
        </div>
      </div >
    );
  }
}

export default BookSearchs;
